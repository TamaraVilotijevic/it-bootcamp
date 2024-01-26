// Zadatak 8
let datum = new Date();
let sati = datum.getHours();
if (sati < 9) {
    console.log('Firma ne radi');
} else if (sati >= 17) {
    console.log('Firma ne radi');
} else {
    console.log('Firma radi');
}

// Zadatak 6
let dan = new Date().getDay();
if (dan == 0) {
    console.log('Vikend je');
} else if (dan == 6) {
    console.log('Vikend je');
} else {
    console.log('Radni dan');
}

// Zadatak 7
let vreme = new Date().getHours();
if (vreme < 12) {
    console.log('Dobro jutro');
} else if (vreme < 18) {
    console.log('Dobar dan');
} else {
    console.log('Dobro vece');
}

// Zadatak 9
let p1 = 8;
let k1 = 15;
let p2 = 15;
let k2 = 19;
if (k1<=p2) {
    console.log('NE');
} else if (k2<=p1) {
    console.log('NE');
} else {
    console.log('DA');
}

// Zadatak 10
let a = 7;
let b = 10;
if (a > b) {
    console.log('a je sledbenik');
} else if (a < b) {
    console.log('a je manji od b');
} else {
    console.log('Jednaki su');
}

// Zadatak 11
let broj = 16;
if (Math.floor(broj) == broj) {
    console.log('Ceo broj');
} else {
    console.log('Nije ceo broj');
}