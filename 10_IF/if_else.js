let x = 5;
let y = 7;

if(x == y)
{
    console.log("Jednake vrednosti");
}
else
{
    console.log("Razlicite vrednosti");
}

// Isto kao prethodni primer, samo kontra pitanje
if(x != y)
{
    console.log("Razlicite vrednosti");
}
else
{
    console.log("Jednake vrednosti");
}

// Zadatak 1
let proizvod = 100
if(proizvod > 100)
{
    document.write("<p>Throw away</p>")
}
else
{
    document.write("<p>Pack up</p>")
}

// Zadatak 2
let temp = -10;
if(temp >= 0)
{
    document.write("<p style='color: red;'>Temperatura u plusu</p>");
}
else
{
    document.write("<p style='color: blue;'>Temperatura u minusu</p>");
}

// Zadatak 3
let pol = "z";

if(pol == "m")
{
    document.write("<img src='https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg' width='50px'>");
}
else
{
    document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvaHzIMCj1JdiL-wlS6wY6N_INpWdhPWn5LdUtUv6qOw&s' width='50px'>");
}

// Zadatak 4
let date = new Date();
let time = date.getHours();
console.log(time);
if(time > 12)
{
    document.write('<p>Trenutno je popodne</p>');
}
else
{
    document.write('<p>Trenutno je jutro</p>')
}

// Zadatak 5
let year = date.getFullYear();
let birth_year = 2004;
console.log(year);
if(year - birth_year >= 18)
{
    document.write('<p>Osoba je punoletna</p>')
}
else
{
    document.write('<p>Osoba je maloletna</p>')
}

// Zadatak 6
// - maksimum
let num1 = 100;
let num2 = 15;
let num3 = 10;

let max = num1;
if(max < num2)
{
    max = num2;
}
if(max < num3)
{
    max = num3;
}
document.write(`<p>Maksimum je ${max}</p>`);

// - minimum
let min = num1
if(min > num2)
{
    min = num2;
}
if(min > num3)
{
    min = num3;
}
document.write(`<p>Minimum je ${min}</p>`);