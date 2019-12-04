'use strict';

document.addEventListener('DOMContentLoaded', () => {
   
    {
        // Боковое меню (работа спинера)

        const spinner = document.querySelector('.spinner');
        const spinnerButton = document.querySelectorAll('.spinner-line');
        const spinerMenu = document.querySelector('.burger__menu');
        const spinerLinks = document.querySelectorAll('.burger__buttons');
        const body = document.querySelector('body');
        const burgerReCall = document.querySelector('.burger_reCall');

        spinner.addEventListener('click', (event) => {
            event.preventDefault();
            spinerMenu.classList.toggle("modal-show");
            spinnerButton.forEach(elem => {
                elem.classList.toggle("active")  
                });    
            if (body.style.overflow === '') {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
         });

        spinerLinks.forEach(elem => {
            elem.addEventListener('click', (event) => {
                spinerMenu.classList.toggle("modal-show");
                spinnerButton.forEach(elem => {
                    elem.classList.toggle("active")  
                    });    
                if (body.style.overflow === '') {
                    body.style.overflow = 'hidden';
                }else {
                    body.style.overflow = '';
                }
             });
        });

        burgerReCall.addEventListener('click', (event) => {
            event.preventDefault();
                popUpBg.classList.toggle("modal-show");
                popUp.classList.toggle("modal-show");
            if (body.style.overflow === '') {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
         });

        //  Модальное окно обратной связи

         const reCall = document.querySelector('.reCall');
         const popUpBg = document.querySelector('.modal__background');
         const popUp = document.querySelector('.modal');
         const JSclose = document.querySelector('.JSclose');
        
        
         const openModal = reCall.addEventListener('click', (event) => {
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
