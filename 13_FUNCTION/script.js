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