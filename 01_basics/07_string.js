// "hello world"

// const name = "ajay"
// const repoCount = 50

// console.log(`my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String("ajay ac com")


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne =" Ajay   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ajay.com/ajay20%negi"
 console.log(url.replace('20%','-'))
 console.log(url.includes('ajay'))

 console.log(gameName.split(' '));