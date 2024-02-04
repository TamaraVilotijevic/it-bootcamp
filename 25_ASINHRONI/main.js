function getUsers(resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);
        } else if (request.readyState === 4) {
            reject('Desila se greska');
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.send();
}

function zad2(niz) {
    niz.forEach(u => {
        if (u.website.includes('.com')) {
            document.body.innerHTML += u.website + `<br>`;
        }
    });
}

function ispisStringa(str) {
    document.body.innerHTML += str + `<br>`;
}

getUsers(zad2, ispisStringa);
document.body.innerHTML += "1" + `<br>`;
document.body.innerHTML += "2" + `<br>`;

// Zad 3
getUsers(niz => {
    niz.forEach(u => {
        if (u.company.name.includes('Group') || u.company.name.includes('LLC')) {
            document.body.innerHTML += u.company.name + `<br>`;
        }
    });
}, poruka => {
    document.body.innerHTML += poruka + `<br>`;
});