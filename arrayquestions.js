// use of map
let arr=[1,2,3,4,5];
// output  array sum
let sum=arr.map(num=>num+num );
console.log(sum);
const names = ["Alice", "Bob", "Charlie"];
// upercase all data
const uperCase= names.map(name=>name.toUpperCase());
console.log(uperCase);

/*
use of map, reduce, filter
use of other array function
use of ...
use of == and === 
find even in array
find sum of array
double the array
find the module of array
find the sum of array.
How do you create an array in JavaScript? Provide an example.
How can you add an element to the end of an array?
What method is used to remove the last element of an array?
How do you find the length of an array?
Write a function to reverse the elements of an array without using the reverse() method.
What is the difference between push() and unshift()?
How do you remove the first element of an array?
Write a program to merge two arrays into one.
How does the splice() method work? Provide an example.
What is the difference between slice() and splice()?
How can you check if a value is an array in JavaScript?
Write a function to find the largest number in an array.
How can you sort an array of numbers in ascending order?
Write a function to remove duplicate values from an array.
How do you iterate over an array using forEach()?
What is the difference between map() and forEach()?
How do you use the filter() method to return only even numbers from an array?
Write a program to find the sum of all elements in an array using reduce().
How do you find the index of a specific element in an array?
What is the purpose of the find() method? How does it differ from filter()?
Write a function to check if all elements in an array are positive numbers using every().
How does the some() method work? Provide an example.
What is the difference between includes() and indexOf()?
Write a program to flatten a nested array (e.g., [1, [2, [3]]] to [1, 2, 3]).
How do you shuffle the elements of an array randomly?
Write a function to find the second largest element in an array.
How can you create a new array from an existing array without modifying the original?
How do you split a string into an array of substrings?
Write a function to find the frequency of each element in an array.
What are sparse arrays, and how do they differ from normal arrays?
*/
// How do you create an array in JavaScript? Provide an example.
arr=[1,2,4,5]
// How can you add an element to the end of an array?
arr.push(8);
console.log(arr)
// What method is used to remove the last element of an array?
arr.pop();
console.log(arr)
// How do you find the length of an array?
arr.length
// Write a function to reverse the elements of an array without using the reverse() method.
function reverseArray(arr){
let newArray=[];
for(let i=arr.length-1; i>=0; i--){
newArray.push(arr[i])
}
return newArray;
}
console.log(reverseArray([1,2,3,4,5]))
// What is the difference between push() and unshift()?

let arrUpdate=[7,8,9];
arrUpdate.unshift(6);
console.log(arrUpdate)
// How do you remove the first element of an array?
arrUpdate.shift()
console.log(arrUpdate)

// Write a program to merge two arrays into one.
function mergeArray(arr1,arr2){
let newArray=[];
for(let i=0; i<arr1.length; i++){
    newArray.push(arr1[i]);
}
for(let j=0;j<arr2.length;j++){
    newArray.push(arr2[j]);
}
return newArray
}
console.log('merge array =',mergeArray([2,3,4],[5,6,7]));
// How does the splice() method work? Provide an example.
const fruits = ["Apple", "Banana", "Cherry", "Date"];
// let removed=fruits.splice(1,2);
/*use of splice
1. remove elemenet from given start to end index
2. 
*/
// console.log('removed',removed)
// add element
fruits.splice(4, 0, "Mango", "Pineapple"); // Adds without removing

// fruits.slice(1,2);
console.log('fruits',fruits)

// What is the difference between slice() and splice()?

let spliceArray=[1,2,3,4];
console.log(Array.isArray(spliceArray))
//Write a function to find the largest number in an array.
function largestnum(arr){
    let largest=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
}
return largest;
}
console.log(largestnum([1,2,5,4]));
// How can you sort an array of numbers in ascending order?
colors=["red","green","white"]
