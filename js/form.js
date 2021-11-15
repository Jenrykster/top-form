const pass = document.querySelector('#pswd-input');
const passConf = document.querySelector('#pswd-conf-input');
const button = document.querySelector('.button');

confirmPass();

button.addEventListener('click', (e) => {
    confirmPass();
})

function confirmPass(){
    if(pass.value === passConf.value && pass.value != ""){
        passConf.setCustomValidity("");
    }else{
        passConf.setCustomValidity("Passwords are not equal");
    }
}