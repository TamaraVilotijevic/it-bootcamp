let datum1 = new Date("2024-01-26 17:00:00");
let datum2 = new Date("2024-01-26 21:00:00");

//ako pristupamo direkt kolekciji ide add metoda, a ako pristupamo kolekciji pa dokumentu onda set
db.collection("tasks")
.add({
    title: "Cas ITBootcamp",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Cas iz baza podataka"
})
.then(() => {
    console.log("Uspesno dodat task");
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

db.collection('users').doc('cust04')
.update({                  //menja postojeca polja
    age: 28
})
.then(() => {
    console.log("Uspesno promenjene godine");
})
.catch(e => {
    console.log(`Greska: ${e}`);
});


db.collection('movies').doc('movie02')
.set({
    name: "Green Book",
    director: {
        name: "Peter",
        surname: "Farrelly"
    },
    release_year: 2018,
    genres: ["drama", "biography", "comedy"],
    rating: 8.2
})
.then(() => {
    console.log("Uspesno dodat film");
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

db.collection('movies').doc('movie01')
.set({
    name: "Trial by fire",
    director: {
        name: "Edward",
        surname: "Zwick"
    },
    release_year: 2018,
    genres: ["drama", "biography"],
    rating: 7.1
})
.then(() => {
    console.log("Uspesno dodat film");
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

db.collection('movies').doc('movie03')
.set({
    name: "The help",
    director: {
        name: "Tate",
        surname: "Taylor"
    },
    release_year: 2011,
    genres: ["drama"],
    rating: 8.1
})
.then(() => {
    console.log("Uspesno dodat film");
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

db.collection('movies').doc('movie04')
.set({
    name: "I origins",
    director: {
        name: "Mike",
        surname: "Cahill"
    },
    release_year: 2014,
    genres: ["drama", "mystery"],
    rating: 7.2
})
.then(() => {
    console.log("Uspesno dodat film");
    return db.collection('movies').doc('movie04')
    .update({
        rating: 7.3
    });
})
.then(() => {
    console.log("Uspesan update ratinga");
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

// db.collection('movies').doc('movie04')
// .update({
//     rating: 7.3
// })
// .then(() => {
//     console.log("Uspesan update ratinga");
// })
// .catch(e => {
//     console.log(`Greska: ${e}`);
// });

//Dohvatanje dokumenta
db.collection('movies').doc('movie01')
.get()
.then(doc => {
    if (doc.exists) {
        let data = doc.data();
        console.log("Uspesno skinut dokument: " + doc.id);
        console.log(data);
    } else {
        console.log('Ne postoji ovaj dokument');
    }
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

//Dohvatanje svih dokumenata kolekcije
db.collection('customers')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(doc.id, " => ", data);
    });
})
.catch(e => {
    console.log(`Greska: ${e}`);
});