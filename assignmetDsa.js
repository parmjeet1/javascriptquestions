//assignmetDsa.js
//concation of array
function concatArray(arr){
	let length=arr.length;
	 ans=[];//new Array(length).fill(0);
	
console.log('length',length);
	for(let i=0;i<length;i++){
		 ans[i]=arr[i];
		 ans[length+i]=arr[i];
		 console.log(`  ans[${i}] `)
}
	return ans;

}
console.log(concatArray([1,2,3]))
//0,1,2, 3

//


var kidsWithCandies = function(candies, extraCandies) {
	let status= false;
	let maxCandies=Math.max(...candies);

for(i=0;i<candies.length;i++){
	if(candies[i]+extraCandies>=maxCandies){
status=true;

		candies[i]=status;

	}else{
		status= false;
		candies[i]=status;
	}

}
return candies

};


console.log(kidsWithCandies([1,3,4,5,6],2))
/*
1+2=3>2 true

*/
