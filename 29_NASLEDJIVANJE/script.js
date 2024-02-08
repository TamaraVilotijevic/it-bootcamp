import { Vozilo } from "./klase/vozilo.js";
import { Automobil } from "./klase/automobil.js";
import { Kamion } from "./klase/kamion.js";
import { Motocikl } from "./klase/motocikl.js";
import { Osoba } from "./klase/osoba.js";
import { Zaposleni } from "./klase/zaposleni.js";
import { Sportista } from "./klase/sportista.js";
import { Kosarkas } from "./klase/kosarkas.js";

let v1 = new Vozilo("vazdusno", "bela");
v1.ispisiVozilo();
v1.vozi();

let a1 = new Automobil("drumsko", "teget", "NI-111-CC");
a1.ispisiVozilo();
a1.ispisiAutomobil();

//v1.ispisiAutomobil(); roditelj ne moze pristupiti osobinama deteta vec obrnuto

let k1 = new Kamion("drumsko", "siva", 70);
console.log(k1.boja);
k1.vozi();
k1.voziKamion();

let m1 = new Motocikl("drumsko", "crni", 2);
m1.ispisiMotocikl();
m1.vozi();

let o1 = new Osoba("Tamara", "Vilotijevic", 1998);
o1.ispisOsobe();

let z1 = new Zaposleni("Nina", "Vlaovic", 1998, 85000, "Brend menadzer");
z1.ispisiZaposlenog();
let z2 = new Zaposleni("Milica", "Panic", 1998, 50000, "Ekonomista");
let z3 = new Zaposleni("Vanja", "Krstic", 1998, 110000, "Zendesk specialist");

let zaposleni = [z1, z2, z3];
zaposleni.forEach(z => {
    if (z.pozicija == 'Ekonomista') {
        console.log(`Zaposlen u ekonomskom sektoru - ${z.ime}`);
    }
});

let prosekPlate = () => {
    let suma = 0;
    zaposleni.forEach(z => {
        suma += z.plata;
    });
    return suma / zaposleni.length;
}
console.log(prosekPlate());

let natprosecnaPlata = (z) => {
    return z.plata > prosekPlate() ? true : false;
}

console.log(natprosecnaPlata(z1));

let kosarkas1 = new Kosarkas("Michael", "Jordan", 1980, "New York", [37,34,45,43,39]);
let kosarkas2 = new Kosarkas("Cobe", "Bryant", 1982, "Chicago", [35,25,43,36,40,44]);
let kosarkas3 = new Kosarkas("Lebron", "James", 1984, "LA", [44,42,38,37,39,40]);
let kosarkasi = [kosarkas1, kosarkas2, kosarkas3];

let najviseUtakmica = () => {
    let max = 0;
    let maxK = kosarkasi[0];
    kosarkasi.forEach(k => {
        if (k.poeni.length > max) {
            max = k.poeni.length;
            maxK = k;
        }
    });
    return maxK;
}
console.log(najviseUtakmica());

let najvisePoena = () => {
    let max = 0;
    let maxK = kosarkasi[0];
    kosarkasi.forEach(k => {
        k.poeni.forEach(p => {
            if (p > max) {
                max = p;
                maxK = k;
            }
        });
    });
    return maxK;
}
console.log(najvisePoena());

let najviseProsecnoPoena = () => {
    let max = 0;
    let maxK = kosarkasi[0];
    kosarkasi.forEach(k => {
        let suma = 0;
        let prosek;
        k.poeni.forEach(p => {
            suma += p;
        });
        prosek = suma / k.poeni.length;
        console.log(prosek);
        if (prosek > max) {
            max = prosek;
            maxK = k;
        }
    });
    return maxK;
}
console.log(najviseProsecnoPoena());