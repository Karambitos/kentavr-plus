'use strict';

document.addEventListener('DOMContentLoaded', () => {
   
    {
        const spinner = document.querySelector('.spinner');
        const spinnerButton = document.querySelectorAll('.spinner-line');
        const spinerMenu = document.querySelector('.burger__menu');
        // const body = document.querySelector('body')

        spinner.addEventListener('click', (event) => {
            event.preventDefault();
            spinerMenu.classList.toggle("modal-show");
            // if (body.style.overflow === '') {
            //     body.style.overflow = 'hidden';
            // } else {
            //     body.style.overflow = '';
            // };
            spinnerButton.forEach(elem => {
                elem.classList.toggle("active")  
            });
         });

         const reCall = document.querySelector('.reCall');
         const popUpBg = document.querySelector('.modal__background');
         const popUp = document.querySelector('.modal');
         const JSclose = document.querySelector('.JSclose');

         reCall.addEventListener('click', (event) => {
            event.preventDefault();
            popUpBg.classList.toggle("modal-show");
            popUp.classList.toggle("modal-show");
            // if (popUp.classList === 'zoomOut') {
            //     popUp.classList.remove("zoomOut")
            // }
        });

    
         popUpBg.addEventListener('click', (event) => {
            event.preventDefault();
            popUpBg.classList.toggle("modal-show");
            popUp.classList.toggle("modal-show");
            // popUp.classList.add("zoomOut");
        });

         JSclose.addEventListener('click', (event) => {
            event.preventDefault();
            popUpBg.classList.toggle("modal-show");
            popUp.classList.toggle("modal-show");
        });


    }
});
/*  
        // services

    const services = document.querySelector('.servic_button')
    const servicesClose = document.querySelector('.services__close')
    const popupService = document.querySelector('.modal-services')
    const spinner = document.querySelector('.spinner')
    const body = document.querySelector('body')

        services.addEventListener('click', (event) => {
            event.preventDefault();
            popupService.classList.add("modal-show");
            body.style.overflow = 'hidden';
            spinner.style.display = 'none';
        });
        servicesClose.addEventListener('click', (event) => {
            event.preventDefault();
            popupService.classList.remove("modal-show");
            body.style.overflow = '';
            spinner.style.display = '';
        });

        // BURGER

    const spinerMenu = document.querySelector('.burger__menu')
    const spinnerButton = document.querySelectorAll('.spinner-line')

        spinner.addEventListener('click', (event) => {
            event.preventDefault();
            spinerMenu.classList.toggle("modal-show-right");
            if (body.style.overflow === '') {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
            spinnerButton.forEach(elem => {
                elem.classList.toggle("active")  
            });

         });

    const burgerServ = document.querySelector('.burger__service-button')
    const sudmenuServ = burgerServ.querySelectorAll('.servise_item')
   
            burgerServ.addEventListener('click', (event) => {
            event.preventDefault();
            // console.log(target);
            // console.log(sudmenuServ);
            sudmenuServ.forEach(elem => {
                if (elem.style.display === '') {
                    elem.style.display = 'block';
                } else {
                    elem.style.display = '';
                }    
            });
        });

        const development = burgerServ.querySelector('.development')
        const submenuListServ = burgerServ.querySelector('.service__submenu--list')
            development.addEventListener('click', (event) => {
            event.preventDefault();
            submenuListServ.style.display = 'block';
            // sudmenuServ.forEach(elem => {
            //     if (elem.style.display === '') {
            //         elem.style.display = 'block';
            //     } else {
            //         elem.style.display = '';
            //     }    
            // });
        });
    
    }
   

});
*/
