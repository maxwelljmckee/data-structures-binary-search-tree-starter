// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root, memo = {'level': 0, 'max': 0, 'null': Infinity}) {
  memo.level++
  memo.max = Math.max(memo.max, memo.level);
  if (memo.max > memo.null) return false

  if (memo.level === 1 && !root.left && !root.right) return true;

  if (root.left) {
    return isBalanced(root.left, memo)
  } else {
    memo.null = Math.min(memo.null, memo.level);
  }
  if (root.right) {
    return isBalanced(root.right, memo)
  } else {
    memo.null = Math.min(memo.null, memo.level);
  }
  memo.level--
  return true
}












// function isBalanced(tree) {
//   if (tree.length <= 3) return true;
//   let leftIndex = 1;
//   let rightIndex = 2;
//   let levelHasNull = tree.slice(leftIndex,rightIndex + 1).includes(null);
//   if (levelHasNull) return false;

//   while(1) {
//     leftIndex = leftIndex * 2 + 1;
//     rightIndex = Math.min(rightIndex * 2 + 2, tree.length - 1);
//     levelHasNull = tree.slice(leftIndex,rightIndex + 1).includes(null);
//     if (levelHasNull && rightIndex < tree.length - 1) return false;
//     if (rightIndex === tree.length - 1) return true;
//   }
// }

console.log(isBalanced([3,9,20,null,null,15,7]));
console.log(isBalanced([1,2,2,3,3,null,null,4,4]));
  //         7                                 7
  //     8       9                           8 , 9
  //   7           8                   7 , null, null, 8
  // 2               0      2  null, null, null, null, null, null, 0
