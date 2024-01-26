// Zadatak 12

let br1 = 15;
let br2 = 19;
// if (br1 > br2) {
//     console.log(`Veci broj je ${br1}, a manji broj je ${br2}`);
//     if (br1%2 == 0) {
//         console.log(`Veci broj je paran`);
//     } else {
//         console.log(`Veci broj nije paran`);
//     }
//     if (br2%3 == 0) {
//         console.log(`Manji broj je deljiv sa 3`);
//     } else {
//         console.log(`Manji broj nije deljiv sa 3`);
//     }
// } else {
//     console.log(`Veci broj je ${br2}, a manji broj je ${br1}`);
//     if (br2%2 == 0) {
//         console.log(`Veci broj je paran`);
//     } else {
//         console.log(`Veci broj nije paran`);
//     }
//     if (br1%3 == 0) {
//         console.log(`Manji broj je deljiv sa 3`);
//     } else {
//         console.log(`Manji broj nije deljiv sa 3`);
//     }
// }

let veci = br1;
if (br2 > veci) {
    veci = br2;
}
let manji = br1 + br2 - veci;
if (veci % 2 == 0) {
    console.log('Veci broj je deljiv sa 2');
} else {
    console.log('Veci broj nije deljiv sa 2');
}
if (manji % 3 == 0) {
    console.log('Manji broj je deljiv sa 3');
} else {
    console.log('Manji broj nije deljiv sa 3');
}


// Zadatak 13
let dan1 = 2;
let mes1 = 10;
let god1 = 2016;

let dan2 = 16;
let mes2 = 12;
let god2 = 2020;

if (god1 < god2) {
    console.log(`Prvi datum je raniji`);
} else if (god1 == god2) {
    if (mes1 < mes2) {
        console.log(`Prvi datum je raniji`);
    } else if (mes1 == mes2) {
        if (dan1 < dan2) {
            console.log(`Prvi datum je raniji`);
        } else if (dan1 == dan2) {
            console.log('Jednaki su');
        } else {
            console.log(`Drugi datum je raniji`);
        }
    } 
} else {
    console.log(`Drugi datum je raniji`);
}

// Zadatak 14
let pol = 'm';
let godine = 25;

if (pol == 'm') {
    console.log('Muskarac');
    if (godine >= 18) {
        console.log('Punoletan');
    } else {
        console.log('Maloletan');
    }
} else {
    console.log('Zena');
    if (godine >= 18) {
        console.log('Punoletna');
    } else {
        console.log('Maloletna');
    }
}