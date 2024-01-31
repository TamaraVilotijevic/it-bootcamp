class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    set ime(i) {
        this._ime = i;
    }

    set visina(v) {
        if (v > 0 && v < 250) {
            this._visina = v;
        } else {
            this._visina = 250;
        }
    }

    set tezina(t) {
        if (t > 0 && t < 550) {
            this._tezina = t;
        } else {
            this._tezina = 550;
        }
    }

    get ime() {
        return this._ime;
    }

    get visina() {
        return this._visina;
    }

    get tezina() {
        return this._tezina;
    }

    stampaj() {
        console.log(`Ime: ${this.ime}, visina: ${this.visina}, tezina: ${this.tezina}`);
    }

    bmi() {
        return this.tezina / (this.visina/100)**2;
    }

    kritican() {
        if (this.bmi() < 15 || this.bmi() > 40) {
            return true;
        } else {
            return false;
        }
    }
}

export default Pacijent;