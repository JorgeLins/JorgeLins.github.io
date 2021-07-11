const buttonRight = window.document.querySelector('.button-arrow.-right');
const buttonLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let speed = 10;


buttonRight.addEventListener('click', function(){
    speed = speed + 100;
    elements.style = `transform:translateX(${speed}px)`

});

buttonLeft.addEventListener('click', function(){
    speed = speed - 100;
    elements.style = `transform:translateX(${speed}px)`

});