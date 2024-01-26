let a = -5;
let b = 5;

if (a > b) {
    console.log('a je vece od b');
} else {
    console.log('a je manje od b');
}

// Zadatak 1
let zapremina = 110;
if (zapremina <= 100) {
    document.write('<p style="color: green">Pack up</p>');
} else {
    document.write('<p style="color: red">Throw away</p>');
}

// Zadatak 2
let temp = 0;
if (temp >= 0) {
    let paragraf = document.getElementById('temperatura');
    paragraf.innerHTML = 'Temperatura je u plusu';
    paragraf.style.color = 'red';
} else {
    let paragraf = document.getElementById('temperatura');
    paragraf.innerHTML = 'Temperatura je u minusu';
    paragraf.style.color = 'blue';
}

// Zadatak 3
let datum = new Date();
let god = datum.getFullYear();
let godRodj = 2010;
let brojGod = god - godRodj;
let preostalo = 18 - brojGod;
if (brojGod == 18) {
    document.write('<img src="torta.jpg" alt="torta">');
} 
if (brojGod < 18) {
    document.write('<p>Preostalo jos ' + preostalo + ' godina do punoletstva</p>');
}

// Zadatak 4
let vreme = new Date().getHours();
if (vreme >= 12) {
    document.write('Popodne je');
} else {
    document.write('Jutro je');
}

// Zadatak 5
let pol = 'z';
if (pol == 'm') {
    document.write('<img src="https://as2.ftcdn.net/v2/jpg/02/23/50/73/1000_F_223507324_jKl7xbsaEdUjGr42WzQeSazKRighVDU4.jpg">');
} else {
    document.write('<img src="https://cdni.iconscout.com/illustration/premium/thumb/female-avatar-8187688-6590630.png">');
}
