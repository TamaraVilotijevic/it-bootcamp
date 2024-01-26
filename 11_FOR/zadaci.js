// Zadaci iz while vezbanja

// Zadatak 1a
let poruka = '';
for(i=1; i<=20; i++){
    poruka += i + ' ';
}
console.log(poruka);

// Zadatak 3
for(c=1; c<=20; c++){
    if (c % 2 == 0) {
        console.log(c);
    }
}

// Zadatak 4
let n = 11;
for(j=1; j<=n; j++){
    if (j % 3 == 1) {
        document.write(`<p style="color: red">Paragraf${i}</p>`);
    } else if (j % 3 == 2) {
        document.write(`<p style="color: blue">Paragraf${i}</p>`);
    } else {
        document.write(`<p style="color: green">Paragraf${i}</p>`);
    }
}

// Zadatak 6
let suma = 0;
for(a=1; a<=100; a++){
    suma+=a;
}
console.log(suma);

// Zadatak 7
let zbir = 0;
let m = 5;
for(b=1; b<=m; b++){
    zbir+=b;
}
console.log(zbir);

// Zadatak 9
let proizvod = 1;
let l = 5;
for(k=1; k<=l; k++){
    proizvod*=k;
}
console.log(`Proizvod brojeva od 1 do ${l} je ${proizvod}`);

// Zadatak 10
let sumaPK = 0;
let sumaNK = 0;
for(p=1; p<=5; p++){
    if (p % 2 == 0) {
        sumaPK+=p*p;
    } else {
        sumaNK+=p*p*p;
    }
}
console.log(`Suma parnih kvadrata je ${sumaPK} a neparnih kubova ${sumaNK}`);

// Zadatak 11
let s = 20;
let deljivi = 0;
for(t=1; t<=s; t++){
    if (s % t == 0) {
        deljivi++;
    }
}
console.log(`Broj ${s} je deljiv sa ${deljivi} brojeva`);

// Zadatak 12
let r = 10;
let brojDelioca = 0;
for(d=1; d<=r; d++){
    if (r % d == 0) {
        brojDelioca++;
    }
}
if (brojDelioca == 2) {
    console.log(`Broj ${r} je prost`);
} else {
    console.log(`Broj ${r} je slozen`);
}