// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// console.log('Kraj petlje');
// console.log(i);

// let i = 1;
// while (i <= 5) {
//     console.log(i++);
// }

// let i = 0;
// while (i < 5) {
//     i++;
//     console.log(i);
// }

/*PRE PETLJE i=1;
1.iteracija: log(1), i=2;
2.iteracija: log(2), i=3;
3.iteracija: log(3), i=4;
4.iteracija: log(4), i=5;
5.iteracija: log(5), i=6;
*/

// Zadatak 1a
// let i = 1;
// let poruka = "";
// while (i <= 20) {
//     poruka = poruka + i + ' ';
//     i++;
// }
// console.log(poruka);

// Zadatak 1b
// let a = 0;
// while (a < 20) {
//     a++;
//     console.log(a);
// }
// console.log('Kraj');

// Zadatak 2
// let b = 20;
// while (b > 0) {
//     console.log(b);
//     b--;
// }
/* 2. nacin
let b = 1;
while (b <= 20) {
    console.log(21-b);
    b++;
}
*/
// console.log('Kraj');

// Zadatak 3
// let c = 1;
// while (c <= 20) {
//     if (c % 2 == 0) {
//         console.log(c);
//     }
//     c++;
// }

/*2.nacin
let c = 2;
while (c <= 20){
    console.log(c);
    c = c+2; ili c +=2
}
*/

// Zadatak 4
// let n = 7;
// let i = 1;
// while (i <= n) {
//     if (i % 3 == 1) {
//         document.write(`<p style="color: red">Paragraf${i}</p>`);
//     } else if (i % 3 == 2) {
//         document.write(`<p style="color: blue">Paragraf${i}</p>`);
//     } else {
//         document.write(`<p style="color: green">Paragraf${i}</p>`);
//     }
//     i++;
// }

// 2.nacin
// let n = 7;
// let i = 1;
// while (i <= n) {
//     if (i % 3 == 1) {
//         document.body.innerHTML += `<p class="plava">Paragraf broj ${i}</p>`;
//     } else if (i % 3 == 2) {
//         document.body.innerHTML += `<p class="crvena">Paragraf broj ${i}</p>`;
//     } else {
//         document.body.innerHTML += `<p class="zelena">Paragraf broj ${i}</p>`;
//     }
//     i++;
// }

// 3.nacin
// let n = 7;
// let i = 1;
// while (i <= n) {
//     let klasa;
//     if (i % 3 == 1) {
//         klasa = 'plava';
//     } else if (i % 3 == 2) {
//         klasa = 'crvena';
//     } else {
//         klasa = 'zelena';
//     }
//     document.body.innerHTML += `<p class="${klasa}">Paragraf broj ${i}</p>`;
//     i++;
// }

// Zadatak 5
// let n = 5;
// let i = 1;
// while (i <= n) {
//     if (i % 2 == 0) {
//         document.write(`<img style="border: 2px solid red" src="cvet.jpg">`);
//     } else {
//         document.write(`<img style="border: 2px solid blue" src="cvet.jpg">`);
//     }
//     i++;
// }

// Zadatak 6
// let i = 1;
// let zbir = 0;
// while (i <= 100) {
//     zbir += i;
//     i++;
    
// }
// console.log(zbir);

// Zadatak 7
// let i = 1;
// let n = 230;
// let suma = 0;
// while (i <= n) {
//     suma += i;
//     i++;
// }
// console.log(suma);

// Zadatak 8
// let n = 5;
// let m = 30;
// let suma = 0;
// while (n <= m) {
//     suma += n;
//     n++;
// }
// console.log(suma);

// Zadatak 9
// let n = 1;
// let m = 5;
// let proizvod = 1;
// while (n <= m) {
//     proizvod *= n;
//     n++;
// }
// console.log(proizvod);

// Zadatak 10
// let n = 5;
// let m = 10;
// let suma1 = 0;
// let suma2 = 0;
// while (n <= m) {
//     if (n % 2 == 0) {
//         suma1 += n*n;
//     } else {
//         suma2 += n*n*n;
//     }
//     n++;
// }
// console.log(`Suma kvadrata parnih je ${suma1} a suma kubova neparnih je ${suma2}`);

// Zadatak 11
// let k = 20;
// let i = 1;
// let zbir = 0;
// while (i <= k) {
//     if (k % i == 0) {
//         zbir++;
//     }
//     i++;
// }
// console.log(`Broj ${k} je deljiv sa ${zbir} brojeva`);

// Zadatak 12
let n = 7;
let i = 1;
let brojDelioca = 0;
while (i <= n) {
    if (n % i == 0) {
        brojDelioca++;
    }
    i++;
}
if (brojDelioca == 2) {
    console.log(`Broj ${n} je prost`);
} else {
    console.log(`Broj ${n} nije prost`);
}