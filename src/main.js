// Layer One
const layerOne = document.getElementById('layer-one');
const myButtons = document.getElementsByClassName('block');

// Layer Two
const layerTwo = document.getElementById('layer-two');
const myButtonsLayerTwo = document.getElementsByClassName('block-2');

// Layer Three
const layerThree = document.getElementById('layer-three');
const myButtonsLayerThree = document.getElementsByClassName('block-3');

// Random Quote layer
const layerFour = document.getElementById('hiddenPopup');
const myRandomQuote = document.getElementsByClassName('random-quote');



// Pick Color
function loopThrough() {
  const changeColor = () => {
    this.classList.toggle('grey');
  };
  for (let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};


// Swap Layer
function changeLayer() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  }
  setTimeout(swap, this.textContent.length * 2 * 1000);
};


// Pick Number
function loopThroughNumbers() {
  const changeNumber = () => {
    this.classList.toggle('grey');
  };
  for (let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeNumber, i * 1000);
  }
};


// Swap Layer
function changeLayerThree() {
  const swapNumbers = () => {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  }
  setTimeout(swapNumbers, this.textContent.length * 2 * 1000);
};


// Pick Another Number
function loopThroughNumbersAgain() {
  const changeNumberAgain = () => {
    this.classList.toggle('grey');
  };
  for (let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeNumberAgain, i * 1000);
  }
};


// Swap Layer changeNumberAgain
function changeLayerFour() {
  const swapQuote = () => {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');
  }
  setTimeout(swapQuote, this.textContent.length * 2 * 1000);
};


for (let i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
  myButtonsLayerTwo[i].addEventListener('click', loopThroughNumbers);
  myButtonsLayerTwo[i].addEventListener('click', changeLayerThree);
  myButtonsLayerThree[i].addEventListener('click', loopThroughNumbersAgain);
  myRandomQuote[i].addEventListener('click', changeLayerFour);
}
