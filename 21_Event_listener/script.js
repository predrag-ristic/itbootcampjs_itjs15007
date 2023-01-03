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
});

// Zadatak 2
// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let par = document.getElementById(`par`);
par.addEventListener(`click`, () =>
{
    par.innerHTML = `Brojac je ${brojac++}`;
});

// Zadatak 3
// Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

// Zadatak 4
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

    if(br > 10)
    {
        spanRez.style.color = `red`
    }
    else
    {
        spanRez.style.color = `green`
    }
});

btnPlus.addEventListener(`click`, () =>
{
    br++;
    spanRez.innerHTML = br;

    if(br > 10)
    {
        spanRez.style.color = `red`
    }
    else
    {
        spanRez.style.color = `green`
    }
});

// Zadatak 5
// Zadatak 6
let inputUnos = document.getElementById(`ime`);
let btnPrikazi = document.getElementById(`prikazi`);
let spanPrikaz = document.getElementById(`prikaz`);

btnPrikazi.addEventListener(`click`, () =>
{
    let value = inputUnos.value; // Cuva unos u let value
    spanPrikaz.innerHTML = `Hello ${value}`;
    // inputUnos.value = ``;
});

btnPrikazi.addEventListener(`dblclick`, () =>
{
    // Selektovanje samo jednog radio button-a koji je cekiran
    let checkedPol = document.querySelector(`input[name='pol']:checked`); // Jedan radio button koji je cekiran (vraca HTML tag)
    console.log(checkedPol);
    let valueCheckedPol = checkedPol.value; // Daje vrednost (value) iz sekeltovanog HTML taga
    console.log(valueCheckedPol);


    // Selektovanje svih radio buttons prema name atributu 
    let inputRadios = document.getElementsByName(`pol`);
    inputRadios.forEach(input =>
        {
            if(input.checked)
            {
                console.log(input.value);
            }
        });


    // Isto postizemo i ukoliko koirstimo querySelectorAll
    let inputRadiosQuery = document.querySelectorAll(`input[name="pol"]`);
    inputRadiosQuery.forEach(input =>
        {
            if(input.checked)
            {
                console.log(input.value);
            }
        });
});

// Zadatak 7
let inputKvadr = document.getElementById(`kvadriraj`)
let btnKvadr = document.getElementById(`buttonKvadriraj`)
let parKvadr = document.getElementById(`pKvadr`)

let inputPrepol = document.getElementById(`prepolovi`)
let btnPrepol = document.getElementById(`buttonPrepolovi`)
let parPrepol = document.getElementById(`pPrep`)

let inputPovrs = document.getElementById(`povrsina`)
let btnPovrs = document.getElementById(`buttonPovrsina`)
let parPovrs = document.getElementById(`pPolu`)

btnKvadr.addEventListener(`click`, () =>
{
    let value = inputKvadr.value
    parKvadr.innerHTML = value ** 2
});

btnPrepol.addEventListener(`click`, () =>
{
    let value = inputPrepol.value
    parPrepol.innerHTML = value / 2
});

btnPovrs.addEventListener(`click`, () =>
{
    let value = inputPovrs.value
    parPovrs.innerHTML = value ** 2 * Math.PI
});