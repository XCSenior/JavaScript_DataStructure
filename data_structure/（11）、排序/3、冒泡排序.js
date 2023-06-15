const arr = [49, 38, 65, 97, 76, 13, 27, 49];

function BubbleSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		var flag = false;
		for (var j = arr.length - 1; j > i; j--) {
			if(arr[j-1]>arr[j]){
				var temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
				flag = true;	//发生过交换
			}
		}
		if(flag === false){
			// 没有发生交换说明以排好序
			return;
		}
	}
}

BubbleSort(arr);
console.log(arr);