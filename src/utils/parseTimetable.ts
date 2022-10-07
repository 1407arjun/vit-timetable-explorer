import type Course from "../types/course"

const parseTimetable = (
    str: string,
    allTimings?: boolean
): {
    courses: Course[]
    timings?: {
        theoryStart: string[]
        theoryEnd: string[]
        labStart: string[]
        labEnd: string[]
    }
} => {
    const data = []
    const courses: Course[] = []

    for (const s of str.split("\n")) {
        data.push(s.split("\t"))
    }

    const theoryStart = data.shift()
    const theoryEnd = data.shift()
    const labStart = data.shift()
    const labEnd = data.shift()

    for (var i = 0; i < data.length; i += 2) {
        for (var j = 2; j < data[i].length; j++) {
            const lec = data[i][j].split("-")

            if (data[i][j] !== "-" && lec.length > 1) {
                const [slot, code, type, room] = lec
                const [start, end] = [theoryStart![j], theoryEnd![j - 1]]
                courses.push({
                    slot,
                    pos: { r: Math.floor(i / 2), c: j - 2 },
                    code,
                    type,
                    room,
                    start,
                    end
                })
            }
        }

        for (var j = 1; j < data[i + 1].length; j++) {
            const lec = data[i + 1][j].split("-")

            if (data[i + 1][j] !== "-" && lec.length > 1) {
                const [slot, code, type, room] = lec
                const [start, end] = [labStart![j], labEnd![j - 1]]
                courses.push({
                    slot,
                    code,
                    pos: { r: Math.floor((i + 1) / 2), c: j - 1 },
                    type,
                    room,
                    start,
                    end
                })
            }
        }
    }

    //@ts-ignore
    return allTimings
        ? { courses, timings: { theoryStart, theoryEnd, labStart, labEnd } }
        : { courses }
}

export default parseTimetable
