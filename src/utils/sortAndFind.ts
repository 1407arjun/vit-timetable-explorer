import { compareTime, compareTimeArray } from "./compareTime"
import isTimeDiff from "./timeDiff"

const sortAndFind = (timings: string[][]) => {
    const freeSlots: string[] = []
    let current = "08:00"

    timings.push(["19:50", "19:50"])
    timings.sort(compareTimeArray(0, 0))

    for (const t of timings) {
        const [start, end] = t

        if (compareTime(current, start) < 0) {
            if (isTimeDiff(start, current, 30))
                freeSlots.push(`${current} to ${start}`)
            current = end
        } else {
            current = compareTime(end, current) > 0 ? end : current
        }
    }

    return freeSlots
}

export default sortAndFind
