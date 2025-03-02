let arr=[-5,0,4,6,8,10];
let target=8;
function binarySearch(arr,target){
let start=0;
let end=arr.length-1;
while(start<=end){
let mid= start + Math.floor((end-start)/2);
if(arr[mid]==target){
return mid;

}
if(arr[mid]<target){
start=mid+1;

}else{

end=mid-1;
}

}
return -1;
}

const result= binarySearch(arr,target)
(result==1)? console.log("element does not found"): console.log("element at index ", result);