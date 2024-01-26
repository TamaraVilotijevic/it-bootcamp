let a = [6,8,9,3,1];
let b = [9,5,6,9,8,9,9];

// Zadatak 2
let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    return suma;
}
console.log(sumaElem(a));

// Zadatak 3
let proizvodElem = niz => {
    let proizvod = 1;
    niz.forEach(el => {
        proizvod*=el;
    });
    return proizvod;
}
console.log(proizvodElem(a));

// Zadatak 4
let srednjaVr = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma+=el;
    });
    return suma / niz.length;
}
console.log(srednjaVr(a));

// Zadatak 5
let maksVr = niz => {
    let maks = niz[0];
    niz.forEach(el => {
        if (el > maks) {
            maks = el;
        }
    });
    return maks;
}
console.log(maksVr(a));

// Zadatak 6
let minVr = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if (el < min) {
            min = el;
        }
    });
    return min;
}
console.log(minVr(a));

// Zadatak 7
let indeksMaks = niz => {
    let maks = niz[0];
    let indeks = 0;
    niz.forEach((el, i) => {
        if (el > maks) {
            maks = el;
            indeks = i;
        }
    });
    return indeks;
}
console.log(indeksMaks(a));
console.log(indeksMaks(b));

// svi indeksi max vr
let sviIndexMaxVr = niz => {
    let maxVr = maksVr(niz);
    let sviIndexi = [];
    niz.forEach((el, i) => {
        if (el == maxVr) {
            sviIndexi.push(i);
        }
    });
    return sviIndexi;
}
console.log(sviIndexMaxVr(b));
console.log(sviIndexMaxVr(b)[0]); 
console.log(sviIndexMaxVr(b)[sviIndexMaxVr(b).length -1]);

// Zadatak 8
let indeksMin = niz => {
    let min = niz[0];
    let indeks = 0;
    niz.forEach((el, i) => {
        if (el < min) {
            min = el;
            indeks = i;
        }
    });
    return indeks;
}
console.log(indeksMin(a));

// Zadatak 9
let veciOdSrVr = niz => {
    let br = 0;
    niz.forEach(el => {
        if (el > srednjaVr(niz)) {
            br++;
        }
    });
    return br;
}
console.log(veciOdSrVr(a));

let brojevi = [-5,3,6,-4,0,8];
// Zadatak 10
let zbirPozitivnih = niz => {
    let zbir = 0;
    niz.forEach(el => {
        if (el > 0) {
            zbir+=el;
        }
    });
    return zbir;
}
console.log(zbirPozitivnih(brojevi));

// Zadatak 11
let brojParnih = niz => {
    let br = 0;
    niz.forEach(el => {
        if (el % 2 == 0) {
            br++;
        }
    });
    return br;
}
console.log(brojParnih(brojevi));

// Zadatak 12
let parniNeparanInd = niz => {
    let br = 0;
    niz.forEach((el, i) => {
        if (el % 2 == 0 && i % 2 != 0) {
            br++;
        }
    });
    return br;
}
console.log(parniNeparanInd(brojevi));

// Zadatak 13
let sumaParanInd = niz => {
    let suma = 0;
    niz.forEach((el, i) => {
        if (i % 2 == 0) {
            suma += el;
        }
    });
    return suma;
}
console.log(sumaParanInd(brojevi));

// Zadatak 14
let promenitiZnak = niz => {
    niz.forEach((el, i) => {
        niz[i] = el * (-1);
    });
    return niz;
}
console.log(promenitiZnak(brojevi));

let brojevi2 = [7,4,3,8,-1,9];
// Zadatak 15
let promenitiZnakNeparnom = niz => {
    niz.forEach((el, i) => {
        if (el % 2 != 0 && i % 2 == 0) {
            niz[i] = el * (-1);
        }
    });
    return niz;
}
console.log(promenitiZnakNeparnom(brojevi2));


let imena = ['Stefan', 'Vladislav', 'Nikola', 'Milan', 'Nevena', 'Maja'];
// Zadatak 19
let duzinaSvihStringova = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}
duzinaSvihStringova(imena);

// Zadatak 20
let stringMaxDuzina = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length;
    niz.forEach(el => {
        if (el.length > duzina) {
            maxVr = el;
            duzina = el.length;
        }
    });
    return maxVr;
}
console.log(stringMaxDuzina(imena));

// Zadatak 22
let sadrziA = niz => {
    let br = 0;
    niz.forEach(el => {
        if (el.includes('a')) {
            br++;
        }
    });
    return br;
}
console.log(sadrziA(imena));

// Zadatak 23
let pocinjuNaA = niz => {
    let br = 0;
    niz.forEach((el, i) => {
        if (el[0] == 'A' || el[0] == 'a') {
            br++;
        }
    });
    return br;
}
console.log(pocinjuNaA(imena));

// Zadatak 24
let zad24 = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        // c.push(a[i], b[i]);
        c.push(el, b[i]);
    });
    return c;
}
let n1 = [1,2,3,4];
let n2 = [5,6,7,8];
console.log(zad24(n1,n2));

// Zadatak 25
let zad25 = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        c.push(el * b[i]);
    });
    return c;
}
console.log(zad25(n1, n2));

// Zadatak 26
let zad26For = a => {
    let k = a.length;
    let n = k/2;
    let b = [];
    for(let i=0; i<n; i++) {
        b[i] = (a[i] + a[2*n-1-i]) / 2;
    }
    return b;
}
console.log(zad26For(n2));
let n3 = [5,8,0,1,4,2,4,3];
console.log(zad26For(n3));

let zad26 = a => {
    let b = [];
    let k = a.length;
    let n = k /2;
    a.forEach((el, i) => {
        if (i < n) {
            b[i] = (a[i] + a[2*n-1-i]) / 2;
        }
    })
    return b;
}
console.log(zad26(n3));