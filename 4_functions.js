// FUNCTIONS
/* 
    - What is a function?
    - Why use functions?
    - Creating a functions
    - Calling a function
    - Parameters and arguments
    - Returning values
    - Functions and TDD
    - Looking ahaed
*/

// What is a function?

/* a function is a reusable block of code */

/* functions work sort of like equations: you can
give them inputs and theuy can produce outputs */

/* because we can run the same block of code whenever
we want, functions are on important part of 
control flow */

/* it's often helpful in larger programs to use
multuple smaller, simple funciton than have one
monoloithic block of code */

/* breaking code into functions makes the code easier 
to test */

function imAFunction () {
    console.log("hello world");
}

// invoking a function
imAFunction();
imAFunction();

// parameters and arguments

function hello(name) {
    console.log("hello " +  name);
}

hello("luke");
hello("david");

let thing = "world";
let thang = "universe";

hello(thing);
hello(thang);
// this is where hello is executed

function goodbye(x) {
    console.log("goodbye " + x);
}

let x = "joe"
goodbye(x)

function seeya(first_name, last_name) {
    console.log("seeya " + first_name  + last_name);
}

let first = "gaby "
let last = "medina"
seeya(first, last)

// --------------------

function plus(a, b) {
    let sum = a + b;
    return sum;
}

function multiply(a, b) {
    return a * b;
}

let y = 3 + plus(10,5);
console.log(y);

let z = multiply(plus(10,5), 2)
console.log(z);

// More practive with return 

function isEven(w) {
    if (w % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let num = 9;
if (isEven(num)) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

// Functions and TDD

/* functions are easy to test */

/* starting eith the practice problems for this
workshop, you will write at least one function in
every problem */

/* the tests will call your functions, passing in 
differenent arguments and testing the returned
outputs */

/* read the prompts carefully; they will clearly
state what value your function should return */

/* if your tests aren't passing., double check that
you are actually returning a value */


