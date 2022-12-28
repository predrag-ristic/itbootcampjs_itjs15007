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

// 1. Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
let btnBrojac = document.getElementById(`brojac`);
let brojac = 1;
btnBrojac.addEventListener(`click`, () =>
{
    console.log(`Brojac je ${brojac++}`);
    let par = document.getElementById(`par`);
    par.innerHTML = par;
});

// Zadatak 2



// Zadatak 3
let btnMinus = document.getElementById(`minus`);
let btnPlus = document.getElementById(`plus`);
let spanRez = document.getElementById(`rez`);
let br = 0;

btnMinus.addEventListener(`click`, () =>
{
    br--;
    if(br < 0) // br <= -1
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
