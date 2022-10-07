import type Course from "../types/course"

const parseTimetable = (
    str: string,
    allSlots?: boolean
): Course[] | { courses: Course[]; slots: { [key: string]: string[] } } => {
    const data: string[] = []
    const courses: Course[] = []
    const slots: { [key: string]: string[] } = {}

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

            if (allSlots && data[i][j] !== "-" && data[i][j] !== "Lunch")
                slots[lec[0]] = []

            if (data[i][j] !== "-" && lec.length > 1) {
                const [slot, code, type, room] = lec
                const [start, end] = [theoryStart![j], theoryEnd![j - 1]]
                courses.push({ slot, code, type, room, start, end })
            }
        }

        for (var j = 1; j < data[i + 1].length; j++) {
            const lec = data[i + 1][j].split("-")

            if (
                allSlots &&
                data[i + 1][j] !== "-" &&
                data[i + 1][j] !== "Lunch"
            )
                slots[lec[0]] = []

            if (data[i + 1][j] !== "-" && lec.length > 1) {
                const [slot, code, type, room] = lec
                const [start, end] = [labStart![j], labEnd![j - 1]]
                courses.push({ slot, code, type, room, start, end })
            }
        }
    }

    return allSlots ? { courses, slots } : courses
}

export default parseTimetable
