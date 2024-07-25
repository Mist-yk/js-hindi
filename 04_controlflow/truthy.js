const userEmail = "aj456.com"

if ( userEmail){
    console.log("we have ur email");
}else{
    console.log("don't have user email");
}

//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Truthy values
//"0",'false'," ",[],{}, function(){}

// if(userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj).length === 0){
    console.log("object is mt");
}

// Nullish Coalescing Operator (??): null indefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 2

// Terniary Operator

// condition ? true : false

const price = 100
price <=50 ? console.log("less than 50"):console.log("more than 50")


console.log(val1);