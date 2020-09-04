// YOUR CODE BELOW

// 01 Simple Sum

const simpleSum = (numOne, numTWo) => {
    return numOne + numTWo
}

//OR

const simpleSum = (numOne, numTwo) => numOne + numTwo;

// 01 Finder Founder

// YOUR CODE BELOW

let foundValues = name

if (name === 'David' || name === 'Nimit' ) {
  found = true;
};

if (name === 'Someone else') {
 found = false;
};

// 01 Greeting

// YOUR CODE BELOW

const greeting = (name) => {
    if (name)  {
    return `Hello ${name}!`;
    }
  return 'Hello!'
  };

  // 02 

// 02 Variable Assignment 



// 02 Must be Perfect 

// YOUR CODE BELOW


if (word[0] === 'p') {
    lastWord = word.toUpperCase();
   } else {
    lastWord = word;
   }
    
// 03 Do You Play The Theremin

// YOUR CODE BELOW


const doYouPlayTheTheremin = (name) => { 
    if (name[0] === 'S' || name[0] === 's') {
    
       return true; 
  }
    
    return false;
  }
  
  


// 03 Tax Calculator

// YOUR CODE BELOW

const taxCalculator = (item, state) => {
    switch (state) {
      case 'NY':
        return item * 1.04
      case 'NJ':
        return item * 1.06625
        
      default: 
        return item;
    }
 }

// 03 Truth Teller 

// YOUR CODE BELOW

if (boolean1 && boolean2 === true)  {
    result = 'both'
  } else if (boolean1 || boolean2 === true)  {
    result = 'one'
  };
  
  if (boolean1 && boolean2 === false)  {
    result = 'none'
  };


// 03 My Mnemonic

// YOUR CODE BELOW


const myMnemonic = (firstWord, secondWord, thirdWord, fourthWord) => {
   let mnemonic '':
   
if (firstWord !== undefined) mnemonic += firstWord [0];
if (secondWord !== undefined) mnemonic += secondWord [0];
if (thirdWord !== undefined) mnemonic += thirdWord [0];
if (fourthWord !== undefined) mnemonic += fourthWord [0];
  
  return mnemonic;
}

// OR

const myMnemonic = (...words) => {
    let mnemonic = '';
    
    for (let i = 0; i < words.length; ++i){
      const currentWord = words[i];
      const currentCharacter = currentWord[0];
      
      mnemonic += currentCharacter;
  }
    return mnemonic;
  }
  

// 02 Default Greet

// YOUR CODE BELOW


const defaultGreet = (firstName, lastName) => {
  if (lastName === undefined) {
    lastName = 'Doe';
  }
    return 'Hi ' + firstName + ' ' + lastName + '!';
}

// OR

const defaultGreet = (firstName, lastName = 'Doe') => `Hi ${firstName} ${lastName}!`;

//04 Express Guess

// YOUR CODE BELOW

const myGuess = 400;

describe("myGuess", function() {

  it("should be a number", function() {
    expect(typeof myGuess).toEqual('number');
  });

  it("should be the right value", function() {
    expect(myGuess).toEqual(400);
  });

});


// 05 Take The  Shotgun

// YOUR CODE BELOW

happyNum += -995;

describe("happyNum", function() {

  it("should be equal to 5", function() {
    expect(happyNum).toEqual(5);
  });

});