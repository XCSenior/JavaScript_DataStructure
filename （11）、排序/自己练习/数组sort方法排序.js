let arr = [2,5,9,7,4,3,0,1];

let newArr = arr.sort((a,b) => {
	return a - b;  //升序排序
});

console.log(newArr);