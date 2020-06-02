let menuBtn = document.getElementById('menu-btn');
let extractedNav = document.getElementById('extract');
let menuBar = document.getElementById('bar');
let age = document.getElementById('age');
let toggled = false;
// Modal  
let imgs = document.querySelectorAll('.resize');
let modalLayer = document.getElementById('modal-layer');
// Form contact page
let submitForm = document.getElementById('submit-form');
let inputValues = document.getElementsByClassName('form-value');
let errorField = document.getElementById('errors');

// Listen if click event is triggered on the menu button
menuBtn.addEventListener('click', toggleNav);

// Listen if clicked outside modal
if (document.body.contains(modalLayer)) {
  modalLayer.addEventListener('click', (e) => {
    console.log('klik');
    if (e.target.id == 'modal-layer' || e.target.id == 'close-modal') {
      modalLayer.style.display = 'none';
    }
  });
}

// Listen if submit button from form has been pressed
if (document.body.contains(submitForm)) {
  submitForm.addEventListener('click', (e) => {
    e.preventDefault();
    // Convert htmlCollection to array with spread opperator
    var values = [...inputValues];
    let errors = [];
    values.map((el, i) => {
      if (el.value == '') {
        if (i == 0) {
          errorField.innerHTML += '<li class="err">First name is required.</li>';
          errors.push('First name is required.');
        }
        if (i == 1) {
          errorField.innerHTML += '<li class="err">Last name is required.</li>';
          errors.push('Last name is required.');
        }
        if (i == 2) {
          errorField.innerHTML += '<li class="err">Email is required.</li>';
          errors.push('Email is required.');
        }
        if (i == 3) {
          errorField.innerHTML += '<li class="err">Message is required.</li>';
          errors.push('Message is required.');
        }
      }  
    });
  });
}


// Calculate age
if (document.body.contains(age)) {
  console.log('contains age');
  age.innerHTML = calcualteAge();
}

// Set makeImgBigger function for each image with own src
for (const img of imgs) {
  img.onclick = makeImgBigger;
}


// =================== FUNCTIONS ===================
function makeImgBigger() {
  let insertLayer = document.getElementById('insert-modal');
  let modalLayer = document.getElementById('modal-layer'); 
  let modal = document.getElementById('modal');
  modal.innerHTML = '<img class="centerX resize modal-img" src=' + this.src +  ' /><i class="fas fa-times" id="close-modal"></i>';
  insertLayer.append(modal);
  modalLayer.style.display = 'block';
  // let src = this.src;
  // console.log(src);
}

function toggleNav() {
  toggled = !toggled;
  if (toggled) {
    extractedNav.id = 'show';
    console.log('open');
  } else {
    extractedNav.id = 'hide';
    console.log('close');
  }
}

function calcualteAge() {
  let yearOfBirth = 1999;
  let date = new Date();
  let yearATM = date.getFullYear();

  let month = date.getMonth();
  let day = date.getDate();

  if (month < 12) {
    return yearATM - yearOfBirth - 1;
  } else if (month == 12) {
    if (day >= 4) {
      return yearATM - yearOfBirth;
    } else {
      return yearATM - yearOfBirth - 1;
    }
  }
}