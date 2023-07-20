/**
 * *单链表的基本方法
 * ? 1、push：链表尾增加元素
 * ? 2、remove：两种类型：根据目标索引删除、根据目标元素值删除
 * ? 3、insert：指定位置插入data
 *
 * ? 4、isEmpty：判断是否为空链表
 * ? 5、clear：清空链表
 * ? 6、size属性：链表的长度
 * ? 7、getHead：获取链表头
 */
/**
 * @class 链表节点
 */
var SingleNode = /** @class */ (function () {
    function SingleNode(data) {
        this.data = data;
        this.next = null;
    }
    return SingleNode;
}());
/**
 * @class 单链表
 */
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        // 单链表的长度
        this.count = 0;
        // 单链表的表头元素
        this.head = null;
    }
    // 1、插入元素至链尾
    LinkedList.prototype.push = function (data) {
        var node = new SingleNode(data);
        // 1、如果head为空的时候
        if (this.head === null) {
            this.head = node;
            this.count = 1;
        }
        else {
            // 开始遍历，寻找链尾元素
            var current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            // 当前的current就是链尾元素
            current.next = node;
            ++this.count;
        }
        ;
    };
    ;
    // 编写公用方法
    // 公用方法1、获取指定位置的结点
    LinkedList.prototype.getNodeAt = function (targetIndex) {
        if (targetIndex >= 0 && targetIndex < this.count) {
            var currentNode = this.head;
            // 开始遍历查找目标节点
            for (var i = 0; i < targetIndex; i++) {
                currentNode = currentNode.next;
            }
            // 循环结束，currentNode就是要被删除的结点
            return currentNode;
        }
    };
    ;
    // 公用方法2、查找目标元素值的结点索引值
    LinkedList.prototype.findIndexOf = function (targetData) {
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
    // 2、（1）指定索引删除
    LinkedList.prototype.removeAt = function (targetIndex) {
        if (targetIndex >= 0 && targetIndex < this.count) {
            var currentNode = void 0;
            if (targetIndex === 0) { // 删除头部元素
                this.head = this.head.next;
            }
            else {
                // 开始遍历查找目标节点
                var previousNode = this.getNodeAt(targetIndex - 1);
                // 循环结束，currentNode就是要被删除的结点
                currentNode = previousNode.next;
                previousNode.next = currentNode.next;
            }
            --this.count; // 删除成功后，总数减一
            return currentNode.data;
        }
    };
    ;
    // 3、（2）指定删除元素值相同的结点
    LinkedList.prototype.removeEqual = function (targetData) {
        var targetIndex = this.findIndexOf(targetData);
        return this.removeAt(targetIndex) ? true : false;
    };
    ;
    // 4、（3）任意位置上插入元素
    LinkedList.prototype.insertTo = function (data, targetIndex) {
        if (targetIndex >= 0 && targetIndex <= this.count) {
            var newNode = new SingleNode(data);
            if (targetIndex === 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                var previousNode = this.getNodeAt(targetIndex - 1);
                newNode.next = previousNode.next;
                previousNode.next = newNode;
            }
            ++this.count;
            return true;
        }
        else {
            return false;
        }
    };
    ;
    Object.defineProperty(LinkedList.prototype, "isEmpty", {
        // 5、（4）判断是否为空链表
        get: function () { return !this.head; },
        enumerable: false,
        configurable: true
    });
    ;
    // 6、（5）清空链表
    LinkedList.prototype.clear = function () {
        this.head = null;
        return true;
    };
    Object.defineProperty(LinkedList.prototype, "size", {
        // 7、（6）访问私有属性链表长度
        get: function () { return this.count; },
        enumerable: false,
        configurable: true
    });
    ;
    // 8、（7）获取链表头head
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.push(0);
linkedList.push(100);
linkedList.push(200);
linkedList.push(300);
