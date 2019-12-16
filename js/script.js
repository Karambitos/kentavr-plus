'use strict';

document.addEventListener('DOMContentLoaded', () => {
   
    {
        // Боковое меню (работа спинера)

        const spinner = document.querySelector('.spinner');
        const spinnerButton = document.querySelectorAll('.spinner-line');
        const spinerMenu = document.querySelector('.burger__menu');
        const spinerLinks = document.querySelectorAll('.burger__buttons');
        const burgerReCall = document.querySelector('.burger_reCall');
        const btn = document.querySelector(".btn")
        // ============================================ 
        // ФУНКЦИЯ закрывает/открывает доступ к боди
            const overflowHidden = () => {
                if (document.body.style.overflow === '') {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                } 
            };
        // ============================================ 
        // ФУНКЦИЯ отображает и добавляет класс спинеру
            const spinnerClassToggle = () => {
                spinerMenu.classList.toggle("modal-show");
                spinnerButton.forEach(elem => {
                    elem.classList.toggle("active")  
                    });    
            };
        // ============================================ 
        // ФУНКЦИЯ отображает и добавляет класс PopUp
            const popUpClassToggle = () => {
                popUpBg.classList.toggle("modal-show");
                popUp.classList.toggle("modal-show"); 
            };
        // ============================================ 
        
            spinner.addEventListener('click', (event) => {
            event.preventDefault();
                spinnerClassToggle();
                overflowHidden ();
         });

            spinerLinks.forEach(elem => {
            elem.addEventListener('click', (event) => {
                    spinnerClassToggle();  
                    overflowHidden ();
             });
        });

        burgerReCall.addEventListener('click', (event) => {
            event.preventDefault();
                popUpClassToggle();
                overflowHidden ();
         });

        //  Модальное окно обратной связи

         const reCall = document.querySelector('.reCall');
         const popUpBg = document.querySelector('.modal__background');
         const popUp = document.querySelector('.modal_form');
         const JSclose = document.querySelector('.JSclose');
        
        
        reCall.addEventListener('click', (event) => {
                event.preventDefault();
                popUpClassToggle();
                overflowHidden ();
        });

        //  ЗАКРЫТИЕ Модального окна обратной связи

         popUpBg.addEventListener('click', (event) => {
            event.preventDefault();
            popUpClassToggle();
            overflowHidden ();
        });

         JSclose.addEventListener('click', (event) => {
            event.preventDefault();
            popUpClassToggle();
            overflowHidden ();
        });

        btn.addEventListener('click', (event) => {
             overflowHidden ();
        });
    }
});
