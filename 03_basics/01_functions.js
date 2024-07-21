

function sayMyname(){
    console.log("a")
    console.log("j");
    console.log("a");
    console.log("y");
}

//sayMyname()

// function sum(num1, num2){
//     console.log(num1 + num2);
// }
// const result =sum(3,4)



function sum(num1, num2){
    // let result = num1+ num2
    // return result
    return num1+num2
}
const result =sum(3,4)

//console.log("result",result);

function loginUserMsg(username="sam"){
    if(username === undefined){
        console.log("enter user name");
        return

    }
    return `${username} just logged in`
}

//console.log(loginUserMsg("Ajay"))
//console.log(loginUserMsg())

function calculateCartPrice(val1,val2, ...num1){
    return num1

}
//console.log(calculateCartPrice(200,200,300));

const user ={
    user:"ajay",
    price:299
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.user} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    user : "usms",
    price:2020

})

const arr =[200,300,400,600,800]

function returnSecondValue(getarr){
    return getarr[1]

}
console.log(returnSecondValue(arr));


