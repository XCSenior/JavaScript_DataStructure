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
