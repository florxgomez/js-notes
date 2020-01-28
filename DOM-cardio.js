const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
document.body.appendChild(myDiv);

const list = document.createElement('ul');
const item1 = document.createElement('li');
const item2 = document.createElement('li');
const item3 = document.createElement('li');

item1.textContent = 'One';
item2.textContent = 'Two';
item3.textContent = 'Three';

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);

myDiv.appendChild(list);

const myImg = document.createElement('img');
myImg.src = "http://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png";
myImg.width = 250;
myImg.classList.add('cute');
myImg.alt = "Cute Puppy";

myDiv.appendChild(myImg);

const myHTML = `
    <div class="myDiv">
      <p>1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna in nisi tristique pellentesque sed vitae elit. Vestibulum hendrerit tortor eget risus sodales volutpat. Vivamus vel ornare leo. Etiam pharetra viverra justo, vitae convallis nunc viverra dignissim. Mauris ut odio porttitor, posuere erat laoreet, interdum lacus. Praesent dictum, nisi.</p>
      <p>2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at urna in nisi tristique pellentesque sed vitae elit. Vestibulum hendrerit tortor eget risus sodales volutpat. Vivamus vel ornare leo. Etiam pharetra viverra justo, vitae convallis nunc viverra dignissim. Mauris ut odio porttitor, posuere erat laoreet, interdum lacus. Praesent dictum, nisi.</p>
    </div>`;

list.insertAdjacentHTML('beforebegin', myHTML);

const otherDiv = document.querySelector('.myDiv');
otherDiv.childNodes[3].classList.add('warning');
otherDiv.firstElementChild.remove();

function generatePlayerCard(name, age, height) {
    const html = `
            <div class="playerCard">
              <h2>${name} - ${age}</h2>
              <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age*7}. That would be a tall dog!</p>
              <button class="delete" type="button">&times; Delete</button>
            </div>
            `
        return html;
}

const newDiv = document.createElement('div');
newDiv.classList.add('cards');

const cards = `
        ${generatePlayerCard('Flor', 31, 160)}
        ${generatePlayerCard('Juli', 24, 165)}
        ${generatePlayerCard('Meli', 26, 160)}
        ${generatePlayerCard('Meli', 26, 160)}
    `;

newDiv.innerHTML = cards;
myDiv.insertAdjacentElement('beforebegin', newDiv);

const playerCard = document.querySelector('.playerCard')
const buttons = document.querySelectorAll('.delete');

function deleteCard(event){
  event.currentTarget.parentElement.remove()
  //event.currentTarget.closes('.playerCard').remove()
}

buttons.forEach(button => button.addEventListener('click', deleteCard))

