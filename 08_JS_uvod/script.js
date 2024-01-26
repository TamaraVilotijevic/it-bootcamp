document.getElementById('d1').innerHTML = 'Ja se zovem Tamara Vilotijevic';

// literali
console.log('Pera'); 
console.log('Mika');
console.log("It's alright");

console.log(5);
console.log(-5.189);
console.log(3+4);
console.log('3'+'4'); //konkatanacija
console.log('3+4=', 3+4);
console.log('3+4=' + (3+4));
console.log(true);

// promenljive
let x; //deklaracija promenljive(uvodjenje promenljive u program)
console.log(x); //undefined
x = 5;

console.log(x);

x = 'Laza';
console.log(x);

let y = true; //definisanje promenljive(deklaracija+dodela vrednosti)
console.log(y);

const z = -7.6;
console.log(z);

let age;
console.log(age, age + 3); //undefined, NaN
age = null;
console.log(age, age + 3);

let broj = 3 + 4 * 2;
console.log(broj);

broj = (3+4)*2;
console.log(broj);
broj += 6; //broj = broj + 6;
console.log(broj);
broj *= 5;
console.log(broj);

x = 6;
x++;
console.log(x);

++x;
console.log(x);
x=6;
console.log(x++);//prvo se iskoristi stara vrednost pa se onda uveca
console.log(x);
console.log(++x); //prvo se uveca pa se koristi

console.log(Math.floor(28/12));
console.log(28%12); //vraca ostatak pri deljenju
