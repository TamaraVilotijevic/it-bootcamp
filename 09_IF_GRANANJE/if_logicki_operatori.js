// Zadatak 15
let t = -25;
if (t < -15 || t > 40) {
    console.log('Ekstremna temperatura');
} else {
    console.log('Nije ekstremna temperatura');
}

// if (t >= -15 && t <= 40) {
//     console.log('Nije ekstremna temperatura');
// } else {
//     console.log('Ekstremna temperatura');
// }

// Zadatak 16
let datum = new Date();
let godina = datum.getFullYear();

if (godina % 4 == 0 && godina % 100 != 0) {
    console.log('Prestupna');
} else if (godina % 400 == 0) {
    console.log('Prestupna');
} else {
    console.log('Nije prestupna');
}

// Zadatak 17
let dan = datum.getDay();
let sat = datum.getHours();
// let dan = 6;
// let sat = 16;

if (dan == 0 || dan == 6) {
    if (sat >= 10 && sat < 18) {
        console.log('Otvoreno');
        document.getElementById('d1').innerHTML = "<img src='https://www.shutterstock.com/image-illustration/doors-opening-reveal-beautiful-sky-260nw-139382126.jpg'></img>";
    } else {
        console.log('Zatvoreno');
        document.getElementById('d1').innerHTML = "<img src='https://static.vecteezy.com/system/resources/previews/020/575/836/original/3d-illustration-house-door-with-closed-hanging-board-png.png'></img>";
    }
} else if (sat >= 9 && sat < 20) {
    console.log('Otvoreno');
    document.getElementById('d1').innerHTML = "<img src='https://www.shutterstock.com/image-illustration/doors-opening-reveal-beautiful-sky-260nw-139382126.jpg'></img>";
} else {
    console.log('Zatvoreno');
    document.getElementById('d1').innerHTML = "<img src='https://static.vecteezy.com/system/resources/previews/020/575/836/original/3d-illustration-house-door-with-closed-hanging-board-png.png'></img>";
}

// Zadatak 18
// a
let b1 = 16;
let b2 = -5;
let b3 = 10;

let max = b1;
if (b2 > max) {
    max = b2;
}
if (b3 > max) {
   max = b3; 
}
console.log(`Najveci od brojeva je ${max}`);

// b
let maks = null;
if (b1 > b2) {
    maks = b1;
} else {
    maks = b2;
}
if (maks < b3) {
    maks = b3;
}
console.log(`Najveci od brojeva je ${maks}`);

// c
if (b1 > b2) {
    if (b1 > b3) {
        console.log(`Najveci je ${b1}`);
    } else {
        console.log(`Najveci je ${b3}`);
    }
    
} else if (b2 > b3) {
    console.log(`Najveci je ${b2}`);
} else {
    console.log(`Najveci je ${b3}`);
}

// d
if (b1 > b2 && b1 > b3) {
    console.log(`Najveci je ${b1}`);
} else if (b2 > b3) {
    console.log(`Najveci je ${b2}`);
} else {
    console.log(`Najveci je ${b3}`);
}