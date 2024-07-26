// const coding = ["js","cpp","python","java"]

// const val = coding.forEach((item)=>{
//     //console.log(item);
//     return item
// })

// console.log(val);

// Filter (it return values)
const mynums = [1,2,3,4,5,6,7,8]

// const newnum = mynums.filter( (num) => num > 4 )
const newnum = mynums.filter( (num) => {
    return num >4
} )
console.log(newnum);