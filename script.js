const inputBox = document.querySelector('#input');
const submitItem = document.querySelector('#submit');
const listItems = document.querySelector('#items');

function addItem(text) {
    const newItem = document.createElement('p');
    newItem.innerText = text;
    newItem.classList.add('item');
    listItems.appendChild(newItem);
}

submitItem.addEventListener('click', (e) => {
    addItem(inputBox.value);
    inputBox.value = "";
})

listItems.addEventListener('click', (e) => {
    listItems.removeChild(e.target);
})