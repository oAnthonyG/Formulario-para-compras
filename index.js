const buttonSub = document.querySelector('.sub');
const num = document.querySelector('.num');
const buttonPlus = document.querySelector('.plus');
const msgError = document.querySelector('.msg-error')
const span = document.querySelectorAll('.checkmark')

const form = document.querySelector('.form');

const buttonSubmit = document.querySelector('.button')

function validate() {
  let valid = false;
  let numInput = document.getElementById('numInput').value
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
  
  if(numInput == "0"){
    num.style.background='#F59393'
    return false;
  } else{
    num.style.background='#dde3e9'
    return true
  };
  
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


buttonSubmit.addEventListener('click', (event)=>{
const formText = document.getElementById('formText')

  event.preventDefault();
  
  
  if(validate() == true){
    formText.style.opacity='1'
    setTimeout(function(){
      window;location.reload();
    }, 3000);
  }
})