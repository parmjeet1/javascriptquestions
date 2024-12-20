var getConcatenation = function(nums) {
   let ans=[];//new Array(2*nums.length);
   j=nums.length;
   for(let i=0; i<j;i++){
    ans[i]=nums[i]
    ans[j+i]=nums[i]
    
   }
   return ans; 
};

console.log(getConcatenation([1,2,3,4,5]))//

//running sum
function runningSum(arr){
	let sumArray=new Array(arr.length).fill(0);

	for (let i =0  ;i < arr.length; i++) {
		// for(let j=0;j<=i;j++){
		// 	 sumArray[i] =sumArray[i]+arr[j];
		// 	// sumArray.push(sumElement);
		// }

		 sumArray[0] =arr[0];
		 sumArray[i] =arr[i]+arr[i-1];

	}
	return sumArray;
}

console.log('runningSum',runningSum([1,2,3,4,5]))

// Declaring an array with a length of 5
let arr = new Array(5);

console.log(arr); // Output: [ <5 empty items> ]

// The length property reflects the specified length
console.log(arr.length); // Output: 5