/**
 * 集合：一组“无序”且“唯一”（不重复）的项组成的数据结构
 * 有add、delete、has、clear、size、values所有集合的数值
 */

class MySet {
    #items: Map<any, any> = new Map(); // 创建一个对象进行集合的管理
    constructor(){};

    public add(targetVal): boolean{
        if (this.has(targetVal)) {
            return false;
        } else {
            this.#items.set(targetVal, targetVal);
            return true;
        }
    };
    public get(key: any): any {
        return this.#items.get(key);
    };
    public delete(targetVal): boolean {
        if (this.has(targetVal)) {
            return this.#items.delete(targetVal);
        } else {
            return false;
        }
    };
    public has(targetVal): boolean {
        return this.#items.has(targetVal);
    };

    public clear(): boolean {
        this.#items.clear();
        return true;
    };

    public get size(): number{
        return this.#items.size;
    };
}

const mySet = new MySet();

