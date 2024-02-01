//pamcenje u lokalnoj memoriji/upisivanje
localStorage.setItem("ime", "Stefan");
localStorage.setItem('grad', 'Nis');

//izmena u lokalnoj memoriji
localStorage.setItem('grad', 'Leskovac');

let unetoIme = localStorage.getItem('ime');
console.log(unetoIme);
console.log(localStorage.getItem('grad'));
console.log(localStorage.getItem('godine')); // vraca null jer key godine ne postoji
localStorage.removeItem('grad'); //brise po zadatom key-u