/**
 * @brief: 获取时间
 * @param:  Date | 可不传
 * @returns: {Object};
 * @note: ;
 * @see: ...;
 */
const getDate = time => {
    const date = time || new Date();
    const year = date.getFullYear(); // 年
    const month = date.getMonth(); // 月
    const day = date.getDate(); // 日
    const hour = date.getHours(); // 时
    const minutes = date.getMinutes(); // 分
    const seconds = date.getSeconds(); // 秒
    return {
      year,
      month,
      day,
      hour,
      minutes,
      seconds,
    };
};
/**
 * @brief: 获取年月日
 * @param:
 * @returns: String;
 * @note: 2023-01-04;
 * @see: getDate;
 */
const getYYMMDD = (time = new Date())=>{
    const date = getDate(time);
    const year = `${date.year}`.padStart(4, '0');
    const month = `${date.month + 1}`.padStart(2, '0');
    const day = `${date.day}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
}

console.log('getYYMMDD() :>> ', getYYMMDD());