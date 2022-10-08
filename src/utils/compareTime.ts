const compareTime = (a: string[], b: string[]) => {
    const [hrs1, mins1] = a[0].split(":")
    const [hrs2, mins2] = b[0].split(":")

    return Number(hrs1) - Number(hrs2) === 0
        ? Number(mins1) - Number(mins2)
        : Number(hrs1) - Number(hrs2)
}

export default compareTime
