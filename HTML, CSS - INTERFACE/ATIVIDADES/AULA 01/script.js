const openModallButton = document.querySelector(".opnModal");
const closeModallButton = document.querySelector("#closeModal");
const modal = document.querySelector(".modal");
const fade = document.querySelector(".fade");

const toggleModall= () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}


[openModallButton, closeModallButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModall());
}); 