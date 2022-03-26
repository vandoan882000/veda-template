"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBOCsBetweenSomething = void 0;
/** Function thực hiện lấy block code giữa 2 cái j đó */
var getBOCsBetweenSomething = function (_a) {
    var endBOC = _a.endBOC, liquid = _a.liquid, startBOC = _a.startBOC;
    var signals;
    var startIndexes = [];
    var BOCs = [];
    var regex = new RegExp("".concat(startBOC.source, "|").concat(endBOC.source), 'gm');
    while (true) {
        signals = regex.exec(liquid);
        if (signals !== null) {
            var signal = signals[0];
            if (!endBOC.test(signal)) {
                // Bắt đầu 1 root
                var startIndex = regex.lastIndex - signal.length;
                startIndexes.push(startIndex);
            }
            else {
                var startIndex = startIndexes.pop();
                if (startIndex !== undefined) {
                    // Kết thúc 1 root
                    var endIndex = regex.lastIndex;
                    BOCs.push(liquid.slice(startIndex, endIndex));
                }
            }
        }
        else
            break;
    }
    return BOCs;
};
exports.getBOCsBetweenSomething = getBOCsBetweenSomething;
