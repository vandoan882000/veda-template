const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const sassGlob = require("gulp-sass-glob");
const fs = require("fs-extra");
const twig = require("gulp-twig");
const glob = require("glob");
const { getTwig } = require("./gulp/getTwig");
const { liquidSyntaxToTwig } = require("./gulp/LiquidSyntaxToTwig");
const watch = require("node-watch");
const { v4 } = require("uuid");

const isDev = process.env.NODE_ENV === "development";
const config = {
  port: 1234,
  input: "src",
  styles: "styles",
  img: "img",
  js: "js",
  data: "data",
  shared: "components",
  output: {
    dev: "dev",
    prod: "build",
  },
};

/**
 * Compile all scss files in the src/scss folder and output them to the build/css folder
 * @param cb - A callback function that runs when the task is complete.
 */
function compileScss(cb) {
  if (isDev) {
    gulp
      .src([
        `${config.input}/${config.styles}/*.scss`,
        `${config.input}/${config.shared}/*.scss`,
      ])
      .pipe(sourcemaps.init())
      .pipe(sassGlob())
      .pipe(sass())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(`${config.output.dev}/${config.styles}`))
      .pipe(browserSync.stream());
  }
  gulp
    .src([
      `${config.input}/${config.styles}/*.scss`,
      `${config.input}/${config.shared}/*.scss`,
    ])
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(`${config.output.prod}/${config.styles}`))
    .pipe(browserSync.stream());
  cb();
}

/**
 * It reads all the JSON files in the input directory and returns a dictionary of the contents of those
 * files
 * @returns A JavaScript object with the contents of each JSON file in the input directory.
 */
function getJSON() {
  const files = glob.sync(`${config.input}/**/*.data.js`);
  const contents = files.reduce((obj, file) => {
    const fileName = file.replace(/.*\/|\.data\.js/g, "");
    const content =
      fs
        .readFileSync(file)
        .toString()
        .replace(/(const|let|var)(?=\s*data\s)/g, "return") || "{}";
    const fn = new Function(content.trim());
    return {
      ...obj,
      [fileName]: fn(),
    };
  }, {});
  return contents;
}

function compileLiquidToTwig() {
  watch(config.input, { recursive: true }, function (evt, file) {
    if (file.includes(".liquid")) {
      try {
        const twigFileName = file.replace(/\.liquid/g, ".twig");
        let content = fs.readFileSync(file).toString();
        content = getTwig(`id_${v4()}`, content, {});
        content = liquidSyntaxToTwig({
          liquid: content,
          settings: [],
        });
        fs.writeFileSync(twigFileName, content);
      } catch (err) {
        console.log(err);
      }
    }
  });
}

/**
 * Compiles all the HTML files in the src directory and puts them in the build directory
 * @param cb - A callback function that runs after the task has completed.
 */
function compileTwig(cb) {
  try {
    gulp
      .src(`${config.input}/*.twig`)
      .pipe(twig({ data: getJSON(), errorLogToConsole: true }))
      .pipe(gulp.dest(isDev ? config.output.dev : config.output.prod));
  } catch (err) {
    console.log(err);
  }
  cb();
}

/**
 * It takes all the JavaScript files in the src/js folder and compiles them into the build/js folder
 */
function compileJs(cb) {
  gulp
    .src(
      [
        `${config.input}/${config.js}/**/*.js`,
        `${config.input}/${config.shared}/**/*.js`,
        `${config.input}/config.js`,
      ],
      {
        ignore: `${config.input}/${config.shared}/**/*.data.js`,
      }
    )
    .pipe(
      gulp.dest(
        isDev
          ? `${config.output.dev}/${config.js}`
          : `${config.output.prod}/${config.js}`
      )
    );
  cb();
}

/**
 * Copy all images from the src/img directory to the build/img directory
 * @param cb - A callback function that runs after the task has completed.
 */
function copyImages(cb) {
  gulp
    .src(`${config.input}/${config.img}/**/*`)
    .pipe(
      gulp.dest(
        isDev
          ? `${config.output.dev}/${config.img}`
          : `${config.output.prod}/${config.img}`
      )
    );
  cb();
}

/**
 * Watch the files in the src/scss folder and when they change, run the compileScss function
 * @param cb - A callback function that runs after the watch task is complete.
 */
function watchFiles() {
  try {
    gulp.watch(
      [
        `${config.input}/${config.styles}/**/*.scss`,
        `${config.input}/${config.shared}/**/*.scss`,
      ],
      compileScss
    );
    gulp.watch(`${config.input}/${config.img}/**/*`, copyImages);
    gulp
      .watch(`${config.input}/**/*.js`, compileJs)
      .on("change", browserSync.reload);
    gulp
      .watch(`${config.input}/**/*.twig`, compileTwig)
      .on("change", browserSync.reload);
    gulp
      .watch(`${config.input}/**/*.data.js`, compileTwig)
      .on("change", browserSync.reload);
  } catch (err) {
    console.log(err);
  }
}

/**
 * Start the browserSync server and watch the files in the build folder
 * @param cb - A callback function that runs after the browserSync instance is initialized.
 */
function handleBrowserSync(cb) {
  browserSync.init({
    port: config.port,
    server: {
      baseDir: isDev ? config.output.dev : config.output.prod,
    },
    logConnections: true,
    logFileChanges: true,
    notify: true,
    open: isDev,
  });
  watchFiles();
  cb();
}

/**
 * This function is a gulp task that runs the following tasks in parallel:
 *
 * handleBrowserSync
 * compileScss
 * compileTwig
 * copyImages
 * @returns The dev task is returning the handleBrowserSync function, which is being returned from the
 * gulp.series function.
 */
function dev() {
  fs.removeSync(config.output.dev);
  return gulp.series(
    handleBrowserSync,
    gulp.parallel(
      compileScss,
      compileLiquidToTwig,
      compileTwig,
      compileJs,
      copyImages
    )
  );
}

/**
 * Build the project by running the following tasks in parallel:
 *
 * Compile the Sass files.
 * Compile the HTML files.
 * Copy the images
 * @returns The build function returns a gulp.parallel task.
 */
function build() {
  fs.removeSync(config.output.prod);
  return gulp.parallel(
    compileScss,
    compileLiquidToTwig,
    compileTwig,
    compileJs,
    copyImages
  );
}

gulp.task("dev", dev());
gulp.task("build", build());
