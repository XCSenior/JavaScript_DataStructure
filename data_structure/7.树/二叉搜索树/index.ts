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
    constructor(rootNodeValue: T) {
        // 万丈高楼平地起
        this.root = new BstTreeNode(rootNodeValue);
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

    // 遍历：
    /**
     * 2、中序遍历
     * 类函数：中序遍历递归
     */
    #inOrderMapNode(treeNode: BstTreeNode<T>, callback: (currNodeValue: T) => void){
        if (treeNode != null) {
            this.#inOrderMapNode(treeNode.leftNode, callback);
            callback(treeNode.nodeValue); // 先打印左子节点，再打印父节点，后打印右子节点
            this.#inOrderMapNode(treeNode.rightNode, callback);
        }
    };
    public inOrderTraversal(callback: (currNodeValue: T) => void) {
        // 开始启动中序遍历
        this.#inOrderMapNode(this.root, callback);
    };

    /**
     * 3、先序遍历
     * 类函数：先序遍历递归
     */
    #preOrderMapNode(treeNode: BstTreeNode<T>, callback: (currNodeValue: T) => void){
        if (treeNode != null) {
            callback(treeNode.nodeValue); // 先打印父节点，再打印左节点，再打印右节点
            this.#preOrderMapNode(treeNode.leftNode, callback);
            this.#preOrderMapNode(treeNode.rightNode, callback);
        }
    };
    public preOrderTraversal(callback: (currNodeValue: T) => void) {
        // 开始启动先序遍历
        this.#preOrderMapNode(this.root, callback);
    };

    /**
     * 4、后序遍历
     * 类函数：后序遍历递归
     */
    #postOrderMapNode(treeNode: BstTreeNode<T>, callback: (currNodeValue: T) => void){
        if (treeNode != null) {
            this.#postOrderMapNode(treeNode.leftNode, callback);
            this.#postOrderMapNode(treeNode.rightNode, callback);
            callback(treeNode.nodeValue); // 先打印左节点，再打印右节点，最后打印父节点
        }
    };
    public postOrderTraversal(callback: (currNodeValue: T) => void) {
        // 开始启动先序遍历
        this.#postOrderMapNode(this.root, callback);
    };

    /* 5、查询
      利用二叉搜索树左边小，右边大的特性，来进行查询
    */
    /**
     * getMinimum获取BST树最小值
     */
    public getMinimum(): BstTreeNode<T> {
        // 寻找最左边（最小）结点指针
        let minNode: BstTreeNode<T> = this.root;
        while (minNode && minNode.leftNode != null) {
            minNode = minNode.leftNode;
        }
        return minNode;
    };
    /**
     * getMaximum获取BST树最大值
     */
    public getMaximum(): BstTreeNode<T> {
        // 寻找最右边（最大）结点指针
        let maxNode: BstTreeNode<T> = this.root;
        while (maxNode && maxNode.rightNode != null) {
            maxNode = maxNode.rightNode;
        }
        return maxNode;
    };


}

const myBstTree = new BinarySearchTree(11);

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

