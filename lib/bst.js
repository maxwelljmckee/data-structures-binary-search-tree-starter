class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val) {
       if (this.root) {
           this._insert(this.root, val);
       } else {
          this.root = new TreeNode(val);
       }
   }

   _insert(root, val) {
       if (val < root.val) {
           if (root.left) {
               this._insert(root.left, val)
           } else {
               root.left = new TreeNode(val);
           }
       } else {
           if (root.right) {
               this._insert(root.right, val);
           } else {
               root.right = new TreeNode(val);
           }
       }
   }

    searchRecur(val) {
       if (this.root) {
           return this._searchRecur(this.root, val);
       } else {
           return false;
       }
   }

    _searchRecur(root, val) {
       if (root.val === val) return true;
       if (val < root.val && root.left) {
           return this._searchRecur(root.left, val);
       } else if (root.right) {
           return this._searchRecur(this.right, val);
       }
       return false;
   }

   searchIter(val) {

   }
}

module.exports = {
    TreeNode,
    BST
};