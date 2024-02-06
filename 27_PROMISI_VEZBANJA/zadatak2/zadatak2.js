let txt = document.getElementById('txt');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let div = document.getElementById('ispis');
let divTabela = document.getElementById('ispisTabela');
let form = document.getElementById('forma');

let returnPromise = resource => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Doslo je do greske');
            }
        });
        request.open('GET', resource);
        request.send();
    });
}

let writeItems = e => {
    e.preventDefault();
    let proizvodiNaStanju = [];
    returnPromise('../json/stock.json').then(data => {
        data.forEach(p => {
            if (p.stock > 0) {
                proizvodiNaStanju.push(p.id);
            }
        });
        // data.forEach(p => {
        //     if (proizvodiNaStanju.includes(p.id) && p.item.includes(txt.value) && txt.value!='') {
        //         console.log(p.item);
        //     }
        // });
        return returnPromise('../json/prices.json');
    }).then(data => {
        let list = `<ul>`;
        data.forEach(p => {
            if (proizvodiNaStanju.includes(p.id) && p.item.includes(txt.value) && txt.value!='') {
                if ((p.price > Number(num1.value) && p.price < Number(num2.value)) || (p.price < Number(num1.value) && p.price > Number(num2.value))) {
                    list += `<li>${p.item}</li>`;
                } 
            } 
        });
        list += `</ul>`;
        div.innerHTML = list;
    })
    .catch(msg => {
        div.innerHTML = msg;
    });
}

form.addEventListener('submit', writeItems);