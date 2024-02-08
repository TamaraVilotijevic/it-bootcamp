export class Osoba {
    constructor(i,p,g) {
        this.ime = i;
        this.prezime = p;
        this.godinaRodjenja = g;
    }

    set ime(i) {
        this._ime = i;
    }
    set prezime(p) {
        this._prezime = p;
    }
    set godinaRodjenja(g) {
        this._godinaRodjenja = g;
    }

    get ime() {
        return this._ime;
    }
    get prezime() {
        return this._prezime;
    }
    get godinaRodjenja() {
        return this._godinaRodjenja;
    }

    ispisOsobe() {
        console.log(`Ime: ${this.ime}, prezime: ${this.prezime}, godina rodjenja: ${this.godinaRodjenja}`);
    }
}