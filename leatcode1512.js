var numIdenticalPairs = function(nums) {
  let count=0;
  let length=nums.length;
for(i=0;i<length;i++){
	for(j=i+1; j<length; j++){
		if(nums[i]==nums[j])
		{
			count +=1;
		}
	}
}
return count;

};

console.log(numIdenticalPairs([1,1,1,1]));
