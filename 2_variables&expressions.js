/*
- Assigning values to variables
- Shortcut syntax
*/

// values can be stored in a varibale
// use the assignment operator =

let myNum = 5;
console.log(myNum);

/* the let keyword stores the assined value in a variable. 
the variable can be reassigned */

let mood = 'happy';
mood = 'overjoyed';

console.log(mood);

/* the const keyword stored the assinged value 
in constant variable that cannot be reassigned */

const favoriteBootcamp ='Fullstack';

// this line will throw an error
// favoriteBootcamp = 'somewhere else';

/* an expression is 'any valid unit of code 
that resolves to a value' (MDN) */

console.log(15);
console.log(9 === 10);
console.log('happy' + ' ' + 'together');

/* since expressions reuslt in a value,
expressions can be assigned to varibales */

let sum = 10 + 5;

/* to write code that works, we have to anticipate
how JS will evaluate our exressions */

// rememeber 'order of operations' from math...

let notSure = 10 + 5 * 10;
console.log(notSure);

// JS order of operations called operator precedence

/* mathematic operators are applied in the same order
in mathematics and JS */

let notSure1 = 10 * 10 / (5*5)
console.log(notSure1);

/* as in math, any JS expression wrapped in
parentheses will be evaluated first */

let notSure2 = false === (10 !== 10);

console.log(notSure2);

/* there are well-defined rules decribing 
the operator precedence for every
operator in Javascript! just search MDN 
operator precedence when you need it;
no need to memorize */

let notSure3 = typeof 10 == 10;
console.log(notSure3);

// we can assign new values to a variable
let sum1 = 0;
sum1 += 5;
sum1 += 10;

console.log('sum:', sum);

/* the ++ operator increments by 1 
and reassignes */

let myNum1 = 0;
myNum1++;

console.log('++ operator is #', myNum1);

/* the -- operator decrements by 1 
and reassigns */

let myNum2 = 3;
myNum2 --;
myNum2 --;

console.log('-- operator is #', myNum2);

/*  RECAP
    - Assigning values to variables
    - Expressions
    - Shortcut syntax
*/

