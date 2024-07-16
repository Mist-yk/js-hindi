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





// Stack (Primitive), Heap(Non primitive)

let myYoutubename = "Ajaynegi"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userone ={
    email: "me@gmail.com",
    upi:"suer1",
}

let usertwo = userone

usertwo.email ="ajay@google.com"

console.log(userone.email)
console.log(usertwo.email)