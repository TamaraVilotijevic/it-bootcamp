class Auto {
    constructor(m, b, k) {
        this.marka = m;
        this.boja = b;
        this.imaKrov = k;
    }
    // Konstruktor govori koja svojstva ce da ima svaki objekat te klase i da postavi vrednosti za ta svojstva

    sviraj () {
        console.log(`Auto marke ${this.marka} svira: Beep! Beep!`);
    }

    // Geteri i seteri
    // Svako polje moze da ima po 1 geter i po 1 seter
    // Geter dohvata vrednost polja
    // Seter postavlja vrednost polja

    set marka(m) {
        if (m.length > 0) {
            this._marka = m;
        } else {
            this._marka = 'Skoda';
        }
        console.log(`Pozvan je seter za polje _marka`);
    }

    set boja(b) {
        if (b.length > 0) {
            this._boja = b;
        } else {
            this._boja = 'crna';
        }
    }

    set imaKrov(k) {
        if (k === true || k === false) {
            this._imaKrov = k;
        } else {
            this._imaKrov = false;
        }
    }

    get marka() {
        return this._marka;
    }

    get boja() {
        return this._boja;
    }

    get imaKrov() {
        return this._imaKrov;
    }
}

export default Auto;