// Singleton
// Object.create

// Litral object
const mysym = Symbol("key1")

const JsUser ={
    name :"Ajay",
    "full name":"negi",
    [mysym]:"mykey1",
    rollno : 23,
    email : "ajnegihuagsd",
    location:"kashipur",
    isLoggedIn:false,
    lastLoginDays:["monday","sunday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mysym])

// JsUser.email ="ajay9827"
// Object.freeze(JsUser)
// JsUser.email ="fkr8328"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("halooooooo")
// }
// JsUser.greetingtwo = function(){
//     console.log(`halooooooo, ${this.name}`)
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo());


//OBJECTS 2

//const tinderUser = new Object()//singleton
// const tinderUser ={}//non singleton

// tinderUser.id = "123abc"
// tinderUser.name = "wam"
// tinderUser.isLoggedIn = false

// //console.log(tinderUser);

// const regularUser ={
//     email : "asdad89",
//     fullname:{
//         userfullname:{
//             firstname :"akjay",
//             lastname :"negi"
//         }
//     }
// }
// //console.log(regularUser.fullname.userfullname)

// const obj1 ={1:"a",2:"b"}
// const obj2 ={3:"c",4:"d"}

// //const obj3 =Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2}
// //console.log(obj3);

// const user =[
// {
//     id:"asdad",
//     nam:"sada"

// },
// {
//     id:"asdad",
//     nam:"sada"

// },
// ]
// user[1].id
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course ={
    coursename : "js hindi",
    price :"999",
    coursementor:"hitesh"
}
//course.coursementor

const {coursementor} = course

//console.log(coursementor);
const {coursementor: mentor} = course
//console.log(mentor);

// {
//     "name":"ajju",
//     "rollno":"23",
//     "class":"bhim"
// }

[
    {},
    {},
    {}
]


