let br = 5;
if(br < 0)
{
    console.log("Broj je manji od nule");
}
else if(br == 0)
{
    console.log("Broj je jednak nuli");
}
else
{
    console.log("Broj je veci od nule");
}

console.log("Kraj grananja");



// Zadatak 7
let date = new Date();
let day = date.getDay();
console.log(day);
if(day == 0)
{
    console.log("</p>Danas je vikend</p>");
}
else if(day == 6)
{
    console.log("</p>Danas je vikend</p>");
}
else
{
    console.log("</p>Danas je radni dan</p>");
}

// Zadatak 8
let poen = 81;
if(poen > 90)
{
    document.write("<p>10</p>");
}
else if(poen > 80)
{
    console.log("<p>9</p>");
}
else if(poen > 70)
{
    console.log("<p>8</p>");
}
else if(poen > 60)
{
    console.log("<p>7</p>");
}
else if(poen > 50)
{
    console.log("<p>6</p>");
}
else
{
    console.log("<p>Pao</p>");
}

// Zadatak 9
let hour = date.getHours();
if(hour >= 18)
{
    console.log("<p>Dobro vece</p>");
}
else if(hour >= 12)
{
    document.write("<p>Dobar dan</p>");
}
else
{
    document.write("<p>Dobro jutro</p>");
}


// Zadatak 10
let time = date.getHours();
console.log(time);
if(time < 9)
{
    document.write("<p>Firma ne radi</p>");
}
else if(time >= 17)
{
    document.write("<p>Firma ne radi</p>");
}
else
{
    document.write("<p>Firma radi</p>");
}

// Zadatak 11
let p1 = 20;
let k1 = 24;
let p2 = 16;
let k2 = 19;

if(k1 < p2)
{
    document.write("<p>Ne preklapaju se</p>");
}
else if(k2 < p1)
{
    document.write("<p>Ne preklapaju se</p>");
}
else
{
    document.write("<p>Preklapaju se</p>");
}

// Zadatak 12
let broj = 9;
// 10 / 2 = 5 + ostatak 0
// 6 / 2 = 3 + ostatak 0
// 286 / 2 = 143 + ostatak 0

// 13 / 2 = 6 + ostatak 1

let ost = broj % 2;
if(ost == 0)
{
    console.log("Paran broj");
}
else{
    console.log("Neparan broj");
}

// Drugi nacin

if(broj%2 == 0)
{
    console.log("Paran broj");
}
else{
    console.log("Neparan broj");
}

// Zadatak 13
let num = 6;

if(num%3 == 0)
{
    console.log("Broj je deljiv sa 3");
}
else
{
    console.log("Broj je deljiv sa 3");
}

// Zadatak 14
let n1 = 135;
let n2 = 190;

if(n1 > n2)
{
    console.log(n1 - n2);
}
else
{
    console.log(n2 - n1);
}

// Zadatak 15
n = 8;
if(n <= 0)
{
    console.log(`Broj je manji ili jednak nuli i njegov prethodnik je: ${n - 1}`);
}
else
{
    console.log(`Broj je veci od nule i njegov sledbenik je: ${n + 1}`);
}

// Zadatak 16
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

// - srednji
let mid = num1 + num2 + num3 - max - min
document.write(`<p>Srednji je je ${mid}</p>`);