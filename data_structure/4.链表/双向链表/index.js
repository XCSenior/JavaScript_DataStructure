/**
 * *双向链表的基本属性和方法
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
 * @class DoublyNode1 普通双向链表封装的结点
 * @property { T } data 结点的数据
 * @property { DoublyNode1<T> | null } prev 结点的直接前驱
 * @property { DoublyNode1<T> | null } next 结点的直接后继
 * @description 正常来说应该继承SingleNode类的，但是由于ts编译后的commonJS模块化格式浏览器不支持（不知道怎么设置编译后成为ESModules），所以还是单独声明此双向链表结点的类
 */
var DoublyNode1 = /** @class */ (function () {
    function DoublyNode1(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    ;
    return DoublyNode1;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        // 单链表的长度
        this.count = 0;
        // 单链表的表头，表尾元素
        this.head = null;
        this.tail = null;
    }
    // 编写公用方法
    // 公用方法1、获取指定位置的结点
    DoublyLinkedList.prototype.getNodeAt = function (targetIndex) {
        if (targetIndex >= 0 && targetIndex < this.count) {
            var currentNode = this.head;
            // 开始遍历查找目标节点
            for (var i = 0; i < targetIndex; i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    };
    ;
    // 公用方法2、查找目标元素值的结点索引值
    DoublyLinkedList.prototype.findIndexOf = function (targetData) {
        var currentNode = this.head;
        // 开始遍历查找目标节点
        for (var i = 0; i < this.count; i++) {
            if (currentNode.data === targetData) {
                return i;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return -1;
    };
    // 1、插入元素至链尾
    DoublyLinkedList.prototype.push = function (data) {
        var node = new DoublyNode1(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            // 指针移动到新创建的尾巴结点
            this.tail = node;
        }
        ++this.count;
        return true;
    };
    ;
    // 2、（1）指定索引删除
    DoublyLinkedList.prototype.removeAt = function (targetIndex) {
        if (targetIndex >= 0 && targetIndex < this.count) {
            var deleteTargetNode = void 0;
            if (targetIndex === 0) {
                /**
                 * 应该考虑到
                 * 1、head为null，即count === 0的情况
                 * 2、count === 1，即head和tail都是同一个结点的情况
                 * 3、count > 1 的其他情况
                 */
                if (this.count === 0) { // head 为null，不操作
                    return;
                }
                else if (this.count === 1) { // 头尾指向同一个结点
                    deleteTargetNode = this.head;
                    this.head = null;
                    this.tail = null;
                }
                else { // count >= 2的时候
                    deleteTargetNode = this.head;
                    this.head.next.prev = null;
                    this.head = this.head.next;
                }
            }
            else if (targetIndex === this.count - 1) {
                deleteTargetNode = this.tail;
                deleteTargetNode.prev.next = null;
                this.tail = deleteTargetNode.prev;
            }
            else {
                deleteTargetNode = this.getNodeAt(targetIndex);
                var prevNode = deleteTargetNode.prev;
                var nextNode = deleteTargetNode.next;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
            }
            --this.count;
            return deleteTargetNode.data;
        }
    };
    ;
    // 3、（2）指定删除元素值相同的结点
    DoublyLinkedList.prototype.removeEqual = function (targetData) {
        /* 实际上还有更加高效地方法，因为这里变成循环两次，本来循环一次就可以找到删除的目标结点 */
        var targetIndex = this.findIndexOf(targetData);
        return this.removeAt(targetIndex) ? true : false;
    };
    ;
    // 4、（3）任意位置上插入元素
    DoublyLinkedList.prototype.insertTo = function (targetIndex, data) {
        if (targetIndex >= 0 && targetIndex < this.count) {
            var newNode = new DoublyNode1(data);
            /* 分头尾的情况 */
            if (targetIndex === 0) {
                if (this.head) {
                    this.head.prev = newNode;
                    newNode.next = this.head;
                    this.head = newNode;
                }
                else { // 如果head为null时，相当于重新添加
                    this.head = newNode;
                    this.tail = newNode;
                }
            }
            else if (targetIndex === this.count - 1) {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
            else {
                var targetNode = this.getNodeAt(targetIndex - 1);
                var targetNextNode = targetNode.next;
                targetNode.next = newNode;
                newNode.prev = targetNextNode;
                targetNextNode.prev = newNode;
                newNode.next = targetNextNode;
            }
            ++this.count;
            return true;
        }
        return false;
    };
    ;
    Object.defineProperty(DoublyLinkedList.prototype, "isEmpty", {
        // 5、（4）判断是否为空链表
        get: function () { return !this.head; },
        enumerable: false,
        configurable: true
    });
    ;
    // 6、（5）清空链表
    DoublyLinkedList.prototype.clear = function () {
        this.head = null;
        this.tail = null;
        this.count = 0;
        return true;
    };
    Object.defineProperty(DoublyLinkedList.prototype, "size", {
        // 7、（6）访问私有属性链表长度
        get: function () { return this.count; },
        enumerable: false,
        configurable: true
    });
    ;
    // 8、（7）获取链表头head
    DoublyLinkedList.prototype.getHead = function () {
        return this.head;
    };
    // 9、返回链表尾
    DoublyLinkedList.prototype.getTail = function () {
        return this.tail;
    };
    return DoublyLinkedList;
}());
var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(100);
// doublyLinkedList.push(200);
// doublyLinkedList.push(300);
// doublyLinkedList.push(400);
// doublyLinkedList.push(500);
// doublyLinkedList.push(600);
console.log('doublyLinkedList :>> ', doublyLinkedList);
