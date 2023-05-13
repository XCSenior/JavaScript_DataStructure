const reverseTimeSlice = (originArr) => {
    let timeStampList = []
    let min = new Date(`2023-01-01 00:00:00`).valueOf()
    let max = new Date(`2023-01-01 23:59:59`).valueOf()
    const cacheList = []
    const result = []

    originArr.filter(subArr => subArr[0]).forEach(subArr => {
        timeStampList = timeStampList.concat(
            subArr.map(timeStr => new Date(`2023-01-01 ${timeStr}`).valueOf())
        )
    })

    timeStampList.sort()

    let i = 0
    const length = timeStampList.length

    while (i < length) {
        const timeStamp = timeStampList[i]

        if (timeStamp <= min) {
            min = timeStampList[i + 1] + 1000
            i += 2
        } else if (timeStamp >= max) {
            max = timeStampList[i - 1] - 1000
            i = timeStampList.length
        } else {
            cacheList.push(timeStamp + (i % 2 === 0 ? -1000 : 1000))
            i++
        }
    }

    if (cacheList[0] > min) {
        cacheList.unshift(min)
    }

    if (cacheList[cacheList.length -1] < max) {
        cacheList.push(max)
    }

    cacheList.forEach((timeStamp, index) => {
        const date = new Date(timeStamp)

        if (index % 2 === 0) {
            result.push([])
        }

        result[result.length - 1].push(
            `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
        )
    })

    return result
}

// console.log(fn([
//     ['', ''],
//     ['09:30:00', '12:00:00'],
//     ['14:30:00', '18:30:00']
// ]))

// console.log(fn([
//     ['', ''],
//     ['00:00:00', '05:10:11'],
//     ['09:30:00', '12:00:00'],
//     ['14:30:00', '18:30:00']
// ]))

console.log(reverseTimeSlice([
    ['', ''],
    ['09:30:00', '12:00:00'],
    ['', ''],
    ['14:30:00', '23:59:58']
]))