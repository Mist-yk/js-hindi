// JavaScript Execution Context

//{} =>Globsl Ececution Context
// function Execution context
//Eval Execution Context

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1 , val2)
let result2 = addNum(10, 2)

/* 1 Global execution
 2 Memory Phase
 (val1->undefined
 val2->undefined
 addnum->defination
 result1->undefined
 result2->undefined)

3 Execution phase
val1->10
val2->5
add Num->execution context for every function *it will delete after execution
[New environment + execution thread] =>
    memory phase {val1->undefined
                  val2->undefined
                  total->undefined}
    execution context{num1 ->10
                      num2->5
                       total->15}(this total will return in our global executional context)
 WHOLE ABOVE PROCESS WILL REPEAT FOR Result2 ie addnum
 */