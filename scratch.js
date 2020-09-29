

// function getBaseLog(x, y) {
//   return Math.log(y) / Math.log(x);
// }


function getLevel(x) {
  const log = Math.log(x + 2) / Math.log(2);
  return Math.ceil(log);
}

for (let i = 1; i < 20; i++) {
  console.log(i, ':', getLevel(i));
}

// console.log(getBaseLog(2, 8));

function isBalanced(root) {
  const lastIdx = root[root.length - 1]
  const bottomLevel = getLevel(lastIdx);
  let nullLevel;

  for (let i = 1; i < root.length; i++) {
    if (root[i] === null) {
      nullLevel = getLevel(i)
    }
  }
  console.log(bottomLevel);
  console.log(nullLevel);
  return bottomLevel - nullLevel > 1
}



// let arr1 = [3, 9, 20, null, null, 15, 7]
// let arr2 = [1, 2, 2, 3, 3, null, null, 4, 4]

// console.log(isBalanced(arr1));
// console.log(isBalanced(arr2));