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
///////////////////////////////////
let user1 = {
    username: 'TamaraVilotijevic',
    age: 15,
    blogs: [blog1, blog3],
    logBlogs: function() {
        this.blogs.forEach(el => {
            console.log(el.title);
        });
    }
};
let user2 = {
    username: 'JohnDoe',
    age: 28,
    blogs: [blog2],
    logBlogs: function() {
        this.blogs.forEach(el => {
            console.log(el.title);
        });
    }
};

console.log(user1.blogs[0].title);
user1.logBlogs();
user2.logBlogs();

// Zadatak 1
let users = [user1, user2];

// ispis username iz users niza
users.forEach(u => {
    console.log(u.username);
});
// ispis naslova blogova
users.forEach(u => {
    u.logBlogs();
});

users.forEach(u => {
    let userBlogs = u.blogs;
    userBlogs.forEach(b => {
        console.log(b.title);
    });
});

// Zadatak 3
users.forEach(u => {
    let userBlogs = u.blogs;
    userBlogs.forEach(b => {
        if (b.likes > 50) {
            console.log(b.title);
        }
    });
});

// Zadatak 2
users.forEach(u => {
    if (u.age < 18) {
        console.log(u.username);
    }
});

// Zadatak 4
users.forEach(u => {
    if (u.username == 'JohnDoe') {
        u.logBlogs();
    }
});

// Zadatak 5
users.forEach(u => {
    let sumaLajkova = 0;
    u.blogs.forEach(b => {
        sumaLajkova += b.likes;
    });
    if (sumaLajkova > 100) {
        console.log(u.username);
    }
});

// Zadatak 6
let sum = 0;
let br = 0;
users.forEach(u => {
    u.blogs.forEach(b => {
        sum+=b.likes;
        br++;
    })
});
let prosek = sum / br;
users.forEach(u => {
    u.blogs.forEach(b => {
        if (b.likes > prosek) {
            console.log(b.title);
        }
    });
});

// Zadatak 7
let sum2 = 0;
let brojac = 0;
users.forEach(u => {
    u.blogs.forEach(b => {
        sum2+=b.dislikes;
        brojac++;
    });
});
let prosekNegativnih = sum2 / brojac;
users.forEach(u => {
    u.blogs.forEach(b => {
        if (b.likes > prosek && b.dislikes < prosekNegativnih) {
            console.log(b.title);
        }
    });
});

let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10, 0]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};

// Zadatak 2
// Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
// Ispisati poslednji od njih
let dani = [dan1, dan2, dan3];
let maxBrMerenja = dani[0].temperature.length;
dani.forEach(d => {
    if (maxBrMerenja < d.temperature.length) {
        maxBrMerenja = d.temperature.length;
    }
});
    
dani.forEach(d => {
    if (d.temperature.length == maxBrMerenja) {
        console.log(d.datum);
    }
});

for(let i=0; i<dani.length; i++) {
    if (maxBrMerenja == dani[i].temperature.length) {
        console.log(dani[i].datum);
        break;
    }
}

for(let i=dani.length-1; i>=0; i--) {
    if (maxBrMerenja == dani[i].temperature.length) {
        console.log(dani[i].datum);
        break;
    }
}

// Zadatak 3
let zadatak3 = niz => {
    let kisnih = 0;
    let suncanih = 0;
    let oblacnih = 0;
    niz.forEach(d => {
        if (d.kisa == true) {
            kisnih++;
        }
        if (d.oblacno == true) {
            oblacnih++;
        }
        if (d.sunce == true) {
            suncanih++;
        }
    });
    console.log(`Kisnih dana je bilo: ${kisnih}, oblacnih: ${oblacnih}, a suncanih: ${suncanih}`);
}
zadatak3(dani);

// Zadatak 4
let natprosecna = niz => {
    let suma = 0;
    let brTemp = 0;
    let brDana = 0;
    niz.forEach(d => {
        d.temperature.forEach(t => {
            suma+=t;
            brTemp++;
        });
    });
    let prosecna = suma / brTemp;

    niz.forEach(d => {
        let zbir = 0;
        let br = 0;
        d.temperature.forEach(t => {
            zbir+=t;
            br++;
        });
        let prosekDan = zbir / br;
        if (prosekDan > prosecna) {
            brDana++;
        }
    });
    return brDana;
}
console.log(natprosecna(dani));
