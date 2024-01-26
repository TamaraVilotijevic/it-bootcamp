let blog1 = {
    title: 'HTML',
    content: 'osnovni html tagovi',
    author: 'Tamara'
};

console.log(blog1);
console.log(typeof blog1);

// ispis odredjene osobine
console.log(blog1.title);
console.log(blog1.author);
console.log(blog1['content']);

// izmena osobine
blog1.content = 'HTML tabele';
console.log(blog1.content);
blog1['content'] = 'HTML liste';
console.log(blog1.content);

let user1 = {
    username: 'TamaraVilotijevic',
    age: 25,
    blogs: ['Naredba grananja', 'Nizovi', 'Objekti'],
    login: function() {
        console.log(`Ulogovani ste`);
        console.log(this);
    },
    logout: function() {
        console.log(`Izlogovani ste`);
    },
    logBlogs: function() {
        this.blogs.forEach(el => {      //kad smo unutar objekta i hocemo da dodjemo do nekog propertija tog objekta koristimo this
            console.log(el);
        });
    },
    hello: function() {
        return `Hello ${this.username}`;
    }
};
user1.login();
user1.logout();
user1.logBlogs();
console.log(user1.hello());
console.log(this);

user1.blogs.forEach(blog => {
    document.write(`<p>${blog}</p>`);
});

// Vezbanje
let dan1 = {
    datum: '2023/12/22',
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 6, 7, 6, 4],
    prosecna: function () {
        let suma = 0;
        this.temperature.forEach(t => {
            suma+=t;
        });
        return suma / this.temperature.length;
    },
    brNatprosecnih: function() {
        let br = 0;
        let pros = this.prosecna();
        this.temperature.forEach(t => {
            if (t > pros) {
                br++;
            }
        });
        return br;
    },
    maksTemp: function() {
        let maks = this.temperature[0];
        this.temperature.forEach(t => {
            if (t > maks) {
                maks = t;
            }
        });
        return maks;
    },
    brMaksTemp: function() {
        let br = 0;
        let max = this.maksTemp();
        this.temperature.forEach(t => {
            if (t == max) {
                br++
            }
        });
        return br;
    },
    vrednostIzmedju: function(t1, t2) {
        let br = 0;
        // if (t1 > t2) {
        //     let pom = t1;
        //     t1 = t2;
        //     t2 = pom;
        // }
        this.temperature.forEach(t => {
            if (t > t1 && t < t2) {
                br++;
            } else if (t < t1 && t > t2) {
                br++;
            }
        });
        return br;
    },
    iznadProseka: function() {
            if (this.brNatprosecnih() > this.temperature.length / 2) {
                return true;
            } else {
                return false;
            }
    },
    leden: function() {
        let br = 0;
        this.temperature.forEach(t => {
            if (t > 0) {
                br++;
            }
        });
        if (br > 0) {
            return false;
        } else {
            return true;
        }

        // let ledenDan = true;
        // this.temperature.forEach(t => {
        //     if (t > 0) {
        //         ledenDan = false;
        //     }
        // });
        // return ledenDan;

        // for(let i=0; i<this.temperature.length; i++){
        //     if (this.temperature[i] > 0) {
        //         return false;
        //     }
        // }
        // return true;
    },
    nepovoljan: function() {
        for(let i=0; i<this.temperature.length-1; i++) {
            if (Math.abs(this.temperature[i]-this.temperature[i+1]) > 8) {
                return true;
            }
        }
        return false;
    },          //ne moze sa forEach jer on ide do poslednjeg clana koji nece imati sa kim da se poredi
    tropski: function() {
        for(let i=0; i<this.temperature.length; i++) {
            if (this.temperature[i] < 24) {
                return false;
            }
        }
        return true;
    },
    minTemp: function() {
        let min = this.temperature[0];
        this.temperature.forEach(t => {
            if (t < min) {
                min = t;
            }
        });
        return min;
    },
    neuobicajen: function() {
        if (this.kisa == true && this.minTemp() < -5) {
            return true;
        } else if (this.oblacno == true && this.maksTemp() > 25) {
            return true;
        } else if (this.kisa == true && this.oblacno == true && this.sunce == true) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(`Prosecna temp je ${dan1.prosecna()}`);
console.log(`Broj natprosecnih merenja u danu je ${dan1.brNatprosecnih()}`);
console.log(dan1.maksTemp());
console.log(`Broj maksimalnih temperatura je ${dan1.brMaksTemp()}`);
console.log(dan1.vrednostIzmedju(8,4));
console.log(dan1.iznadProseka());
console.log(dan1.leden());
console.log(dan1.nepovoljan());
console.log(dan1.tropski());
console.log(dan1.neuobicajen());