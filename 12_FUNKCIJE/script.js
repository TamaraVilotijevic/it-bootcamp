console.log(`Funkcije`);

// Funkcija za ispis u konzoli
function zdravo() {
    console.log("Hello world!");
}
zdravo(); // Poziv funkcije

// Funkcija za ispis prosledjenog teksta u konzoli
function ispisiTekst(tekst) {
    console.log(tekst);
}
ispisiTekst('Ovo je neki tekst');
ispisiTekst('Ovo je neki drugi tekst');
let t = 'Moj tekst';
ispisiTekst(t);

// Funkcija kojoj se prosledjuju  2 parametra
function imePrezime(ime, prezime, godine) {
    console.log(`Ulogovana osoba je ${ime} ${prezime}. Osoba ima ${godine} godina.`);
}
imePrezime(`Tamara`, `Vilotijevic`, 25);
let imeOsobe = 'Petar';
let prezimeOsobe = 'Vilotijevic';
let godineOsobe = 28;
imePrezime(imeOsobe, prezimeOsobe, godineOsobe);

// Funkcija koja vrsi sabiranje 2 broja
function zbir(br1, br2) {
    let rezultat = br1 + br2;
    console.log(`${br1} + ${br2} = ${rezultat}`);
}
zbir(16, 21);
let b1 = -10;
let b2 = 20;
zbir(b1, b2);
zbir(5+4, 50);
zbir(zbir(1,4), zbir(-4,5)); //vraca undefined
zbir('Java', 'Script');

// Funkcija koja vraca vrednost
function razlika(umanjenik, umanjilac) {
    let razlikaRezultat = umanjenik - umanjilac;
    return razlikaRezultat;
}
console.log(`Razlika je: ${razlika(60, 45)}`);
let r = razlika(100, 4);
console.log(`Funkcija vraca ${r}`);

let r1 = razlika(6,3);
let r2 = razlika(17,7);
let r3 = razlika(r1,r2);
console.log(`Promenljiva r3 iznosi ${r3}`);
let r4 = razlika(razlika(40,60), razlika(10,4));
console.log(`Promenljiva r4 iznosi ${r4}`);

// Funkcija sa vise return-a
function temperaturaVode(temp) {
    if (temp<=0) {
        return 'Voda se ledi';
    } else if (temp>=100) {
        return 'Voda isparava';
    } else {
        return 'Voda je u tecnom agregatnom stanju';
    }
}
console.log(temperaturaVode(-5));
let rezTempVode = temperaturaVode(114);
console.log(rezTempVode);

// 2.nacin
function temperaturaVode1(temp) {
    let tekstZaIspis = '';
    if (temp<=0) {
        tekstZaIspis = 'Voda se ledi';
    } else if (temp>=100) {
        tekstZaIspis = 'Voda isparava';
    } else {
        tekstZaIspis = 'Voda je u tecnom agregatnom stanju';
    }
    return tekstZaIspis;
}
console.log(temperaturaVode1(50));

// Zadatak 3
function neparan(n) {
    if (n % 2 != 0) {
        return 'Broj je neparan';
    } else {
        return 'Broj je paran';
    }
}
console.log(neparan(10));

// Zadatak 4
function maks2(a, b) {
    let veci = a;
    if (a > b) {
        return veci;
    } else {
        veci = b;
        return veci;
    }
}
console.log(maks2(7,5));

function maks4(c,d,e,f) {
    let veci = c;
    if (d>c && d>e && d>f) {
        veci = d;
        return veci;
    } else if (e>c && e>f) {
        veci = e;
        return veci;
    } else if (f>c) {
        veci = f;
        return veci;
    } else {
        return veci;
    }
}
console.log(maks4(-5,33,7,21));

// const maks2Function = (broj1, broj2) => {
//     if (broj1 > broj2) {
//         return broj1;
//     } else {
//         return broj2;
//     }
// }
// const maks4Function = (a, b, c, d) => {
//     return maks2Function(maks2Function(a, b), maks2Function(c, d));
// }
// console.log(maks4Function(20, 11, 16, 18));

// Zadatak 5
function prikaziSliku(adresa) {
    document.write(`<img src="${adresa}">`);
}
prikaziSliku(`https://rasadnikgaj.com/images/vrtno%20cvece/lepi-covek-cvet-1.jpg`);
prikaziSliku(`https://etarskaibiljnaulja.rs/808/neven-cvet.jpg`);

// kompleksniji
function prikaziSlikuUElementu(putanja, id) {
    let element = document.getElementById(id);
    element.innerHTML = `<img src="${putanja}">`;
}
prikaziSlikuUElementu('https://etarskaibiljnaulja.rs/808/neven-cvet.jpg', 'slika1');

// Zadatak 6
function obojiti(boja) {
    // let paragraf = document.getElementById('p1');
    // paragraf.style.color = boja;

    document.body.innerHTML += `<p style="color: ${boja}">Neki tekst</p>`;
}
obojiti('blue');

// Zadatak 7
function sedmiDan(n) {
    if (n%7 == 0) {
        console.log('Nedelja');
    } else if (n%7 == 1) {
        console.log('Ponedeljak');
    } else if (n%7 == 2) {
        console.log('Utorak');
    } else if (n%7 == 3) {
        console.log('Sreda');
    } else if (n%7 == 4) {
        console.log('Cetvrtak');
    } else if (n%7 == 5) {
        console.log('Petak');
    } else if (n%7 == 6){
        console.log('Subota');
    }
}
sedmiDan(2);

// Zadatak 8
function deljivSaTri(n, m) {
    let brojac = 0;
    for(i=n; i<=m; i++){
        if (i % 3 == 0) {
            console.log(i);
            brojac++;
        }
    }
    console.log(`U intervalu od ${n} do ${m} ima ${brojac} brojeva deljivih sa 3.`);
}
deljivSaTri(10,30);

// Zadatak 9
function sumiraj(n,m) {
    let suma = 0;
    for(i=n; i<=m; i++){
        suma+=i;
    }
    return suma;
}
console.log(sumiraj(1,5));

// Zadatak 10
function mnozi(n,m) {
    let proizvod = 1;
    for(i=n; i<=m; i++){
        proizvod*=i;
    }
    return proizvod;
}
console.log(mnozi(1,5));

// Zadatak 11
function aritmeticka(n,m) {
    let zbir = 0;
    let brojac = 0;
    for(i=n; i<=m; i++){
        zbir+=i;
        brojac++;
    }
    return zbir/brojac;
}
console.log(aritmeticka(3,10));

// Zadatak 12 kad im je poslednja cifra 3
function aritmetickaTri(n,m) {
    let zbir = 0;
    let brojac = 0;
    for(i=n; i<=m; i++){
        if (i % 10 == 3) {
            zbir+=i;
            brojac++;
        }  
    }
    return zbir/brojac;
}
console.log(aritmetickaTri(10,53));

// Zadatak 13
function velicinaFonta(velicina) {
    document.write(`<p style="font-size: ${velicina}px">Velicina fonta je ${velicina} piksela.</p>`);
}
velicinaFonta(40);

// Zadatak 14
function recenica5() {
    // let velicina = 10;
    // for(i=1; i<=5; i++){
    //     document.write(`<p style="font-size: ${velicina}px">Recenica ${i}</p>`);
    //     velicina+=10;
    // }

    for(i=1; i<=5; i++){
        document.body.innerHTML += `<h${i}>Recenica ${i}</h${i}>`;
    }
}
recenica5();

// Zadatak 15
function poslednjaPlata(n,a,d) {
    // let plata = a;
    // let povisica = d;
    // for(i=1; i<=n; i++){
    //     plata+=povisica; 
    // }

    let poslednja_plata = a + (n - 1) * d;
    return poslednja_plata;
}
console.log(poslednjaPlata(6,50000,10000));

function ukupnaPlata(n,a,d) {
    // let plata = a;
    // let povisica = d;
    let ukupna_zarada = 0;
    for (let i = 1; i <= n; i++) {
        ukupna_zarada += a + (i - 1) * d;
    }
    return ukupna_zarada;

    // return ((a + poslednjaPlata(n, a, d)) / 2) * n;
}
console.log(ukupnaPlata(6,50000,10000));

// Zadatak 16
function igreBezGranica(t,p,n) {
    if (t<p || t>p+n) {
        console.log(`Cekanje je 0sek`);
    } else {
        let cekanje = p+n-t;
        console.log(`Takmicaru je potrebno da saceka ${cekanje} sekundi`);
    }
}
igreBezGranica(15, 20, 25);
igreBezGranica(15, 10, 12);