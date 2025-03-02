const myPromise=new Promise((reslove, reject)=>{
const success=false;
setTimeout(()=>{

if(success){
reslove("Promise resloved successfully");
}else{
reject("Promise rejected")
}

},2000 )
});

myPromise.then( (result)=>{
console.log(result);
})
.catch( (error)=>{
console.error(error);
});
/*
const promise1=Promise.reslove("promise 1 resloved");
const promise2=new Promise( (resolve)=>setTimeout(()=>reslove("promise2 resloved") ) , reject) .relove
*/

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(

(response)=>{

if(!response){
throw new Error("Network response was not ok")
}

return response.json();
})
.then((data)=>{

console.log("data fetched", data);

})
.catch((error)=>{

console.error("Error in fetching data", error)
});