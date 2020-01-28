# The Document Object Model
## document
It represents a web page loaded in the browser and serves as an entry point into the page's content (the DOM)

## Selecting elements
```javascript
    document.querySelector('p'); // first matchig 
    document.querySelectorAll('.item'); // all in a NodeList
```
## Element properties and methods
```javascript
    const heading = document.querySelector('h2');
    heading.textContent = 'Flor'; // set textContent property on that element
    heading.innerHTML // 'Flor'
    heading.outerHTML // <h2>Flor</h2>
    heading.insertAdjacentText('beforeend', '🍕');
```
## Working with classes
```javascript
    const pic = document.querySelector('.nice');
    pic.classList // DOMTokenList with all the classes that it has applied
    pic.classList.add('picture');
    pic.classList.remove('nice');
    pic.classList.contains('nice'); // false
    
    function toggleRound(){
      pic.classList.toggle('round'); /* adds the class if it doesn't have it, removes it if it has it
    }
    
    pic.addEventListener('click', toggleRound)
```   
## Data attributes
```javascript
    pic.alt = 'image description';
    pic.width = 200;
    pic.naturalWidth
    
    pic.getAttribute('alt') // image description
    pic.setAttribute('alt', 'description'
    
    <img class = "custom" data-name="flor" src="">
    const custom = document.querySelector('.custom')
    custom.dataset // DOMStringMap {name: flor}
```    
## Creating HTML
```javascript
    const myParagraph = document.createElement('p');
    myParagraph.textContent = 'I am a p';
    
    const myImage = document.createElement('img')
    myImage.src = 'https://picsum.photos/500';
    myImage.alt = 'Nice photo';
    
    const myDiv = document.createElement('div');
    myDiv.classList.add('wrapper');
    
    myDiv.appendChild(myParagraph);
    myDiv.appendChild(myImage);
    document.body.appendChild(myDiv); // only one touch of the DOM
```
## HTML from Strings
Be aware of XSS (Cross-site scripting)!
```javascript
    const item = document.querySelector('.item');
    const myHTML = `
      <div>
        <h1> Hey how are ya?!</h1>
      </div>
      `; // this is just a string, not an element. It becomes an element when it is attached to the DOM by innerHTML
    item.innerHTML = myHTML;
 ```   
**Turn a string into a DOM element**
```javascript
    const myFragment = document.createRange().createContextualFragment(myHTML); // this creates a Range, which is a part of the HTML we can work with, and then a document-fragment is created (an HTML element)
    document.body.appendChild(myFragment);
```
## Traversing 
**For elements:**
* children
* firstElementChild
* lastElementChild
* previousElementChild
* nextElementSibling
* parentElement

**For Nodes:**
* childNodes
* firstChild
* lastChild
* previousSibling
* nextSibling
* parentNode

## Removing 
    .remove()
