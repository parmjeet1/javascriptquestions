// 37. Write a function to rotate an array to the left by `k` positions.

function rotateArray(arr){
	
let reverserArray=[];

	for(let i=arr.length-1; i>=0; i-- ){
		reverserArray.push(arr[i]);
		

	}
	console.log(reverserArray);
}
rotateArray([1,2,3,4]);
// 38. How do you convert a callback-based function to a promise-based function?
//create a call back function
function callBack(){
	setTimeout(()=>{
console.log("harekrsna after callBack")
	},2000)
};
callBack();

//create a promise
const myPromise=new Promise((resolve,reject)=>{
	const success=true;
	if(success){
resolve("promise resolve successfully");
		}else{
			reject("promise rejected");
		}
// 	setTimeout(()=>{
// 		if(success){
// resolve("promise resolve successfully");
// 		}else{
// 			reject("promise rejected");
// 		}
// 	},2000)
})

myPromise.then(result=>console.log(result)).catch(error=>console.error(error));