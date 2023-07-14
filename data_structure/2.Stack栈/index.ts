/**
 * *栈的基本方法
 * ? 1、push：推入元素至栈顶
 * ? 2、pop：栈顶元素出栈
 * ? 3、peek：返回栈顶元素
 *
 * ? 4、isEmpty：判断是否为空栈
 * ? 5、clear：清空栈
 * ? 6、size属性：栈的长度
 */
class Stack<T> {
    protected items : Array<T>;
    constructor(...args: T[]){
        this.items = [...args];
    }

    // 推入元素至栈顶
    public pop(){
        return this.items.pop();
    };

    // 栈顶元素出栈
    public push(data: T){
        this.items.push(data);
    };

    // 返回栈顶元素
    public peek(){
        return this.items[this.items.length - 1];
        // return this.items.at(-1);
    };

    // 判断是否为空栈
    public get isEmpty(): Boolean{
        return this.items.length === 0;
    };

    // 清空栈
    public clear(){
        this.items = [];
    };

    // 栈的长度
    public get size(): Number{
        return this.items.length;
    }

}

const stack = new Stack(1, 2, 3);

