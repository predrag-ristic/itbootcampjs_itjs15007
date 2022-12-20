// Zadatak 1
let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
// console.log(hour);
if(hour < 9)
{
    console.log(`Radno vreme jos uvek nije pocelo.`);
}
else if(hour >= 17)
{
    console.log(`Radno vreme je vec zavrseno.`);
}
else
{
    console.log(`Cvecarki je ostalo jos ${16 - hour} sata/i i ${60 - min} minut/a do kraja radnog vremena.`);
}


// Zadatak 2
let posiljka = 2500;
let postarina = 5 * posiljka;
let popust = 0;
if(posiljka >= 1000 && posiljka < 2000)
{
    popust = postarina * 0.05
}
if(posiljka >= 2000)
{
    popust = postarina * 0.1
}
console.log(`Cena bez popusta je ${postarina}.`);
console.log(`Cena sa popustom je ${postarina - popust}.`);


// Zadatak 3
let brRuza = 1;
let brKupaca = 5;
let dokupiti = 0;
let ost = brRuza % brKupaca;

if(brRuza % brKupaca == 0)
{
    console.log(`Cvecarka ima dovoljno ruza da posalje svakom kupcu po ${brRuza / brKupaca}.`);
}
else
{
    dokupiti = brKupaca - ost;
    console.log(`Cvecarka treba da dokupi ${dokupiti} ruza kako bi ima dovoljno da posalje svakom kupcu po ${(brRuza + dokupiti) / brKupaca}.`);
}


// Zadatak 4
let n = 1;
let m = 21;
let sum = 0;
let brBr = 0;
for(i = n; i <= m; i++)
{
    if(i % 7 == 0 && i % 2 != 0)
    {
        brBr++;
        sum += i;
    }
}
console.log(`Suma neparnih brojeva koji su deljivi sa 7 od ${n} do ${m} je ${sum}`);
console.log(`Broj brojeva koji su neparni i deljivi sa 7 od ${n} do ${m} je ${brBr}`);
console.log(`Proizvod sume i broja brojeva koji su neparni i deljivi sa 7 od ${n} do ${m} je ${sum * brBr}`);


// Zadatak 5
n = 3;
m = 24;
sum = 0;
brBr = 0;
for(i = n; i <= m; i++)
{
    if(i % 3 == 0 && i % 2 == 0)
    {
        sum += i;
    }
    if(i % 10 == 3)
    {
        brBr++;
    }
}
// console.log(sum1);
// console.log(brBr);
console.log(`Razlika zbira parnih brojeva od ${n} do ${m} koji su deljivi sa 3 i brojeva od ${n} do ${m} kojima je poslednja cifra 3 je ${sum - brBr}`);