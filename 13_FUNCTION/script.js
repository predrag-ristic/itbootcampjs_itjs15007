console.log(`Funkcije.`);

function zdravo()
{
    console.log(`Zdravo!`);
}
zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

for(i = 1; i <= 5; i++)
{
    zdravo(); // Poziva funkciju onoliko puta koliko se izvrsi FOR petlja
}

/////////////////////////////////////////////////////////////

function hello(name)
{
    console.log(`Hello ${name}`);
}
hello(`Jelena`);
hello(`Stefan`);

let ime = "Bojana";
hello(ime);

/////////////////////////////////////////////////////////////

function helloFullName(first_name,last_name)
{
    console.log(`Hello ${first_name} ${last_name}`);
}
 helloFullName(`Ana`,`Ristic`);

 let im = `Bojana`
 let pr = `Radojkovic`
 helloFullName(im,pr);

 /////////////////////////////////////////////////////////////

 // Zadatak 2
function count(a, b)
{
    console.log(`Zbir brojeva ${a} i ${b} je ${a + b}`);
    console.log(`Razlika brojeva ${a} i ${b} je ${a - b}`);
    console.log(`Proizvod brojeva ${a} i ${b} je ${a * b}`);
    console.log(`Kolicnik brojeva ${a} i ${b} je ${a / b}`);
}
count(6, 2);


// Zadatak 3
function neparan(n)
{
    if(n % 2 == 0)
    {
        return `Broj ${n} je paran broj.`;
    }
    else
    {
        return `Broj ${n} je neparan broj.`;
    }
}

let tekst = neparan(11);
console.log(tekst);

// Zadatak 4
function maks2(br1, br2)
{
    if(br1 > br2)
    {
        return br1;
    }
    else
    {
        return br2;
    }
}

let m2 = maks2(13, 6)
console.log(`Veci je broj ${m2}`);

function maks4(a, b, c, d)
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

// function maks4(br1, br2, br3, br4){
//     // let veci1 = maks2(br1, br2);
//     // let veci2 = maks2(br3, br4);
//     // let najveci = maks2(veci1, veci2);
//     // return najveci;

//     let najveci = maks2(maks2(br1, br2,), maks2(br3, br4));
// }

// let naj = maks4(15, 2, 14, 3);
// console.log(naj);

 // Zadatak 5
function image(img)
{
    document.write(`<img src=${img} width="300px">`)
}
image("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU");


 // Zadatak 6
 function paragraph_color(color)
 {
    document.write(`<p style="color:${color};">Some colored text</p>`)
 }
 paragraph_color(`red`);
 paragraph_color(`orange`);
 paragraph_color(`green`);


 // Zadatak 13
function sentenceFont(font)
{
    document.write(`<p style="font-size:${font}px;">Tekst kome je prosledjen ceo broj koji menja velicinu fonta.</p>`)
}
    sentenceFont(`24`);


 // Zadatak 14
 function sentenceFontIt(i)
 {
     document.write(`<p style="font-size:${i}px;">Tekst kome se svaki put font povecava za 1px i sada je ${i}px.</p>`)
 }
 for(i = 16; i <= 20; i++)
 {
     sentenceFontIt(i);
 }


 // Zadatak 15


 // Zadatak 16
 // t - vreme od polazne tacke do mosta
 // p - vreme pre podizanja mosta
 // n - vreme podizanja i spustanja mosta
 function time(t, p, n)
 {
    if(t <= p)
    {
        return `Kreci odmah!`;
    }
    else
    {
        if(t <= p + n)
        {
            return `Kreni za ${p + n - t} sekundi.`;
        }
        else
        {
            return `Mozes lagano da krenes odmah.`;
        }
    }
 }

let kad_da_krenem = time(10, 12, 7)
console.log(kad_da_krenem);