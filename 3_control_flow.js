// 3_CONTROL FLOW

/*
    - What is control flow?
    - is/else/if else
    - Logical operators
*/

// generally, our code runs from top to bottom

console.log('first!');
console.log('second!');

/* often, we don't want every line of our
code to run in order */

/* in some cases, we may not want  a line
of code to run at all! */

/* control flow enables us to change the
order in which our code runs */

/* the if statement is an example of a JS
feature that allows us to affect controle */

// if statement starts with th if keyword
// then, two parens around an expression

/* finally, curly brackets surrounding the
lines of code to run' these lines only
run if the expression evaluates to true */

if (true) {
    console.log('in the if');
}

console.log('can i see you?');

if (false) {
    console.log('sorry no');
}

if (true) {
    console.log('i/ll be there!');
}

let neatNum = 7;

if (neatNum === 7) {
    console.log('wow that is a seven!');
}

if (neatNum === 8) {
    console.log('wow that is an eight!');
}

// else block
/* the code in an else block will run only
if the expression in the if evaluates to flase
*/

if (false) {
    console.log('in the if');
}

else {
    console.log('in the else');
}

// else if clause
/* the code in an else if clause has its own
condition and only runs if the condition 
evaluates to true */

if (false) {
    console.log('in the if');
}

else if (true) {
    console.log('in the else if');
}

let name = 'Ashi';
if (name === 'Ada') {
    console.log('Hi Countess Lovelace!');
}

else if (name === 'Grace') {
    console.log('Hi Rear Admiral Hopper!');
}

else {
    console.log('Hi Friend!');
}

// Logical operators

// && is the logical 'and' operator
/* it will return true if placed between two 
boolean values and both are true */

if (true && true); {
    console.log('in the first if');
}

if (true && false) {
    console.log('in the second if');
}

// || is the logical 'or' operator
/* it will return true if placed between two
boolean values and either is true */

if (true || true); {
    console.log('in the first if');
}

if (false || false) {
    console.log('in the second if');
}