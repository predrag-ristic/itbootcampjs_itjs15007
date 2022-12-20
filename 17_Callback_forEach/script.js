// Funkcija 1: Prihvata niz kao parametar. niz => {for petljom prodjemo kroz sve elemente niza i svaki ispisemo u konzoli}
// Funckija 2: Prihvata niz kao parametar. niz => {for petljom prodjemo kroz sve elemente niza i svaki ispisemo u div element}

// Moze i ovako.

// Funkcija: (niz, nacinIspisa) => {for petljom prodjemo kroz sve elemente niza i svaki ispisemo na zadati nacin}

// Funkcija 1
function ispisKonzola(poruka)
{
    console.log(poruka);
}

// Funkcija 2
function ispisStranica(poruka)
{
    let div = document.getElementById("container");
    div.innerHTML = poruka;
}


// Funkcija koja back-calls prethodne dve funkcije.
function ispisNiza(niz, callback)
{
    let poruka = "";
    for(let i = 0; i < niz.length; i++)
    {
        poruka += (niz[i] + " ")
    }
    callback(poruka);
}

ispisKonzola("bla bla");
ispisStranica("bla bla bla");

let a = [6, -8, 10, 0, 5];
let b = [`Pera`, `Mika`, `Laza`]
ispisNiza(a, ispisStranica); // 1. ispisNiza pa tek onda ispisStranica (iz tog razloga je ispisStranica callback)
ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);


// forEach
a.forEach(ispisKonzola);
// forEach petlja je metoda koja za svaki element niza poziva callback funkciju, a kao parametar te callback funkcije prosledjuje bas taj element niza.
// Konkretno, 44. linija koda za niza poziva sledece: 
// ispisKonzola(6);
// ispisKonzola(-8);
// ispisKonzola(10);
// ispisKonzola(0);
// ispisKonzola(5);

b.forEach(ispisKonzola);
// ispisKonzola(`Pera`);
// ispisKonzola(`Mika`);
// ispisKonzola(`Laza`);

a.forEach(function(element)
{
    console.log(element);
});
// forEach ce za svaki element niza a da pozove anonimnu funkciju i prosledice svaki put po jedan element niza.

b.forEach(elem => 
{
    console.log(elem);
});
// 1. Poziva se arrow funkcija za parametrom b[1] (elem postaje b[1])
// 2. Poziva se arrow funkcija za parametrom b[2] (elem postaje b[2])
// 3. Poziva se arrow funkcija za parametrom b[3] (elem postaje b[3])