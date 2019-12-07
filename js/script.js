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
        const btn = document.querySelector(".btn")

    // ФУНКЦИЯ закрывает доступ к боди
        const overflowHidden = () => {
            if (body.style.overflow === '') {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            } 
        };
     // ============================================
     
        spinner.addEventListener('click', (event) => {
            event.preventDefault();
            spinerMenu.classList.toggle("modal-show");
            spinnerButton.forEach(elem => {
                elem.classList.toggle("active")  
                });    
                overflowHidden ();
         });

        spinerLinks.forEach(elem => {
            elem.addEventListener('click', (event) => {
                spinerMenu.classList.toggle("modal-show");
                spinnerButton.forEach(elem => {
                    elem.classList.toggle("active")  
                    });    
                    overflowHidden ();
             });
        });

        burgerReCall.addEventListener('click', (event) => {
            event.preventDefault();
                popUpBg.classList.toggle("modal-show");
                popUp.classList.toggle("modal-show");
                overflowHidden ();
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
                overflowHidden ();
        });

        //  ЗАКРЫТИЕ Модального окна обратной связи

         popUpBg.addEventListener('click', (event) => {
            event.preventDefault();
            popUpBg.classList.toggle("modal-show");
            popUp.classList.toggle("modal-show");
            overflowHidden ();
        });

         JSclose.addEventListener('click', (event) => {
            event.preventDefault();
            popUpBg.classList.toggle("modal-show");
            popUp.classList.toggle("modal-show");
            overflowHidden ();
        });

        btn.addEventListener('click', (event) => {
             overflowHidden ();
        });
    }
});
