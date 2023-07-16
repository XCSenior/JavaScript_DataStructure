/**
 * *队列的基本方法
 * ? 1、enqueue：元素至队尾
 * ? 2、dequeue：队头元素出队
 * ? 3、getFront：返回栈顶队头元素
 *
 * ? 4、isEmpty：判断是否为空队列
 * ? 5、clear：清空队列
 * ? 6、size属性：队列的长度
 */
class Queue<T> {
    protected items : Array<T>;

    constructor(...args: T[]) {
        this.items = [...args];
    };

    // dequeue出队
    public dequeue(){
        return this.items.shift();
    };
    // enqueue入队
    public enqueue(data: T){
        return this.items.push(data);
    };
    // getFront获取队头元素
    public getFront(): T | undefined{
        return this.items[0];
    };

    // 判断是否为空队列
    public get isEmpty(): boolean{
        return this.items.length === 0;
    };

    // 清空队列
    public clear(){
        this.items = [];
    };

    // 队列的长度
    public get size(): number{
        return this.items.length;
    }
}


// 击鼓传花游戏
function game(list: string[], num: number) { // num为击鼓次数
    const tempQueue = new Queue(...list);
    let count = 0; // 可统计在第几轮游戏中，谁出局了

    while (tempQueue.size > 1) {
        for (let i = 0; i < num; i++) {
            // 出队，压入队尾
            tempQueue.enqueue(tempQueue.dequeue());
        }

        console.log(`在第${++count}轮击鼓传花游戏中，${tempQueue.dequeue()}出局了！`);
    }
    console.log(`最后获胜的玩家是：${tempQueue.getFront()}`);
    return tempQueue.getFront();
}

game(["kerwin", "xiaoming", "tiechui", "gangdear", "guludunzi"], 7);
