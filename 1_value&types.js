/* number type */

console.log(typeof 5);
console.log(typeof 2.55);
console.log(typeof -1000);

/* the % operator divides two numbers and returns the remainder */

console.log(10 % 5);
console.log(11 % 5);
    
    /* use the strictly-equals operator (===) to
compare number types */

console.log(10 === 10);
console.log(10 === 11);

/* use the strictly-not-equals operator (!==) to
compare number types */

console.log(10 !== 10);
console.log(10 !== 11);

// <, <=, >, >= work just like math //

console.log(9 < 10);
console.log(9 > 10);
console.log(9 <= 10);
console.log(9 >= 10);

// boolean types - only two values have the boolean type

console.log(typeof true);
console.log(typeof false);

// create strings with single quotes

console.log(typeof 'happy');

// or double quote

console.log(typeof "also happy");

// strings are a string of characters
// access a character using bracket notation

// the 'first' character has an index of 0\

console.log('happy'[0]);
console.log('happy'[1]);
console.log('happy'[4]);    

// strings have a .length property

console.log('happy'.length);

/* 
concatenation - use the + operator to squish two 
strings or more together 
*/

console.log('happy' + ' ' + 'together');

// comparing string values - === and !== work with strings, too

console.log('same' === 'same');
console.log('same' !== 'different');

/* 
    - A method is action that can be performed on a value
    - Different types have different built-in methods

        <value>.<name of method>(<args, if any>)
*/

// STRING METHODS 

// toUpperCase

 console.log('so happy' .toUpperCase());

// what if we forget to invoke a method?

console.log('so happy'.toUpperCase);

// toLowerCase

console.log('SHH BE QUIET' .toLowerCase());

// RECAP

/*
    - what is a value?
    a number, a string limit, a function are individual values
    
    - what is a type?
    types represent the thing that the value is. instrinsic properties shared
    of all values. use a typeof operator.

    - typeof operator
    an operator that takes a type, a value, and returns the type as a string.

    returns the data type of its operand in the form of a string. 
    The operand can be any object, function, or variable. Syntax: typeof operand

    - Number type

    - Boolean type

    - String type

    */