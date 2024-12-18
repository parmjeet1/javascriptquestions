// 3 question
/*

array find max and time complexity and space complexity
array find minum and time complexity and space complexity
array push, pop,shift, unshift, array foreach

*/ 

let arr=[3,4,2,4,6,3,0,4,6,90];
let minimum_element=0;
for(let i=0; i<=arr.length; i++){
	if(arr[0]>arr[i]){
minimum_element=arr[i];
	}
}
console.log('minimum_element',minimum_element);

let max_element=0;
for(let i=0; i<=arr.length; i++){
	if(arr[0]<arr[i]){
max_element=arr[i];
	}
}
console.log('max_element',max_element);
arr.push(4);
console.log('after push',arr);
arr.pop();
console.log('after pop',arr);
arr.unshift(21)
console.log('unshift(adding element in the begening)',arr);

arr.shift()
console.log('shift(removing element in the begening)',arr);
arr.forEach(num=>console.log('foreach iteration',arr));

arr.forEach((num,index,array)=>{
	array[index]=num*2;
})
console.log('iteration of forEach',arr);

// minimum and max
arr=[3,4,6,7,8];
max=arr[0];
min=arr[0];

for (i=0;i<arr.length;i++){
	if(arr[i]<min){
min=arr[i];
	}
	if(arr[i]>max){
		max=arr[i];
	}
}

console.log(`max= ${max} min=${min} `);
//cocatination

arr=[1,2,3,4,5];
// output should be [1,2,3,1,2,3]


let arrayLength=arr.length;
for(i=0;i<arrayLength;i++){
arr[arrayLength+i]=arr[i];
}
// for(i=0;i<arr.length;i++){
// 	console.log(arr[i])
// }

console.log('cocatination',arr,'length=',arr.length);
// 38. How do you convert a callback-based function to a promise-based function?
