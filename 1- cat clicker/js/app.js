let catsImgContainer = document.querySelector('.cat-img-container');

let catInfo = [
  { 
    name: 'Fluffy',
    img: './assets/cat-1.png'
  },
  { 
    name: 'Kitty',
    img: './assets/cat-1.png'
  }
]

for(let catNum = 0; catNum < catInfo.length; catNum++) {

  let catContent = `
    <p>${ catInfo[catNum].name }</p>

    <div class="cat-img-wrapper">
      <img class="cat-img" src="${ catInfo[catNum].img }" alt="cat">
    </div>

    <p class="cat-clicked">Cat Clicked: <span class="cat-clicked-amount">0</span> </p>
  `;

  let catContainer = document.createElement('div');
  catContainer.innerHTML = catContent;

  catsImgContainer.appendChild(catContainer);
}

const cats = document.querySelectorAll('.cat-img-wrapper');

cats.forEach(cat => {
  cat.addEventListener('click', catClicked, false);
})

function catClicked(e) {
  let catClickedAmount = e.target.parentElement.parentElement.children[2].children[0];
  catClickedAmount.textContent = parseInt(catClickedAmount.textContent) + 1;
}