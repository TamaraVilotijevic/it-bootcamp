import Film from "./film.js";

let film1 = new Film('Cuvari formule', 'Dragan Bjelogrlic', 2023, [9,10,8,8,6,10,10,9]);
let film2 = new Film('Klopka', 'Srdan Golubovic', 2007, [9,9,9,8,7,10,10,8,6]);
let film3 = new Film('Maratonci trce pocasni krug', 'Slobodan Sijan', 1982, [8,9.1,-8,18,9]);
let filmovi = [film1, film2, film3];

film1.stampaj();
filmovi[2].stampaj();
for(let i=0; i<filmovi.length; i++) {
    filmovi[i].stampaj();
}

filmovi.forEach(f => {
    f.stampaj();
});

console.log(film3);
console.log(`Prosecna ocena filma ${film1.naslov} je ${film1.prosek()}`);

let vekFilmova = (filmovi, vek) => {
    filmovi.forEach(f => {
        let vekFilma = Math.ceil(f.godinaIzdanja/100);
        if (vekFilma == vek) {
            f.stampaj();
        }
    });
}
vekFilmova(filmovi, 21)

let prosecnaOcena = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(f => {
        f.ocene.forEach(o => {
            suma += o;
            br++;
        });
    });
    return suma / br;
}
console.log(prosecnaOcena(filmovi));

let najcescaOcena = niz => {
    let najcesca = 0;
    let maxBr = 0;
    for(let i=0; i<niz.length; i++) {
        let br = 0;
        niz[i].ocene.forEach(o => {
            if (niz[i].ocene[i] == o) {
                br++;
            }
        });
        if (br > maxBr) {
            maxBr = br;
            najcesca = niz[i].ocene[i];
        }
    }
    return najcesca;
}
console.log(najcescaOcena(filmovi));

let iznadOcene = (ocena, niz) => {
    let boljeOcenjeni = [];
    niz.forEach(f => {
        if (f.prosek() > ocena) {
            boljeOcenjeni.push(f);
        }
    });
    return boljeOcenjeni;
}
console.log(iznadOcene(7.6, filmovi));

let iznadOceneNoviji = (ocena, niz) => {
    let najFilm = null;
    niz.forEach(f => {
        if (f.prosek() > ocena) {
            if (najFilm == null || f.godinaIzdanja > najFilm.godinaIzdanja) {
                najFilm = f;
            }
        }
    });
    return najFilm;
}
console.log(iznadOceneNoviji(8, filmovi));

let iznadOceneNoviji2 = (niz, ocena) => {
    let iznadOceneFilmovi = [];
    niz.forEach(f => {
        if (f.prosek() > ocena) {
            iznadOceneFilmovi.push(f);
        }
    });
    let mladjiFilm = iznadOceneFilmovi[0];
    iznadOceneFilmovi.forEach(el => {
        if (el.godinaIzdanja > mladjiFilm.godinaIzdanja) {
            mladjiFilm = el;
        }
    });
    return mladjiFilm;
}
console.log(iznadOceneNoviji2(filmovi, 8));

let najboljeOcenjeniFilm = niz => {
    let najboljeOcenjeni = niz[0];
    let najboljaOcena = najboljeOcenjeni.prosek();
    niz.forEach(f => {
        if (f.prosek() > najboljaOcena) {
            najboljaOcena = f.prosek();
            najboljeOcenjeni = f;
        }
    });
    return najboljeOcenjeni;
}
console.log(najboljeOcenjeniFilm(filmovi).naslov);

let najmanjaOcenaNajboljeg = niz => {
    let najboljiFilm = najboljeOcenjeniFilm(niz);
    let najmanjaOcena = najboljiFilm.ocene[0];
    najboljiFilm.ocene.forEach(o => {
        if (o < najmanjaOcena) {
            najmanjaOcena = o;
        }
    });
    return najmanjaOcena;
}
console.log(najmanjaOcenaNajboljeg(filmovi));

let osrednjiFilm = niz => {
    let najmanjaRazlika = Math.abs(prosecnaOcena(niz) - niz[0].prosek());
    let osrednji = niz[0];
    for(let i=0; i<niz.length; i++) {
        if (Math.abs(prosecnaOcena(niz) - niz[i].prosek()) < najmanjaRazlika) {
            najmanjaRazlika = Math.abs(prosecnaOcena(niz) - niz[i].prosek());
            osrednji = niz[i];
        }
    }
    return osrednji;
}
console.log(osrednjiFilm(filmovi));

let najmanjaOcena = niz => {
    let sveOcene = [];
    niz.forEach(f => {
        f.ocene.forEach(o => {
            sveOcene.push(o);
        });
    });
    let najmanja = sveOcene[0];
    sveOcene.forEach(o => {
        if (o < najmanja) {
            najmanja = o;
        }
    });
    return najmanja;
}
console.log(najmanjaOcena(filmovi));

let najmanjaOcena2 = (niz) => {
    let minOcena = niz[0].ocene[0];
    niz.forEach((e) => {
      e.ocene.forEach((o) => {
        if (o < minOcena) {
          minOcena = o;
        }
      });
    });
    console.log(minOcena);
  };
  najmanjaOcena2(filmovi);