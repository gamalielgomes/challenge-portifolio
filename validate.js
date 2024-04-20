const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const label_nome = document.querySelectorAll('.label__nome');
const label_email = document.querySelectorAll('.label__email');
const container = document.querySelectorAll('.container__label__input');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i;

function error(index){
    container[index].style.border = '2px solid #e63636';
    label_nome[index].style.display = 'block'
}

function removeError(index){
    container[index].style.border = '2px solid #4FF001';
    label_nome[index].style.display = 'none'
}

function emailError(index) {
    label_email[index].style.display = 'block'
    container[index].style.border = '2px solid #e63636';
}

function emailRemoveError(index) {
    label_email[index].style.display = 'none'
    container[index].style.border = '2px solid #4FF001';
}


function nomeValidate(){
    
    if(campos[0].value.length < 3){
        error(0);
    }

    else {
        removeError(0);
    }
}

function emailValidate() {
    if(!emailRegex.test(campos[1].value)) {
        emailError(0);
    }

    else {
        emailRemoveError(0);
    }

}