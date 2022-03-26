window.veda = window.veda || {};
window.veda.plugins = window.veda.plugins || {};
window.veda.utils = window.veda.utils || {};
window.veda.init = function () {
  window.veda.utils.isMobile = {
    android: navigator.userAgent.match(/Android/i),
    blackBerry: navigator.userAgent.match(/BlackBerry/i),
    ipad: navigator.userAgent.match(/iPad/i),
    iOS: navigator.userAgent.match(/iPhone|iPad|iPod/i),
    opera: navigator.userAgent.match(/Opera Mini/i),
    windows: navigator.userAgent.match(/Windows Phone/i),
    amazonePhone: navigator.userAgent.match(
      /(?:SD4930UR|\\bSilk(?:.+)Mobile\\b)/i
    ),
    amazoneTablet: navigator.userAgent.match(/Silk/i),
    any: navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|Windows Phone|(?:SD4930UR|\bSilk(?:.+)Mobile\b)|Silk/i
    ),
  };

  window.veda.utils.objectParse = function (value) {
    const fn = new Function(`return ${value.trim()}`);
    return fn();
  };
  class AnimateScroll {
    constructor() {
      this.observer = null;
      this.timeoutId = -1;
      this.init();
      this.checkForBuilder();
    }

    handler(entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          const el = entry.target;
          const animateClasses = el.getAttribute("data-veda-animate");
          el.classList.add(...animateClasses.trim().split(" "));
        }
      });
    }

    checkForBuilder() {
      if (window.BUILDER) {
        window.addEventListener("message", (event) => {
          if (event?.data?.type === "@animate") {
            if (this.observer) {
              this.observer.disconnect();
            }
            this.timeoutId = setTimeout(() => {
              this.init();
            }, 1000);
          }
        });
      }
    }

    init() {
      const els = document.querySelectorAll("[data-veda-animate]");
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
      clearTimeout(this.timeoutId);
      this.observer = new IntersectionObserver(this.handler, options);
      els.forEach((el) => {
        const animateClasses = el.getAttribute("data-veda-animate");
        if (animateClasses.includes("animate__animated-scroll")) {
          this.observer.observe(el);
        } else {
          el.classList.add(...animateClasses.trim().split(" "));
        }
      });
    }
  }
  if (document.getElementById("_______veda-preview_______")) {
    const timeoutId = setTimeout(() => {
      new AnimateScroll();
      clearTimeout(timeoutId);
    }, 0);
  } else {
    new AnimateScroll();
  }
  // Plugins

  class CoreCountdown {
    constructor(el) {
      this.el = el;
      this.deadline = Number(
        veda.utils.objectParse(el.getAttribute("data-options")).timestamp
      );
      this.daysEl = el.querySelector(".core-countdown__days");
      this.hoursEl = el.querySelector(".core-countdown__hours");
      this.minutesEl = el.querySelector(".core-countdown__minutes");
      this.secondsEl = el.querySelector(".core-countdown__seconds");
      this.intervalId = -1;
      this.oneSecond = 1000;
      this.mount();
      this.init();
    }

    mount() {
      this.daysEl.innerText = "";
      this.hoursEl.innerText = "";
      this.minutesEl.innerText = "";
      this.secondsEl.innerText = "";
    }

    getDays(distance) {
      return Math.floor(distance / (1000 * 60 * 60 * 24));
    }

    getHours(distance) {
      return Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }

    getMinutes(distance) {
      return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    }

    getSeconds(distance) {
      return Math.floor((distance % (1000 * 60)) / 1000);
    }

    handleCountdown() {
      const distance = this.deadline - Date.now();
      if (distance > 0) {
        const days = this.getDays(distance);
        const hours = this.getHours(distance);
        const minutes = this.getMinutes(distance);
        const seconds = this.getSeconds(distance);
        if (Number(this.daysEl.innerText) !== days) {
          this.daysEl.innerText = days;
        }
        if (Number(this.hoursEl.innerText) !== hours) {
          this.hoursEl.innerText = hours;
        }
        if (Number(this.minutesEl.innerText) !== minutes) {
          this.minutesEl.innerText = minutes;
        }
        if (Number(this.secondsEl.innerText) !== minutes) {
          this.secondsEl.innerText = seconds;
        }
      } else {
        clearInterval(this.intervalId);
      }
    }

    init() {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(
        this.handleCountdown.bind(this),
        this.oneSecond
      );
    }
  }

  window.veda.plugins.countdown = function (containerEl) {
    const els = containerEl.querySelectorAll(".core-countdown");
    els.forEach((el) => {
      new CoreCountdown(el);
    });
  };

  class CoreImageZoom {
    constructor(el) {
      this.el = el;
      this.imgEl = this.el.querySelector("img");
      this.zoom = this.el.getAttribute("data-image-zoom") || 3;
      this.imageZoomItemEl = this.createZoomItemEl();
      this.init();
    }

    createZoomItemEl() {
      const el = document.createElement("div");
      el.src = this.srcZoom;
      el.className = "core-image-zoom__zoom-item";
      this.el.appendChild(el);
      return el;
    }

    handleMouseMove(event) {
      const { offsetX, offsetY } = event;
      const { offsetWidth, offsetHeight } = event.currentTarget;
      const x =
        Math.min(Math.max((offsetX / offsetWidth) * 100, 0), 100) *
        (this.zoom - 1) *
        -1;
      const y =
        Math.min(Math.max((offsetY / offsetHeight) * 100, 0), 100) *
        (this.zoom - 1) *
        -1;
      const srcZoom =
        this.el.getAttribute("data-image-zoom-src") || this.imgEl.src;
      this.el.classList.add("core-image-zoom--active");
      this.imageZoomItemEl.style.backgroundImage = `url('${srcZoom}')`;
      this.imageZoomItemEl.style.transform = `scale(${this.zoom})`;
      this.imageZoomItemEl.style.top = `${y}%`;
      this.imageZoomItemEl.style.left = `${x}%`;
    }

    handleMouseLeave() {
      this.el.classList.remove("core-image-zoom--active");
    }

    init() {
      if (!window.veda.utils.isMobile.any) {
        this.el.addEventListener("mousemove", this.handleMouseMove.bind(this));
        this.el.addEventListener(
          "mouseleave",
          this.handleMouseLeave.bind(this)
        );
      }
    }
  }

  window.veda.plugins.imageZoom = function (containerEl) {
    const els = containerEl.querySelectorAll(".core-image-zoom");
    els.forEach((el) => {
      new CoreImageZoom(el);
    });
  };

  class CoreSwiper {
    constructor(containerEl) {
      this.els = containerEl.querySelectorAll(".core-swiper");
      this.init();
    }

    handleSwiper(el) {
      const defaultOptions = {
        pagination: {
          el: ".core-swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".core-swiper-button-next",
          prevEl: ".core-swiper-button-prev",
        },
        spaceBetween: 30,
      };
      try {
        const options = veda.utils.objectParse(el.getAttribute("data-options"));
        const swiper = new Swiper(el, { ...defaultOptions, ...options });
        swiper.update();
      } catch {
        const swiper = new Swiper(el, defaultOptions);
        swiper.update();
      }
      this.handleThumbSwiper(el.nextElementSibling);
    }

    handleThumbSwiper(thumbEl) {
      if (
        thumbEl &&
        thumbEl.className === "core-swiper-thumbnails" &&
        thumbEl.length > 0
      ) {
        const wrapperThumbs = thumbEl.querySelector(".swiper-wrapper");
        const options = veda.utils.objectParse(
          thumbEl.getAttribute("data-options")
        );
        const defaultOptions = {
          spaceBetween: 10,
          centeredSlides: true,
          slidesPerView: 3,
          touchRatio: 0.3,
          slideToClickedSlide: true,
          pagination: {
            el: ".core-swiper-pagination",
          },
          navigation: {
            nextEl: ".core-swiper-button-next",
            prevEl: ".core-swiper-button-prev",
          },
        };
        var thumbSwiper = new Swiper(thumbEl, {
          ...defaultOptions,
          ...options,
        });
        swiper.controller.control = thumbSwiper;
        thumbSwiper.controller.control = swiper;
      }
    }

    init() {
      this.els.forEach(this.handleSwiper.bind(this));
    }
  }

  window.veda.plugins.swiper = function (containerEl) {
    new CoreSwiper(containerEl);
  };

  class CoreTabs {
    constructor(el) {
      this.el = el;
      this.linkEls = Array.from(el.querySelectorAll(".core-tabs__link"));
      this.paneEls = Array.from(el.querySelectorAll(".core-tabs__pane"));
      this.index =
        this.linkEls.findIndex((el) =>
          el.className.includes("core-tabs__link--active")
        ) || 0;
      this.init();
    }

    handlePanel() {
      this.paneEls.forEach((paneEl) => {
        paneEl?.classList.remove("core-tabs__pane--active");
      });
      this.paneEls[this.index]?.classList.add("core-tabs__pane--active");
    }

    handleTabLink(linkEl, index) {
      linkEl.addEventListener("click", (event) => {
        event.preventDefault();
        this.index = index;
        this.linkEls.forEach((linkEl) => {
          linkEl?.classList.remove("core-tabs__link--active");
        });
        event.currentTarget?.classList.add("core-tabs__link--active");
        this.handlePanel();
      });
    }

    init() {
      this.handlePanel();
      this.linkEls.forEach(this.handleTabLink.bind(this));
    }
  }

  window.veda.plugins.tabs = function (containerEl) {
    const tabEls = containerEl.querySelectorAll(".core-tabs");
    tabEls.forEach((tabEl) => {
      new CoreTabs(tabEl);
    });
  };

  window.veda.plugins.themeToggle = function (containerEl) {
    const htmlEl = document.querySelector("html");
    const btnEls = containerEl.querySelectorAll(".core-toggle-theme");
    const coreTheme = localStorage.getItem("@coreTheme") ?? "light";
    const isDark = coreTheme === "dark";
    if (isDark) {
      htmlEl.classList.add("dark");
    }
    const handleClick = (event) => {
      event.preventDefault();
      htmlEl.classList.toggle("dark");
      const coreTheme = localStorage.getItem("@coreTheme") ?? "light";
      const isDark = coreTheme === "dark";
      if (isDark) {
        localStorage.setItem("@coreTheme", "light");
      } else {
        localStorage.setItem("@coreTheme", "dark");
      }
      btnEls.forEach((btnEl) => {
        if (isDark) {
          btnEl.classList.remove("core-toggle-theme--dark");
        } else {
          btnEl.classList.add("core-toggle-theme--dark");
        }
      });
    };

    btnEls.forEach((btnEl) => {
      if (isDark) {
        btnEl.classList.add("core-toggle-theme--dark");
      }
      btnEl.removeEventListener("click", handleClick);
      btnEl.addEventListener("click", handleClick);
    });
  };
};

window.veda.init();
