const request = new XMLHttpRequest();
request.addEventListener('readystatechange', function() {
    if (request.readyState == 4 && request.status == 200) {
        let data = JSON.parse(request.responseText);
        console.log(data);
        console.log(data[5].title);
    } else if (request.readyState == 4) {
        console.log('Desila se greska');
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

const request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', function() {
    if (request1.readyState == 4 && request1.status == 200) {
        let data = JSON.parse(request1.responseText);
        console.log(data);
        data.forEach(u => {
            if (u.website.endsWith('.com')) {
                console.log(u);
            }
        });
    } else if (request1.readyState == 4) {
        console.log('Desila se greska');
    }
});
request1.open('GET', 'https://jsonplaceholder.typicode.com/users');
request1.send();

const request2 = new XMLHttpRequest();
request2.addEventListener('readystatechange', function() {
    if (request2.readyState == 4 && request2.status == 200) {
        let data = JSON.parse(request2.responseText);
        data.forEach(u => {
            if (u.name.includes('Clementine')) {
                console.log(u);
            }
        });
    } else if (request2.readyState == 4) {
        console.log('Desila se greska');
    }
});
request2.open('GET', 'https://jsonplaceholder.typicode.com/users');
request2.send();

const request3 = new XMLHttpRequest();
request3.addEventListener('readystatechange', function() {
    if (request3.readyState == 4 && request3.status == 200) {
        let data = JSON.parse(request3.responseText);
        data.forEach(u => {
            if (u.company.name.includes('Group') || u.company.name.includes('LLC')) {
                console.log(u);
            }
        });
    } else if (request3.readyState == 4) {
        console.log('Desila se greska');
    }
});
request3.open('GET', 'https://jsonplaceholder.typicode.com/users');
request3.send();

const request4 = new XMLHttpRequest();
request4.addEventListener('readystatechange', function() {
    if (request4.readyState == 4 && request4.status == 200) {
        let data = JSON.parse(request4.responseText);
        let gradovi = [];
        // let istiGradovi = [];
        // data.forEach(u => {
        //     if (gradovi.includes(u.address.city)) {
        //         istiGradovi.push(u.address.city);
        //     }
        //     gradovi.push(u.address.city);
        // });
        for(let i=0; i<data.length; i++) {
            if (gradovi.includes(data[i].address.city)) {
                continue;
            }
            gradovi.push(data[i].address.city);
        }
        console.log(gradovi);
    } else if (request4.readyState == 4) {
        console.log('Desila se greska');
    }
});
request4.open('GET', 'https://jsonplaceholder.typicode.com/users');
request4.send();

const request5 = new XMLHttpRequest();
request5.addEventListener('readystatechange', function() {
    if (request5.readyState == 4 && request5.status == 200) {
        let data = JSON.parse(request5.responseText);
        let br = 0;
        data.forEach(u => {
            if (Number(u.address.geo.lat) < 0 && Number(u.address.geo.lng) < 0) {
                br++;
            }
        });
        console.log(br);
    } else if (request5.readyState == 4) {
        console.log('Desila se greska');
    }
});
request5.open('GET', 'https://jsonplaceholder.typicode.com/users');
request5.send();