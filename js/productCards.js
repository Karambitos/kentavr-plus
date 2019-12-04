const popUp = document.querySelector(".range__popUp--button");
const popUpItem = document.querySelectorAll(".range__popUp--item");
const backFace = document.querySelectorAll(".back-face");
const frontFace = document.querySelectorAll(".front-face");


popUp.addEventListener('click', (event) => {
    event.preventDefault();
    popUpItem.forEach(elem => {
        if (elem.style.display === '') {
            elem.style.display = 'block';
        } else {
            elem.style.display = '';
        }    
    });
    
});

// popUpItem.forEach(elem => {
//     elem.addEventListener('click', (event) => {
//         frontFace.forEach(elem => {
//             elem.classList.toggle('flip');
//         });
//         backFace.forEach(elem => {
//             elem.classList.toggle('flip');
//         });
//     });
// });

// const flipCard = event => {
//     const target = event.target.parentElement;
//     console.log(target)
//     }
 // console.log(popUpItem); childNodes[1]
 // console.log(target)
// popUpItem.forEach(elem => {
//        elem.addEventListener('click', (event) => {
//             const target = event.target.parentElement;
//             console.log(target)
//             frontFace.forEach(elem => {
//                 if (target === (frontFace || popUpItem)) {
//                     frontFace.classList.add('flip');
//                 } 

//             });
//         }); 
    // console.log(popUpItem); childNodes[1]
    // console.log(target)
    // });   
// popUpItem.addEventListener('click', (event) => {
// }); 
// let hasFlippedCard = false;
// let firsCard, secontCard; 

// const flipCard = event => {
// if(boardLocked){
//     return
// };
// const target = event.target.parentElement;
// console.log(target)
// target.classList.toggle('flip');
// if(!hasFlippedCard){
//     //first click
//     hasFlippedCard = true;
//     firsCard = target;
// } else {
//     //second click
//     hasFlippedCard = false;
//     secontCard = target;
// };
// }



// popUp.addEventListener('click', (event) => {
//     event.preventDefault();
//     popUpItem.forEach(elem => {
//         if (elem.style.display === '') {
//             elem.style.display = 'block';
//         } else {
//             elem.style.display = '';
//         }    
//     });
    
// });

           


// let hasFlippedCard = false;
// let boardLocked = false;
// let firsCard, secontCard;

//     const flipCard = event => {
//         const target = event.target.parentElement;
//         console.log(target)
//         if (target === firsCard) {
//             return
//         };
//         target.classList.add('flip');

//         if(!hasFlippedCard){
//             //first click
//             hasFlippedCard = true;
//             firsCard = target;
//         } else {
//             //second click
//             hasFlippedCard = false;
//             secontCard = target;
//             //check for match
//             checkForMuch()
//         };
//     };

