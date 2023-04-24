"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
function sum(...vals) {
    return vals.reduce((total, val) => total += val);
}
exports.sum = sum;
//# sourceMappingURL=calc.js.map