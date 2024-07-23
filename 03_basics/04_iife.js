// Immediatly Invoked Function Expression

//IIFE is used for removing global scope pollution
//()1st for function definition
//()2nd for function execution)
// ; to end it
(function chai(){
    //named iife
    console.log(`db connected`);
})();

( (name) => {
    //simple iffe
    console.log(`db connected two ${name}`);
})('ajjjjuuu')