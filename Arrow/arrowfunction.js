//Arrow function//


/*1. Simple method */

function demo(){
    console.log("hello");
}
demo();

// 2. Using const for arrow function (alternative to function expression)

const demo= function demo(){ 
    console.log("hello");
}
demo();

// /*3. In one line with curly braces 3rd step */

const demo = () => {
    console.log("hello");
}
demo();

// 4. Simplified arrow function (single-line)

const demo = () => console.log("hello");
demo();
