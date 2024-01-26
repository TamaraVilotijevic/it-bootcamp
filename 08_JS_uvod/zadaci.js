//Zadatak 1
// let sati = 10;
// let minuti = 30;

// let odPonoci = sati * 60 + minuti;
// console.log('Minuta od ponoci:' + odPonoci);

// //Zadatak 1.1 - minuta ostalo do ponoci
// let doPonoci = 24*60 - odPonoci;
// console.log('Minuta do ponoci:' + doPonoci);

//Zadatak 2
// let odPonoci = 370;
// let sati = Math.floor(odPonoci / 60);
// console.log(sati);
// let minuti = odPonoci % 60;
// console.log(minuti);
// console.log('Sati:' + sati + ' Minuta:' + minuti);

//Zadatak 3
let cenaRobe = 1200;
let novcanica = 2000;
let kusur = novcanica - cenaRobe;
console.log('Kusur je: ' + kusur);

//Zadatak 6
let ukupnoEur = 70;
let kursEur = 117.29;
let ukupnoDin = ukupnoEur * kursEur;
console.log(ukupnoDin);

let novacDin = 5000;
let novacEur = novacDin / kursEur;
console.log(novacEur);

//Zadatak 7
// let brojEur = 100;
let kursDol = 106.79;
// let brojDol = brojEur * kursEur / kursDol;
// console.log(brojDol);

//iz dol u evre 
let brojDol = 100;
let brojDin = brojDol * kursDol;
let brojEur = brojDin / kursEur;
console.log(brojEur);

//Zadatak 8
let celz = 15;
let faren = celz * 1.8 + 32;
console.log(faren);

let farenhajt = 59;
let celzijus = (farenhajt- 32) / 1.8;
console.log(celzijus);

//Zadatak 9
celz = 20;
let kel = celz + 273.15;
console.log(kel);
let kelvin2 = 300;
let celzijus2 = kelvin2 - 273.15;
console.log(celzijus2);

//Zadatak 4
let datum = new Date();
let god = datum.getFullYear();
let mes = datum.getMonth() + 1;
let dan = datum.getDate();
console.log(god, mes, dan);

let sat = datum.getHours();
let minut = datum.getMinutes();
let sekunda = datum.getSeconds();
let odPonoci = sat * 60 + minut;
console.log(odPonoci);

//Zadatak 5
let datum1 = dan + '.'+ mes + '.' + god + '.';
console.log(datum1);
let datum2 = god + '/' + mes + '/' + dan;
console.log(datum2);


// Dodatno vezbanje 8.zadatak
// let galon = 10;
// let litar = galon * 3.785;
// console.log(litar);
// let litar1 = 37.85;
// let galon1 = litar1 / 3.785;
// console.log(galon1);