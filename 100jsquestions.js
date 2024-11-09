// "use strict"
/* attendence  problem solving
https://github.com/parmjeet1/javascriptquestions

21 oct 2
24-oct 2
25-oct 2
26-oct 2 
27-oct  2
28-oct 2
29-oct 2
30-oct 2
diwali k liye ghar gaya
2-Nov 2
3-nov-: 2
4 nov :2
5-nov :2
6-nov:2 (2 extra questoin 7th nov ko kiye)
7 nov: 4
8,
9 nov :2  updated on git

	1. Write a function to reverse a string.
	2. Write a function that finds the largest number in an array.
	3. How would you check if a given string is a palindrome?
	4. Implement the FizzBuzz logic for numbers from 1 to 100.
	5. Write a function that removes duplicate values from an array.
	6. How do you flatten a nested array in JavaScript?
	7. Write a function that counts the frequency of elements in an array.
	8. Write a function to check if two strings are anagrams of each other.
	9. Write a recursive function to calculate the factorial of a number.
	10. Implement a debounce function that limits the rate at which a function can be executed.
	11. Write a function that finds the factorial of a given number without using recursion.
	12. How would you remove falsy values from an array in JavaScript?
	13. Write a function to find the nth Fibonacci number.
	14. Write a function to find if a given number is prime.
	15. Explain what a closure is and provide an example.
	16. What is the difference between `==` and `===` in JavaScript?
	17. How would you merge two sorted arrays into one sorted array?
	18. Write a function that capitalizes the first letter of each word
	19. Implement a function to check if a number is even or odd without using `%`.
	20. Write a function that finds the duplicate elements in an array.
	21. How do you create a private variable in JavaScript?
	22. Write a function to find the missing number in an unsorted array of integers from 1 to n.
	23. Write a function to convert an array of strings to a single string with words separated by commas.
	24. How do you convert a number to a string without using `.toString()` or `String()`?
	25. Write a function that calculates the sum of all numbers between two given numbers, inclusive.
	26. Explain how `this` works in different contexts.
	27. Write a function to return the longest word in a given string.
	28. How do you deep clone an object in JavaScript?
	29. Write a function that takes an object and returns its keys and values as arrays.
	30. How do you debounce a function in JavaScript, and why is it useful?
	31. Write a function to sort an array of strings by their length.
	32. What is the difference between `call()`, `apply()`, and `bind()`?
33. How would you check if two objects have the same set of properties?
34. Write a function to calculate the average of numbers in an array.
35. Write a function that returns a new array with all elements that occur more than once.
36. How do you use JavaScript’s `reduce()` to flatten an array?
37. Write a function to rotate an array to the left by `k` positions.
38. How do you convert a callback-based function to a promise-based function?
39. Write a function to generate a random number between two given numbers.
40. What is a promise in JavaScript, and what problem does it solve?
41. Write a function to count vowels in a given string.
42. Explain what `map()`, `filter()`, and `reduce()` do in JavaScript.
43. Write a function that counts the occurrences of a given letter in a string.
44. How do you add and remove properties dynamically from an object?
45. Write a function that merges two objects.
46. How would you implement memoization in JavaScript?
47. Write a function to calculate the sum of numbers in a string (e.g., "a2b3" returns 5).
48. How do you check if a given value is an array?
49. Write a function that sorts an array of objects by a specific key.
50. How do you create a function that is only invoked once?

### Advanced Questions (51-90)

51. What are generator functions, and how do they work?
52. Write a function that removes elements from an array based on a condition.
53. How do you implement a simple event emitter in JavaScript?
54. Write a function that finds the intersection of two arrays.
55. What is currying in JavaScript, and provide an example.
56. Write a function to convert a nested object into a flat object.
57. How do you implement inheritance in JavaScript using classes?
58. Write a function to generate all permutations of a string.
59. How do you handle asynchronous code in JavaScript?
60. Write a function to convert a string with `snake_case` to `camelCase`.
61. Explain the concept of the prototype chain in JavaScript.
62. Write a function that takes two dates and calculates the difference in days.
63. How would you write a function to throttle execution to once every N milliseconds?
64. Write a function to find all prime numbers up to a given number.
65. How do you implement a stack in JavaScript?
66. Write a function to convert a string with mixed case letters to title case.
67. What is the `Symbol` type in JavaScript, and where is it used?
68. Write a function to flatten an array recursively.
69. How do you implement a binary search algorithm in JavaScript?
70. Write a function to detect if a number is a power of two.
71. What is the event loop in JavaScript, and how does it work?
72. Write a function that takes an array of numbers and returns an array of unique numbers.
73. How do you implement deep comparison of two objects?
74. Write a function to determine if two strings are rotations of each other.
75. Explain what `async` and `await` do in JavaScript.
76. Write a function to generate all subsets of a given array.
77. How do you create a proxy object in JavaScript, and what are the use cases?
78. Write a function to convert a decimal number to binary.
79. What is a weak map, and how is it different from a regular Map?
80. Write a function to find the median of an array of numbers.
81. Explain the concept of hoisting in JavaScript.
82. Write a function to group an array of objects by a given key.
83. How would you check if an object is empty in JavaScript?
84. Write a function to shuffle an array randomly.
85. What is the difference between synchronous and asynchronous code in JavaScript?
86. Write a function to find the maximum depth of a nested array.
87. How do you convert an object into a query string for a URL?
88. Write a function that generates all the combinations of a string.
89. How would you implement a queue data structure in JavaScript?
90. Write a function to remove all HTML tags from a given string.


Spread Syntax:
How can the spread syntax be used to merge two arrays into one? Provide an example.

Combining Rest Parameters and Arrow Functions:
Refactor the following function into an arrow function using rest parameters:function multiply(factor, ...nums) {
  return nums.map(num => num * factor);
}
These questions cover key JavaScript ES6 concepts related to arrow functions, default parameters, rest parameters, and spread syntax.
*/

// 1
const ReverseString=(str)=>{ return str.split('').reverse().join('');  }
console.log(ReverseString("NVEEN"));
// Write a function that finds the largest number in an array.

// 2
const largestNumber=(NumArray)=>{
return Math.max(...NumArray);// spread operator ... helps us to iterate the numbers in indivisual.

}
 console.log(largestNumber([1,2,3,4,5,6,7,8]));
 // 3 How would you check if a given string is a palindrome?
 let palindromString=(str)=>{
 	let lowerCaseString=str.toLowerCase();
 	let revsereString =lowerCaseString.split('').reverse().join('');
return revsereString === lowerCaseString

 }

 console.log(palindromString("madamimadam"));
 // 24-oct-2024
 //Implement the FizzBuzz logic for numbers from 1 to 100.

 const FizzBuzz=()=>{
 	for (var i = 1; i<=100; i++) {
 		if (i%3===0 && i%5===0 ){
 		console.log("FizzBuzz")
 		}else if (i%3===0){
 		console.log("Fizz");

 		}else if (i%5===0){
 		console.log("Buzz")

 		}else {
 		console.log(i);

 		}
 	}
 }
 FizzBuzz();
 // Write a function that removes duplicate values from an array.
 

 const RemoveDuplicate=(Arr)=>{
let duplicateArr=[];

for (let i=0 ; i<Arr.length ; i++) {
	if(!duplicateArr.includes(Arr[i])) {
		duplicateArr.push(Arr[i]);
	}

}
return duplicateArr;
 }
let Arr=[2,2,3,4,5,3];//[2,3,4,5];

console.log(RemoveDuplicate(Arr));

//6. How do you flatten a nested array in JavaScript?

let deeplyNestedArray = [1, [2, 3], [4, [5, 6, [7, 8]]]];
let flatArray = deeplyNestedArray.flat(Infinity);

console.log('flatArray ',flatArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//7. Write a function that counts the frequency of elements in an array.
const FreqencyCount=(arr)=>{

let frequency={};
for(let i=0;i<arr.length;i++){
let element=arr[i];
if(frequency[element]){
	frequency[element]++;
}else{
	frequency[element]=1;
}

}
return frequency;
}

console.log('[1,2,4,5,3,5,4] frequency',FreqencyCount([1,2,4,5,3,5,4]));

//8. Write a function to check if two strings are anagrams of each other.
let CheckAnagrams=(str1,str2)=>{

const normalize=(str)=> str.toLowerCase().replace(/\s+/g,'').split('').sort().join('');
return normalize(str1)=== normalize(str2);

}

console.log(CheckAnagrams("paramjeeramesht"," ramesh jeet marap"));

//9. Write a recursive function to calculate the factorial of a number.

// const Factorial=(num)=>{
// 	let output=1;
// 	for(i=num;i>=1;i--){
// 		output *=i;
// 		// console.log(output);

// 	}
// 	return output;
// }
// console.log(Factorial(5));


const recursiveFactorial=(num)=>{
	if(num<=1) return 1;
		return num*recursiveFactorial(num-1);

	
}

console.log(recursiveFactorial(4));
//10. Implement a debounce function that limits the rate at which a function can be executed.
// i did not understand this concept on debounce.
/*function debounce(func, delay) {
    let timeoutId; // Stores the timeout ID

    return function (...args) {
        // Clear the previous timeout if any
        clearTimeout(timeoutId);

        // Create a new timeout
        timeoutId = setTimeout(() => {
            func.apply(this, args); // Call the function with the latest arguments
        }, delay);
    };
}

// Example usage
const log = debounce(() => console.log('Function executed!'), 1000);

window.addEventListener('resize', log);
*/
 // Will execute only after the user stops resizing for 1 second
// 11. Write a function that finds the factorial of a given number without using recursion.
	const factorialwithout=(num)=>{
		let factorialnum=1;
		for(let i=num;i>1;i--){
			factorialnum *=i;

		}
		return factorialnum
	}
	console.log(factorialwithout(5))

	// 12. How would you remove falsy values from an array in JavaScript?

	const removeFalsy=(arr)=>arr.filter(Boolean);

	const inputArray = [0, 1, false, 2, '', 3, NaN, 4, undefined, null, 5];

const cleanedArray = removeFalsy(inputArray);
console.log(cleanedArray);

//13. Write a function to find the nth Fibonacci number.

function fibonaci(num){
if(num>1){
return fibonaci(num-1)+fibonaci(num-2);
}else{return num;}
}
console.log('fibonaci ',fibonaci(8));

//	14. Write a function to find if a given number is prime.
const findPrime=(num)=>{
	if(num<2){return false}

		for(let i=2;i<=Math.sqrt(num);i++){
			if(num%i===0){
				false
			}
		}
	
  return true;
  }

console.log(findPrime(4));

//15. Explain what a closure is and provide an example.
/*
A closure in JavaScript is a feature where an inner function has
 access to the outer (enclosing) function’s variables—even after the 
 outer function has finished executing. 
*/
function outerFunction() {
  let counter = 0; // A variable defined in the outer function's scope

  function innerFunction() {
    // Inner function has access to the outer function's variable `counter`
    counter++;
    console.log('Counter:', counter);
  }

  return innerFunction;
}

const myClosure = outerFunction(); // outerFunction executes and returns `innerFunction`
myClosure(); // Output: Counter: 1
myClosure(); // Output: Counter: 2
myClosure(); // Output: Counter: 3

//16. What is the difference between `==` and `===` in JavaScript?

/*
for ===  we need both vraible with same data type
No type coercion is performed, meaning the values must be of the same type to be considered equal.
for == we can compare diffrent data types too
It performs type coercion if the types of the variables are different.
 This means that JavaScript will try to convert the values to the same 
 type before comparing them.
*/

// what is object
// collection of values with key pairs are known as object

//what is object letral
// a blank object known as object letral
// 17. How would you merge two sorted arrays into one sorted array?

const mergeShortedArray=(arr1,arr2)=>{
	let mergeArray=[...arr1,...arr2];
	return mergeArray.sort((a,b)=>b-a);



}
console.log(mergeShortedArray(["a","s","f","b","w","r","g"],["b","h","d","e","w","n",5]));

function greet(name) {
  console.log("Hello, " + name + "!");
}
function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}

processUserInput(greet);
let numbers=[1,2,4,5,6,7];
const square=numbers.map(numbers=>numbers*2);
console.log(square);
// asyncronous programing
// console.log("start");
// setTimeout(function(){
// 	console.log("hey im good");
// },1000);
// console.log("end")


const calculator=(a,b,operation)=>{ return operation(a,b) };
 
 function callMe(num1,num2){ return num1*num2;   }

let result=calculator(2,5,callMe);
console.log(result);

let arr=[1,2,3,-6,-5];

const firstNeg=(num)=>{
	return num<0;
}
 result=arr.find(firstNeg);
console.log(result)

// 18. Write a function that capitalizes the first letter of each word

const capitalizeFirstLetter = (sentence) => {
  return sentence
    .split(' ')                        // Split the sentence into an array of words
    .map(word => 
      word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter of each word
    )
    .join(' ');                        // Join the words back into a single string
};

console.log(capitalizeFirstLetter("hello world! this is a test."));
// 19. Implement a function to check if a number is even or odd without using `%`.

const checkEven=(num)=>{
 if ((num&1)===0){
return "even";
 }else{
 	return "odd";
 }
}
console.log(checkEven(12));
// 20. Write a function that finds the duplicate elements in an array.


const findDuplicate=(arr)=>{
	let seen=new Set();
	let duplicates=new Set();

	
	for (let i = 0; i <arr.length; i++) {
		if(seen.has(arr[i])){
			duplicates.add(arr[i]);

		}else{
			seen.add(arr[i]);
		}
	}
	return Array.from(duplicates);

}

console.log(findDuplicate([1,2,2,3,4,3]));

class Book {
    constructor(title,author,year){
        this.title=title;
        this.author =author ;
        this.year=year ; 
    }
    getSummary(){
        return `${this.title} by ${this.author} , published in ${this.year}`;
    }
    // Write your code here
}

// book1=new Book("Bhagvat gita","Shirla Prabhupad","1970");
const myBook = new Book('The Jungle Book', 'Rudyard Kipling', 1894);
console.log(myBook.getSummary());

// 21. How do you create a private variable in JavaScript?
//For truly private variables, you can define variables inside a function 
function privateExample() {
  let privateVar = "I am private";

  return function() {
    console.log(privateVar); // Can access privateVar here
  };
}

const showPrivate = privateExample();
showPrivate(); // "I am private"
// console.log(privateVar); // Error: privateVar is not defined
 
// 22. Write a function to find the missing number in an unsorted array of integers from 1 to n.
const findMissing=(num)=>{
	arr=[];
let	missingElement=[];
arr=num.sort((a,b)=>a-b);
for(let i=0;i<arr.length;i++){
	if( num[i]-num[i+1]===-1){


	}else{
		missingElement.push(i+1);
	}	
}

console.log(missingElement);
}

// findMissing([1,3,5,6]);

const findMissingValue=(arr)=>{
	let num=arr.length+1;
	let expectedSum=(num*(num+1))/2;
	let arraySum=arr.reduce((sum,currentValue) => sum+currentValue ,0 );
	return expectedSum-arraySum;

}

console.log(findMissingValue([1,4,3,5]));

// 23. Write a function to convert an array of strings to a single string with words separated by commas.
let MakeSingleString=(arr)=> arr.join(',');

console.log(MakeSingleString(["hello","paramjeet","chauhan"]));

// 24. How do you convert a number to a string without using `.toString()` or `String()`?

let num=1+"";
console.log(typeof num);

// 25. Write a function that calculates the sum of all numbers between two given numbers, inclusive.
// my answer
const sumOfAll=(num1,num2)=>{
	let sum =0;
	if(num1<num2){
	for(let i=num1; i<=num2;i++)
{
	sum +=i;

}
return sum;
}else{
	for(let i=num2; i<=num1;i++)
{

sum +=i;

}
return sum;
}

}

console.log(sumOfAll(5,10));
// cleaned chatgpt answer
const findSum=(num1,num2)=>{
	let sum=0;
	start=Math.min(num1,num2);
	end=Math.max(num1,num2);
	for(let i=start;i<=end;i++){
		sum +=i;
	}
return sum;
}
console.log('findsum',findSum(5,10));

// 26. Explain how `this` works in different contexts.
/* my answer
this points lexical scope. 
outside function thix point to the document (for html page) or golobal(for js) variable.
for arrrow function this does not have one so it point above lexical scope.
	for function this point to the variable passed in function.
		for object this point to the golbal property of object.flat

chat gpt anser
Global Scope (Outside Any Function)

In the global scope (outside any function), this typically points to the global object. 
In a browser, this is window, and in Node.js, it’s the global object. For example:

In Regular Functions

Inside a regular function, this refers to the object that called the function,
 which can vary depending on the context in which the function is called.
  If the function is called without an explicit context, this falls back to the global object
   (in non-strict mode).

   In Arrow Functions

Arrow functions do not have their own this context. Instead, 
they "inherit" this from the surrounding lexical scope, 
meaning they use the this value from where the arrow function was defined, not where it’s called.
 In strict mode, this will be undefined if not explicitly set.

 In Methods (Functions Inside Objects)

When a function is defined as a method on an object 
(e.g., obj.method()), this refers to the object the method is called on.

In Constructor Functions and Classes

Inside constructor functions or classes,
 this refers to the specific instance of the object created by the constructor.
 Binding this with call, apply, or bind

this can be explicitly set in function calls with methods like .call(), .apply(), or .bind(). 
These methods allow you to specify what this should be in the function.


		*/


// console.log( Math.max(1,2,3,4,5,76));
// console.log( Math.min(1,2,3,4,5,76));

// 27. Write a function to return the longest word in a given string.
longestString=(str)=>{
words=str.split(' ');
longestword='';
for(word of words){
	if(word.length>longestword.length){
		longestword=word;
	}
}

return longestword;
}

// longestString=(str)=>{
// words=str.split(' ');
// // console.log(arr);
// longestword='';
// // for(word of words){
// // 	if(word.length>longestword.length){
// // 		longestword=word;
// // 	}
// // }
// // return longestword;
// let lengthArr=[];
// for (let i = 0; i < words.length; i++) {
//     // console.log(words[i], '-: ', words[i].length);
//     lengthArr.push(words[i].length);
// }
// // console.log(lengthArr);
// console.log(Math.max(...lengthArr));

// }

console.log(longestString("hare krsna rameshkpapaaman pramjeet chauhan"));
	// 28. How do you deep clone an object in JavaScript?
let object={
	firstName:"paramjeet",
	lastName:"chauhan",
	age:28,
	education:"B-tech"


}
let clone=structuredClone(object);// structuredClone can use for mordern enviorment
// console.log(clone);

let clone2=JSON.parse(JSON.stringify(object));
console.log(clone2);



// 29. Write a function that takes an object and returns its keys and values as arrays.

// 30. How do you debounce a function in JavaScript, and why is it useful?
// i did not understan the concept of debounce
// 31. Write a function to sort an array of strings by their length.
/*shortArray=(arr)=>{
	let shortedArray=[];
for(let i=0;i<arr.length;i++){
if(shortArray.length<arr[i].length)
}
}
arr =["param","jeet","chauhan"];*/
// 32. What is the difference between `call()`, `apply()`, and `bind()`?

// array to string. 1. merged string, string with comma,
 function arrayToString(arr){
	// string="";
	// let mergedArray=""
	// for(let i=0; i<arr.length;i++){
	// 	 string +=`${arr[i]} ,`;
	// 	 mergedArray +=arr[i];
	// }
	// return console.log(string,mergedArray)

	// return console.log(arr.toString());
	// return console.log(arr.join(""));
	return console.log(arr.reduce((acc,curr)=>acc+curr,""));
WW
}

arrayToString(["h","a",'r',"e","k","r","s","n","a"]);
// string to array
let stringToArray=(str)=> {return str.split("")};
console.log(stringToArray("harekrsna"));

// array to object
let arryToObject=(arr)=>{ return {...arr};}
console.log(arryToObject([1,2,3,4,5]));
// object to string

function objectToArray(obj){
return console.log( Object.keys(obj),Object.values(obj) );

}
objectToArray({name:"paramjeet"})
//objeshorting of object values 

// array of values and key in object.
// shorting of string asending, decending
// shorting of array
// 
// use of Map. MAth
//use of ... 



