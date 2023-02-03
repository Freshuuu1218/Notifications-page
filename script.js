const counter = document.querySelector('#count');
const markAll = document.querySelector('.mark');


markAll.addEventListener('click',()=>{
    let dots = document.querySelectorAll('.not-read');
    dots.forEach(dot =>{
        // dot.style.display = 'none';
        dot.remove();
    })
    dots = document.querySelectorAll('.not-read').length;
    counter.innerHTML = dots;
})