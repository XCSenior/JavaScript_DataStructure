// 统计某一字符或字符串在另一个字符串中出现的次数


function func(chars,str){
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		var subStr = str.slice(i,i+chars.length);
		if(chars === subStr){
			++count;
		}
	}
	return count;
}

var chars = readline();
var str = readline();
console.log(func(chars,str));
