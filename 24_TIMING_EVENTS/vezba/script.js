let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let counter = document.getElementById('counter');

let clock;

btn1.addEventListener('click', function(e) {
    e.preventDefault();
    if (clock === undefined) {
    clock = setInterval(() => {
        counter.value++;
    }, 1000);
    }
});

btn2.addEventListener('click', function(e) {
    e.preventDefault();
    clearInterval(clock);
    clock = undefined;
});