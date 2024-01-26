let brojevi1 = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
let brojevi3 = [1,2,3,4,5,6];
let brojevi4 = [1,5,9,3];
let brojevi5 = [8,6,7,8,5];

// Zadatak 2
let sumaElem = niz => {
    let suma = 0;
    for(i=0; i<niz.length; i++){
        suma+=niz[i];
    }
    return suma;
}
console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));

// Zadatak 3
let proizvodElem = niz => {
    let proizvod = 1;
    for(i=0; i<niz.length; i++){
        proizvod*=niz[i];
    }
    return proizvod;
}
console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));

// Zadatak 4 Odrediti srednju vrednost elemenata celobrojnog niza.
let srVrednost = niz => sumaElem(niz) / niz.length;
// let srVrednost = niz => niz.length != 0 ? sumaElem(niz) / niz.length : 0;
console.log(srVrednost(brojevi1));
console.log(srVrednost(brojevi2));
console.log(srVrednost(brojevi3));

// ukoliko se trazi srednja vrednost parnih
let srVrednostParnih = niz => {
    let suma = 0;
    let parni = 0;
    for(let i=0; i<niz.length; i++){
        if (niz[i] % 2 == 0) {
            suma+=niz[i];
            parni++;
        }
    }
    if (parni != 0) {
        return suma/parni;
    } else {
        return 0;
    } 
}
console.log(srVrednostParnih(brojevi1));
console.log(srVrednostParnih(brojevi2));
console.log(srVrednostParnih(brojevi3));

// Zadatak 5 Odrediti maksimalnu vrednost u celobrojnom nizu.
let maksVrednost = niz => {
    let najveci = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > najveci) {
            najveci = niz[i];
        }
    }
    return najveci;
}
console.log(maksVrednost(brojevi1));
console.log(maksVrednost(brojevi2));
console.log(maksVrednost(brojevi3));

// Zadatak 6 Odrediti minimalnu vrednost u celobrojnom nizu.
let minVrednost = niz => {
    let najmanji = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < najmanji) {
            najmanji = niz[i];
        }
    }
    return najmanji;
}

console.log(minVrednost(brojevi1));
console.log(minVrednost(brojevi2));
console.log(minVrednost(brojevi3));

// Zadatak 7 Odrediti indeks maksimalnog elementa celobrojnog niza.
let indMaxNiza = niz => {
    let max = niz[0];
    let index = 0;
    for(let i=1; i<niz.length; i++) {
        if (niz[i]>max) {
            max = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indMaxNiza(brojevi5));

// Zadatak 8 Odrediti indeks minimalnog elementa celobrojnog niza.
let indMinNiza = niz => {
    let min = niz[0];
    let index = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indMinNiza(brojevi1));
console.log(indMinNiza(brojevi2));
console.log(indMinNiza(brojevi3));
console.log(indMinNiza(brojevi4));
console.log(indMinNiza(brojevi5));

// Zadatak 9 Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let veciOdSrVr = niz => {
    let br = 0;
    for(let i=0; i<niz.length; i++){
        if (niz[i] > srVrednost(niz)) {
            br++;
        }
    }
    return br;
}
console.log(veciOdSrVr(brojevi1));
console.log(veciOdSrVr(brojevi2));

// Zadatak 10 Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPozitivnih = niz => {
    let zbir = 0;
    for(let i=0; i<niz.length; i++){
        if (niz[i] > 0) {
            zbir+=niz[i];
        }
    }
    return zbir;
}
console.log(zbirPozitivnih(brojevi1));
console.log(zbirPozitivnih(brojevi2));
console.log(zbirPozitivnih(brojevi4));

// Zadatak 11 Odrediti broj parnih elemenata u celobrojnom nizu.
let brojParnih = niz => {
    let brBrojeva = 0;
    for(let i=0; i<niz.length; i++){
        if (niz[i] % 2 == 0) {
            brBrojeva++;
        }
    }
    return brBrojeva;
}
console.log(brojParnih(brojevi1));
console.log(brojParnih(brojevi3));
console.log(brojParnih(brojevi4));

// Zadatak 12 Odrediti broj parnih elemenata sa neparnim indeksom.
let parNepar = niz => {
    br = 0;
    for(let i=0; i<niz.length; i++){
        if (niz[i] % 2 == 0 && i % 2 != 0) {
            br++;
        }
    }
    return br;
}
console.log(parNepar(brojevi1));
console.log(parNepar(brojevi2));
console.log(parNepar(brojevi3));

// Zadatak 13 Izračunati sumu elemenata niza sa parnim indeksom.
let sumaSaParInd = niz => {
    let suma = 0;
    for(let i=0; i<niz.length; i++){
        if (i % 2 ==0) {
            suma+=niz[i];
        }
    }
    return suma;
}
console.log(sumaSaParInd(brojevi1));
console.log(sumaSaParInd(brojevi2));
console.log(sumaSaParInd(brojevi3));

// Zadatak 14 Promeniti znak svakom elementu celobrojnog niza.
let promenitiZnak = niz => {
    for(let i=0; i<niz.length; i++){
        niz[i] = niz[i] * -1;
    }
    return niz;
}
console.log(promenitiZnak(brojevi1));
console.log(promenitiZnak(brojevi2));
console.log(promenitiZnak(brojevi3));

// Zadatak 15 Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
let promenitiZnak2 = niz => {
    for(let i=0; i<niz.length; i+=2){
        if (niz[i] % 2 != 0) {
            niz[i] = niz[i]*(-1);
        }
    }
    return niz;
}
console.log(promenitiZnak2(brojevi1));

// Zadatak 19
let imena = ['Stefan', 'Jelena', 'Marko','Milos', 'Bratislav', 'Ljiljana','ana'];
let duzinaSvakogElementa = niz => {
    for (let i=0; i<niz.length; i++){
        let s = niz[i];
        console.log(s.length);
    }
}
duzinaSvakogElementa(imena);

// Zadatak 20
let najduziString = niz => {
    let najduzi = niz[0];
    for(let i=1; i<niz.length; i++) {
        if(niz[i].length > najduzi.length) {
            najduzi = niz[i];
        }
    }
    return najduzi;
}
console.log(najduziString(imena));

// Zadatak 21 Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu
let prosecnaDuzina = niz => {
    let suma = 0;
    let br = niz.length;
    for(let i=0; i<niz.length; i++){
        suma+=niz[i].length;
    }
    return suma/br;
}
let veciOdProseka = niz => {
    let brojevi = 0;
    for(let i=0; i<niz.length; i++){
        if (niz[i].length > prosecnaDuzina(niz)) {
            brojevi++
        }
    }
    return brojevi;
}
console.log(prosecnaDuzina(imena));
console.log(veciOdProseka(imena));

// Zadatak 22
let sadrzia = niz => {
    let br = 0;
    for(let i=0; i<niz.length; i++){
        if (niz[i].includes('a')) {
            br++
        }
    }
    return br;
}
console.log(sadrzia(imena));

// Zadatak 23
let pocinjuNaA = niz => {
    let br = 0;
    for(let i=0; i<niz.length; i++){
        if (niz[i][0] == 'a' || niz[i][0] == 'A') {
            br++
        }
    }
    return br;
}
console.log(pocinjuNaA(imena));

// Zadatak 24
let zad24a = (a,b) => {
    let n = a.length; //n=b.length
    let c = [];
    for(let i=0; i<n; i++){
        c.push(a[i], b[i]);
    }
    return c;
}
let zad24b = (a,b) => {
    let n = a.length; //n=b.length
    let c = [];
    for(let i=0; i<n; i++){
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    }
    return c;
}
let niz1 = [5,3,8,11,4,15];
let niz2 = [2,7,18,6,14,9];

// Zadatak 25
let zad25 = (a,b) => {
    let n = a.length;
    let c = [];
    for(let i=0; i<n; i++) {
        c[i] = a[i]*b[i];
        // c.push(a[i]*b[i]);
    }
    return c;
}
console.log(zad25(niz1,niz2));

// Zadatak 26
// let zad26 = a => {
//     let n = a.length;
//     let b = [];
//     for(let i=0; i<n; i++) {
//         b[i] = (a[i]+a[2*n-1-i])/2;
//     }
//     return b;
// }
// console.log(zad26(niz1));