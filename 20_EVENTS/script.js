// 1.Dohvatiti element na koji zelimo da postavimo listener
let btnHello = document.getElementById('hello');
// 2.Postavimo listener na taj element
btnHello.addEventListener('click', () => {
    console.log('Hello'); 
});

btnHello.addEventListener('dblclick', () => {
    console.log('Hello hello!!');
});

let btnBroji = document.getElementById('broji');
let pIspisBroja = document.getElementById('ispisBroja');
let br = 1;
btnBroji.addEventListener('click', () => {
    console.log(`Broj je ${br}`);

    pIspisBroja.innerHTML = `Broj je ${br}`;
    br++;
});

let b = 0;
let btnMinus = document.getElementById('minus');
let btnPlus = document.getElementById('plus');
let brojac = document.getElementById('brojac');
btnPlus.addEventListener('click', () => {
    b++;
    brojac.innerHTML = b;
});
btnMinus.addEventListener('click', () => {
    b--;
    if (b < 0) {
        b = 0;
    }
    brojac.innerHTML = b;
});

// Zadatak 5
let btnIspisiTekst = document.getElementById('ispisiTekst');
let pIspisTeksta = document.getElementById('ispisTeksta');
let inputTekst = document.getElementById('tekst');

btnIspisiTekst.addEventListener('click', () => {
    let preuzmiTekst = inputTekst.value;
    pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;
});

// Zadatak 6
let radioMuski = document.getElementById('muski');
let radioZenski = document.getElementById('zenski');
let radioNeopredeljen = document.getElementById('neopredeljen');
btnIspisiTekst.addEventListener('dblclick', () => {
    if(radioMuski.checked) {
        console.log('Osoba muskog pola');
    } else if(radioZenski.checked) {
        console.log('Osoba zenskog pola');
    } else {
        console.log('Osoba se nije opredelila');
    }

    // 2.nacin
    let checkedPol = document.querySelector('input[name="pol"]:checked');
    console.log(`Osoba je ${checkedPol.value} pola`);

    // 3.nacin
    let polRadios = document.getElementsByName('pol');
    polRadios.forEach(radioButton => {
        if (radioButton.checked) {
            console.log(`Osoba ${radioButton.value} pola`);
        }
    });

    // 4.nacin
    let polRadiosInput = document.querySelectorAll('input[name="pol"]');
    polRadiosInput.forEach(rb => {
        if (rb.checked) {
            console.log(`Osoba ${rb.value} pola`);
        }
    });

});

// Zadatak 7
let btnKvadriraj = document.getElementById('kvadriraj');
let btnPrepolovi = document.getElementById('prepolovi');
let btnPovrsina = document.getElementById('povrsina');
let prviInput = document.getElementById('prviInput');
let drugiInput = document.getElementById('drugiInput');
let treciInput = document.getElementById('treciInput');
let pRezultat = document.getElementById('rezultat');

btnKvadriraj.addEventListener('click', () => {
    let kvadrat = prviInput.value;
    pRezultat.innerHTML = kvadrat**2;
});

btnPrepolovi.addEventListener('click', () => {
    let prepolovi = drugiInput.value;
    pRezultat.innerHTML = prepolovi / 2;
});

btnPovrsina.addEventListener('click', () => {
    let povrsina = treciInput.value;
    pRezultat.innerHTML = povrsina**2 * 3.14;
});