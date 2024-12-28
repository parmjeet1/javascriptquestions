const arr=[19,2,3,17,23,10];
const n=arr.length;
let result=[arr[0]];
function insertSort(arr,n){
    for(let i=1; i<n;i++){
        if(arr[i]<arr[0]){
            result.push(arr[i])
        }
    }
    return arr;
}
console.log(insertSort(arr,n))