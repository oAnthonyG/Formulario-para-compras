const buttonSub = document.querySelector('.sub');
const num = document.querySelector('.num');
const buttonPlus = document.querySelector('.plus');

buttonPlus.addEventListener('click', (event)=>{
  num.value = parseInt(num.value) + 1
});

buttonSub.addEventListener('click', (event)=>{
  if(num.value <= 0){
    num.value = 0
  }
  else{
    num.value = parseInt(num.value) - 1
  }
});