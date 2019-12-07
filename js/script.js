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

     // ФУНКЦИЯ SCROLL
     const scroll = () => {
           // собираем все якоря; устанавливаем время анимации и количество кадров
        const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 1000,
        framesCount = 500;

        anchors.forEach(function(item) {
        // каждому якорю присваиваем обработчик события
        item.addEventListener('click', function(e) {
        // убираем стандартное поведение
        e.preventDefault();
        
        // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
        
        // запускаем интервал, в котором
        let scroller = setInterval(function() {
        // считаем на сколько скроллить за 1 такт
        let scrollBy = coordY / framesCount;
        
        // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
        // и дно страницы не достигнуто
        if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
            // то скроллим на к-во пикселей, которое соответствует одному такту
            window.scrollBy(0, scrollBy);
        } else {
            // иначе добираемся до элемента и выходим из интервала
            window.scrollTo(0, coordY);
            clearInterval(scroller);
        }
        // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
        });
        });
    }
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
                    scroll ();
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
