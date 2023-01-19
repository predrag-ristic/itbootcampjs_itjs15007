console.log(1);
console.log(2);

window.setTimeout(() => 
{
    console.log(`Poruka ispisana nakon nekog vremena.`);
}, 1000 * 3);

console.log(3);
console.log(4);

// let i = 5;
// setInterval(() => 
// {
//     console.log(i);
//     i++
// }, 1000);

let btn1 = document.querySelector(`#click1`);
let btn2 = document.querySelector(`#click2`);
let btn3 = document.querySelector(`#click3`);
let btn4 = document.querySelector(`#click4`);
let ispis1 = document.querySelector(`#ispis1`);
let ispis2 = document.querySelector(`#ispis2`);

let osoba =
{
    ime: `Pera`,
    prezime: `Peric`,
    ispis: function()
    {
        console.log(this.ime + " " + this.prezime);
        // u arrow funkciji this je window objekat
        // u anonimnoj funkciji this je trenutno objekat
    }
}
osoba.ispis();

let vreme = 1000 * 2;
let timer = null;

btn1.addEventListener("click", function(e)
{
    e.preventDefault();
    let datum = new Date;
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    if(timer === null) //  drugi click nije vise null i nece da udje u if
    {
        timer = setTimeout(() => 
        {
            ispis1.innerHTML = `${h}:${m}:${s}`
            timer = null;
        }, vreme);
    };
});

btn2.addEventListener("click", function(e)
{
    e.preventDefault();
    clearTimeout(timer);
    timer = null;
});

let vr = 0;
let clock = null;

btn3.addEventListener('click', () =>
{
    if(clock === null)
    {
        clock = setInterval(() => 
        {
            // let datum = new Date;
            // let h = datum.getHours();
            // let m = datum.getMinutes();
            // let s = datum.getSeconds();
            // ispis2.innerHTML = `${h}:${m}:${s}`
            vr++;
            ispis1.innerHTML = vr;
        }, 1000);
    }
});

btn4.addEventListener('click', () =>
{
    clearInterval(clock);
    clock = null;
});



let btnStart = document.querySelector(`#start`);
let btnStop = document.querySelector(`#stop`);
let inputCount = document.querySelector(`#input`)

let timer1 = null;
let i = 0;
btnStart.addEventListener('click', () =>
{
    if(timer1 === null)
    {
        timer1 = setInterval(() => {
            inputCount.value = i;
            i++;
        }, 1000);
    }
});

btnStop.addEventListener('click', e =>
{
    clearInterval(timer1);
    timer1 = null;
    inputCount.value = 0;
    i = 0;
});