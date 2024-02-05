let getJSON = resource => {
    const request = new XMLHttpRequest();
    request.open('GET', resource);
    request.send();

    return new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status == 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState == 4) {
                reject('Doslo je do greske');
            }
        });
    });
}

getJSON("../JSON/prvi.json").then(sadrzaj => {
    console.log("prvi.json", sadrzaj);
    return getJSON("../JSON/drugi.json");
}).then(sadrzaj2 => {
    console.log('drugi.json', sadrzaj2);
    return getJSON("../JSON/treci.json");
}).then(sadrzaj3 => {
    console.log('treci.json', sadrzaj3);
}).catch(greska => {
    console.log("Greska u fajlu", greska);
});

// getJSON('../JSON/prvi.json', (data, err) => {
//     if (data) {
//         console.log(data);
//         getJSON('../JSON/drugi.json', (data, err) => {
//             if (data) {
//                 console.log(data);
//                 getJSON('../JSON/treci.json', (data, err) => {
//                     if (data) {
//                         console.log(data);
//                     } else {
//                         console.log(err);
//                     }
//                 });
//             } else {
//                 console.log(err);
//             }
//         });
//     } else {
//         console.log(err);
//     }
// });

