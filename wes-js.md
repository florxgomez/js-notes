## Variables
```javascript
    dog = "firulais";
    dog;
    "firulais"

    'use strict'; /*strict mode*/
    pet = 'dog';
    Uncaught ReferenceError: pet is not defined
```
 var variables are scoped differently than let and const
 * **var** variables are function scoped variables (only available inside the parent function)
 * **let** and const are block scoped variables {}

### ESLint - checks issues with your code
/*eslint-disable*/

### Prettier - formatting your code

## Types
* String
* Number
* Boolean
* Null - explicity say a value of nothing
* Undefined - a variable has been created but a value was not set to it
* Symbol - for unique identifiers or properties
* Object

**Escaping**
```javascript
    const sentence = 'she\'s so cool';
```
**Floating point math**
```javascript
    window.location = `https://${0.1+0.2}.com`;
```
=== checks value and type are the same
```javascript
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: 'smooth'
    })
```
## Functions

Params => placeholders

Args => actual values

**Function definition** -> they are hoisted: "they are put at the top of the file", you can run a function before it is defined
```javascript   
    function functionName(params = default){
    }

    functionName(args)
    /* The function will default back if the args are undefined */
```
**Function expression**: store a function as a value in a variable -> function not hoisted, it only hoists the variable
 ```javascript   
    const functionName = function(){
    //
    }
```
**Arrow functions**
```javascript
    const functionName = () => {
    //
    }
``` 
**IIFE** - Immediately invoked function expression
```javascript    
    (functionName(){
     //
    })();
```
## Debugging

**Console Methods**
```javascript
    console.log()
    console.error()
    console.warn()
    console.table()
    console.count()
    console.group() - console.groupEnd()
    console.groupCollapsed()
```    
**Grabbing elements**

* $0 - in the console will show the first element that was selected
* $('p') - will select the first paragraph in the page
* $$('p') - will select all paragraphs

**Breakpoint**

* Break on attribute
* Pause JS from running using Dev tools: 
`debugger;`

## Scope
### Global
* Can be accessed from any JS that's running on the page
* In the browser, the global scope is called `window`
* everyting (var variables and functions) is attached to the window object (let and const aren't)

### Function scope (var)
When variables are created inside of a function, those variables are available inside of that function

### Block scope { } (let and const)
Variables are only available inside of the block where they have been declared

## Scope lookup
```javascript   
    const dog = 'snickers';
    
    function logDog(dog){
      console.log(dog)
    }
    
    function go(){
      const dog = 'sunny';
      logDog();
    }
    go(); // 'snickers'
```    
## Hoisting

* Funcion can be called before they've been declared (for function declarations)
* JS hoists var declarations but not their value 
```javascript    
    console.log(age); // undefined
    var age = 10;
```    
 ## Closures
 Access a parent level scope from a child scope, even after the parent function has even terminated
```javascript 
    function createGame(gameName) {
        let score = 0; /* private variable for each game */
        return function win() {
          score++;
          return `Your game ${gameName} score is ${score}`;
        };
      }

      const hockeyGame = createGame('Hockey');
      const soccerGame = createGame('Soccer');
```

## BEDMAS
* Brackets
* Exponents -> 2 ** 2 = 4
* Division
* Multiplication
* Addition
* Substraction

## Flow Control
