// 33. How would you check if two objects have the same set of properties?
const haveSameProperties = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  // Check if both objects have the same number of properties
  if (keys1.length !== keys2.length) return false;
  
  // Check if every key in obj1 exists in obj2
  return keys1.every(key => keys2.includes(key));
};

// Example usage
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 10, b: 20, c: 30 };

console.log(haveSameProperties(obj1, obj2)); // true
/*
.every() is an array method that tests whether all elements in the array pass the test implemented by a provided function.

Syntax: array.every(callback(element))

It returns true if every element in the array satisfies the condition, otherwise it returns false.
.includes() is an array method that checks if an array contains a certain value.

Syntax: array.includes(value)

It returns true if the value is found in the array, otherwise it returns false.
*/
// 34. Write a function to calculate the average of numbers in an array.


function avgOfNum(numbers) {

   return numbers.reduce((acc, currentVal) => acc + currentVal, 0)/numbers.length;

}

console.log(avgOfNum([1,2,3,4]));



