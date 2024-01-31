import Pacijent from "./pacijent.js";

let pacijent1 = new Pacijent('Tamara', 168, 51);
let pacijent2 = new Pacijent('Petar', 180, 85);
let pacijent3 = new Pacijent('Nina', 172, 60);
let pacijent4 = new Pacijent('Vanja', 165, 56);

let pacijenti = [pacijent1, pacijent2, pacijent3, pacijent4];

pacijenti.forEach(p => {
    p.stampaj();
});

pacijenti.forEach(p => {
    console.log(p.bmi());
});

pacijenti.forEach(p => {
    console.log(p.kritican());
});

let pacijentSaNajmanjomTezinom = (niz) => {
    let minTezina = niz[0].tezina;
    let minTezinaPacijent = niz[0];
    niz.forEach(p => {
        if (p.tezina < minTezina) {
            minTezina = p.tezina;
            minTezinaPacijent = p;
        }
    });
    return minTezinaPacijent;
}

// let rez = pacijentSaNajmanjomTezinom(pacijenti);
// rez.stampaj(); 
pacijentSaNajmanjomTezinom(pacijenti).stampaj();

let pacijentSaNajvecomBmi = niz => {
    let najveciBmi = niz[0].bmi();
    let najveciBmiPacijent = niz[0];
    niz.forEach(p => {
        if (p.bmi() > najveciBmi) {
            najveciBmi = p.bmi();
            najveciBmiPacijent = p;
        }
    });
    return najveciBmiPacijent;
}
pacijentSaNajvecomBmi(pacijenti).stampaj();

let sadrziSlovoA = niz => {
    niz.forEach(p => {
        if (p.ime.includes('a')) {
            console.log(p);
        }
    });
}
sadrziSlovoA(pacijenti);

let srednjaVisina = niz => {
    let suma = 0;
    niz.forEach(p => {
        suma += p.visina;
    });
    return suma / niz.length;
}
console.log(srednjaVisina(pacijenti));