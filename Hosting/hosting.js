let random = Math.random();

function checkNumber() {
    if (random < .5) {
        console.log(true);
    }
    console.log(false);
};



setInterval(function () {
    random = Math.random()
    if (random < 0.5) {
        console.log(random);
    }
    if(random > 0.5){
        console.log(false);
        
    }
    
}, 1000)

