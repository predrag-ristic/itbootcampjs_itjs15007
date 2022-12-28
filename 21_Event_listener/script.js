// 1. korak - Dohvatiti element na koji zelimo da postavimo osluskivac
let btnHello = document.getElementById(`hello`);

// 2. korak - Postavljanje osluskivac na element koji smo dohvatili
btnHello.addEventListener(`click`, () =>
{
    console.log(`Hello!`);
});

//////////////////////////////////

let bthHelloHello = document.getElementById(`hello2`);
bthHelloHello.addEventListener(`dblclick`, () =>
{
    console.log(`Hello hello`);
});

let btnEvent = document.getElementById(`event`);
btnEvent.addEventListener(`click`, () =>
{
    console.log(`Event click`);
});
btnEvent.addEventListener(`dblclick`, () =>
{
    console.log(`Event dblclick`);
});

//////////////////////////////////

// Zadatak 1
// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br.  Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.getElementById(`brojac`);
let brojac = 1;
btnBrojac.addEventListener(`click`, () =>
{
    console.log(`Brojac je ${brojac++}`);
    
    par.innerHTML = `Brojac je ${brojac}`;
});

// Zadatak 2
// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let par = document.getElementById(`par`);
par.addEventListener(`click`, () =>
{
    brojac++;
    par.innerHTML = `Brojac je ${brojac}`;
});

// Zadatak 3
// Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
// Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.
let btnMinus = document.getElementById(`minus`);
let btnPlus = document.getElementById(`plus`);
let spanRez = document.getElementById(`rez`);
let br = 0;

btnMinus.addEventListener(`click`, () =>
{
    br--;
    if(br < 0)
    {
        br = 0;
    }

    spanRez.innerHTML = br;
});

btnPlus.addEventListener(`click`, () =>
{
    br++;
    spanRez.innerHTML = br;
});
