// 33. How would you check if two objects have the same set of properties?

let checkTwoObject = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if both objects have the same number of keys
  if (keys1.length !== keys2.length) return false;

  // Sort the keys and compare them for equality
  return keys1.sort().every((key, index) => key === keys2.sort()[index]);
};
/*
.every() is an array method in JavaScript. It checks if all elements in an array
 satisfy a specified condition (provided by a callback function).
 If every element meets the condition, it returns true; otherwise, it returns false.
*/
console.log(checkTwoObject({name: "paramjeet"}, {name: "paramjeet"})); // true
console.log(checkTwoObject({name: "paramjeet", age: 25}, {name: "paramjeet"})); // false


// 34. Write a function to calculate the average of numbers in an array.
let avgArray=(numbers)=>{
// let sum=numbers.map( num=> num*num );
// let sum=0;
// for (let i =0 ; i< numbers.length; i++ ) {
// 	sum +=numbers[i];
// }

// return  sum/numbers.length;

	return numbers.reduce((accumlator,currentValue)=>accumlator+currentValue,0 )/numbers.length
}
console.log('averege ',avgArray([1,2,3]));
// reduce is use to perform operation in between each elements of array and  return the single value. 
// mostly we use for avearge, sum, for complete array.
person={name:"paramjeet",
age:28,
course:"B-tech"
}
console.log('object keys',Object.keys(person))// keys of object
console.log('object values',Object.values(person))// vlaues of object
console.log('object Enteries',Object.entries(person))// array of each pair of key and value

/*


*/

// 35. Write a function that returns a new array with all elements that occur more than once.
let moreThanOne=(arr)=>{
// return arr.map( num=>num+num );
let repeatedElement=[];
let frequncy={};
	for(let i=0; i<arr.length;i++){
	
frequncy[arr[i]]= (frequncy[arr[i]]||0)+1;



	}

	for(let key in frequncy){// for in loop usefull with objects only. . When used on an array, for...in will iterate over indices as strings (like '0', '1', etc.),
		if(frequncy[key]>1){
			repeatedElement.push(Number(key))
		}
	}
	return repeatedElement;
}


let arr=[1,3,2,4,4,3,5,6,7];
console.log(moreThanOne(arr));
	// 36. How do you use JavaScript’s `reduce()` to flatten an array?


 arr = [1, [2, 3], 4];
const flattened = arr.reduce((acc, val) => acc.concat(val), []);

console.log(flattened); // Output: [1, 2, 3, 4]
/*
To flatten an array with JavaScript’s reduce()
 method, you can use reduce to accumulate all elements into a single, flat array.
*/