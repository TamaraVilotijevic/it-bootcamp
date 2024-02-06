const form = document.querySelector('#order');
const capacity = document.querySelector('#capacity');
const div = document.querySelector('#result');


let getItems = (resource, resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);
        } else if (request.readyState === 4) {
            reject('Desila se greska');
        }
    });
    request.open('GET', resource);
    request.send();
}

let submitFormVarijanta1 = (e) => {
    e.preventDefault();
    //1.odrediti artikle koji nisu na stanju
    let nizArtikala = [];
    getItems('json/stock.json', (data) => {
        data.forEach(artikal => {
            if (artikal.stock == 0) {
                nizArtikala.push(artikal.id);
            }
        });
        //2.odrediti tezinu tih artikala
        getItems('json/weights.json', (data) => {
            let totalWeight = 0;
            data.forEach(artikal => {
                if (nizArtikala.includes(artikal.id)) {
                    totalWeight += artikal.weight;
                }
            });
            //3.ako je tezina manja od kapaciteta kamiona
            if (totalWeight <= Number(capacity.value)) {
                //3.1.ispisati ukupnu cenu tih artikala
                getItems('json/prices.json', (data) => {
                    let totalPrice = 0;
                    data.forEach(artikal => {
                        if (nizArtikala.includes(artikal.id)) {
                            totalPrice += artikal.price;
                        }
                    });
                    div.innerHTML = `Total price of articles: ${totalPrice}`;
                }, (msg) => {
                    div.innerHTML = msg;
                });
            } else {
                //3.2.
                div.innerHTML = `Not enough capacity in truck!`;
            }
        }, (msg) => {
            div.innerHTML = msg;
        });
        console.log(nizArtikala);
    }, (msg) => {
        div.innerHTML = msg;
    });
}

form.addEventListener('submit', submitFormVarijanta1);