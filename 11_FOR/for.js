// Zadatak 1
// let i = 1;
// while (i <= 20) {
//     console.log(`Broj ${i}`);
//     i++;
// }

// for(i = 1; i <= 20; i++){  //umesto i++ moze i i+=1
//     console.log(`Broj ${i}`);
// }

// Zadatak 2
// for(let k=20; k>=1; k--){   //k-=1, k=k-1
//     console.log(`Ovo je k ${k}`);
// }

// // Zadatak 5
// let suma = 0;
// let n = 5;
// for(p=1; p<=n; p++){
//     suma += p;
// }
// console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

// Zadatak 3
// for(i=1; i<=20; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// // Zadatak 4
// for(j=5; j<=15; j++){
//     console.log(2*j);
// }

// Zadatak 6
// let m = 5;
// let suma = 0;
// for(n=1; n<=m; n++){
//     suma+=n;
// }
// console.log(`Suma brojeva je ${suma}`);

// Zadatak 7
// let m = 5;
// let proizvod = 1;
// for(n=1; n<=m; n++){
//     proizvod*=n;
// }
// console.log(`Proizvod brojeva je ${proizvod}`);

// Zadatak 8
// let zbir = 0;
// let m = 5;
// for(n=1; n<=m; n++){
//     zbir+=n*n;
// }
// console.log(`Suma kvadrata brojeva je ${zbir}`);

// Zadatak 9
// for(i=1; i<=3; i++){
//     document.write(`<img src="${i}.jpg">`);
// }

// Zadatak 12
// let n = 3;
// let m = 6;
// let suma = 0;
// let br = 0;
// for(i=n; i<=m; i++){
//     suma+=i;
//     br++;
// }
// let arsr = suma/br;
// console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${arsr}`);

// Zadatak 10
// let proizvod = 1;
// for(i=20; i<=100; i++){
//     if (i % 11 == 0) {
//         proizvod*=i;
//     }
// }
// console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 je ${proizvod}`);

// Zadatal 11
// let deljivi = 0;
// for(j=5; j<=150; j++){
//     if (j % 13 == 0) {
//         deljivi++;
//     }
// }
// console.log(`Ima ${deljivi} brojeva`);

// Zadatak 16
// let n = 5;
// let m = 15;
// let suma = 0;
// let a = 4;
// for(i=n; i<=m; i++){
//     if (i % a != 0) {
//         suma+=i;
//     }
// }
// console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);

// Zadatak 13
let sumaPoz = 0;
let sumaNeg = 0;
let n = -5;
let m = 10;
for(i=n; i<=m; i++){
    if (i < 0) {
        sumaNeg++;
    }
    if (i > 0) {
        sumaPoz++;
    }
}
console.log(`Suma pozitivnih brojeva od ${n} do ${m} je ${sumaPoz} a negativnih ${sumaNeg}`);

// Zadatak 14
let deljivi = 0;
for(i=5; i<=50; i++){
    if ((i % 3 == 0) || (i % 5 == 0)) {
        deljivi++;
    }
}
console.log(`Broj deljivih brojeva sa 3 ili 5 je ${deljivi}`);

// Zadatak 15
let brojBr = 0;
let suma = 0;
n = 24;
m = 34;
for(i=n; i<=m; i++){
    if (i % 10 == 4) {
        suma+=i;
        brojBr++;
    }
}
console.log(`Suma brojeva kojima je poslednja cifra 4 je ${suma} a ima ih ${brojBr}`);

// Zadatak 17
let proizvod = 1;
n = 4;
m = 12;
let a = 3;
for(i=n; i<=m; i++){
    if (i % a == 0) {
        proizvod*=i;
    }
}
console.log(`Proizvod brojeva deljivih sa ${a} je ${proizvod}`);

// Zadatak 18
let k = 15;
let brBrojeva = 0;
for(i=1; i<=k; i++){
    if (k % i == 0) {
        brBrojeva++
    }
}
console.log(`Broj ${k} je deljiv sa ${brBrojeva} brojeva`);

// Zadatak 19
let prost = true;
k = 11;
for(i=2; i<=k/2; i++){        //moze i Math.sqrt(k) umesto k/2
    if (k % i == 0) {
        prost = false;
        break;
    }
}
if (prost == true) {           //moze i samo da pise prost jer je sam po sebi true
    console.log(`Broj ${k} je prost`);
} else {
    console.log(`Broj ${k} je slozen`);
}

// Zadatak 20
let divTabela = document.getElementById('tabela');
let tabela = '<table>';
for(i=1; i<=6; i++){
    let obojen = 'belo';
    if (i % 2 == 0) {
        obojen = 'roze';
    }
    tabela += 
    `<tr class="${obojen}">
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>`;
}
tabela += '</table>';
divTabela.innerHTML = tabela;

// let tabela = `<table>`;
// for(i=1; i<=6; i++){
//     let obojen = 'belo';
//     if (i % 2 == 0) {
//         obojen = 'roze';
//     }
//     tabela += `
//         <tr class="${obojen}">
//             <td>Tekst</td>
//             <td>Tekst</td>
//         </tr>`;
// }
// tabela += `</table`;
// document.write(tabela);

// Zadatak 21
let lista = '<ul>';
for(i=1; i<=10; i++) {
    let obojen = 'crno';
    let listItem = `<li class="${obojen}">Element ${i}</li>`;
    if (i % 3 == 0) {
        obojen = 'lila';
        listItem = `<ul><li class="${obojen}">Element ${i}</li></ul>`;
    }
    lista += listItem;
}
lista += '</ul>';
document.write(lista);

// Zadatak 22
let div = `<div>`;
for(i=1; i<=64; i++){
    div+= `<span>${i}</span>`;
    if (i % 8 == 0) {
        div+= `<br>`;
    }
}
div+=`</div>`;
document.write(div);

// Zadatak 23
let tabla = `<div>`;
let broj = 1;
for(i=1; i<=8; i++){
    for(j=1; j<=8; j++){
        let obojeno = 'crni';
        if((i+j)%2 == 0){
            obojeno = 'beli';   
        }

        let polje = `<span class="${obojeno}">${broj}</span>`;
        tabla+=polje;
        broj++;  
    }
}
tabla+= `</div>`;
document.write(tabla);