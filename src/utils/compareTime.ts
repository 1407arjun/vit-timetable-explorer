const compareTimeArray = (index1?: 0 | 1, index2?: 0 | 1) => {
    return (a: string[], b: string[]) => {
        const [hrs1, mins1] = a[index1!].split(":")
        const [hrs2, mins2] = b[index2!].split(":")

        return Number(hrs1) - Number(hrs2) === 0
            ? Number(mins1) - Number(mins2)
            : Number(hrs1) - Number(hrs2)
    }
}

const compareTime = (a: string, b: string) => {
    const [hrs1, mins1] = a.split(":")
    const [hrs2, mins2] = b.split(":")

    return Number(hrs1) - Number(hrs2) === 0
        ? Number(mins1) - Number(mins2)
        : Number(hrs1) - Number(hrs2)
}

export { compareTime, compareTimeArray }
