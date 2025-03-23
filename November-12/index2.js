const result = document.getElementById('Result');
const increase = document.getElementById('increase-btn');
const reset = document.getElementById('reset-btn');
const decrease = document.getElementById('decrease-btn');
const bdy = document.querySelector('body');


let counter = 0;
function UpdateCounter() {
    result.textContent = counter;
}
reset.addEventListener('click', function(){
    counter = 0;
    UpdateCounter();
})


increase.addEventListener('click', function() {
    counter++;
    UpdateCounter();
})

decrease.addEventListener('click', function() {
    counter--;
    UpdateCounter();

})

decrease.addEventListener('mouseenter', function() {
    bdy.style.backgroundColor = 'red';

})
decrease.addEventListener('mouseleave', function() {
    bdy.style.backgroundColor = '';

})

reset.addEventListener('mouseenter', function() {
    bdy.style.backgroundColor = 'yellow';

})
reset.addEventListener('mouseleave', function() {
    bdy.style.backgroundColor = '';

})

increase.addEventListener('mouseenter', function() {
    bdy.style.backgroundColor = 'cyan';

})
increase.addEventListener('mouseleave', function() {
    bdy.style.backgroundColor = '';

})