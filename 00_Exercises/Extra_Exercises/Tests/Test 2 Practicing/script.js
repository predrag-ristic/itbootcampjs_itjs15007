// If, Else, Else if

// Zadatak 1
let zap = 101;
if(zap > 100)
{
    document.write(`<p>1. Throw away!</p>`)
}
if(zap <= 100)
{
    document.write(`<p>1. Pack up!</p>`)
}

// Zadatak 2
let temp = 4;
if(temp < 0)
{
    document.write(`<p style="color:blue">2. Temeratura je u minusu i ona je ${temp}.</p>`)
}
if(temp >= 0)
{
    document.write(`<p style="color:red">2. Temeratura je u plusu i ona je ${temp}.</p>`)
}

// Zadatak 3
let pol = "z";
if(pol == "z")
{
    document.write(`<p>3.</p><img src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/60-512.png" width="100px">`)
}
if(pol == "m")
{
    document.write(`<p>3.</p><img src="https://png.pngtree.com/png-vector/20191101/ourlarge/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg" width="100px">`)
}

// Zadatak 4
let date = new Date();
let hour = date.getHours();
// let date = 13;
if(hour <= 12)
{
    document.write(`<p>4. Jutro je!</p>`)
}
if(hour > 12)
{
    document.write(`<p>4. Dan je!</p>`)
}

// Zadatak 5
let year = date.getFullYear();
let birth = 1979;
if(year - birth < 18)
{
    document.write(`<p>5.  Osoba je maloletna.</p>`)
}
if(year - birth >= 18)
{
    document.write(`<p>5.  Osoba je punoletna.</p>`)
}

// Zadatak 6
let a = 25;
let b = 16;
let c = 39;
let max = a;
if(max < b)
{
    max = b;
}
if(max < c)
{
    max = c;
}
document.write(`<p>6. Najveci broj je ${max}.</p>`)

// Zadatak 7
let day = date.getDay();
// console.log(day);
if(day == 0)
{
    document.write(`<p>7. Danas je vikend.</p>`);
}
else if(day == 6)
{
    document.write(`<p>7. Danas je vikend.</p>`);
}
else
{
    document.write(`<p>7. Danas je radni dan.</p>`);
}

// Zadatak 8
let point = 85;
if(point > 90)
{
    document.write(`<p>8. Student je polozio ispit ocenom 10.</p>`);
}
else if(point > 80)
{
    document.write(`<p>8. Student je polozio ispit ocenom 9.</p>`);
}
else if(point > 70)
{
    document.write(`<p>8. Student je polozio ispit ocenom 8.</p>`);
}
else if(point > 60)
{
    document.write(`<p>8. Student je polozio ispit ocenom 7.</p>`);
}
else if(point > 50)
{
    document.write(`<p>8. Student je polozio ispit ocenom 6.</p>`);
}
else
{
    document.write(`<p>8. Student je pao ispit.</p>`);
}

// Zadatak 9


// While
// Zadatak 1b
let i = 1;
let broj = '';
while(i <= 20)
{
    broj += i + ` `;
    i++;
}
console.log(broj);

// Zadatak 3
i = 1;
broj = ` `;
while(i <= 20)
{
    if(i % 2 == 0)
    {
        broj += i + ` `;
    }
    i++;
}
console.log(broj);

// Zadatak 4
let n = 9;
i = 1;
while(i <= n)
{
    if(i % 3 == 0)
    {
        document.write(`<p style="color:red">Paragraf ${i}</p>`)
    }
    else if(i % 3 == 1)
    {
        document.write(`<p style="color:blue">Paragraf ${i}</p>`)
    }
    else
    {
        document.write(`<p style="color:green">Paragraf ${i}</p>`)
    }
    i++;
}