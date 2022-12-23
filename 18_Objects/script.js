console.log(`Objekti`);

let blog1 = 
{
    title: `HTML`,
    content: `Ovo je blog o osnovnim HTML tagovima.`,
    author: `Jelena`
};

// Ispis celog objekta
console.log(blog1);
console.log(typeof blog1);

// Ispis jednog propertija
console.log(blog1.title); // nacin 1
console.log(blog1[`title`]); // nacin 2

// Izmena propertija
blog1.content = `Osnove HTML-a`; // nacin 1
console.log(blog1);
blog1[`author`] = `Stefan`; // nacin 2
console.log(blog1);

///////////////////////////////////////////////////////////

let user = 
{
    username: `John Doe`,
    age: `30`,
    blogs: [`IF naredba grananja`, `FOR petlja`, `WHILE petlja`],
    login: function()
    {
        console.log(`Ulogovani ste`); // Kreiranje metoda unutar objekta
    },
    logout: function()
    {
        console.log(`Izlogovani ste`);
    },
    logblogs: function()
    {
        this.blogs.forEach(b =>
            {
                console.log(b);
            });
        
    }
};

user.login(); // Poziv metoda
user.logout();
user.logblogs();
// console.log(this);

user.blogs.forEach(b =>
{
    document.write(`<p>${b}</p>`);
})



let dan =
{
    datum: `2022/12/22`,
    kisa: false,
    sunce: true,
    oblacno: false,
    temperatura: [18, 20, 24, 28, 21, 25, 21, 19],

    // Zadatak 1
    sredTemp: function()
    {
        let sum = 0;
        this.temperatura.forEach(t =>
            {
                sum += t;
            });
        return sum / this.temperatura.length;
    },

    // Zadatak 2
    brNatpros: function()
    {
        let br = 0;
        let avg = this.sredTemp();
        this.temperatura.forEach(t =>
            {
                if(t > avg)
                {
                    br++;
                }
            });
        return br;
    },

    // Zadatak 3
    brMaxMer: function()
    {
        let max = this.temperatura[0];
        let brMaxMer = 0;
        this.temperatura.forEach(t =>
            {
                if(t >= max)
                {
                    max = t;
                    brMaxMer;
                }
            })
        return brMaxMer;
    },

    // Zadatak 4
    brMerIzmedjuPrvPos: function()
    {
        this.temperatura.forEach(t =>
            {
                
            })
    },

    // Zadatak 5
    iznadProseka: function()
    {
        let brMax = this.brMaxMer();
        let br = 0;
        this.temperatura.forEach(t =>
            {
                if(brMax > br)
                {
                    true;
                }
            })
        return true;
    },

    // Zadatak 6
    ledenDan: function()
    {
        let leden;
        this.temperatura.forEach(t => 
            {
                if(t < 0)
                {
                    leden = true;
                }
                else
                {
                    leden = false;
                }
            })
        return leden;
    }
};
console.log(dan.sredTemp());  // Zadatak 1
console.log(dan.brNatpros());  // Zadatak 2
// console.log(dan.brMaxMer());  // Zadatak 3
// console.log(dan.brMerIzmedjuPrvPos());  // Zadatak 4
// console.log(dan.iznadProseka());  // Zadatak 5
console.log(dan.ledenDan());  // Zadatak 6