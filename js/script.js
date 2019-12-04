'use strict';

document.addEventListener('DOMContentLoaded', () => {
   
    {
        // Боковое меню (работа спинера)

        const spinner = document.querySelector('.spinner');
        const spinnerButton = document.querySelectorAll('.spinner-line');
        const spinerMenu = document.querySelector('.burger__menu');

        spinner.addEventListener('click', (event) => {
            event.preventDefault();
            spinerMenu.classList.toggle("modal-show");
            spinnerButton.forEach(elem => {
            elem.classList.toggle("active")  
            });
         });

        //  Модальное окно обратной связи

         const reCall = document.querySelector('.reCall');
         const popUpBg = document.querySelector('.modal__background');
         const popUp = document.querySelector('.modal');
         const JSclose = document.querySelector('.JSclose');
        

         reCall.addEventListener('click', (event) => {
            event.preventDefault();
            popUpBg.classList.toggle("modal-show");
            popUp.classList.toggle("modal-show");
        });

        //  ЗАКРЫТИЕ Модального окна обратной связи

         popUpBg.addEventListener('click', (event) => {
            event.preventDefault();
            popUpBg.classList.toggle("modal-show");
            popUp.classList.toggle("modal-show");
        });

         JSclose.addEventListener('click', (event) => {
            event.preventDefault();
            popUpBg.classList.toggle("modal-show");
            popUp.classList.toggle("modal-show");
        });
    }
});
