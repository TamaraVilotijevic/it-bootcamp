let sviLiElementi = document.querySelectorAll('li');
let btnDodaj = document.querySelector('#submit');
let inputZadatka = document.querySelector('#task');
let ulZadaci = document.querySelector('ul');
let inputPocetak = document.getElementById('pocetak');
let inputKraj = document.getElementById('kraj');

ulZadaci.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        // e.target.classList.toggle('precrtaj');  //e.target vraca ceo element
        e.target.remove();
    }
})

btnDodaj.addEventListener('click', (e) => {
    e.preventDefault();
    let tekstZadatka = inputZadatka.value;
    if (inputZadatka.value.trim() != '') {
        let liNoviZadatak = document.createElement('li');
        liNoviZadatak.textContent = tekstZadatka;
        if (inputPocetak.checked) {
            ulZadaci.insertBefore(liNoviZadatak, ulZadaci.children[0]); //ili prepend(liNoviZadatak)
        } else {
        ulZadaci.appendChild(liNoviZadatak);
        }
    }
    inputZadatka.value = '';
})

