// REDUCE

const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval

// } , 0 )

const mytotal = mynums.reduce( (acc,currval) => acc+currval,0)

console.log(mytotal);

const shoppingcart = [
    {
        itemName: "js  course",
        price : 2999
    },
    {
        itemName: "java course",
        price : 4999
    },
    {
        itemName: "python",
        price : 3999
    },
]

const pricepay = shoppingcart.reduce( (acc,item) => acc + item.price,0)

console.log(pricepay);