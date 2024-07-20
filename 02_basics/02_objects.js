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

JsUser.greeting = function(){
    console.log("halooooooo")
}
JsUser.greetingtwo = function(){
    console.log(`halooooooo, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());