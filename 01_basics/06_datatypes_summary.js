// #Primitive 

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt.


const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

//const bigNumber =12436512831n

// #Reference(non primitive)

//Array ,Objects, Functions

const heros = ["shaktiman" ,"naagraj","doga"]

let myobj={
    name:"Ajay",
    age:22,
}

const myfunction = function(){
    console.log("hello world");

}

console.log(typeof bigNumber)