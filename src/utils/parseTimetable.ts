import type Course from "../types/course"
import type Slots from "../types/slots"

const parseTimetable = (
    str: string,
    allSlots?: boolean
): {
    courses: Course[]
    slots?: Slots
} => {
    const data: string[] = []
    const courses: Course[] = []
    const slots: Slots = {}

    for (const s of str.split("\n")) {
        //@ts-ignore
        data.push(s.split("\t"))
    }

    const theoryStart = data.shift()
    const theoryEnd = data.shift()
    const labStart = data.shift()
    const labEnd = data.shift()

    for (var i = 0; i < data.length; i += 2) {
        for (var j = 2; j < data[i].length; j++) {
            const lec = data[i][j].split("-")
            const [start, end] = [theoryStart![j], theoryEnd![j - 1]]

            if (allSlots && data[i][j] !== "-" && data[i][j] !== "Lunch")
                slots[lec[0]] = { start, end }

            if (data[i][j] !== "-" && lec.length > 1) {
                const [slot, code, type, room] = lec
                courses.push({ slot, code, type, room, start, end })
            }
        }

        for (var j = 1; j < data[i + 1].length; j++) {
            const lec = data[i + 1][j].split("-")
            const [start, end] = [labStart![j], labEnd![j - 1]]

            if (
                allSlots &&
                data[i + 1][j] !== "-" &&
                data[i + 1][j] !== "Lunch"
            )
                slots[lec[0]] = { start, end }

            if (data[i + 1][j] !== "-" && lec.length > 1) {
                const [slot, code, type, room] = lec
                courses.push({ slot, code, type, room, start, end })
            }
        }
    }

    return allSlots ? { courses, slots } : { courses }
}

export default parseTimetable
