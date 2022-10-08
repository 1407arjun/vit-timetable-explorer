import parseTimetable from "./parseTimeTable"
import sortAndFind from "./sortAndFind"

const findFreeSlots = (timetables: string[]) => {
    const slots: string[][][] = [[], [], [], [], [], [], []]
    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    const freeSlots = []

    for (const t of timetables) {
        const courses = parseTimetable(t)
        for (const c of courses) {
            if (c.start !== "Lunch" && c.end !== "Lunchh")
                slots[c.day].push([c.start, c.end])
        }
    }

    // for (const s of slots) {

    // }
    console.log(sortAndFind(slots[0]))

    //return freeSlots
}

export default findFreeSlots
