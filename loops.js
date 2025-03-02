let user ={ram:23,shyam:34,govind:45};
for(key in user){
    console.log(key,user[key]);
}

//for of loop
let fruits=["guvava","mango","apple","banana"];
for(fruit of fruits){
    console.log(fruit);
}
let num =2;
while(num<=10)
{
    console.log(num);
    num++;
}

let object ={name:"ramesh",age:23,position:"softwareDeveloper"};
for(key  in object){
    console.log(object[key])
}

let arr1=[1,2,3,4];
let arr2=[2,3,4,5]
let arr3=[4,5,6];
let remind1=arr3.find(num=>num%2==1 );
console.log(remind1)
let redcued=arr3.reduce( (acc,num)=>acc+num,0 )
console.log(redcued);
let even=arr3.filter(num=>num%2==0)
console.log(even);

let mapped=arr3.map(num=>num+num);
console.log(mapped)
let finalArray=arr1.concat(arr2);

console.log(finalArray.concat(arr3));
// console.log(arr1.join('=>'));
let Numbers=[4,5,6,7,8];
let findIndexnum=Numbers.findIndex( num=>num%2==1)
console.log(findIndexnum)
Numbers.forEach((num,index)=>{
    console.log(`index ${index} = num - ${num} `)
})
// modify array elements
// Numbers.forEach( (num,index,arr)=>{
//     arr[index]=num*2;
// })
// console.log(Numbers);
console.log(Numbers.sort())//
// reverse array without reverse function
let revArray=[];
for(let i=Numbers.length-1; i>=0;i--){
    revArray.push(Numbers[i])
}
// console.log(revArray);
console.log(Numbers.reverse());
console.log(Numbers.sort( (a,b)=>b-a ));
let str="paramjeet";
console.log(str.slice(5,1))
// console.log(str.substring(5,1));
console.log(str.split(""));
console.log(parseInt("101"));
console.log(parseFloat("233.11"))
 num=1013.4445;
 console.log(num.toFixed(2))
 console.log(Math.floor(3.44));//3
 console.log(Math.floor(Math.random()*10));
 console.log(Math.random());
 console.log(Number(true));
 console.log(Boolean(0));
 let now= new Date();
 console.log(now)
 console.log(now.getFullYear())
 console.log(now.getDate())

 console.log(now.toLocaleDateString());

//  try {
//     const result = 10 / 0; // Simulate normal execution
//     console.log(result);   // Output: Infinity (no error here)
  
//     JSON.parse("{ invalid JSON }"); // This will throw an error
//   } catch (error) {
//     console.error("Error occurred:", error.message); // Handles the error
//   }
  function divideFunction(a,b){
if(b===0){
    throw new error("Devision by zero is not alllowed")
}
return a/b
  }

console.log(  divideFunction(40,0));