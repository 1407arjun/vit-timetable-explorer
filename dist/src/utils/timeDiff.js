"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isTimeDiff = (a, b, diff) => {
    const [hrs1, mins1] = a.split(":");
    const [hrs2, mins2] = b.split(":");
    let hrs = (Number(hrs1) - Number(hrs2)) * 60;
    let mins = hrs + Number(mins1) - Number(mins2);
    return mins >= diff;
};
exports.default = isTimeDiff;
