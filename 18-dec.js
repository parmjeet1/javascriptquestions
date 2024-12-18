// reverse the array
let arr=[1,2,3];
//output required [3,2,1]
// console.log(arr.reverse()); //1st way
let reverseArray=[];
for(let i=arr.length-1;i>=0;i--){
    console.log('i=',i,'=',arr[i])
reverseArray.push(arr[i]);
}
console.log(reverseArray);

//make a function withour reverse fuction for reversing array

 function reversingArray(arr){
    let rev=[];
    for(let i=arr.length-1;i>=0 ;i--){
        rev.push(arr[i]);

    }
    return rev;
 }

console.log( reversingArray([6,7,8]))
/*
time complexity O(n)
space complexity O(1)
*/