import Auto from "./moduli/auto.js";

let a1 = new Auto('Audi', 'bela', true);
console.log(a1); 
a1.sviraj();
let a2 = new Auto('Peugeot', 'plava', false);
console.log(a2.marka);
console.log(a2.boja);
console.log(a2.imaKrov);
a2.sviraj();

a2.marka = 'Citroen'; //seter pristupa mu se kao polju a u pozadini se poziva metoda
a1.marka = '';
console.log(a1.marka);
a1.boja = '';
console.log(a1.boja);

let a3 = new Auto('', '', '');
console.log(a3);