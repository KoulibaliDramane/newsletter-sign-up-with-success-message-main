const submitButton = document.getElementById('submitButton');
let emailInput = document.getElementById('email');
let errorMessage = document.getElementById('right');

let container = document.querySelector('.container');
let thanksPage = document.getElementById('thanksPage');
let email = emailInput.value;

submitButton.addEventListener('click', function (){
    email = emailInput.value;
    let validEmail = email.includes('@');
    if (validEmail){
        emailMessage.innerText = emailInput.value;
        container.style.display = 'none';
        thanksPage.style.display = 'block';

    }else {
        emailInput.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        errorMessage.style.display = 'block';
    }
})

let dismiss = document.getElementById('dismiss');
let emailMessage = document.getElementById('emailMessage');

dismiss.addEventListener('click', function (){
    if (window.matchMedia("(max-width: 600px)").matches) {
        container.style.display = 'block';
    } else {
        container.style.display = "flex";
    }
    thanksPage.style.display = 'none';
})