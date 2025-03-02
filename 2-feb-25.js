/*
1. Write a function to reverse a string.
	2. Write a function that finds the largest number in an array.
split
trim
push
pop

*/


const reverseString=(str)=>{
let arr=[];
arr=str.split('');
let finalArray=[];
for(let i=arr.length-1; i>=0;  i--){
finalArray.push(arr[i])
}
str=finalArray.join('');
console.log(str);
}
/*
TC O(n)
SC(1)

*/
reverseString("paramjeet");
console.log("******************largest Number in array*******");
console.log(largestNum([1,272,50,3,4]));

function largestNum(arr){
let largest=0;
for(let i=0;i<arr.length;i++){
if(arr[i]>largest){
 largest=arr[i];
}
}
return largest;
}



