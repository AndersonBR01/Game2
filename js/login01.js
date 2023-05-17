const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');


const validateInput = ({target}) =>{
    if (target.value.length > 3 ){
        button.removeAttribute('disabled');
        return
    }
    button.setAttribute('disabled', ' ')
};

const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'

    console.log(input.value);
    alert("Logando, tirar depois o alert.");
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);