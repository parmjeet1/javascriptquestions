/*x=11;
console.log(x)
var x=10;*/

/*
function outerFunction(){
let count=0;
function inheritFunction(){
count++;
console.log(count);
}
return inheritFunction;
}

let counter =outerFunction();
counter ();
counter ();
*/

function hotel(){
let key="key";
function room(){
console.log(`my room is booked I have accesas of  ${key} `);
}
return room
}

let outerFun=hotel();
outerFun();
console.log("------Prototype-----");

function person(name){
this.name=name;
}

person.prototype.sayHello=function() {
console.log(`hello my name is ${this.name} `)
}

paramjeet=new person("Paramjeet");
Ritika=new person("Ritika");
//paramjeet.sayHello();

console.log(Object.getPrototypeOf(paramjeet));

//john → Person.prototype → Object.prototype → null
console.log(typeof NaN);

function showThis(val) {
    console.log(this,this.val);
}

showThis(4); 
 person = {
    name: "Alice",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // ❌ "Hello, my name is undefined"
