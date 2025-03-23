
const items = document.querySelectorAll('.item');
const item1 = document.getElementById('itm1');
const item2 = document.getElementById('itm2');
const item3 = document.getElementById('itm3');
const item4 = document.getElementById('itm4');
const item5 = document.getElementById('itm5');
const skill = document.getElementById('skll');
const skill1 = document.querySelector('.skill1');
const percentageChart = document.getElementById('percentage');
const javaScript = document.querySelector('.javaScript');
const mouseEventFollow = document.getElementById('Mouse');
const project = document.getElementById('projectContainer');
const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const project3 = document.getElementById('project3');
const buttonLearnMore = document.querySelector('.buttonLearnMore')

item1.addEventListener('click', () => {
    window.location.href = 'https://github.com/NikoKutateladze';
});

item2.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/nnkkkkkko/';
});

item3.addEventListener('click', () => {
    window.location.href = 'https://www.facebook.com/niko.kutateladze.7';
});

item4.addEventListener('click', () => {
    window.location.href = 'https://www.linkedin.com/in/niko-kutateladze-112703355/';
});

item5.addEventListener('click', () => {
     alert('Gmail: kutateladzeniko6@gmail.com')
})
// let x = 0;
// burgerMenu.addEventListener("click", () => {
//     x += 1;
//     if (x == 1) {
//         line1.style.animation = 'rotate .3s forwards';
//         line3.style.animation = 'rotate-reverse 0.3s forwards';
//         line2.style.opacity = '0';
//         hiddenElements.forEach(e => e.classList.remove('hidden'));
//         burgerWrapper.style.width = '300px'
//         burgerMenu.style.right = '-100px'
//     }
//     if(x >= 2) {
//         line2.style.opacity = '1';
//         line1.style.animation = '';
//         line3.style.animation = '';
//         hiddenElements.forEach(e => e.classList.add('hidden'));
//         burgerWrapper.style.width = '100px'
//         burgerMenu.style.right = '0px'
//         x = 0
//     }

// })

document.addEventListener('mousemove', function mouseFollow(e) {

    mouseEventFollow.style.left = `${e.clientX + 5}px`;
    mouseEventFollow.style.top =`${e.clientY + window.scrollY + 5}px`;
    
});

const colors = ['#fff', '#000'];
setInterval(() => {
        let randomRadiuTopRight = Math.floor(Math.random() * 50 ) + 10;
        let randomBottomRight = Math.floor(Math.random() * 50 ) + 10;
        let randomBottomLeft = Math.floor(Math.random() * 50 ) + 10;
        let randomTopLeft = Math.floor(Math.random() * 50) + 10;
        let randomWidth = Math.floor(Math.random() * 30 + 24);
        let randomHeight = Math.floor(Math.random() * 30 + 24);
        let randomNumberForColor = Math.floor(Math.random() * 2);
        
        mouseEventFollow.style.borderBottomLeftRadius = `${randomBottomLeft}px`;
        mouseEventFollow.style.borderBottomRightRadius = `${randomBottomRight}px`;
        mouseEventFollow.style.borderTopLeftRadius = `${randomTopLeft}px`;
        mouseEventFollow.style.borderTopRightRadius = `${randomRadiuTopRight}px`;
        mouseEventFollow.style.width = `${randomWidth}px`;
        mouseEventFollow.style.height = `${randomHeight}px`;
        mouseEventFollow.style.background = colors[randomNumberForColor];
        
}, 300);

const button = document.getElementById('buttonForCheck');

let count = 0;

button.addEventListener('click', () => {
    count += 1;
    if ( count === 1) {
        mouseEventFollow.style.display = 'none';
    };
    if ( count === 2) {
        mouseEventFollow.style.display = '';
        count = 0;
    };
});
buttonLearnMore.addEventListener('click', () => {
    style.innerHTML = `
    .buttonLearnMore::after {
        animation: buttonAnimation .3s forwards;
    }
    `
})