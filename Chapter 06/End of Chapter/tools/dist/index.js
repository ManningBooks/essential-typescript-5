"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calc_js_1 = require("./calc.js");
let printMessage = (msg) => console.log(`Message: ${msg}`);
let message = ("Hello, TypeScript");
printMessage(message);
debugger;
let total = (0, calc_js_1.sum)(100, 200, 300);
console.log(`Total: ${total}`);
//# sourceMappingURL=index.js.map