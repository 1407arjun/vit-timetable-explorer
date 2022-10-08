"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTimetable = exports.findFreeSlots = void 0;
const findFreeSlots_1 = __importDefault(require("./src/utils/findFreeSlots"));
exports.findFreeSlots = findFreeSlots_1.default;
const parseTimeTable_1 = __importDefault(require("./src/utils/parseTimeTable"));
exports.parseTimetable = parseTimeTable_1.default;
exports.default = findFreeSlots_1.default;
