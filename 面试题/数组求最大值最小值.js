
var arr = [3,4,5,6];

function func(arr){
	var max = arr[0];
	var min = arr[0];
	arr.forEach(item => {
		if(item>max){
			max = item;
		}else if(item < min){
			min = item;
		}
	});
	return [max,min]
}

var newArr = func(arr)

console.log(newArr[0]);
console.log(newArr[1]);