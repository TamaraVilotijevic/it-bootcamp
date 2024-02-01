let sviLiElementi = document.querySelectorAll('li');
let btnDodaj = document.querySelector('#submit');
let inputZadatka = document.querySelector('#task');
let ulZadaci = document.querySelector('ul');
let inputPocetak = document.getElementById('pocetak');
let inputKraj = document.getElementById('kraj');

let nizZadataka = [];
if (localStorage.getItem('zadaci') == null) {
    localStorage.setItem('zadaci', JSON.stringify(nizZadataka));
} else {
    nizZadataka = JSON.parse(localStorage.getItem('zadaci'));
    nizZadataka.forEach(z => {
        let liZad = document.createElement('li');
        liZad.textContent = z;
        ulZadaci.appendChild(liZad);
    });
}

ulZadaci.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        // e.target.classList.toggle('precrtaj');  //e.target vraca ceo element
        e.target.remove();
        let indexElementa = nizZadataka.indexOf(e.target.textContent);
        nizZadataka.splice(indexElementa, 1);
        localStorage.setItem('zadaci', JSON.stringify(nizZadataka));
    }
})

inputZadatka.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        let tekstZadatka = inputZadatka.value;
        if (inputZadatka.value.trim() != '') {
            let liNoviZadatak = document.createElement('li');
            liNoviZadatak.textContent = tekstZadatka;
            if (inputPocetak.checked) {
                ulZadaci.insertBefore(liNoviZadatak, ulZadaci.children[0]); //ili prepend(liNoviZadatak)
                nizZadataka.unshift(tekstZadatka); //dodaje na pocetak niza
            } else {
            ulZadaci.appendChild(liNoviZadatak);
            nizZadataka.push(tekstZadatka); //dodaje na kraj niza
            }
        }
        localStorage.setItem('zadaci', JSON.stringify(nizZadataka));
        inputZadatka.value = '';
    }
})
