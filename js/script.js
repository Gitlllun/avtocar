(function () {
  // 1 БЛОК
  var buttonSlider = document.querySelectorAll('.slider__button');
  var offerSlider = document.querySelectorAll('.slider__item');
  
  var moveCar = function (number) {
    if (offerSlider[number  ].classList.contains('visible')) {
      offerSlider[number].classList.remove('visible');
      offerSlider[number].classList.add('hidden');
      offerSlider[number].nextElementSibling.classList.remove('hidden');
      offerSlider[number].nextElementSibling.classList.add('visible');
    }
  };
  
  buttonSlider[0].addEventListener('click', function (evt) {
    evt.preventDefault();
    moveCar(0);
  });
  
  buttonSlider[1].addEventListener('click', function (evt) {
    evt.preventDefault();
    moveCar(1);
  });
  
  buttonSlider[2].addEventListener('click', function (evt) {
    evt.preventDefault();
    moveCar(2);
  });
  
  buttonSlider[3].addEventListener('click', function (evt) {
    evt.preventDefault();
    moveCar(3);
  });
  
  // 2 БЛОК
  var fullTime = document.querySelector('.full-time');
  var distance = document.querySelector('.distance');
  var buttonLeft = document.querySelector('.format__button--left');
  var buttonRight = document.querySelector('.format__button--right');
  
  var onChoiceClick = function (up, down) {
    up.style.opacity = '1';
    up.style.zIndex = '1';
    down.style.opacity = '0.5';
    down.style.zIndex = '0';
  };
  
  buttonLeft.addEventListener('click', function (evt) {
    evt.preventDefault();
    onChoiceClick(fullTime, distance);
  });
  
  buttonRight.addEventListener('click', function (evt) {
    evt.preventDefault();
    onChoiceClick(distance, fullTime);
  });
})();