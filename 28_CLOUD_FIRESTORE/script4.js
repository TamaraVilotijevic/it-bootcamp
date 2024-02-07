//Dohvatanje dokumenata iz kolekcije po redosledu polja
//(dokument mora da sadrzi to polje)
// ako ima vise od jednog polja neophodno je kreirati index

// db.collection('users')
// .orderBy('name', 'desc') //asc je default
// .orderBy('age')
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Dohvatanje odredjenog broja dokumenata
// db.collection('users')
// .orderBy('name', 'desc')
// .orderBy('age')
// .limit(2)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Dohvatanja dokumenata koji zadovoljavaju razlicite uslove - filtriranje

//oni koji imaju platu vecu od 500
// db.collection('customers')
// .where('salary', '>=', 500)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//oni koji imaju platu izmedju 300 i 800
// db.collection('customers')
// .where('salary', '>=', 300)
// .where('salary', '<=', 800)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//oni koji imaju platu manju od 900 i imaju 30 god
// db.collection('customers')
// .where('salary', '<=', 900)
// .where('age', '==', 30)
// .orderBy('salary')
// .orderBy('name')
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//oni koji imaju preko 25 god sortirani po imenu
// db.collection('customers')
// .where('age', '>', 25)
// .orderBy('age')
// .orderBy('name')
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//oni koji imaju adresu u Nisu
// db.collection('customers')
// .where('addresses', 'array-contains', 'Nis')
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//oni koji imaju adresu u nisu ili beogradu
// db.collection('customers')
// .where('addresses', 'array-contains-any', ['Nis', 'Beograd'])
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//oni koji imaju 22,25 ili 28 god
// db.collection('customers')
// .where('age', 'in', [22, 25, 28])
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

// db.collection('tasks')
// .orderBy('description')
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//oni koji su prioritetni
// db.collection('tasks')
// .where('priority', '==', true)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Treba da se izvrše u tekućoj godini
// let datum = new Date();
// let godina = datum.getFullYear();
// let datum1 = new Date(godina, 0, 1);  //1.januar tekuce god
// let datum2 = new Date(godina + 1, 0, 1);  //1.januar sl god
// let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
// let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

// db.collection('tasks')
// .where('due_date', '>=', ts1)
// .where('due_date', '<', ts2)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Su završeni
// let datum = new Date();
// db.collection('tasks')
// .where('due_date', '<=', datum)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Tek treba da počnu
// let datum = new Date();
// db.collection('tasks')
// .where('start_date', '>=', datum)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Koje je režirao Peter Farrelly
// db.collection('movies')
// .where('director.name', '==', 'Peter')
// .where('director.surname', '==', 'Farrelly')
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Čija je ocena između 5 i 10
// db.collection('movies')
// .where('rating', '>=', 5)
// .where('rating', '<=', 10)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Kojima je žanr komedija, tragedija ili drama
// db.collection('movies')
// .where('genres', 'array-contains-any', ['comedy', 'tragedy', 'drama'])
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Koji su izašli u 21. veku
// db.collection('movies')
// .where('release_year', '>=', 2001)
// .get()
// .then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     });
// })
// .catch(err => {
//     console.log(`Error: ${err}`);
// });

//Prikazati sve informacije o najbolje rangiranom filmu
db.collection('movies')
.orderBy('rating', 'desc')
.limit(1)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});

//Prikazati sve informacije o najslabije rangiranoj drami
db.collection('movies')
.where('genres', 'array-contains', 'drama')
.orderBy('rating')
.limit(1)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});