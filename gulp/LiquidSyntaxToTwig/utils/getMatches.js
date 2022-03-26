"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatches = void 0;
function getMatches(string, regex) {
    var matches = [];
    var match;
    while ((match = regex.exec(string))) {
        matches.push.apply(matches, match);
    }
    return matches;
}
exports.getMatches = getMatches;
