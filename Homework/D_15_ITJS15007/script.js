import { Knjiga } from "./knjiga.js";

let k1 = new Knjiga (`The Hitchhiker's Guide to the Galaxy`, `Douglas Noël Adams`, 1979, 629, 8001);
let k2 = new Knjiga (`Animal Farm`, `George Orwell`, 1945, 160, 431);
let k3 = new Knjiga (`Brave New World`, `Aldous Leonard Huxley`, 1932, 311, 8900);
let k4 = new Knjiga (`The Picture of Dorian Gray`, `Oscar Fingal O'Flahertie Wills Wilde`, 1890, 224, 639);
let k5 = new Knjiga (`1984`, `George Orwell`, 1949, 1320, 8719);
let k6 = new Knjiga (`We`, `Yevgeny Ivanovich Zamyatin`, 1924, 226, 642);

let knjige = [k1,k2,k3,k4,k5,k6];


// Ispis svih knjiga
let divKnjige = document.getElementById(`listaKnjiga`)
for(let i = 0; i < knjige.length; i++)
{
    divKnjige.innerHTML += knjige[i].stampaj();
};


// Ispis svih autora kojima je ime dugacko
let divAutoriDugacko = document.getElementById(`autoriDugoIme`)
for(let i = 0; i < knjige.length; i++)
{
    if(knjige[i].dugackoIme() == true)
    {
        divAutoriDugacko.innerHTML += `<p>· ${knjige[i].autor}</p>`;
    }
};


// Ispis svih onih knjiga koje su istovremeno i skupe i obimne
let divSkupeObimne = document.getElementById(`skupeObimne`)
knjige.forEach(s =>
    {
        if(s.skupa() == true && s.obimna() == true)
        {
            divSkupeObimne.innerHTML += `<p>· ${s.naslov}</p>`;
        }
    });


// Odredjuje i vraca koliko ukupno kostaju sve knjge u nizu knjiga
let spanSumCena = document.getElementById(`sumCenaKnjiga`);
let ukupnaCena = niz =>
{
    let sumCena = 0;
    niz.forEach(e =>
        {
            sumCena += e.cena;
        })
    return sumCena;
};
spanSumCena.textContent = ukupnaCena(knjige);


// Odredjuje i vraca kolika je prosecna cena knjige
let spanAvgCenaKnjiga = document.getElementById(`avgCenaKnjiga`)
let prosecnaCena = niz =>
{
    return ukupnaCena(niz) / niz.length
};
spanAvgCenaKnjiga.textContent = prosecnaCena(knjige).toFixed(2);


// Odredjuje i vraca kolika je prosecna cena jedne stranice knjige
let spanAvgcenaStrane = document.getElementById(`avgCenaStr`)
let prosecnaStranica = niz =>
{
    let sumStranica = 0;
    knjige.forEach(s =>
        {
            sumStranica += s.brojStrana;
        })
    return ukupnaCena(niz) / sumStranica;
};
spanAvgcenaStrane.textContent = prosecnaStranica(knjige).toFixed(2);