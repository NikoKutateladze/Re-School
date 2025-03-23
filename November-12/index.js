const bdy=document.querySelector('body');
const btn=document.querySelector('button');
const Colors=['orange', 'red','green','blue','cyan', 'chertiot'];

bdy.style.backgroundColor='orange';

btn.addEventListener('click', function(){
    const colorIndex=parseInt(Math.random()*Colors.length);
    bdy.style.backgroundColor=Colors[colorIndex];
})