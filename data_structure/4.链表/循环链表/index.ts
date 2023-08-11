/**
 * *循环链表的基本属性和方法
 * 循环链表指的是，链表tail结点的next指针指向head结点
 * ? 1、push：链表尾增加元素
 * ? 2、remove：两种类型：根据目标索引删除、根据目标元素值删除
 * ? 3、insert：指定位置插入data
 *
 * ? 4、isEmpty：判断是否为空链表
 * ? 5、clear：清空链表
 * ? 6、size属性：链表的长度
 * ? 7、getHead：获取链表头
 * ? 8、getTail：获取链表尾
 */
/**
 * @class SingleNode1 普通双向链表封装的结点
 * @property { T } data 结点的数据
 * @property { SingleNode1<T> | null } next 结点的直接后继
 * @description 正常来说应该继承SingleNode类的，但是由于ts编译后的commonJS模块化格式浏览器不支持（不知道怎么设置编译后成为ESModules），所以还是单独声明此双向链表结点的类
 */
class SingleNode1<T> {
    public data: T;
    public next: SingleNode1<T> | null;
    constructor(data: T){
        this.data = data;
        this.next = null;
    };
}
/* 循环链表数据结构 */
class CircularLinkedList<T> {
    // 循环链表的长度
    protected count: number = 0;
    // 循环链表的表头，表尾元素
    protected head: SingleNode1<T> = null;
    protected tail: SingleNode1<T> = null;

    // 编写公用方法
    // 公用方法1、获取指定位置的结点
    public getNodeAt(targetIndex: number): SingleNode1<T> | void{
        if (targetIndex >= 0 && targetIndex < this.count) {
            let currentNode: SingleNode1<T> = this.head;
            // 开始遍历查找目标节点
            for (let i = 0; i < targetIndex; i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    };
    // 公用方法2、查找目标元素值的结点索引值
    public findIndexOf(targetData: T): number {
        let currentNode: SingleNode1<T> = this.head;
        // 开始遍历查找目标节点
        for (let i = 0; i < this.count; i++) {
            if (currentNode.data === targetData) {
                return i;
            } else {
                currentNode = currentNode.next;
            }
        }
        return -1;
    }
    // 1、插入元素至链尾
    public push(data: T){
        const node = new SingleNode1(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            // 指针移动到新创建的尾巴结点
            this.tail = node;
        }
        ++this.count;
        return true;
    };
    // 2、（1）指定索引删除
    public removeAt(targetIndex: number): T | void{
        if (targetIndex >= 0 && targetIndex < this.count) {
            let deleteTargetNode: SingleNode1<T>;
            if (targetIndex === 0) {
                /**
                 * 应该考虑到
                 * 1、head为null，即count === 0的情况
                 * 2、count === 1，即head和tail都是同一个结点的情况
                 * 3、count > 1 的其他情况
                 */
                if (this.count === 0) { // head 为null，不操作
                    return;
                } else if (this.count === 1) { // 头尾指向同一个结点
                    deleteTargetNode = this.head;
                    this.head = null;
                    this.tail = null;
                } else { // count >= 2的时候
                    deleteTargetNode = this.head;
                    this.head = this.head.next;
                }
            } else if(targetIndex === this.count - 1) {
                deleteTargetNode = this.tail;
            } else {
                deleteTargetNode = <SingleNode1<T>>this.getNodeAt(targetIndex);
                const nextNode = deleteTargetNode.next;
            }
            --this.count;
            return deleteTargetNode.data;
        }
    };
    // 3、（2）指定删除元素值相同的结点
    public removeEqual(targetData: T): boolean{
        /* 实际上还有更加高效地方法，因为这里变成循环两次，本来循环一次就可以找到删除的目标结点 */
        const targetIndex = this.findIndexOf(targetData);
        return this.removeAt(targetIndex) ? true : false;
    };
    // 4、（3）任意位置上插入元素
    public insertTo(targetIndex: number, data: T): boolean{
        if (targetIndex >= 0 && targetIndex < this.count) {
            const newNode = new SingleNode1(data);
            /* 分头尾的情况 */
            if (targetIndex === 0) {
                if (this.head) {
                    newNode.next = this.head;
                    this.head = newNode;
                } else { // 如果head为null时，相当于重新添加
                    this.head = newNode;
                    this.tail = newNode;
                }
            } else if (targetIndex === this.count - 1){
                this.tail.next = newNode;
                this.tail = newNode;
            } else {
                const targetNode = <SingleNode1<T>>this.getNodeAt(targetIndex - 1);
                const targetNextNode = targetNode.next;
                targetNode.next = newNode;
                newNode.next = targetNextNode;
            }
            ++this.count;
            return true;
        }
        return false;
    };

    // 5、（4）判断是否为空链表
    public get isEmpty(): boolean { return !this.head; };

    // 6、（5）清空链表
    public clear(): boolean{
        this.head = null;
        this.tail = null;
        this.count = 0;
        return true;
    }
    // 7、（6）访问私有属性链表长度
    public get size(): number { return this.count; };

    // 8、（7）获取链表头head
    public getHead(): SingleNode1<T> {
        return this.head;
    }
    // 9、返回链表尾
    public getTail(): SingleNode1<T> {
        return this.tail;
    }
}


const circularLinkedList = new CircularLinkedList();

circularLinkedList.push(100);
// circularLinkedList.push(200);
// circularLinkedList.push(300);
// circularLinkedList.push(400);
// circularLinkedList.push(500);5
// circularLinkedList.push(600);

console.log('circularLinkedList :>> ', circularLinkedList);
