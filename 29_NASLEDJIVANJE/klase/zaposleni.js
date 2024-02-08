import { Osoba } from "./osoba.js";

export class Zaposleni extends Osoba {
    constructor(i,p,g,pl,po) {
        super(i,p,g);
        this.plata = pl;
        this.pozicija = po;
    }

    set plata(pl) {
        this._plata = pl;
    }
    set pozicija(po) {
        this._pozicija = po;
    }

    get plata() {
        return this._plata;
    }
    get pozicija() {
        return this._pozicija;
    }

    ispisiZaposlenog() {
        console.log(`Ime: ${this.ime}, prezime: ${this.prezime}, godina rodjenja: ${this.godinaRodjenja}, plata: ${this.plata}, pozicija: ${this.pozicija}`);
    }
}