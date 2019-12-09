'use strict';

// Layer One
var layerOne = document.getElementById('layer-one');
var myButtons = document.getElementsByClassName('block');

// Layer Two
var layerTwo = document.getElementById('layer-two');
var myButtonsLayerTwo = document.getElementsByClassName('block-2');

// Layer Three
var layerThree = document.getElementById('layer-three');
var myButtonsLayerThree = document.getElementsByClassName('block-3');

// Random Quote layer
var layerFour = document.getElementById('hiddenPopup');
var myRandomQuote = document.getElementsByClassName('random-quote');

// Pick Color
function loopThrough() {
  var _this = this;

  var changeColor = function changeColor() {
    _this.classList.toggle('grey');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

// Swap Layer from color to number
function changeLayer() {
  var swap = function swap() {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2 * 1000);
};

// Pick Number
function loopThroughNumbers() {
  var _this2 = this;

  var changeNumber = function changeNumber() {
    _this2.classList.toggle('grey');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeNumber, i * 1000);
  }
};

// Swap Layer from number to number
function changeLayerThree() {
  var swapNumbers = function swapNumbers() {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swapNumbers, this.textContent.length * 2 * 1000);
};

// Pick Another Number
function loopThroughNumbersAgain() {
  var _this3 = this;

  var changeNumberAgain = function changeNumberAgain() {
    _this3.classList.toggle('grey');
  };
  for (var i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeNumberAgain, i * 1000);
  }
};

// Swap Layer from numbers to quote
function changeLayerFour() {
  var swapQuote = function swapQuote() {
    layerThree.classList.add('hide');
    layerFour.classList.remove('hide');

    // Random quote code
    var quoteItems = ['You are beautiful', 'You are worthy', 'Change the world by being yourself', 'All limitations are self-imposed', 'Reality is wrong, dreams are for real', 'Strive for greatness', 'Turn your wounds into wisdom', 'Happiness depends upon ourselves', 'When words fail, music speaks', 'The meaning of life is to give life meaning'];

    var randomizeQuotes = function randomizeQuotes() {
      quoteItems.sort(function (a, b) {
        return 0.5 - Math.random();
      });

      var quoteTextNode = document.createTextNode(quoteItems[0]);

      var quotePara = document.createElement('p');
      quotePara.appendChild(quoteTextNode);
      layerFour.appendChild(quotePara);
    };
  };
  setTimeout(swapQuote, this.textContent.length * 2 * 1000);
};

for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener('click', loopThrough);
  myButtons[i].addEventListener('click', changeLayer);
  myButtonsLayerTwo[i].addEventListener('click', loopThroughNumbers);
  myButtonsLayerTwo[i].addEventListener('click', changeLayerThree);
  myButtonsLayerThree[i].addEventListener('click', loopThroughNumbersAgain);
  layerFour.addEventListener('click', changeLayerFour);
}