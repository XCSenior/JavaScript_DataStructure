/**
 * 手动实现映射表，要求键名可以存任何数据结构，如字符串、数值、对象等
 * 常见方法有：
 * get获取方法
 * set设置方法
 * remove移除方法
 */

class Dictionary {
    // 私有属性：作为暂存对象的值
    #table: Object;
    // 私有方法：将传入的键类型转换为字符串
    #convertKeyToString(rawKey: any) : string{
        let returnStrKey: string = "";
        if (rawKey === null) {
            returnStrKey = "null";
        } else if (rawKey === undefined) {
            returnStrKey = "undefined";
        } else if (typeof rawKey === 'string' || rawKey instanceof String) {
            returnStrKey = rawKey;
        }

        return returnStrKey;
    };
    constructor(){
        this.#table = {};
    };

    // 1、判断是否有这个键
    public hasKey(){};

    // 2、设置键值对方法
    public set(){};

    // 3、获取目标键值对的方法
    public get(){};

    // 4、移除目标键值对的方法
    public remove(){};

}

const dictionary = new Dictionary();

console.log('dictionary :>> ', dictionary);