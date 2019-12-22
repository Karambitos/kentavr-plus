const popUp = document.querySelector(".range__popUp--button");
const popUpItems = document.querySelector(".range__popUp");
// const backFace = document.querySelectorAll(".back-face");
// const frontFace = document.querySelectorAll(".front-face");


popUp.addEventListener('click', (event) => {
    event.preventDefault();
    popUpItems.classList.toggle("modal-show")   
});

