const input = document.querySelector('.login__input');
const button = document.querySelector('.login__buttons');
const form = document.querySelector('.login-form');

const ValidateInput = ({ target }) =>{
    if(target.value.length >2){
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute("disabled", ' ');
}
const handleSubmit = (event) =>{

    event.preventDefault();
    localStorage.setItem('player', input.value);
    
    window.location ='pages/game3.html';

}

input.addEventListener('input', ValidateInput);
 form.addEventListener('submit', handleSubmit);