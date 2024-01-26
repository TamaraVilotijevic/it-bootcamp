let blog1 = {
    title: 'IF naredba grananja!',
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title: 'While petlja',
    likes: 25,
    dislikes: 36
};
let blog3 = {
    title: 'For petlja',
    likes: 100,
    dislikes: 12
};

let arrBlogs = [blog1, blog2, blog3];
console.log(arrBlogs);
console.log(arrBlogs[1]);           //ispis jednog elementa iz niza objekata
console.log(arrBlogs[1].title);     //ispis jednog propertyja iz niza objekata
console.log(arrBlogs[1]['title']);

// ispis naslova svih elemenata iz niza uz for petlju
for(let i=0; i<arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}

blog2.title = 'While ciklus!';    //ili arrBlogs[1].title=;
// ispis naslova svih elemenata iz niza uz forEach
arrBlogs.forEach(obj => {
    console.log(obj.title, obj.likes);
});

// Zadatak 1
let sumLikes = niz => {
    let suma = 0;
    niz.forEach(obj => {
        suma += obj.likes;
    });
    return suma;
}
console.log(`Suma lajkova je ${sumLikes(arrBlogs)}`);

// Zadatak 2
let avgLikes = arr => {
    let s = sumLikes(arr);
    return s / arr.length;
}
console.log(`Prosecan broj lajkova je ${avgLikes(arrBlogs)}`);

// Zadatak 3
let visePozitivnih = niz => {
    for(let i=0; i<niz.length; i++) {
        if (niz[i].likes > niz[i].dislikes) {
            console.log(niz[i].title);
        }
    }
}
visePozitivnih(arrBlogs);

// Zadatak 4
let duploVisePoz = niz => {
    for(let i=0; i<niz.length; i++) {
        if (niz[i].likes / niz[i].dislikes >= 2) {
            console.log(niz[i].title);
        }
    }
}
duploVisePoz(arrBlogs);

// Zadatak 5
let zavrsavaUzvicnikom = niz => {
    for(let i=0; i<niz.length; i++) {
        if (niz[i].title[niz[i].title.length-1] == '!') {
            console.log(niz[i].title);
        }
    }
}
zavrsavaUzvicnikom(arrBlogs);