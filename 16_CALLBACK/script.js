let a = [-6,8,11,6,0];
let b = ['pera', 'mika', 'laza'];

// Bez callback funkcije
function ispisNizaKonzola(niz) {
    let s = '';
    for(let i=0; i<niz.length; i++) {
        s+= niz[i] + ' ';
    }
    console.log(s);
}
ispisNizaKonzola(a);
ispisNizaKonzola(b);

function ispisNizaStranica(niz) {
    let s = '';
    for(let i=0; i<niz.length; i++) {
        s+= niz[i] + ' ';
    }
    let div = document.getElementById('container');
    div.innerHTML += s;
}
ispisNizaStranica(a);
ispisNizaStranica(b);

// Sa callback funckijama
function ispisKonzola(p) {
    console.log(p);
}

function ispisStranica(p) {
    let div = document.getElementById('container');
    div.innerHTML += p;
}

function ispisNiza(niz, cb) {
    let s = '';
    for(let i=0; i<niz.length; i++) {
        s+= niz[i] + ' ';
    }
    cb(s);
}
ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisStranica);

// Anonimna funkcija kao callback funkcija
ispisNiza([1,2,3,4,5], function(p) {
    console.log(p);
});

// Arrow funkcija kao callback
ispisNiza([9,8,7,6], p => {
    console.log(p);
});

// forEach petlja
a.forEach(ispisKonzola); //prolazi kroz sve elemente niza i za svaki element poziva callback funkciju  i prosledjuje vrednost elementa kao argument
b.forEach(ispisKonzola);

a.forEach(function(e) {
    console.log(e);
});

a.forEach(e => {
    let div = document.getElementById('container');
    div.innerHTML += e + ' ';
});

a.forEach((e, i) => {
    console.log(`Element ${e} u nizu ima indeks ${i}`);
});