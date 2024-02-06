const form = document.querySelector('#order');
const capacity = document.querySelector('#capacity');
const div = document.querySelector('#result');

let getItemsReturnPromise = resource => {
    return new Promise((resolve, reject) => {
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
    });
}

let submitFormVarijanta2 = e => {
    e.preventDefault();
    let nizArtikala = [];
    getItemsReturnPromise('json/stock.json').then(data => {
        data.forEach(artikal => {
            if (artikal.stock == 0) {
                nizArtikala.push(artikal.id);
            }
        });
        return getItemsReturnPromise('json/weights.json');
    }).then(data => {
        let totalWeight = 0;
        data.forEach(artikal => {
            if (nizArtikala.includes(artikal.id)) {
                totalWeight += artikal.weight;
            }
        });
        if (totalWeight <= Number(capacity.value)) {
            return getItemsReturnPromise('json/prices.json');
        } else {
            div.innerHTML = `Not enough capacity in truck!`;
        }
    }).then(data => {
        if (data !== undefined) {
            let table = `<table>`;
            let totalPrice = 0;
            data.forEach(artikal => {
                if (nizArtikala.includes(artikal.id)) {
                    totalPrice += artikal.price;
                    table += 
                    `<tr>
                        <td>${artikal.item}</td>
                        <td>${artikal.price}</td>
                    </tr>`;
                }
            });
            table += 
            `<tr>
                <td>UKUPNO</td>
                <td>${totalPrice}</td>
            </tr>
            </table>`;
            div.innerHTML = table;
        }
    })
    .catch(msg => {
        div.innerHTML = msg;
    });
}

form.addEventListener('submit', submitFormVarijanta2);