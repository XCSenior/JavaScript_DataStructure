/**
 * 二叉搜索树
 * 左边结点的值比右边结点的小，有排序关系
 *
 */

enum CompareStatus {
    Less = -1,
    Bigger = 1,
    Equal = 0,
};


/* 二叉搜索树结点类型 */
class BstTreeNode<T> {
    nodeValue: T;
    leftNode: BstTreeNode<T>;
    rightNode: BstTreeNode<T>;
    constructor(nodeValue: T) {
        this.nodeValue = nodeValue;
        this.leftNode = null;
        this.rightNode = null;
    };
}

class BinarySearchTree<T>{
    root: BstTreeNode<T>;
    constructor() {
        // 万丈高楼平地起
        this.root = null;
    };
    // 类私有方法，比较树结点值大小
    #compareNodeValue(val1: T, val2: T): CompareStatus{
        let returnValue: CompareStatus = null;
        if (val1 === val2) {
            returnValue = CompareStatus.Equal;
        } else{
            returnValue = val1 < val2
                ? CompareStatus.Less
                : CompareStatus.Bigger;
        }
        return returnValue;
    };
    // 类私有方法，递归调用插入值
    #insertNode(insertTargetNode: BstTreeNode<T>, insertValue: T){
        const compareResult: CompareStatus = this.#compareNodeValue(insertValue, insertTargetNode.nodeValue);
        if (compareResult === CompareStatus.Less || compareResult === CompareStatus.Equal) {
            // 插入值小于等于当前结点值，将值插入在当前结点的左子结点中
            if (insertTargetNode.leftNode == null) {
                // 递归结束条件
                insertTargetNode.leftNode = new BstTreeNode(insertValue);
            } else {
                this.#insertNode(insertTargetNode.leftNode, insertValue);
            }
        } else {
            // 插入值大于当前结点值，将值插入在当前结点的右子结点中
            if (insertTargetNode.rightNode == null) {
                // 递归结束条件
                insertTargetNode.rightNode = new BstTreeNode(insertValue);
            } else {
                this.#insertNode(insertTargetNode.rightNode, insertValue);
            }
        }
    };

    // 1、插入方法
    public insert(insertValue: T): BinarySearchTree<T>{
        if (this.root == null) {
            this.root = new BstTreeNode(insertValue);
        } else {
            // 从根节点开始，递归调用
            this.#insertNode(this.root, insertValue);
        }
        return this;
    };
}

const myBstTree = new BinarySearchTree();

myBstTree.insert(100);


console.log('myBstTree :>> ', myBstTree);

