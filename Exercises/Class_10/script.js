// Zadatak 7
let date = new Date();
let day = date.getDay();
if(day == 0)
{
    document.write(`<p style="font-size:30px;">Danas je vikend.</p>`);
}
else if(day == 6)
{
    document.write(`<p style="font-size:30px;">Danas je vikend.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Danas je radni dan.</p>`);
}

// Zadatak 8
let br_poena = 85;
if(br_poena > 90)
{
    document.write(`<p style="font-size:30px;">Student je polozio ocenom 10.</p>`);
}
else if(br_poena > 80)
{
    document.write(`<p style="font-size:30px;">Student je polozio ocenom 9.</p>`);
}
else if(br_poena > 70)
{
    document.write(`<p style="font-size:30px;">Student je polozio ocenom 8.</p>`);
}
else if(br_poena > 60)
{
    document.write(`<p style="font-size:30px;">Student je polozio ocenom 7.</p>`);
}
else if(br_poena > 50)
{
    document.write(`<p style="font-size:30px;">Student je polozio ocenom 6.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Student je pao ispit.</p>`);
}

// Zadatak 9
let hour = date.getHours();
if(hour < 12)
{
    document.write(`<p style="font-size:30px;">Dobro jutro.</p>`);
}
else if(hour > 18)
{
    document.write(`<p style="font-size:30px;">Dobro vece.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Dobar dan.</p>`);
}

// Zadatak 10
hour = 17;
if(hour < 9)
{
    document.write(`<p style="font-size:30px;">Firma ne radi.</p>`);
}
else if(hour >= 17)
{
    document.write(`<p style="font-size:30px;">Firma ne radi.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Firma radi.</p>`);
}

// Zadatak 11
let p1 = 8;
let k1 = 18;
let p2 = 12;
let k2 = 22;
if(k1 < p2)
{
    document.write(`<p style="font-size:30px;">Ne preklapaju se.</p>`);
}
else if(k2 < p1)
{
    document.write(`<p style="font-size:30px;">Ne preklapaju se.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Preklapaju se.</p>`);
}

// Zadatak 12
n = 120;
if(n % 2 == 0)
{
    document.write(`<p style="font-size:30px;">Broj ${n} je paran.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Broj ${n} je neparan.</p>`);
}

// Zadatak 13
n = 20;
if(n % 3 == 0)
{
    document.write(`<p style="font-size:30px;">Broj ${n} je deljiv sa 3.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Broj ${n} nije deljiv sa 3.</p>`);
}

// Zadatak 14
let a = 45;
let b = 25;
if(a > b)
{
    document.write(`<p style="font-size:30px;">${a - b}.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">${b - a}.</p>`);
}

// Zadatak 15
n = 25;
if(n <= 0)
{
    document.write(`<p style="font-size:30px;">Prethodnik broja ${n} je broj ${n - 1}.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Sledbenik broja ${n} je broj ${n + 1}.</p>`);
}

// Zadatak 16
a = 126;
b = 913;
c = 999;
let max = a;
if(max < b)
{
    max = b
}
if(max < c)
{
    max = c
}
document.write(`<p style="font-size:30px;">Najveci broj je broj ${max}.</p>`);

let min = a;
if(min > b)
{
    min = b
}
if(min > c)
{
    min = c
}
document.write(`<p style="font-size:30px;">Najmanji broj je broj ${min}.</p>`);

let mid = a + b + c - max - min
document.write(`<p style="font-size:30px;">Srednji broj je broj ${mid}.</p>`);

// Zadatak 17
n = 73;
if(n % 1 == 0)
{
    document.write(`<p style="font-size:30px;">Broj ${n} je ceo.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Broj ${n} nije ceo.</p>`);
}

// Zadatak 18
a = 216;
b = 119;
c = 324;
if(a > b)
{
    if(a > c)
    {
        document.write(`<p style="font-size:30px;">Broj ${a} je najveci broj.</p>`);
        if(b > c)
        {
            document.write(`<p style="font-size:30px;">Broj ${b} je srednji broj.</p>`);
            document.write(`<p style="font-size:30px;">Broj ${c} je najmanji broj.</p>`);
        }
        else
        {
            document.write(`<p style="font-size:30px;">Broj ${c} je najveci broj.</p>`);
            document.write(`<p style="font-size:30px;">Broj ${b} je najveci broj.</p>`);
        }
    }
    else
    {
        document.write(`<p style="font-size:30px;">Broj ${c} je najveci broj.</p>`);
        document.write(`<p style="font-size:30px;">Broj ${a} je srednji broj.</p>`);
        document.write(`<p style="font-size:30px;">Broj ${b} je najmanji broj.</p>`);
    }
}
else
{
    if(b > c)
    {
        document.write(`<p style="font-size:30px;">Broj ${b} je najveci broj.</p>`);
        if(a > c)
        {
            document.write(`<p style="font-size:30px;">Broj ${a} je srednji broj.</p>`);
            document.write(`<p style="font-size:30px;">Broj ${c} je najmanji broj.</p>`);
        }
        else
        {
            document.write(`<p style="font-size:30px;">Broj ${c} je srednji broj.</p>`);
            document.write(`<p style="font-size:30px;">Broj ${a} je najmanji broj.</p>`);
        }
    }
    else
    {
        document.write(`<p style="font-size:30px;">Broj ${c} je najveci broj.</p>`);
        document.write(`<p style="font-size:30px;">Broj ${b} je srednji broj.</p>`);
        document.write(`<p style="font-size:30px;">Broj ${a} je najmanji broj.</p>`);
    }
}

// Zadatak 19
a = 25;
b = 117;
if(a > b)
{
    if(a % 2 != 0)
    {
        document.write(`<p style="font-size:30px;">Broj ${a} je veci i neparan.</p>`);
    }
    else
    {
        document.write(`<p style="font-size:30px;">Broj ${a} je veci i parak.</p>`);
    }
}
else
{
    if(b % 2 != 0)
    {
        document.write(`<p style="font-size:30px;">Broj ${b} je veci i neparan.</p>`);
    }
    else
    {
        document.write(`<p style="font-size:30px;">Broj ${b} je veci i paran.</p>`);
    }
}

// Zadatak 20
let d1 = 18;
let m1 = 12;
let g1 = 2022;
let d2 = 18;
let m2 = 12;
let g2 = 2022;
if(g1 > g2)
{
    document.write(`<p style="font-size:30px;">Raniji datum je ${d2}.${m2}.${g2}.</p>`);
}
else if(g2 > g1)
{
    document.write(`<p style="font-size:30px;">Raniji datum je ${d1}.${m1}.${g1}.</p>`);
}
else
{
    if(m1 > m2)
    {
        document.write(`<p style="font-size:30px;">Raniji datum je ${d2}.${m2}.${g2}.</p>`);
    }
    else if(m2 > m1)
    {
        document.write(`<p style="font-size:30px;">Raniji datum je ${d1}.${m1}.${g1}.</p>`);
    }
    else
    {
        if(d1 > d2)
        {
            document.write(`<p style="font-size:30px;">Raniji datum je ${d2}.${m2}.${g2}.</p>`);
        }
        else if(d2 > d1)
        {
            document.write(`<p style="font-size:30px;">Raniji datum je ${d1}.${m1}.${g1}.</p>`);
        }
        else
        {
            document.write(`<p style="font-size:30px;">Datumi su isti.</p>`);
        }
    }
}