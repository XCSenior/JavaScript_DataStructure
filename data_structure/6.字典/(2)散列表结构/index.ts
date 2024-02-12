/**
 * 手动实现映射表，要求键名可以存任何数据结构，如字符串、数值、对象等
 * 常见方法有：
 * get获取方法
 * set设置方法
 * remove移除方法
 */

/* 用来作为存储value的数据类型 */
class ValuePair2 {
    key: any;
    value: any;
    constructor(key: any, value: any) {
        this.key = key;
        this.value = value;
    }
}

class Dictionary2 {
    // 私有属性：作为暂存对象的值
    #table: Object;
    // 私有方法：将传入的键类型转换为字符串
    #convertKeyToString(rawKey: any) : string | String{
        let returnStrKey: string | String = "";
        if (rawKey === null) {
            returnStrKey = "null";
        } else if (rawKey === undefined) {
            returnStrKey = "undefined";
        } else if (typeof rawKey === 'string' || rawKey instanceof String) {
            returnStrKey = rawKey;
        } else {
            returnStrKey = JSON.stringify(rawKey);
        }
        return returnStrKey;
    };
    constructor(){
        this.#table = {};
    };

    // 1、判断是否有这个键
    public hasKey(rawKey: any): boolean{
        return Boolean(this.#table[String(this.#convertKeyToString(rawKey))]);
    };

    // 2、设置键值对方法
    public set(rawKey: any, value: any): boolean{
        if(rawKey && value){
            this.#table[String(this.#convertKeyToString(rawKey))] = new ValuePair2(rawKey, value);
            return true;
        } else {
            return false;
        }
    };

    // 3、获取目标键值对的方法
    public get(rawKey: any){
        return this.#table[String(this.#convertKeyToString(rawKey))];
    };

    // 4、移除目标键值对的方法
    public remove(rawKey: any): boolean{
        return Reflect.deleteProperty(this.#table, String(this.#convertKeyToString(rawKey)));
    };

    // 5、清除对象
    public clear(){
        this.#table = {};
    };

    // 6、返回长度
    public get size() {
        return Object.entries(this.#table).length;
    }

}

const dictionary2 = new Dictionary2();

const shabiObj2 = { "shabi": "obj" };

dictionary2.set("nihaoshabi", "nihaoValue");
dictionary2.set(shabiObj2, "shabiObjValue");

console.log('dictionary2 :>> ', dictionary2);