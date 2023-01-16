import Film from "./film.js"

let f1 = new Film (`Terminator`, `James Cameron`, 1984, [6, 9, 7, 9, 9, 8, 10]);
let f2 = new Film (`Gospodar Prstenova`, `Peter Jackson`, 2001, [7, 10, 8, 6, 9, 10]);
let f3 = new Film (``, ``, 5, [6, 4, 7, 5, 5, 2, 3]);

f1.stampaj();
f2.stampaj();
f3.stampaj();

let filmovi = [f1, f2, f3]

console.log(`Prosecna ocena filma ${f1.naslov} je ${f1.prosek()}`);

// Nacin 1
function vekFilmova(niz, vek)
{
    let pocetnaGod = (vek * 100 - 99);
    let krajnjaGod = vek * 100;
    niz.forEach(f =>
        {
            if(f.godinaIzdanja >= pocetnaGod && f.godinaIzdanja <= krajnjaGod)
            {
                console.log(f.naslov);
            }
        });
};
vekFilmova(filmovi, 21)

// Nacin 2
function vekFilmova1(niz, vek)
{
    niz.forEach(f =>
        {
            let vekFilma = Math.ceil(f.godinaIzdanja / 100)
            if(vek == vekFilma)
            {
                console.log(f.naslov);
            }
        });
};
vekFilmova1(filmovi, 21)


let prosecnaOcena = niz =>
{
    let sumaSvihOcena = 0;
    let brojOcena = 0;
    niz.forEach(f =>
        {
            f.ocene.forEach(o =>
                {
                    sumaSvihOcena += o;
                    // brojOcena++
                }
                );
            brojOcena += f.ocene.length;
        });
    return sumaSvihOcena / brojOcena;
}
console.log(prosecnaOcena(filmovi));


let najboljeOcenjeni = niz => {
    let najOcena = niz[0];
    niz.forEach(f => 
    {
        if (najOcena.prosek() < f.prosek())
        {
            najOcena = f;
        }
    });
    return najOcena;
  };
  console.log(najboljeOcenjeni(filmovi));


let osrednjiFilm = niz =>
{
    let avgSvihFilmova = prosecnaOcena(niz); // Prosecna ocena svih filmova u nizu
    let minFilm = niz[0]; // Pretpostavka za film najblizi proseku
    let minRastojanje = Math.abs(avgSvihFilmova - minFilm.prosek());

    niz.forEach(f =>
        {
            console.log(f.prosek());
            let rastojanje = Math.abs(avgSvihFilmova - f.prosek()); // Koliko se razlikuje prosecna ocena svih filmova od prosecne ocene posmatranog filma
            if(minRastojanje > rastojanje)
            {
                minRastojanje = rastojanje;
                minFilm = f;
            }
        });
    return minFilm;
};
console.log(osrednjiFilm(filmovi));


let najmanjaOcenaNajboljeg = niz =>
{
    let najFilm = najboljeOcenjeni(niz);
    let najslabijaOcena = najFilm.ocene[0];
    najFilm.ocene.forEach(o =>
        {
            if(najslabijaOcena > o)
            {
                najslabijaOcena = o;
            }
        })
    console.log(najslabijaOcena);
}
najmanjaOcenaNajboljeg(filmovi);


let najmanjaOcena = niz =>
{
    // Ovo moze da se razlozi:
    /* 
        let prviObjekat = niz[0]; // Ovo je obrekat
        let nizOcenaPrvogObjekta = prviObjekat.ocene; // Ovo je niz ocena selektovanog objekta
        let najmanja = nizOcenaPrvogObjekta[0]; // Ovo je prva ocena iz niza ocena
    */
    let najmanja = niz[0].ocene[0];
    niz.forEach(film =>
        {
            film.ocene.forEach(o =>
                {
                    if(o < najmanja)
                    {
                        najmanja = o;
                    }
                });
        });
    return najmanja;
};
console.log(najmanjaOcena(filmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
let sveOcene = niz =>
{
    let arrSveOcene = [];
    niz.forEach(film =>
        {
            // arrSveOcene.push(film.ocene)
            arrSveOcene = arrSveOcene.concat(film.ocene)
        });
    return arrSveOcene;
};
console.log(sveOcene(filmovi));

let najcescaOcena = nizOcena =>
{
    let pretpostavkaNajucestalijiElem = nizOcena[0];
    let brPojavljivanjaPretpostavke = 1; // Sigurno se jednom pojavila ta ocena
    for(let i = 0; i < nizOcena.length; i++)
    {
        let tekuci = nizOcena[i]; // Zvezdica
        let tekuciBrPojavljivanja = 0;
        for(let j = 0; j < nizOcena.length; j++)
        {
            if(tekuci == nizOcena[j])
            {
                // nasli smo isti element i treba povecati broj pojavljivanja tekuceg
                tekuciBrPojavljivanja++;
            }
        };
        if(tekuciBrPojavljivanja > brPojavljivanjaPretpostavke)
        {
            brPojavljivanjaPretpostavke = tekuciBrPojavljivanja;
            pretpostavkaNajucestalijiElem = tekuci;
        };
    };
    return pretpostavkaNajucestalijiElem;
};
let nizSvihOcena = sveOcene(filmovi);
console.log(najcescaOcena(nizSvihOcena));


//Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
let iznadOcene = (ocena, filmovi) =>
{
    let nizFilmova = [];
    filmovi.forEach(film =>
        {
            if(film.prosek() > ocena)
            {
                nizFilmova.push(film)
            }
        });
    return nizFilmova;
}
console.log(f1.prosek(), f2.prosek(), f3.prosek());
console.log(iznadOcene(8.2, filmovi));


//Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
let iznadOceneNoviji = (ocena, filmovi) =>
{
    let nizFilmova = iznadOcene(ocena, filmovi);
    let noviji = nizFilmova[0];
    nizFilmova.forEach(f =>
        {
            if(f.godinaIzdanja > noviji.godinaIzdanja)
            {
                noviji = f;
            };
        });
    console.log(noviji);
};
iznadOceneNoviji(8, filmovi);