console.log(db);
let users = db.collection('users');
console.log(users);

let d1 = users.doc("tvilotijevic");
console.log(d1);
let d2 = db.doc("users/tvilotijevic");
console.log(d2);

//CRUD - create, read, update, delete
//doc.set        create
//doc.get        read
//doc.update
//doc.delete
//ove metode vracaju promise :'(
//nakon ovih poziva lancaju se .then() i .catch()

let cust1 = {
    name: "Mika",
    age: 38,
    addresses: ['Pariske komune 10', 'Pariske komune 5'],
    salary: 400.60
};

db.collection('customers').doc('cust1')
.set(cust1)
.then(() => {
    document.body.innerHTML += "Korisnik dodat u bazu";
})
.catch(e => {
    document.body.innerHTML += `Greska ${e}`;
});

// db.collection('customers').doc()
// .set({
//     name: 'Zika',
//     age: 22,
//     addresses: ['Bul marsala Tolbuhina 45'],
//     salary: 600
// })
// .then(() => {
//     document.body.innerHTML += "Korisnik dodat u bazu";
// })
// .catch(e => {
//     document.body.innerHTML += `Greska ${e}`;
// });