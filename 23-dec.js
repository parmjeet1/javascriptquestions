let arr=[-5,0,4,6,8,10];
//        0,1,2,3,4,5
let target =8;
function binarySearch(arr,target){
	let start=0; 
	let end=arr.length-1; //5
	while(start<=end){
		let mid=start + Math.floor((end-start)/2); // 0+ (5-0)/2 0+2.5=2, 3+(5-3)/2=3+2/2=3 ,4+(5-4)/2 = 4+.5=4
		if (arr[mid]==target){//2==8
			return mid;

		}
		if(arr[mid]<target){//4<8, arr[3]=6<8 yes again we'll search in right half, arr[4]=8== target then it will return index 4
			start=mid+1// start=3, 4
		}
		else{
			end=mid-1;

		}
	}
	return -1;
}

 const result=binarySearch(arr,target);
 console.log(result);
(result==-1)?console.log("element does not found in array"):console.log(`element found at ${result}` )