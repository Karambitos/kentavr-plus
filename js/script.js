'use strict';
document.addEventListener('DOMContentLoaded', () => {
   
        const spinner = document.querySelector('.spinner');
        const spinnerButton = document.querySelectorAll('.spinner-line');
        const spinerMenu = document.querySelector('.burger__menu');
        const spinerLinks = document.querySelectorAll('.burger__buttons');
        const burgerReCall = document.querySelector('.burger_reCall');
        const btn = document.querySelector(".btn")
        const reCall = document.querySelector('.reCall');
        const popUpBg = document.querySelector('.modal__background');
        const burgerMenuBG = document.querySelector('.burger__menu--bg');
        const popUp = document.querySelector('.modal_form');
        const JSclose = document.querySelector('.JSclose');

        const popUpBT = document.querySelector(".range__popUp--button");
        const popUpItems = document.querySelector(".range__popUp");

        const otherLangs = document.querySelectorAll('.other_langs--name');        
        // ============================================ 
        // ФУНКЦИЯ закрывает/открывает доступ к боди PopUP
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
       
        // Боковое меню (работа спинера)
        spinner.addEventListener('click', (event) => {
            event.preventDefault();
            burgerMenuBG.classList.toggle("modal-show");
            spinnerClassToggle();
            overflowHidden ();
         });

        spinerLinks.forEach(elem => {
            elem.addEventListener('click', (event) => {
            spinnerClassToggle(); 
            burgerMenuBG.classList.toggle("modal-show"); 
            overflowHidden ();
             });
        });

        burgerReCall.addEventListener('click', (event) => {
            event.preventDefault();
            popUpClassToggle();
            overflowHidden ();
         });
        // Боковое меню (закрыть)
        burgerMenuBG.addEventListener('click', (event) => {
            event.preventDefault();
            burgerMenuBG.classList.toggle("modal-show");
            spinnerClassToggle(); 
            overflowHidden ();
         });
  
        //  Модальное окно обратной связи
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
    
        // //  Переключение языков
        // otherLangs.forEach(elem => {  
        //     elem.addEventListener('click', (event) => { 
        //         if (!elem.classList.contains("lang__active")) {
        //             otherLangs.forEach(elem => {
        //                 elem.classList.remove("lang__active");
        //             });
        //             elem.classList.add("lang__active");
        //         }
        //     });   
        // });

        //  Карточки с канистрами
        popUpBT.addEventListener('click', (event) => {
            event.preventDefault();
            popUpItems.classList.toggle("modal-show")   
        });
        
});
