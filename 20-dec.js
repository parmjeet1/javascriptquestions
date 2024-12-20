let nums=[1,4,6,8,9];
let ans=new Array(nums.length).fill(0)
ans[0]=nums[0];
for(let i=1;i<nums.length;i++){
	ans[i]=ans[i-1]+nums[i];

}
console.log(ans)
/*
time complexity O(n)
space complexity 
*/

let arr = [1, 2, 3];
delete arr[0];
console.log(arr); // Output: [ , 2, 3 ]
let values=["1","2","3"];
let ans= values.shift();
console.log(ans);