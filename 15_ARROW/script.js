// Imenovane funkcije. Delovi: function, ime, (parametri), {return}
function sum(a, b)
{
    return a + b;
}

let rez = sum(1, 2);
console.log((rez));

// Anonimne funkcije. Delovi: promenljiva, function, (parametri), {return}
let suma = function(a, b)
{
    return a + b;
}

rez = suma(1, 2) // poziv anonimne funckije preko promenljive
console.log(rez);

// Arrow funkcije. Delovi: promenljiva, (parametri), fat arrow, {return}
let suma2 = (a, b) =>
{
    return a + b;
}

rez = suma2(5, 6)
console.log(rez);

let hello = () =>
{
    console.log(`Hello world!`);
}

hello();
hello();

let echo = (s1, s2) =>
{
    let result = s1 + ", " + s2
    console.log(result);
}
echo(`Ristic`, `Predrag!`);


// Zadatak 1
let date = new Date();
let year = date.getFullYear();

let user = (first_name, last_name, year) =>
{
    if(year >= 18)
    {
        console.log(`Osoba ${first_name} ${last_name} je punoletna.`); 
    }
    else
    {
        console.log(`Osoba ${first_name} ${last_name} je maloletna.`); 
    }
}
user(`Petar`, `Petrovic`, year)

let ispisHTML = (ime, prezime, godine) =>
{
    if(godine >= 18)
    {
        let ispis = `<p>Osoba ${ime} ${prezime} je punoletna.</p>`;
        return ispis;
    }
    else
    {
        let ispis = `<p>Osoba ${ime} ${prezime} je maloletna.</p>`;
        return ispis;
    }
}

document.body.innerHTML += ispisHTML(`Petar`, `Petrovic`, 33)
document.body.innerHTML += ispisHTML(`Mika`, `Mikic`, 15)


// Zadatak 3
let neparan = (br) =>
{
    if(br % 2 == 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(neparan(3));
console.log(neparan(6));

// kraca letijanta
let neparan_1 = (n) =>
{
    return (n % 2 == 1)
}
console.log(neparan_1(19));
console.log(neparan_1(2));

// jos kraca letijanta - samo koristeci svojstva arrow funkcije - NAJKOMPAKTNIJI
// 1. Ako arrow funkciji prosledjujemo TACNO JEDAN paramter, onda () nisu obavezne
// 2. Ako se telo arrow funkcije sastoji SAMO od return naredbe, ona nije obavezna
let neparan_2 = n => (n % 2 == 1);
console.log(neparan_2(18));
console.log(neparan_2(9));

// Zadatak 4
// letijanta 1 - arrow funkcije
let maks2 = (a, b) =>
{
    if(a > b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
console.log(maks2(14, 8));

// letijanta 2 - skraceni zapis
let maks2_1 = (a, b) => (a > b) ? a : b; // (uslov) ? if true : if false 
console.log(maks2_1(1, 6));


let maks4 = (a, b, c, d) =>
{
    if(a > b && a > c && a > d)
    {
        return a;
    }
    else if(b > a && b > c && b > d)
    {
        return b;
    }
    else if(c > a && c > b && c > d)
    {
        return c;
    }
    else
    {
        return d;
    }
}
let m4 = maks4(1, 22, 1, 14)
console.log(`Najveci je broj ${m4}`);

// maks4 = (a, b, c, d) =>
// {
//     let veci1 = (a, b);
//     let veci2 = (c, d);
//     let najveci = (veci1, veci2);
//     return najveci;
// }

// let naj = maks4(3, 6, 8, 3)
// console.log(naj);

// letijanta 2 - skraceni zapis
let maks4_1 = (a, b, c, d) => maks2_1(maks2_1(a, b), maks2_1(c, d))
console.log(maks4_1(-1244, -227, -79, -713));

// letijanta 3
let maks4_2 = (a, b, c, d) => maks2_1(maks2_1(maks2_1(a,b),c),d)
console.log(maks4_2(-1244, -227, -79, -713));


// Zadatak 5
let image = (img) => document.write(`<img src="${img}" width="200px">`)
image(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU`)


// Zadatak 6
let color = (color) => document.write(`<p style="color:${color}">Tekst nekog paragrafa.</p>`)
color(`red`)