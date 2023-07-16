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

/**
* 栈结构的应用
* @param { number } decNumber 被转换的十进制数
* @returns { string } 转换后的二进制数
*/
// 辗转相除法，求十进制转成二进制数字
const convertBinary = (decNumber: number) : string => {
    const tempStack = new Stack();
    let tempNumber : number = decNumber;
    let convertedString : string = "";
    // 辗转相除
    while (tempNumber > 0) {
        // 将取余数放入栈中
        tempStack.push(tempNumber % 2);
        // 对tempNumber除目标进制数，并向下取整
        tempNumber = Math.floor(tempNumber / 2);
    };
    // 获取目标进制的字符串数值
    while (!tempStack.isEmpty) {
        convertedString += tempStack.pop();
    };

    return convertedString;
};