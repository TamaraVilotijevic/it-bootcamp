let getJSON = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.responseText);
            callback(data, undefined);
        } else if (request.readyState == 4) {
            callback(undefined, 'Desila se greska');
        }
    });
    request.open('GET', resource);
    request.send();
}

getJSON('../JSON/prvi.json', (data, err) => {
    if (data) {
        console.log(data);
        getJSON('../JSON/drugi.json', (data, err) => {
            if (data) {
                console.log(data);
                getJSON('../JSON/treci.json', (data, err) => {
                    if (data) {
                        console.log(data);
                    } else {
                        console.log(err);
                    }
                });
            } else {
                console.log(err);
            }
        });
    } else {
        console.log(err);
    }
});

