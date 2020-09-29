// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
   }

function sortedArrayToBST(nums) {
  const rootIndex = Math.floor(nums.length/2);
  const rootValue = nums[rootIndex];
  const rootNode = new TreeNode(rootValue);
  if (nums.length <= 1) return rootNode;

  const leftSlice = nums.slice(0,rootIndex);
  const rightSlice = nums.slice(rootIndex + 1);

  rootNode.left = sortedArrayToBST(leftSlice);
  rootNode.right = sortedArrayToBST(rightSlice);

  return rootNode;
}
