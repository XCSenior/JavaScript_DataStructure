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
var _BinarySearchTree_instances, _BinarySearchTree_compareNodeValue, _BinarySearchTree_insertNode, _BinarySearchTree_inOrderMapNode, _BinarySearchTree_preOrderMapNode, _BinarySearchTree_postOrderMapNode;
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
    function BinarySearchTree(rootNodeValue) {
        _BinarySearchTree_instances.add(this);
        // 万丈高楼平地起
        this.root = new BstTreeNode(rootNodeValue);
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
    ;
    BinarySearchTree.prototype.inOrderTraversal = function (callback) {
        // 开始启动中序遍历
        __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_inOrderMapNode).call(this, this.root, callback);
    };
    ;
    ;
    BinarySearchTree.prototype.preOrderTraversal = function (callback) {
        // 开始启动先序遍历
        __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_preOrderMapNode).call(this, this.root, callback);
    };
    ;
    ;
    BinarySearchTree.prototype.postOrderTraversal = function (callback) {
        // 开始启动先序遍历
        __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_postOrderMapNode).call(this, this.root, callback);
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
}, _BinarySearchTree_inOrderMapNode = function _BinarySearchTree_inOrderMapNode(treeNode, callback) {
    if (treeNode != null) {
        __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_inOrderMapNode).call(this, treeNode.leftNode, callback);
        callback(treeNode.nodeValue); // 先打印左子节点，再打印父节点，后打印右子节点
        __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_inOrderMapNode).call(this, treeNode.rightNode, callback);
    }
}, _BinarySearchTree_preOrderMapNode = function _BinarySearchTree_preOrderMapNode(treeNode, callback) {
    if (treeNode != null) {
        callback(treeNode.nodeValue); // 先打印父节点，再打印左节点，再打印右节点
        __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_preOrderMapNode).call(this, treeNode.leftNode, callback);
        __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_preOrderMapNode).call(this, treeNode.rightNode, callback);
    }
}, _BinarySearchTree_postOrderMapNode = function _BinarySearchTree_postOrderMapNode(treeNode, callback) {
    if (treeNode != null) {
        __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_postOrderMapNode).call(this, treeNode.leftNode, callback);
        __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_postOrderMapNode).call(this, treeNode.rightNode, callback);
        callback(treeNode.nodeValue); // 先打印左节点，再打印右节点，最后打印父节点
    }
};
var myBstTree = new BinarySearchTree(11);
myBstTree.insert(7);
myBstTree.insert(5);
myBstTree.insert(6);
myBstTree.insert(3);
myBstTree.insert(9);
myBstTree.insert(8);
myBstTree.insert(10);
myBstTree.insert(15);
myBstTree.insert(13);
myBstTree.insert(12);
myBstTree.insert(14);
myBstTree.insert(20);
myBstTree.insert(18);
myBstTree.insert(25);
console.log('myBstTree :>> ', myBstTree);
