const myArr = [0,1,2,3,4,5]
const myHeros = ["bheem","chutki"]

const arr = new Array(1,2,3,4)

//console.log(myArr[2]);

//Array methods
// myArr.push(6,7)
// myArr.pop()

//myArr.unshift(7)
//myArr.shift()

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(2));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// Slice , Splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B ",myArr);

// const myn2 = myArr.splice(1,3)
// console.log("c ",myArr);
// console.log(myn2);

//Splice manipulate array


const marvelHeros = ["ipman","homelander","atrain"]
const mc =["supe","starlight","deep"]

// marvelHeros.push(mc)

// // console.log(marvelHeros[3][2]);

// const allHeros = marvelHeros.concat(mc)
// console.log(allHeros);

//Spread
const allnewHeros = [...marvelHeros, ...mc]
//console.log(allnewHeros);

const anotherArr = [1,2,3,[4,5,6],7,[2,4,[9,8]]]

const realArr = anotherArr.flat(Infinity)
console.log(realArr);

console.log(Array.from("Ajay"));
console.log(Array.isArray("Ajay"));
console.log(Array.from({name: "ajay"}));//intresting in case of interview


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))