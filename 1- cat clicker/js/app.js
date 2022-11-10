let catsImgContainer = document.querySelector('.cat-img-container');
let catNavigation = document.querySelector('.navigation');

let catInfo = [
  { 
    name: 'Fluffy',
    img: './assets/cat-1.png',
    clicked: 0
  },
  { 
    name: 'Kitty',
    img: './assets/cat-2.png',
    clicked: 0
  },
  { 
    name: 'Martin',
    img: './assets/cat-3.png',
    clicked: 0
  },
  { 
    name: 'Alexa',
    img: './assets/cat-4.png',
    clicked: 0
  },
  { 
    name: 'Poppy',
    img: './assets/cat-5.png',
    clicked: 0
  }
]

for(let catNum = 0; catNum < catInfo.length; catNum++) {

  let catList = `
    <li style="border: 1px solid #000;">
      <button>${catInfo[catNum].name}</button>
    </li>
  `;

  let catContainer = document.createElement('div');
  catContainer.innerHTML = catList;

  catContainer.addEventListener('click', function() {

    catsImgContainer.innerHTML = '';
    
    let catContent = `
      <p>${ catInfo[catNum].name }</p>

      <div class="cat-img-wrapper">
        <img class="cat-img" src="${ catInfo[catNum].img }" alt="cat">
      </div>

      <p class="cat-clicked">Cat Clicked: <span class="cat-clicked-amount">${catInfo[catNum].clicked}</span> </p>
    `;

    let catContainer = document.createElement('div');
    catContainer.innerHTML = catContent;

    catsImgContainer.appendChild(catContainer);

    const cats = document.querySelectorAll('.cat-img-wrapper');

    cats.forEach(cat => {
      cat.addEventListener('click', catClicked, false);
    })

    function catClicked(e) {
      let catClickedAmount = e.target.parentElement.parentElement.children[2].children[0];
      catClickedAmount.textContent = parseInt(catClickedAmount.textContent) + 1;
      catInfo[catNum].clicked = catClickedAmount.textContent;
    }
    
  })

  catNavigation.appendChild(catContainer);
}