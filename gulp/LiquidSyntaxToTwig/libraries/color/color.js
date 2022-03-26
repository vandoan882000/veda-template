"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var color_string_1 = __importDefault(require("color-string"));
var color_convert_1 = __importDefault(require("color-convert"));
var _slice = [].slice;
var skippedModels = [
    // To be honest, I don't really feel like keyword belongs in color convert, but eh.
    'keyword',
    // Gray conflicts with some method names, and has its own method defined.
    'gray',
    // Shouldn't really be in color-convert either...
    'hex',
];
var hashedModelKeys = {};
for (var _i = 0, _a = Object.keys(color_convert_1.default); _i < _a.length; _i++) {
    var model = _a[_i];
    hashedModelKeys[_slice
        .call(color_convert_1.default[model].labels)
        .sort()
        .join('')] = model;
}
var limiters = {};
function Color(object, model) {
    if (!(this instanceof Color)) {
        return new Color(object, model);
    }
    if (model && model in skippedModels) {
        model = null;
    }
    if (model && !(model in color_convert_1.default)) {
        throw new Error('Unknown model: ' + model);
    }
    var i;
    var channels;
    if (object == null) {
        // eslint-disable-line no-eq-null,eqeqeq
        this.model = 'rgb';
        this.color = [0, 0, 0];
        this.valpha = 1;
    }
    else if (object instanceof Color) {
        this.model = object.model;
        this.color = object.color.slice();
        this.valpha = object.valpha;
    }
    else if (typeof object === 'string') {
        var result = color_string_1.default.get(object);
        if (result === null) {
            throw new Error('Unable to parse color from string: ' + object);
        }
        this.model = result.model;
        channels = color_convert_1.default[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
    }
    else if (object.length > 0) {
        this.model = model || 'rgb';
        channels = color_convert_1.default[this.model].channels;
        var newArray = _slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === 'number' ? object[channels] : 1;
    }
    else if (typeof object === 'number') {
        // This is always RGB - can be converted later on.
        this.model = 'rgb';
        this.color = [(object >> 16) & 0xff, (object >> 8) & 0xff, object & 0xff];
        this.valpha = 1;
    }
    else {
        this.valpha = 1;
        var keys = Object.keys(object);
        if ('alpha' in object) {
            keys.splice(keys.indexOf('alpha'), 1);
            this.valpha = typeof object.alpha === 'number' ? object.alpha : 0;
        }
        var hashedKeys = keys.sort().join('');
        if (!(hashedKeys in hashedModelKeys)) {
            throw new Error('Unable to parse color from object: ' + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        var labels = color_convert_1.default[this.model].labels;
        var color = [];
        for (i = 0; i < labels.length; i++) {
            color.push(object[labels[i]]);
        }
        this.color = zeroArray(color);
    }
    // Perform limitations (clamping, etc.)
    if (limiters[this.model]) {
        channels = color_convert_1.default[this.model].channels;
        for (i = 0; i < channels; i++) {
            var limit = limiters[this.model][i];
            if (limit) {
                this.color[i] = limit(this.color[i]);
            }
        }
    }
    this.valpha = Math.max(0, Math.min(1, this.valpha));
    if (Object.freeze) {
        Object.freeze(this);
    }
}
Color.prototype = {
    toString: function () {
        return this.string();
    },
    toJSON: function () {
        return this[this.model]();
    },
    string: function (places) {
        var self = this.model in color_string_1.default.to ? this : this.rgb();
        self = self.round(typeof places === 'number' ? places : 1);
        var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
        return color_string_1.default.to[self.model](args);
    },
    percentString: function (places) {
        var self = this.rgb().round(typeof places === 'number' ? places : 1);
        var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
        return color_string_1.default.to.rgb.percent(args);
    },
    array: function () {
        return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
    },
    object: function () {
        var result = {};
        var channels = color_convert_1.default[this.model].channels;
        var labels = color_convert_1.default[this.model].labels;
        for (var i = 0; i < channels; i++) {
            result[labels[i]] = this.color[i];
        }
        if (this.valpha !== 1) {
            result.alpha = this.valpha;
        }
        return result;
    },
    unitArray: function () {
        var rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
            rgb.push(this.valpha);
        }
        return rgb;
    },
    unitObject: function () {
        var rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
            rgb.alpha = this.valpha;
        }
        return rgb;
    },
    round: function (places) {
        places = Math.max(places || 0, 0);
        return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
    },
    alpha: function (value) {
        if (arguments.length > 0) {
            return new Color(this.color.concat(Math.max(0, Math.min(1, value))), this.model);
        }
        return this.valpha;
    },
    // Rgb
    red: getset('rgb', 0, maxfn(255)),
    green: getset('rgb', 1, maxfn(255)),
    blue: getset('rgb', 2, maxfn(255)),
    hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (value) { return ((value % 360) + 360) % 360; }),
    saturationl: getset('hsl', 1, maxfn(100)),
    lightness: getset('hsl', 2, maxfn(100)),
    saturationv: getset('hsv', 1, maxfn(100)),
    value: getset('hsv', 2, maxfn(100)),
    chroma: getset('hcg', 1, maxfn(100)),
    gray: getset('hcg', 2, maxfn(100)),
    white: getset('hwb', 1, maxfn(100)),
    wblack: getset('hwb', 2, maxfn(100)),
    cyan: getset('cmyk', 0, maxfn(100)),
    magenta: getset('cmyk', 1, maxfn(100)),
    yellow: getset('cmyk', 2, maxfn(100)),
    black: getset('cmyk', 3, maxfn(100)),
    x: getset('xyz', 0, maxfn(100)),
    y: getset('xyz', 1, maxfn(100)),
    z: getset('xyz', 2, maxfn(100)),
    l: getset('lab', 0, maxfn(100)),
    a: getset('lab', 1),
    b: getset('lab', 2),
    keyword: function (value) {
        if (arguments.length > 0) {
            return new Color(value);
        }
        return color_convert_1.default[this.model].keyword(this.color);
    },
    hex: function (value) {
        if (arguments.length > 0) {
            return new Color(value);
        }
        return color_string_1.default.to.hex(this.rgb().round().color);
    },
    rgbNumber: function () {
        var rgb = this.rgb().color;
        return ((rgb[0] & 0xff) << 16) | ((rgb[1] & 0xff) << 8) | (rgb[2] & 0xff);
    },
    luminosity: function () {
        // http://www.w3.org/TR/WCAG20/#relativeluminancedef
        var rgb = this.rgb().color;
        var lum = [];
        for (var _i = 0, _a = rgb.entries(); _i < _a.length; _i++) {
            var _b = _a[_i], i = _b[0], element = _b[1];
            var chan = element / 255;
            lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },
    contrast: function (color2) {
        // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
        var lum1 = this.luminosity();
        var lum2 = color2.luminosity();
        if (lum1 > lum2) {
            return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
    },
    level: function (color2) {
        var contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7.1) {
            return 'AAA';
        }
        return contrastRatio >= 4.5 ? 'AA' : '';
    },
    isDark: function () {
        // YIQ equation from http://24ways.org/2010/calculating-color-contrast
        var rgb = this.rgb().color;
        var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
        return yiq < 128;
    },
    isLight: function () {
        return !this.isDark();
    },
    negate: function () {
        var rgb = this.rgb();
        for (var i = 0; i < 3; i++) {
            rgb.color[i] = 255 - rgb.color[i];
        }
        return rgb;
    },
    lighten: function (ratio) {
        var hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
    },
    darken: function (ratio) {
        var hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
    },
    saturate: function (ratio) {
        var hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
    },
    desaturate: function (ratio) {
        var hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
    },
    whiten: function (ratio) {
        var hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
    },
    blacken: function (ratio) {
        var hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
    },
    grayscale: function () {
        // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
        var rgb = this.rgb().color;
        var value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color.rgb(value, value, value);
    },
    fade: function (ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
    },
    opaquer: function (ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
    },
    rotate: function (degrees) {
        var hsl = this.hsl();
        var hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
    },
    mix: function (mixinColor, weight) {
        // Ported from sass implementation in C
        // https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
        if (!mixinColor || !mixinColor.rgb) {
            throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        var color1 = mixinColor.rgb();
        var color2 = this.rgb();
        var p = weight === undefined ? 0.5 : weight;
        var w = 2 * p - 1;
        var a = color1.alpha() - color2.alpha();
        var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
        var w2 = 1 - w1;
        return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
    },
};
var _loop_1 = function (model) {
    if (skippedModels.includes(model)) {
        return "continue";
    }
    var channels = color_convert_1.default[model].channels;
    // Conversion methods
    Color.prototype[model] = function () {
        if (this.model === model) {
            return new Color(this);
        }
        if (arguments.length > 0) {
            // eslint-disable-next-line prefer-rest-params
            return new Color(arguments, model);
        }
        // eslint-disable-next-line prefer-rest-params
        var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
        return new Color(assertArray(color_convert_1.default[this.model][model].raw(this.color)).concat(newAlpha), model);
    };
    // 'static' construction methods
    Color[model] = function (color) {
        if (typeof color === 'number') {
            // eslint-disable-next-line prefer-rest-params
            color = zeroArray(_slice.call(arguments), channels);
        }
        return new Color(color, model);
    };
};
// Model conversion methods and static constructors
for (var _b = 0, _c = Object.keys(color_convert_1.default); _b < _c.length; _b++) {
    var model = _c[_b];
    _loop_1(model);
}
function roundTo(number, places) {
    return Number(number.toFixed(places));
}
function roundToPlace(places) {
    return function (number) {
        return roundTo(number, places);
    };
}
function getset(model, channel, modifier) {
    model = Array.isArray(model) ? model : [model];
    for (var _i = 0, model_1 = model; _i < model_1.length; _i++) {
        var m = model_1[_i];
        (limiters[m] || (limiters[m] = []))[channel] = modifier;
    }
    model = model[0];
    return function (value) {
        var result;
        if (arguments.length > 0) {
            if (modifier) {
                value = modifier(value);
            }
            result = this[model]();
            result.color[channel] = value;
            return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
            result = modifier(result);
        }
        return result;
    };
}
function maxfn(max) {
    return function (v) {
        return Math.max(0, Math.min(max, v));
    };
}
function assertArray(value) {
    return Array.isArray(value) ? value : [value];
}
function zeroArray(array, length) {
    for (var i = 0; i < length; i++) {
        if (typeof array[i] !== 'number') {
            array[i] = 0;
        }
    }
    return array;
}
exports.default = Color;
