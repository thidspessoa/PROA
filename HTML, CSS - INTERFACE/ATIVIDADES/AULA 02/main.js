const showPassword = () => {

    //console.log('Olá, mundo!')
    let inputPass = document.getElementById('passwordCamp');
    let btnShowPass = document.getElementById('btnPassword');



    if (inputPass.type === 'password') {
        inputPass.setAttribute('type','text');
        //muda o atributo da tag/classe, nesse caso mudamos o atributo type

        btnShowPass.classList.replace('bi-eye','bi-eye-slash');
        //substitui uma classe do nosso elemento/tag, primeira classe é a que será substituida
    } else {
        inputPass.setAttribute('type','password');

        btnShowPass.classList.replace('bi-eye-slash','bi-eye');

    }
} 