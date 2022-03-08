/**
  * countTotal函数的作用为统计所有企业总成本 
  * data格式为：[{"id":"1","companyName":"企业1","userName":"员工A","amount":"成本1"},{"id":"2","companyName":"企业2","userName":"员工B","amount":"成本2"}]
  * 返回值的数据格式：数字格式 
  */
let data = [{"id":"1","companyName":"企业1","userName":"员工A","amount":"成本1"},{"id":"2","companyName":"企业2","userName":"员工B","amount":"成本2"}]

const countFn = (data) => {
	/* 首先获取 data的公司数组*/
	let cpNameArr = [];
	for (let i = 0; i < data.length; i++) {
		cpNameArr.push(data[i].companyName);
	}
	cpNameArr =  [... new Set(cpNameArr)];
	// console.log(cpNameArr);	//数组去重

	/* 赋值对象键名 */
	const returnObject = {};
	for (let i = 0; i < cpNameArr.length; i++) {
		Object.defineProperty(returnObject,cpNameArr[i],{
			value:0
		});
	}

	// 遍历data
	for (let i = 0; i < data.length; i++) {
		let amountNumber = data[i].amount ? data[i].amount : 0;
		for (let j = 0; j < cpNameArr.length; j++) {
			/* cpNameArr[j]公司名字 */
			if (data[i].companyName === cpNameArr[j]) {
				returnObject.cpNameArr[j] += amountNumber;
			}
		}
	}
	
	return returnObject;
}

countFn(data)




// const countTotal = (data) => {
// 	/* data是对象数组 */
// 	let count = 0;
// 	for (let i = 0; i < data.length; i++) {
// 		!data[i].amount ? count += 0 : count += parseInt(data[i].amount);
// 	}
// 	return count;
// }