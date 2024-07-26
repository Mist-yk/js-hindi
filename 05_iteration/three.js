// for of

 
const arr = [1,2,3,4,5]

for (const num of arr) {
    //console.log(num);
}

const greet = "hello world"

for (const greeting of greet) {
    //console.log(greeting);
    
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('NP',"Nepal")
map.set('JP',"Japan")

//console.log(map);

for (const [key,value] of map) {
    //console.log(key,'=',value);
    
}

const myobj ={
    game1:'Valorent',
    game2:'cs2'
}
// for (const [key,value] of myobj) {
//     console.log(key,'=',value);
    
// }
