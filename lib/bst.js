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

    searchRecur(val, root = this.root) {
       if (root) {
            if (root.val === val) return true;
            if (val < root.val && root.left) {
                return this.searchRecur(val, root.left);
            } else if (root.right) {
                return this.searchRecur(val, root.right);
            }
       }
       return false;
   }

    searchIter(val) {
        if(!this.root) return false;
        let root = this.root;

        while(root) {
            if (root.val === val) return true;
            if (val < root.val) {
                root = root.left;
            } else {
                root = root.right;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};
