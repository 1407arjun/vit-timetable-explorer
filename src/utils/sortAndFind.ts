import { compareTime, compareTimeArray } from "./compareTime"

const sortAndFind = (timings: string[][]) => {
    const res: string[][] = []

    let current = "08:00"

    timings.sort(compareTimeArray(0, 0)) //asc
    const temp: string[][] = []

    for (const t of timings) {
        const [start, end] = t

        if (compareTime(current, start) < 0) {
            res.push([current, start])
            current = end
        } else {
            current = compareTime(end, current) > 0 ? end : current
        }
    }

    // while (timings.length > 0) {
    //     const pair = timings.pop()

    //     if (
    //         temp.length > 0 &&
    //         compareTime(1, 0)(temp[temp.length - 1], pair!) >= 0
    //     ) {
    //         temp[temp.length - 1][1] =
    //             compareTime(1, 1)(pair!, temp[temp.length - 1]) >= 0
    //                 ? pair![1]
    //                 : temp[temp.length - 1][1]
    //     } else temp.push(pair!)

    //     console.log(temp)
    // }

    // for (var i = 0; i < temp.length - 1; i++) {
    //     res.push([temp[i][1], temp[i + 1][0]])
    // }

    return res
}

export default sortAndFind
