/**
 * *单链表的基本方法
 * ? 1、push：链表尾增加元素
 * ? 2、delete：两种类型：根据目标索引删除、根据目标元素值删除
 * ? 3、getFront：返回栈顶队头元素
 *
 * ? 4、isEmpty：判断是否为空队列
 * ? 5、clear：清空队列
 * ? 6、size属性：队列的长度
 */

/**
 * @class 链表节点
 */
class SingleNode<T> {
    public element: T;
    public next: SingleNode<T> | null;

    constructor(element: T) {
        this.element = element;
        this.next = null;
    }
}
/**
 * @class 单链表
 */
class LinkedList<T> {
    // 单链表的长度
    public count: number = 0;
    // 单链表的表头元素
    public head: SingleNode<T> = null;

    // 1、插入元素至链尾
    public push(data: T){
        const node = new SingleNode(data);
        // 1、如果head为空的时候
        if (this.head === null) {
            this.head = node;
            this.count = 1;
        } else {
            // 开始遍历，寻找链尾元素
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            // 当前的current就是链尾元素
            current.next = node;
            ++this.count;
        };
    };

    // 编写公用方法
    // 1、获取指定位置的结点
    public getNodeAt(targetIndex: number): SingleNode<T> | void{
        if (targetIndex >= 0 && targetIndex < this.count) {
            let currentNode: SingleNode<T> = this.head;
            // 开始遍历查找目标节点
            for (let i = 0; i < targetIndex; i++) {
                currentNode = currentNode.next;
            }
            // 循环结束，currentNode就是要被删除的结点
            return currentNode;
        }
    };
    // 2、（1）指定索引删除
    public removeAt(targetIndex: number): T | void{
        if (targetIndex >= 0 && targetIndex < this.count) {
            let currentNode: SingleNode<T>;
            if (targetIndex === 0) { // 删除头部元素
                this.head = this.head.next;
            } else {
                // 开始遍历查找目标节点
                const previousNode = <SingleNode<T>>this.getNodeAt(targetIndex - 1);
                // 循环结束，currentNode就是要被删除的结点
                currentNode = previousNode.next;
                previousNode.next = currentNode.next;
            }
            --this.count; // 删除成功后，总数减一
            return currentNode.element;
        }
    };
    // 2、（2）指定删除元素值相同的结点

}


const linkedList = new LinkedList<number>();

linkedList.push(0);
linkedList.push(100);
linkedList.push(200);
linkedList.push(300);