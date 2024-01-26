let sviPar = document.querySelectorAll('p');
sviPar.forEach((p,index) => {
    if (index % 2 == 0) {
        p.classList.add('error');
    } else {
        p.classList.add('success');
    }
});

sviPar.forEach((p,index) => {
    if (index % 3 == 0) {
        p.style.fontSize = '15px';
    } else if (index % 3 == 1) {
        p.style.fontSize = '20px';
    } else if (index % 3 == 2) {
        p.style.fontSize = '25px';
    }
});

sviPar.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    } else if (p.textContent.includes('success')) {
        p.classList.add('success');
    }
});

sviPar.forEach(p => {
    p.classList.toggle('error');
});

/////////////////////////////
let noviDiv = document.createElement('div');
noviDiv.innerHTML = 'Div kreiran u JS-u';
noviDiv.style.backgroundColor = 'green';
document.body.appendChild(noviDiv);

let noviNaslov = document.createElement('h3');
noviNaslov.innerHTML = 'Novi naslov';
noviDiv.appendChild(noviNaslov);

let lista = document.createElement('ul');
noviDiv.append(lista);

let li1 = document.createElement('li');
li1.innerHTML = 'Druga stavka liste';
let li2 = document.createElement('li');
li2.innerHTML = 'Druga stavka liste';
let li3 = document.createElement('li');
li3.innerHTML = 'Treca stavka liste';
lista.append(li1, li2, li3);

// lista.removeChild(li1);
// lista.removeChild(lista.firstChild);
lista.removeChild(lista.childNodes[0]);

let li4 = document.createElement('li');
li4.innerHTML = 'Cetvrta stavka liste';

lista.replaceChild(li4,li3);

let li5 = document.createElement('li');
lista.appendChild(li5);
let slika = document.createElement('img');
slika.src = 'priroda.png';
slika.alt = 'neka slika';
li5.appendChild(slika);