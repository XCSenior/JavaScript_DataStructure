// function func(n,str){
// 	var arr = str.split("");
// 	var ones = 0;
// 	let zeros = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		var item = arr[i];
// 		item === '1' ? ++ones : ++zeros;
// 	}
// 	return ones<zeros ? ones : zeros;
// }




// console.log(func(5,"11001"));



/* 网上答案 */

const {readline} = require('readline');

let n = Number(readline())
let rawStr = readline()
let min = n
let left0=0,right1=0
for(let i = 0;i<n;++i){
    if(rawStr[i]=='1')++right1
}
for(let i = 0;i<=n;++i){
    if(i>0){
        if(rawStr[i-1]=='0')left0++
        else right1--
    }
    if(left0+right1<min)min = left0+right1
}
print(min)