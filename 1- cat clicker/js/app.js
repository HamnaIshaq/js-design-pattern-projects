const cat = document.querySelector('.cat-img-container');
const catClickedAmount = document.querySelector('.cat-clicked-amount');

cat.addEventListener('click', catClicked, false);

function catClicked() {
  catClickedAmount.textContent = parseInt(catClickedAmount.textContent) + 1;
}