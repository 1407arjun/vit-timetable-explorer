import parseTimetable from "./parseTimeTable"

const findFreeSlots = (timetables: string[]) => {
    const matrix = []
    const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    const freeSlots = []

    for (var i = 0; i < 7; i++) {
        matrix.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }

    if (timetables.length > 0) {
        const { courses, timings } = parseTimetable(timetables.shift()!, true)

        for (const c of courses) {
            matrix[c.pos.r][c.pos.c] = 1
        }

        for (const t of timetables) {
            const { courses } = parseTimetable(t)

            for (const c of courses) {
                matrix[c.pos.r][c.pos.c] = 1
            }
        }

        const { theoryStart, theoryEnd } = timings!

        for (var i = 0; i < 7; i++) {
            if (
                (i === 5 || i === 6) &&
                matrix[i].reduce((p, a) => p + a, 0) === 0
            ) {
                freeSlots.push(`${days[i]} ALL-DAY`)
            } else {
                for (var j = 0; j < 14; j++) {
                    if (
                        j !== 6 &&
                        matrix[i][j] === 0 &&
                        theoryStart[j + 2] !== "-"
                    ) {
                        freeSlots.push(
                            `${days[i]} ${theoryStart[j + 2]} - ${
                                theoryEnd[j + 1]
                            }`
                        )
                    }
                }
            }
        }
    }

    return freeSlots
}

export default findFreeSlots
