import { Vozilo } from "./vozilo.js";

export class Motocikl extends Vozilo {
    constructor(t,b,bt) {
        super(t,b);
        this.brojTockova = bt;
    }

    set brojTockova(bt) {
        this._brojTockova = bt;
    }

    get brojTockova() {
        return this._brojTockova;
    }

    ispisiMotocikl() {
        console.log(`Motocikl tipa: ${this.tip}, boje: ${this.boja}, broj tockova: ${this.brojTockova}`);
    }
}