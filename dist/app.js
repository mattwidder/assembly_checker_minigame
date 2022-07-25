// Button variables

const greyBtn = document.querySelector('.btn-grey');


const blackBtn = document.querySelector('.btn-black');

const driverBtn = document.querySelector('.btn-driver');

const passBtn = document.querySelector('.btn-passenger');

const checkBtn = document.querySelector('.btn-submit');

// correct/error messages

const error = document.getElementById('error-message');

const correct = document.getElementById('correct-message');

correct.style.display = 'none'

error.style.display = 'none'
  
// btn toggles
let seat = 0;
let color = 0;
let grey = false;

greyBtn.addEventListener('click', () => {
  grey = !grey;
  
  if(grey === true) {
    greyBtn.classList.add('active')
    blackBtn.classList.remove('active')
    color = -1;
  } else {
    greyBtn.classList.remove('active')
    color = 0;
  }
});


let black = false;

blackBtn.addEventListener('click', () => {
  black = !black;
  
  if(black === true) {
    blackBtn.classList.add('active')
    greyBtn.classList.remove('active')
    color = 0;
  } else {
    blackBtn.classList.remove('active')
    color = 0;
  }
});

let driver = false;

driverBtn.addEventListener('click', () => {
  driver = !driver;
  
  if(driver === true) {
  driverBtn.classList.add('active')
  passBtn.classList.remove('active')
    seat = 1;
  } else {
    driverBtn.classList.remove('active')
    seat = 0;
  }
});

let pass = false;

passBtn.addEventListener('click', () => {
  pass = !pass;  
  if(pass === true) {
  passBtn.classList.add('active')
  driverBtn.classList.remove('active')
    seat = 3;
  } else {
    passBtn.classList.remove('active')
    seat = 0;
  }
});





// Random image generation

window.onload = choosePic;

let myPix = [];

myPix.push(["./assets/grey_driver.png",]);
myPix.push(["./assets/black_driver.png", ]);
myPix.push(["./assets/grey_passenger.png", ]);
myPix.push(["./assets/black_passenger.png", ]);

let randomNum = Math.floor(Math.random() * myPix.length);
function choosePic() {
     
     document.getElementById("seat__image").src = myPix[randomNum];
     console.log(randomNum);
}

// check if correct

checkBtn.addEventListener('click', function(e){
  if((color + seat) === randomNum) {
    console.log('correct')
    correct.style.display = 'inline-block'
    error.style.display = 'none'

    setTimeout(function(){
      window.location.reload();
   }, 1500);
  } else {
    console.log('incorrect')
    correct.style.display = 'none'
    error.style.display = 'inline-block'
  }
  
});