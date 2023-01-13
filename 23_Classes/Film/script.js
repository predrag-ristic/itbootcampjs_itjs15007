import Film from "./film.js"

let f1 = new Film (`Terminator`, `James Cameron`, 1984, [9, 7, 9, 9, 8]);
let f2 = new Film (`Gospodar Prstenova`, `Peter Jackson`, 2001, [7, 10, 8, 6, 9, 10]);
let f3 = new Film (``, ``, 2100, [6, 4, 7, 5, 5, 2, 3]);

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


let najboljeOcenjeni = niz =>
{

}


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

}


let najmanjaOcena = niz =>
{

}