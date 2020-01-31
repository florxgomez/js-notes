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
* type -> the type of the event
* bubbles -> if stopPropagation was called or not
* key -> keycode.info

**Stop the event from bubbling up**

It stops the bubbling of an event to parent elements, preventing any parent handlers from being notified of the event
````javascript
    event.stopPropagation();
```` 

**Counting how many times an event was triggered**

````javascript
    img.addEventListener('mouseenter', function(e){
      console.count(e.currentTarget);
    })
```` 

## Prevent Default
There are some HTML elements that have default functionality when they are actioned, you can stop this default action of the browser by calling `event.preventDefault();`. For example:
````javascript
    myLink.addEventListener('click', function(e){
      const shouldRedirect = confirm('Do you want to proceed?');
      if(!shouldRedirect){
        event.preventDeafult();
      }
    });
    
    /*Submiting a form which has a attribute name="signup"*/
    const signupForm = document.querySelector('[name="signup"]');
    signupForm.addEventListener('submit', function(event){
      event.preventDefault();
      /*input validations*/
    })
```` 
## Event types
* keyup
* keydown
* focus
* blur

### Difference between buttons and links
* **Buttons** are to be used for actions that happen inside of an application, for an action within your application
* **Links** are used to change the page

If you have a valid reason to make a link a button, add `role="button" tabindex="0"` to the HTML and from JS:
````javascript
  function handleClick(e){
    if(event.type === 'click' || event.key === 'Enter'){
      console.log('You click')
    }
  }
  myImg.addEventListener('keyup', handleClick);
  myImg.addEventListener('click', handleClick);
```` 
