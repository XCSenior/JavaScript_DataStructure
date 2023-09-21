/**
 * 集合：一组“无序”且“唯一”（不重复）的项组成的数据结构
 * 有add、delete、has、clear、size、values所有集合的数值
 */

class mySet<T> {
    public items: object = {}; // 创建一个对象进行集合的管理
    constructor(){};

    public add(): boolean{

        return false;
    };
    public delete(): T | void {

    };
    public has(): boolean {

        return false;
    };

    public clear(): boolean {
        this.items = {};
        return true;
    };

    public get size(): number{
        return Object.keys(this.items).length;
    };
}