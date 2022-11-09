const cat = document.querySelector('.cat-img-container');
const catClickedAmount = document.querySelector('.cat-clicked-amount');
const audioMeow = document.querySelector('#audio-meow');

cat.addEventListener('click', catClicked, false);

function catClicked() {
  catClickedAmount.textContent = parseInt(catClickedAmount.textContent) + 1;
}