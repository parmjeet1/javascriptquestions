/*

given array nums
given integer k
return the number of pairs (i, j)
where i < j
|nums[i] - nums[j]| == k.

*/

var countKDifference = function(nums, k) {
let length=nums.length;
let pairNo=0;
for(let i=0;i<length;i++){
	
	// console.log('i',i);
	
	for(let j=i+1; j<length;j++)
	{
	// console.log('j',j);
		
			if (Math.abs(nums[i] - nums[j]) === k) {
				 pairNo++;
			}
		
	
}
}
    return pairNo
};

console.log(countKDifference([1,2,2,1],1));
