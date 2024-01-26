// Imenovane funkcije
function sum(a, b) {
    return a + b;
}

let rez = sum(1,2);
console.log(rez);

// Anonimne funkcije
let suma = function(a, b) {
    return a + b;
}
console.log(suma(1,2));

// Arrow funkcije
// imaju skracen zapis
// znacenje kljucne reci this
let suma2 = (a,b) => {
    return a + b;
}
console.log(suma2(1,2));

let hello = () => {
    console.log(`Hello world!`);
}
hello();

let echo = (s1,s2) => {
    let result = s1 + ", " + s2; 
    console.log(result);
}
echo("Tamara", "Vilotijevic");