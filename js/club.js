const btn1 = document.getElementsByClassName('btn-1')[0];
const btn2 = document.getElementsByClassName('btn-2')[0];
const btn3 = document.getElementsByClassName('btn-3')[0];
const btn4 = document.getElementsByClassName('btn-4')[0];
const btn5 = document.getElementsByClassName('btn-5')[0];

btn1.addEventListener('click',() => {
  let element = document.querySelectorAll("main .container .accordion .answer")[0];
  let valor = window.getComputedStyle(element).maxHeight;
  if (valor == '0px')
    element.style.maxHeight = '20rem';
  else 
    element.style.maxHeight = '0';
}, false);

btn2.addEventListener('click',() => {
  let element = document.querySelectorAll("main .container .accordion .answer")[1];
  let valor = window.getComputedStyle(element).maxHeight;
  if (valor == '0px')
    element.style.maxHeight = '20rem';
  else 
    element.style.maxHeight = '0';
}, false);

btn3.addEventListener('click',() => {
  let element = document.querySelectorAll("main .container .accordion .answer")[2];
  let valor = window.getComputedStyle(element).maxHeight;
  if (valor == '0px')
    element.style.maxHeight = '20rem';
  else 
    element.style.maxHeight = '0';
}, false);

btn4.addEventListener('click',() => {
  let element = document.querySelectorAll("main .container .accordion .answer")[3];
  let valor = window.getComputedStyle(element).maxHeight;
  if (valor == '0px')
    element.style.maxHeight = '20rem';
  else 
    element.style.maxHeight = '0';
}, false);

btn5.addEventListener('click',() => {
  let element = document.querySelectorAll("main .container .accordion .answer")[4];
  let valor = window.getComputedStyle(element).maxHeight;
  if (valor == '0px')
    element.style.maxHeight = '20rem';
  else 
    element.style.maxHeight = '0';
}, false);
