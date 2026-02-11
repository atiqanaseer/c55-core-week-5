// Write your code here
// Use generateBigArray to create a big array numbers.
// Example: generateBigArray(1000000) will create an array of 1 million numbers.
import generateBigArray from './bigArray.js';

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    
    if (array[middle] < target) {
      left = middle + 1;
    } else if (array[middle] > target) {
      right = middle - 1;
    } else {
      return middle; // target found
    }
  }
  
  return -1; // unsuccessful (target not found)
}

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  
  return -1; // unsuccessful (target not found)
}

const arr1 = generateBigArray(1000);
const arr2 = generateBigArray(100000);
const arr3 = generateBigArray(10000000);

console.time("binarySearch arr3");
console.log(binarySearch(arr3, 123456789));
console.timeEnd("binarySearch arr3");

console.time("linearSearch arr3");
console.log(linearSearch(arr3, 123456789));
console.timeEnd("linearSearch arr3");
