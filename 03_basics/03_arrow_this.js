const user ={
    user: "ajay",
    price : 200,

    welcomeMsg: function(){
       // console.log(`${this.user},welcome to website`);
        //console.log(this);
    }

}

//  user.welcomeMsg()
//  user.user = "ram"
//  user.welcomeMsg()

//console.log(this);

//function chai(){
    //let user="ajay"
    //console.log(this.user);

//chai()

// const chai = function(){
//     let user = "ajay"
//     console.log(this.user);

    const chai = () => {
        let user = "ajay"
        console.log(this);
}
//chai()

// const addTWO = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTWO(2,3))


// const addTWO = (num1,num2)=>num1+num2

// console.log(addTWO(2,3))

const addTWO = (num1,num2)=>({user:"ajay"})//for objects

console.log(addTWO(2,3))