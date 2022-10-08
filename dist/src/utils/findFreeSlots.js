"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseTimeTable_1 = __importDefault(require("./parseTimeTable"));
const sortAndFind_1 = __importDefault(require("./sortAndFind"));
const findFreeSlots = (timetables) => {
    const slots = [[], [], [], [], [], [], []];
    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const freeSlots = {};
    for (const t of timetables) {
        const courses = (0, parseTimeTable_1.default)(t);
        for (const c of courses) {
            if (c.start !== "Lunch" && c.end !== "Lunchh")
                slots[c.day].push([c.start, c.end]);
        }
    }
    for (var i = 0; i < slots.length; i++) {
        const freeSlotsDay = (0, sortAndFind_1.default)(slots[i]);
        freeSlots[days[i]] = freeSlotsDay;
    }
    return freeSlots;
};
exports.default = findFreeSlots;
