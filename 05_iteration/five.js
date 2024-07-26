// for each
const coding = ["js","cpp","python","java"]
// coding.forEach( function (item) {
//     console.log(item);
    
// });

// coding.forEach( (val) =>{
//     console.log(val);
// }   )

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// }    )

const mycoding = [
    {
        langname:"js",
        langfile: "jsr"
    },
    {
        langname:"java",
        langfile: "java"
    },
    {
        langname:"python",
        langfile: "py"
    }
]
mycoding.forEach((item)=>{
    console.log(item.langfile);
})