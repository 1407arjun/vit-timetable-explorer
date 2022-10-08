"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareTimeArray = exports.compareTime = void 0;
const compareTimeArray = (index1, index2) => {
    return (a, b) => {
        const [hrs1, mins1] = a[index1].split(":");
        const [hrs2, mins2] = b[index2].split(":");
        return Number(hrs1) - Number(hrs2) === 0
            ? Number(mins1) - Number(mins2)
            : Number(hrs1) - Number(hrs2);
    };
};
exports.compareTimeArray = compareTimeArray;
const compareTime = (a, b) => {
    const [hrs1, mins1] = a.split(":");
    const [hrs2, mins2] = b.split(":");
    return Number(hrs1) - Number(hrs2) === 0
        ? Number(mins1) - Number(mins2)
        : Number(hrs1) - Number(hrs2);
};
exports.compareTime = compareTime;
