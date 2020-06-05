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

  //  open/close body PopUP
      const overflowHidden = () => {
          if (document.body.style.overflow === '') {
              document.body.style.overflow = 'hidden';
          } else {
              document.body.style.overflow = '';
          } 
      };
  // ============================================ 
  // add class spiner
      const spinnerClassToggle = () => {
          spinerMenu.classList.toggle("modal-show");
          spinnerButton.forEach(elem => {
          elem.classList.toggle("active")  
          });    
      };
  // ============================================ 
  // add class PopUp
      const popUpClassToggle = () => {
          popUpBg.classList.toggle("modal-show");
          popUp.classList.toggle("modal-show"); 
      };
  // ============================================ 
  // spiner
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
  // close sideBar
  // ============================================ 
  burgerMenuBG.addEventListener('click', (event) => {
      event.preventDefault();
      burgerMenuBG.classList.toggle("modal-show");
      spinnerClassToggle(); 
      overflowHidden ();
    });

  //  PopUp
  // ============================================ 
  reCall.addEventListener('click', (event) => {
      event.preventDefault();
      popUpClassToggle();
      overflowHidden ();
  });

  //  close PopUp
  // ============================================ 
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

  //  open product Cards
  // ============================================ 
  popUpBT.addEventListener('click', (event) => {
      event.preventDefault();
      popUpItems.classList.toggle("modal-show");
      // popUpBT.innerHTML = (popUpBT.innerHTML === 'Подробнее') ? popUpBT.innerHTML = 'Скрыть всё' : popUpBT.innerHTML = 'Подробнее';
  });      
  // ============================================ 
  const rangeItem= document.querySelectorAll(".range__popUp--item");
  rangeItem.forEach(elem => {
      elem.addEventListener('click', (event) => {
          let target = event.target.closest('li');
          target.classList.toggle('hover');
          target.classList.toggle('hover__back');
        });
  });

  
});
