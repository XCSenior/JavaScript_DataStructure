const moment = require('moment');

const nowTime = [
    ['', ''],
    ['14:30:00', '18:30:00'],
    ['09:30:00', '12:00:00'],
]
/* 求相反时间
    例如nowTime的相反时间为：[
        '00:00:00 - 09:29:59',
        '12:00:01 - 14:29:59',
        '18:30:01 - 23:59:59'
    ]
*/

const formatFn = (nowTime = []) => {
    const arr = nowTime.filter(item => item[0])
    arr.sort((a, b) => {
        console.log('a :>> ', a);
        const aTime = a[0].split(':')
        const aHour = aTime[0]
        const aMinute = aTime[1]
        const aSecond = aTime[2]

        const bTime = b[0].split(':')
        const bHour = bTime[0]
        const bMinute = bTime[1]
        const bSecond = bTime[2]

        // const yuandian = +new Date(1970, 0, 1, 8, 0, 0)
        const aTimeStamp = +new Date(1970, 0, 1, aHour, aMinute, aSecond) // +是为了变成时间戳
        const bTimeStamp = +new Date(1970, 0, 1, bHour, bMinute, bSecond)

        console.log('aTimeStamp :>> ', aTimeStamp);

        // return bTimeStamp - aTimeStamp
        return aTimeStamp - bTimeStamp
    })
    console.log('arr :>> ', arr[0], arr[1], arr[2]);
}


formatFn(nowTime)