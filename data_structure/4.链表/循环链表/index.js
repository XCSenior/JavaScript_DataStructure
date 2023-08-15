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
var SingleNode1 = /** @class */ (function () {
    function SingleNode1(data) {
        this.data = data;
        this.next = null;
    }
    ;
    return SingleNode1;
}());
/* 循环链表数据结构 */
var CircularLinkedList = /** @class */ (function () {
    function CircularLinkedList() {
        // 循环链表的长度
        this.count = 0;
        // 循环链表的表头，表尾元素
        this.head = null;
        this.tail = null;
    }
    // 编写公用方法
    // 公用方法1、获取指定位置的结点
    CircularLinkedList.prototype.getNodeAt = function (targetIndex) {
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
    CircularLinkedList.prototype.findIndexOf = function (targetData) {
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
    CircularLinkedList.prototype.push = function (data) {
        var node = new SingleNode1(data);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            this.tail.next = this.head;
        }
        else {
            node.next = this.head;
            this.tail = node;
        }
        ++this.count;
    };
    ;
    // 2、（1）指定索引删除
    CircularLinkedList.prototype.removeAt = function (targetIndex) {
        if (targetIndex >= 0 && targetIndex < this.count) {
            var deleteTargetNode = void 0;
            if (targetIndex === 0) {
                deleteTargetNode = this.head;
                this.tail.next = deleteTargetNode.next;
                this.head = deleteTargetNode.next;
                if (this.count === 1) {
                    this.tail = null;
                }
            }
            else {
                var preNode = this.getNodeAt(targetIndex - 1);
                deleteTargetNode = preNode.next;
                preNode.next = deleteTargetNode.next;
                if (targetIndex === this.count - 1) {
                    this.tail = preNode;
                }
            }
            --this.count;
            return deleteTargetNode.data;
        }
    };
    ;
    // 3、（2）指定删除元素值相同的结点
    CircularLinkedList.prototype.removeEqual = function (targetData) {
        /* 实际上还有更加高效地方法，因为这里变成循环两次，本来循环一次就可以找到删除的目标结点 */
        var targetIndex = this.findIndexOf(targetData);
        return this.removeAt(targetIndex) ? true : false;
    };
    ;
    // 4、（3）任意位置上插入元素
    CircularLinkedList.prototype.insertTo = function (targetIndex, data) {
        if (targetIndex >= 0 && targetIndex < this.count) {
            var newNode = new SingleNode1(data);
            if (targetIndex === 0) {
                if (this.head) {
                    newNode.next = this.head.next;
                    this.head = newNode;
                    this.tail.next = this.head;
                }
                else {
                    this.head = newNode;
                    this.tail = newNode;
                    this.tail.next = this.head;
                }
            }
            else if (targetIndex === this.count - 1) {
                this.tail.next = newNode;
                newNode.next = this.head;
                this.tail = newNode;
            }
            else {
                var preNode = this.getNodeAt(targetIndex - 1);
                newNode.next = preNode.next;
                preNode.next = newNode;
            }
            ++this.count;
            return true;
        }
        return false;
    };
    ;
    Object.defineProperty(CircularLinkedList.prototype, "isEmpty", {
        // 5、（4）判断是否为空链表
        get: function () { return !this.head; },
        enumerable: false,
        configurable: true
    });
    ;
    // 6、（5）清空链表
    CircularLinkedList.prototype.clear = function () {
        this.head = null;
        this.tail = null;
        this.count = 0;
        return true;
    };
    Object.defineProperty(CircularLinkedList.prototype, "size", {
        // 7、（6）访问私有属性链表长度
        get: function () { return this.count; },
        enumerable: false,
        configurable: true
    });
    ;
    // 8、（7）获取链表头head
    CircularLinkedList.prototype.getHead = function () {
        return this.head;
    };
    // 9、返回链表尾
    CircularLinkedList.prototype.getTail = function () {
        return this.tail;
    };
    return CircularLinkedList;
}());
var circularLinkedList = new CircularLinkedList();
circularLinkedList.push(100);
// circularLinkedList.push(200);
// circularLinkedList.push(300);
// circularLinkedList.push(400);
// circularLinkedList.push(500);5
// circularLinkedList.push(600);
console.log('circularLinkedList :>> ', circularLinkedList);
