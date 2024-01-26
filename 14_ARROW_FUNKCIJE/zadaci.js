// Zadatak 3
function neparan(n) {
    // if (n % 2 == 1) {
    //     return true;
    // } else {
    //     return false;
    // }

    let x;
    if (n % 2 == 1) {
        x = true;
    } else {
        x = false;
    }
    return x;
}

function neparan2(n) {
    if (n % 2 == 1) {
        var x = true; //var - dostupna unutar cele funkcije, a let unutar bloka koda
    }else {
        var x = false;
    }
    var x; //tacno al nema poente
    return x;
}

let p = 5;
console.log(neparan2(p));
console.log(neparan(p));

let neparan3 = (n) => {
    let x = false;
    if (n % 2 == 1) {
        x = true;
    }
    return x;
}

let neparan4 = (n) => {
    return (n % 2 == 1) ? true : false; //ternarni operator
}
console.log(neparan4(6));

let neparan5 = (n) => {
    return (n % 2 == 1);
}
console.log(neparan5(6));

let neparan6 = (n) => (n % 2 == 1); //kad ima samo jedan parametar, on moze da se pise bez zagrade
console.log(neparan6(6));

let uvecajZaDva = n => (n+=2);
console.log(uvecajZaDva(5));


// Zadatak 1
// let maks2 = (broj1,broj2) => {
//     let veci = broj1;
//     if (broj2 > broj1) {
//         veci = broj2;
//     }
//     return veci;
// }
let maks2 = (a,b) => a>b ? a : b;
console.log(maks2(15,9));

let maks4 = (br1,br2,br3,br4) => maks2(maks2(br1,br2),maks2(br3,br4));

console.log(maks4(5,8,3,11));

// Zadatak 2
// let dodajSliku = adresa => {
//     let slika = `<img src="${adresa}">`;
//     document.write(slika);
//     return slika;
// }
let dodajSliku = adresa => `<img src="${adresa}">`;
let d1 = document.getElementById('d1');
d1.innerHTML += dodajSliku('https://djole.dog/wp-content/uploads/2021/04/uskrsn_nove_slike3.jpg');
