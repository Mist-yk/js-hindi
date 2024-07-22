if(true){
let a = 10
const b = 20
var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const user ="ajay"

    function two(){
        const web ="utube"
        console.log(user);
    }
    //console.log(web);

    two()
}
//one()

if (true){
    const user = "hitesh"
    if (user === "hitesh"){
        const web = "utube"
       // console.log(user + web);
    }
    //console.log(web);
}
//console.log(user);


// +++++++++++ interesting +++++++++++
addone(5)
function addone(num){
    return num+1

}

addtwo(5)
const addtwo = function(num){
    return num +2
}
