"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compareTime_1 = require("./compareTime");
const timeDiff_1 = __importDefault(require("./timeDiff"));
const sortAndFind = (timings) => {
    const freeSlots = [];
    let current = "08:00";
    timings.push(["19:50", "19:50"]);
    timings.sort((0, compareTime_1.compareTimeArray)(0, 0));
    for (const t of timings) {
        const [start, end] = t;
        if ((0, compareTime_1.compareTime)(current, start) < 0) {
            if ((0, timeDiff_1.default)(start, current, 30))
                freeSlots.push(`${current} to ${start}`);
            current = end;
        }
        else {
            current = (0, compareTime_1.compareTime)(end, current) > 0 ? end : current;
        }
    }
    return freeSlots;
};
exports.default = sortAndFind;
