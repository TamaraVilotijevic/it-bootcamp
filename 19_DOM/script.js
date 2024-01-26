console.log(document); //document je objekat - koren DOMa
console.log(document.body); //objekat

let e1 = document.getElementById('p2');
console.log(e1);   //objekat 
let el2 = document.getElementsByClassName('par');
console.log(el2); //html kolekcija objekata iz dom stabla

// pristum elementima kolekcije
for(let i=0; i<el2.length; i++) {
    console.log(el2[i]);
}
// html kolekcije ne poseduju forEach petlju
// el2.forEach(el => {
//     console.log(el);
// });

// konvertovanje u niz
let niz = Array.from(el2);
niz.forEach(el => {
    console.log(el);
});

let el3 = document.getElementsByTagName('p');
console.log(el3);   //vraca html kolekciju

let el4 = document.getElementsByName('p');
console.log(el4);   //vraca node listu - kao i niz
el4.forEach(el => {
    console.log(el);
});
console.log(el4[0]);

let t1 = document.querySelector('#p2'); 
console.log(t1);

let t2 = document.querySelector('.par'); //vraca objekat
console.log(t2);

let t3 = document.querySelectorAll('.par'); //vraca node listu
console.log(t3);
t3.forEach(el => {
    console.log(el);
});

let t4 = document.querySelectorAll('div p.par');
console.log(t4);

let link = document.querySelector('a');
link.innerHTML = '<span style="font-weight: bold">Novi tekst</span> prvog linka';
// link.href = 'https://www.google.com';
link.setAttribute('href', 'https://www.google.com');
link.target = '_blank';
// link.setAttribute('target', '_blank');
link.id = 'pera';
link.style.color = 'red';
link.style.fontSize = '20px';


// Vezbanje
let prviPar = document.querySelector('p');
console.log(prviPar);

let prviError = document.querySelector('div.error');
console.log(prviError);

let poslednjiRed = document.querySelector('table tr:last-child');
console.log(poslednjiRed);

let sviLinkovi = document.querySelectorAll('a');
console.log(sviLinkovi);

let sveSlike = document.querySelectorAll('img');
console.log(sveSlike);
/////////////////////////////////
sviLinkovi.forEach(link => {
    // link.style.textDecoration = 'none';
    link.setAttribute('style', 'color: red; font-size: 18px; text-decoration: none')
});

let sviParagrafi = document.querySelectorAll('p');
sviParagrafi.forEach(p => {
    p.innerHTML += 'VAZNO!!!';
});

let sviError = document.querySelectorAll('div.error');
sviError.forEach(d => {
    d.innerHTML += '<h1>Greska!</h1>';
});

for(let i=0; i<sviParagrafi.length; i++) {
    sviParagrafi[i].innerHTML += `${(i+1)**2}`;
    sviParagrafi[i].setAttribute('style', 'color: purple');
    if (i % 2 == 0) {
        sviParagrafi[i].style.backgroundColor = 'green';
    } else {
        sviParagrafi[i].style.backgroundColor = 'red';
    }
}

for(let i=0; i<sveSlike.length; i++) {
    sveSlike[i].setAttribute('alt', `slika${i}`);
}

sviLinkovi.forEach(l => {
    l.style.padding = '5px';
    l.style.fontSize = '18px';
    l.style.textDecoration = 'none';
});
for(let i=0; i<sviLinkovi.length; i++){
    if (i % 2 == 0) {
        sviLinkovi[i].style.backgroundColor = 'green';
        sviLinkovi[i].style.color = 'purple';
    } else {
        sviLinkovi[i].style.backgroundColor = 'blue';
        sviLinkovi[i].style.color = 'white';
    }
}

for(let i=0; i<sveSlike.length; i++){
    if (sveSlike[i].src.endsWith('.png')) {
        sveSlike[i].style.border = '2px solid red';
    }
}

for(let i=0; i<sviLinkovi.length; i++){
    if (sviLinkovi[i].target == '_blank') {
        sviLinkovi[i].target = '_top'
    } else {
        sviLinkovi[i].target = '_blank'
    }
}
/////////////////////////////////////
let div = e1.parentNode;
console.log(div);
console.log(div.childNodes);
console.log(div.childNodes[1]);
div.childNodes.forEach(el => {
    let tip = el.nodeName;
    if (tip!="#text") {    //tip=="P"
        console.log(el);
    }
});