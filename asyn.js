

























/* let intervalTime= setInterval(()=>{console.log("after 5 second")} ,"5000")
setTimeout(()=>{clearInterval(intervalTime); console.log("printed after 1 min")}, "10000" )

*/


function processData(callback){
console.log("processing data")
callback();
}

function printName(name){
console.log(name)
};

//processData(printName.bind(null,"rohit"));
processData(()=>printName("Nitesh"));

