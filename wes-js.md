##Variables

`dog = "firulais"
 dog
 "firulais"`

    'use strict'; /*strict mode*/
    pet = 'dog';
    Uncaught ReferenceError: pet is not defined
 
 var variables are scoped differently than let and const
 * var variables are function scoped variables (only available inside the parent function)
 * let and const are block scoped variables {}

##ESLint - checks issues with your code
/*eslint-disable*/

##Prettier - formatting your code

##Types
* String
* Number
* Boolean
* Null - explicity say a value of nothing
* Undefined - a variable has been created but a value was not set to it
* Symbol - for unique identifiers or properties
* Object

Escaping \'
`const sentence = 'she\'s so cool';`

Floating point math
`window.location = `https://${0.1+0.2}.com`;`

=== checks value and type are the same

    window.scrollTo({
      top: 100,
      left: 0,
      behavior: 'smooth'
    })

##Functions
Params => placeholders
Args => actual values

    /* Function definition -> they are hoisted: "they are put at the top of the file", you can run a function before it
    is defined */
    function functionName(params = default){
    }

    functionName(args)
    /* The function will default back if the args are undefined */

    /* Function expression: store a function as a value in a variable -> function not hoisted, it only hoists the variable     */
    const functionName = function(){
    //
    }

    /* Arrow functions */
    const functionName = () => {
    //
    }
 
    /* IIFE - Immediately invoked function expression */
    (functionName(){
     //
    })();



