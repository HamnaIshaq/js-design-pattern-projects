// model
let model = {
  init: function() {
    this.data = [
      { id: 1, name: 'cat 1', img: './assets/cat-1.png', clickCount: 0 },
      { id: 2, name: 'cat 2', img: './assets/cat-2.png', clickCount: 0 },
      { id: 3, name: 'cat 3', img: './assets/cat-3.png', clickCount: 0 },
      { id: 4, name: 'cat 4', img: './assets/cat-4.png', clickCount: 0 },
      { id: 5, name: 'cat 5', img: './assets/cat-5.png', clickCount: 0 },
    ];
  },
  getCatList: function() {
    return this.data;
  },
  increment: function() {
    this.data.forEach(item => {
      if(item === octopus.getCurrentCat()) {
        item.clickCount++;
      }
    })
  },
}

let octopus = {
  // communicate between model and view to get cat list data
  fetchCatList: function () {
    return model.getCatList();
  },
  init: function() {
    model.init();
    viewCatList.init();
    this.currentCat = this.fetchCatList()[0];
    viewClickedCat.init();
  },
  getCurrentCat: function() {
    return this.currentCat;
  },
  incrementCatClick: function() {
    model.increment();
    viewClickedCat.render();
  },
  changeCat: function(clickedCatId) {
    let catList = octopus.fetchCatList();
    catList.forEach(cat => {
      if(cat.id === parseInt(clickedCatId)) {
        this.currentCat = cat;
      }
    })
    viewClickedCat.render();
  }
}

let viewCatList = {
  // get cat list container
  init: function() {
    this.catListContainer = document.querySelector('.cat-list');
    viewCatList.render();
    viewCatList.bindEvents();
  },
  bindEvents: function() {
    this.catListContainer.addEventListener('click', function(e) {
      let clickedCatId = e.target.getAttribute('data-id')
      octopus.changeCat(clickedCatId);
    }, false);
  },
  // render cat list on page
  render: function() {
    let catListItem = '';
    let catList = octopus.fetchCatList();
    catList.forEach(cat => {
      catListItem += `
        <li>
          <button data-id="${cat.id}">${cat.name}</button>
        </li>
      `;
    })
    let catListContainer = document.createElement('ul');
    catListContainer.innerHTML = catListItem;
    this.catListContainer.appendChild(catListContainer);
  } 
}

let viewClickedCat = {
  init: function() {
    this.catImgContainer = document.querySelector('.cat-img-container');
    viewClickedCat.bindEvents();
    viewClickedCat.render();
  },
  bindEvents: function() {
    this.catImgContainer.addEventListener('click', function() {
      octopus.incrementCatClick();
    }, false);
  },
  render: function() {
    let clickedCat = octopus.getCurrentCat();
    
    this.catImgContainer.innerHTML = '';
    
    let clickedCatContent = `
      <p>${ clickedCat.name }</p>

      <div class="cat-img-wrapper">
        <img class="cat-img" src="${ clickedCat.img }" alt="cat">
      </div>

      <p class="cat-clicked">Cat Clicked: <span class="cat-clicked-amount">${clickedCat.clickCount}</span> </p>
    `;
    
    let catContainer = document.createElement('div');
    catContainer.innerHTML = clickedCatContent;
    this.catImgContainer.appendChild(catContainer);
  }
}

octopus.init();