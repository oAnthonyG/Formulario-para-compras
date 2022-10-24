const buttonSub = document.querySelector('.sub');
const num = document.querySelector('.num');
const buttonPlus = document.querySelector('.plus');

const msgError = document.querySelector('.msg-error')

const span = document.querySelectorAll('.checkmark')

const form = document.querySelector('.form');


function validate() {
  let valid = false;

  if (document.getElementById('react').checked) {
    valid = true;
  } else if (document.getElementById('vue').checked) {
    valid = true;
  } else if (document.getElementById('angular').checked) {
    valid = true;
  }

  if (valid) {
    span.forEach((stikers)=>{
      stikers.classList.remove('error')
      msgError.style.display='none'
    });
  } else {
    span.forEach((stikers) =>{
      stikers.classList.add('error')
    msgError.style.display='block'})
      return false;
  }
}


buttonPlus.addEventListener('click', () => {
  num.value = parseInt(num.value) + 1
});

buttonSub.addEventListener('click', () => {
  if (num.value <= 0) {
    num.value = 0
  }
  else {
    num.value = parseInt(num.value) - 1
  }
});

