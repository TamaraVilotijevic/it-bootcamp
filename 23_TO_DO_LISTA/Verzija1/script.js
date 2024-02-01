let sviLiElementi = document.querySelectorAll('li');
sviLiElementi.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('precrtaj');
    });
});

// sviLiElementi.forEach(el => {
//     el.addEventListener('click', () => {
//         if(el.style.textDecoration == 'line-through'){
//             el.style.textDecoration = 'none';
//         } else {
//             el.style.textDecoration = 'line-through';
//         }
//     });
// });