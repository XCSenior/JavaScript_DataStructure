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
    // 1、插入元素至链尾
    DoublyLinkedList.prototype.push = function (data) {
    };
    ;
    // 编写公用方法
    // 公用方法1、获取指定位置的结点
    DoublyLinkedList.prototype.getNodeAt = function (targetIndex) {
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
    // 2、（1）指定索引删除
    DoublyLinkedList.prototype.removeAt = function (targetIndex) {
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
    DoublyLinkedList.prototype.removeEqual = function (targetData) {
        var targetIndex = this.findIndexOf(targetData);
        return this.removeAt(targetIndex) ? true : false;
    };
    ;
    // 4、（3）任意位置上插入元素
    DoublyLinkedList.prototype.insertTo = function (data, targetIndex) {
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
    return DoublyLinkedList;
}());
