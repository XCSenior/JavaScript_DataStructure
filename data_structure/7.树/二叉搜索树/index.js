/**
 * 二叉搜索树
 * 左边结点的值比右边结点的小，有排序关系
 *
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BinarySearchTree_instances, _BinarySearchTree_compareNodeValue, _BinarySearchTree_insertNode;
var CompareStatus;
(function (CompareStatus) {
    CompareStatus[CompareStatus["Less"] = -1] = "Less";
    CompareStatus[CompareStatus["Bigger"] = 1] = "Bigger";
    CompareStatus[CompareStatus["Equal"] = 0] = "Equal";
})(CompareStatus || (CompareStatus = {}));
;
/* 二叉搜索树结点类型 */
var BstTreeNode = /** @class */ (function () {
    function BstTreeNode(nodeValue) {
        this.nodeValue = nodeValue;
        this.leftNode = null;
        this.rightNode = null;
    }
    ;
    return BstTreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        _BinarySearchTree_instances.add(this);
        // 万丈高楼平地起
        this.root = null;
    }
    ;
    ;
    ;
    // 1、插入方法
    BinarySearchTree.prototype.insert = function (insertValue) {
        if (this.root == null) {
            this.root = new BstTreeNode(insertValue);
        }
        else {
            // 从根节点开始，递归调用
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insertNode).call(this, this.root, insertValue);
        }
        return this;
    };
    ;
    return BinarySearchTree;
}());
_BinarySearchTree_instances = new WeakSet(), _BinarySearchTree_compareNodeValue = function _BinarySearchTree_compareNodeValue(val1, val2) {
    var returnValue = null;
    if (val1 === val2) {
        returnValue = CompareStatus.Equal;
    }
    else {
        returnValue = val1 < val2
            ? CompareStatus.Less
            : CompareStatus.Bigger;
    }
    return returnValue;
}, _BinarySearchTree_insertNode = function _BinarySearchTree_insertNode(insertTargetNode, insertValue) {
    var compareResult = __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_compareNodeValue).call(this, insertValue, insertTargetNode.nodeValue);
    if (compareResult === CompareStatus.Less || compareResult === CompareStatus.Equal) {
        // 插入值小于等于当前结点值，将值插入在当前结点的左子结点中
        if (insertTargetNode.leftNode == null) {
            // 递归结束条件
            insertTargetNode.leftNode = new BstTreeNode(insertValue);
        }
        else {
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insertNode).call(this, insertTargetNode.leftNode, insertValue);
        }
    }
    else {
        // 插入值大于当前结点值，将值插入在当前结点的右子结点中
        if (insertTargetNode.rightNode == null) {
            // 递归结束条件
            insertTargetNode.rightNode = new BstTreeNode(insertValue);
        }
        else {
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insertNode).call(this, insertTargetNode.rightNode, insertValue);
        }
    }
};
var myBstTree = new BinarySearchTree();
myBstTree.insert(100);
console.log('myBstTree :>> ', myBstTree);
