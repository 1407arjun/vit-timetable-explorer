import parseTimetable from "./parseTimeTable"
import sortAndFind from "./sortAndFind"

const findFreeSlots = (timetables: string[]) => {
    const slots = []
    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    const freeSlots = []

    for (const t of timetables) {
        const courses = parseTimetable(t)
        for (const c of courses) {
            slots.push([c.start, c.end])
        }
    }

    sortAndFind(slots)

    //return freeSlots
}

export default findFreeSlots
