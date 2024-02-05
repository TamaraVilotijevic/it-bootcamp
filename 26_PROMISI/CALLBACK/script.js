let mojaFunkcija = callback => {
    callback();
}

mojaFunkcija(() => {
    console.log('Callback funkcija okidanje');
});

let sabiranje = funkcija => {
    funkcija(4,5);
}

sabiranje((a,b) => {
    console.log(a+b);
});

// 2.nacin
function stampajSumu(x,y) {
    console.log(x+y);
}
sabiranje(stampajSumu);

////////////////////////////////////
let oduzimanje = funkcija => {
    console.log(funkcija(100,30));      //ili da stavimo u promenljivu
}
oduzimanje((a,b) => {
    return a-b;
});