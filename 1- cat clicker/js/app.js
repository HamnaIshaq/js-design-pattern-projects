let catsImgContainer = document.querySelector('.cat-img-container');

let catInfo = [
  { 
    name: 'Fluffy',
    img: './assets/cat.png'
  },
  { 
    name: 'Kitty',
    img: './assets/cat.png'
  }
]

for(let catNum = 0; catNum < catInfo.length; catNum++) {

  let catContent = `
    <p>${ catInfo[catNum].name }</p>
    <div class="cat-img-wrapper">
      <img class="cat-img" src="${ catInfo[catNum].img }" alt="cat">
    </div>
  `;

  let catContainer = document.createElement('div');
  catContainer.innerHTML = catContent;

  catsImgContainer.appendChild(catContainer);
}

const cats = document.querySelectorAll('.cat-img-wrapper');
const catClickedAmount = document.querySelector('.cat-clicked-amount');

cats.forEach(cat => {
  cat.addEventListener('click', catClicked, false);
})

function catClicked() {
  catClickedAmount.textContent = parseInt(catClickedAmount.textContent) + 1;
}