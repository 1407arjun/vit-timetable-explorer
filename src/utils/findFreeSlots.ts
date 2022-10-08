import type Slots from "../types/slots"
import parseTimetable from "./parseTimeTable"
import sortAndFind from "./sortAndFind"

const findFreeSlots = (timetables: string[]) => {
    const slots: string[][][] = [[], [], [], [], [], [], []]
    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    const freeSlots: Slots = {}

    for (const t of timetables) {
        const courses = parseTimetable(t)
        for (const c of courses) {
            if (c.start !== "Lunch" && c.end !== "Lunchh")
                slots[c.day].push([c.start, c.end])
        }
    }

    for (var i = 0; i < slots.length; i++) {
        const freeSlotsDay = sortAndFind(slots[i])
        freeSlots[days[i]] = freeSlotsDay
    }

    return freeSlots
}

export default findFreeSlots
