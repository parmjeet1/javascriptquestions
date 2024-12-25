var findIntersectionValues = function(nums1, nums2) {
let length1=nums1.length;
let length2=nums2.length;
let commonArray=[];
let ans1=0;
let ans2=0;
for(let i=0; i<length1; i++){

	if(nums2.includes(nums1[i]))
	{
		ans1++;
	}
	}

	for(let j=0 ; j<length2;j++){
		if(nums1.includes(nums2[j]))
	{
		ans2++;
	}
		
		}
	
return [ans1, ans2];
};
console.log(findIntersectionValues([2,3,2],[1,2]));