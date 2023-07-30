const buttons = document.getElementsByClassName("opnModal");
console.log(buttons)
const [btn1, btn2, btn3, btn4, btn5] = buttons;
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

//Função de callBack para disparar apos click
const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
}

//Ouvinte no elemento
[btn1, btn2, btn3, btn4, btn5, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
}); 

