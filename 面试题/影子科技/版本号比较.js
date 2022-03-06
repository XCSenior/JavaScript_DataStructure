/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串 
 * @param version2 string字符串 
 * @return int整型
 */
 function compare( version1 ,  version2 ) {
    // write code here
	let returnCode;
	let version1Arr = version1.split(".");
	let version2Arr = version2.split(".");

	/* 对数据进行处理 */

	for (let i = 0; i < 3; i++) {
		/* 赋值0 */
		if (version1Arr[i] === undefined || version1Arr[i] === "") {
			version1Arr[i] = "0";
		}
		if (version2Arr[i] === undefined || version2Arr[i] === "") {
			version2Arr[i] = "0";
		}
	}

	for (let i = 0; i < 3; i++) {
		/* 去除先导0 */
		while(version1Arr[i][0] === "0"){
			version1Arr[i] = version1Arr[i].substr(1);
		}
		while(version2Arr[i][0] === "0"){
			version2Arr[i] = version2Arr[i].substr(1);
		}
	}

	for (let i = 0; i < 3; i++) {
		/* 赋值0 */
		if (version1Arr[i] === undefined || version1Arr[i] === "") {
			version1Arr[i] = "0";
		}
		if (version2Arr[i] === undefined || version2Arr[i] === "") {
			version2Arr[i] = "0";
		}
	}

	version1Arr[0] = parseInt(version1Arr[0]);
	version2Arr[0] = parseInt(version2Arr[0]);

	if (version1Arr[0] === version2Arr[0]) {	//如果第一位相同

		version1Arr[1] = parseInt(version1Arr[1]);
		version2Arr[1] = parseInt(version2Arr[1]);

		/* 开始比较第二位 */
		if (version1Arr[1] === version2Arr[1]) {	//如果第二位相同
			/* 开始比较第三位 */
			version1Arr[2] = parseInt(version1Arr[2]);
			version2Arr[2] = parseInt(version2Arr[2]);


			if (version1Arr[2] === version2Arr[2]){
				returnCode = 0
			}else if(version1Arr[2] > version2Arr[2]){
				returnCode = 1;
			}else{
				returnCode = -1;
			}

		}else if (version1Arr[1] > version2Arr[1]) {
			returnCode = 1;
		}else{
			returnCode = -1;
		}

	}else if(version1Arr[0] > version2Arr[0]){
		returnCode = 1;
	}else{
		returnCode = -1;
	}

	console.log(version1Arr,version2Arr);

	return returnCode;
}

console.log(compare("2.226.1","2.36"));

module.exports = {
    compare : compare
};