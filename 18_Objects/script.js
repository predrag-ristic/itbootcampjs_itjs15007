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
    temperatura: [18, 20, 24, 28, 26, 25, 21, 19],

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
    brMerIzmedjuPrvPos: function(n, m)
    {
        let medjuVrednost = 0;
        this.temperatura.forEach(t =>
            {
                if(t > n && t < m)
                {
                    medjuVrednost++;
                }
            })
        return medjuVrednost;
    },

    // Zadatak 5
    iznadProseka: function()
    {
        
        // if(this.brNatpros() > this.temperatura.length / 2)
        // {
        //     return true;
        // }
        // else
        // {
        //     return false;
        // }

        return this.brNatpros() > this.temperatura.length / 2
    },

    // Zadatak 6
    ledenDan: function()
    {
        // a
        // for(let i = 0; i < this.temperatura.length; i++)
        // {
        //     if(this.temperatura[i] > 0)
        //     {
        //         return false;
        //     }
        // }
        // return true;

        // b
        // let leden = true;
        // this.temperatura.forEach(t =>
        //     {
        //         if(t > 0)
        //         {
        //             leden = false;
        //         }
        //     })
        // return leden;

        // c
        let brLeden = 0;
        this.temperatura.forEach(t =>
            {
                if(t > 0)
                {
                    brLeden++;
                }
            })
            if(brLeden == 0)
            {
                return true;
            }
            else
            {
                return false;
            }
    },

    tropskiDan: function()
    {
        for(let i = 0; i < this.temperatura.length; i++)
        {
            if(this.temperatura[i] > 24)
            {
                return true;
            }
        }
        return false;
    },

    nepovoljan: function()
    {

    }
};
console.log(dan.sredTemp());  // Zadatak 1
console.log(dan.brNatpros());  // Zadatak 2
// console.log(dan.brMaxMer());  // Zadatak 3
console.log(dan.brMerIzmedjuPrvPos(19, 26));  // Zadatak 4
console.log(dan.iznadProseka());  // Zadatak 5
console.log(dan.ledenDan());  // Zadatak 6
console.log(dan.tropskiDan()); // Zadatak 7
// console.log(dan.nepovoljan()); // Zadatak 8


