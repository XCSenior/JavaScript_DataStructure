let a = [49,38,65,97,76,13,27,49];

/* 开始编写插入排序函数(从小到大) */
function InsertSort(a,n) {	//array是待排序数组,n是元素的个数,也就是length
	let i,j;
	n = a.length;
	let temp;
	for(i = 1; i < n; i++){
		if(a[i-1] > a[i]){	/* 只有当前面的元素大于当前元素,才执行插入排序 */
			temp = a[i];
			for(j = i-1 ; j>=0 && a[j]>temp ; --j){
				a[j+1] = a[j];	//元素右移
			}
			a[j+1] = temp;	//j是-1的时候跳出循环,在j的右边赋值temp
		}
	}
}

InsertSort(a,8);
console.log(a);