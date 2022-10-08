#!/usr/bin/env node

import fs from "fs"
import findFreeSlots from "../src/utils/findFreeSlots"

const file = process.argv[2]
const data = fs.readFileSync(file).toString()

const split = file.split(".")
const type = split[split.length - 1]

if (type === "txt") {
    try {
        console.info(findFreeSlots(data.split("\n\n")))
        process.exit(0)
    } catch (err) {
        //@ts-ignore
        console.error(err.message)
        process.exit(1)
    }
} else {
    console.error("File type not supported.")
}
