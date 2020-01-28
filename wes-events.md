# Events

## Event Listener
Listens for when an event happens and react to them. You can attach event listeners to all elements (even document or window)
    
````javascript

    function handleClick(){
      console.log('clicked');
    }
    
    const btn = document.querySelector('.button);
    btn.addEventListener('click', handleClick)
    
    btn.removeEventListener('click', handleClick); // unbinding the callback function from the element
````
A callback function is a function we pass to a method and it will be called at a later moment in time

## Listen for events on multiple elements

````javascript
const buttons = document.querySelectorAll('.button');

function anotherFunction(){
  console.log('Another');
}

buttons.forEach(button => button.addEventListener('click', anotherFunction))

````

## Event object
To access the event object we modified our callback function so it receives a param that is the event which has ocurred

````javascript
    function handleClick(event){
      console.log(event) // PoninterEvent
    }
````

* isTrusted -> will be false if you fake an event
* target.dataset -> you could access html data tags (the thing that actually got clicked)
* currentTarget (the thing that fired the event listener)
