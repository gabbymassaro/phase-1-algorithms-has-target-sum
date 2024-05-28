function hasTargetSum(array, target) {
  for (i = 0; i <= array.length; i++) {
    for (j = i+1 ; j <= array.length; j++){
      if (array[i] + array[j] === target) {
        return true
      } else if (array[i] - array[j] === target) {
        return true
      }
    }
  }
  return false
}

/*
  Write the Big O time complexity of your function here:
  O(n²)
*/

/*
  Add your pseudocode here:
  - for each index, starting at zero, iterate through
  the array
  - nest another for-loop, starting at index + 1
  - if the given index plus the next array index
  equal the target sum, return true
  - if the given index minus the next array index
  equal the target sum, return true
  - if none of the index pairs +/- equal the target
  sum, return false
*/

/*
  Add written explanation of your solution here:
  The function is looping through each index of the array,
  comparing the the sum of +/- each index to the target given.
  If there is a matching sum for the pair of indexes, the
  function returns 'true'. Once the function is done looping
  through the array, if no pairs equal the target sum, the
  function returns 'false'
*/

  // You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5, 2, 5, 3], 4));
}

module.exports = hasTargetSum;
