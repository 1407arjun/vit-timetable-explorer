#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const findFreeSlots_1 = __importDefault(require("../src/utils/findFreeSlots"));
const file = process.argv[2];
const data = fs_1.default.readFileSync(file).toString();
const split = file.split(".");
const type = split[split.length - 1];
if (type === "txt") {
    try {
        console.info((0, findFreeSlots_1.default)(data.split("\n\n")));
        process.exit(0);
    }
    catch (err) {
        //@ts-ignore
        console.error(err.message);
        process.exit(1);
    }
}
else {
    console.error("File type not supported.");
}
