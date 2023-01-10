// Zadatak 1
let zapremina = 150;
if(zapremina > 150)
{
    document.write(`<p style="color:red; font-size:30px">Throw away!</p>`);
}
else
{
    document.write(`<p style="color:green; font-size:30px;">Pack up!</p>`);
}

// Zadatak 2
let temp = 14;
if(temp >= 0)
{
    document.write(`<p style="color:blue; font-size:30px;">Temepratura je u plusu.</p>`);
}
else
{
    document.write(`<p style="color:red; font-size:30px;">Temperatura je u minusu.</p>`);
}

// Zadatak 3
let pol = "z";
if(pol == "z")
{
    document.write(`<img src="https://cdn-icons-png.flaticon.com/512/65/65581.png" width="100px">`);
}
else if(pol == "m")
{
    document.write(`<img src="https://cdn-icons-png.flaticon.com/512/0/93.png" width="100px">`);
}
else
{
    document.write(``)
}

// Zadatak 4
let date = new Date();
let hour = date.getHours();
if(hour > 12)
{
    document.write(`<p style="font-size:30px;">Trenutno je popodne.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Trenutno je jutro.</p>`);
}

// Zadatak 5
let year = date.getFullYear();
let god_rodj = 1988;
if(year - god_rodj >= 18)
{
    document.write(`<p style="font-size:30px;">Osoba je punoletna.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Osoba je maloletna.</p>`);
}

// Zadatak 6
let a = 23;
let b = 15;
let c = 8;
let max = a
if(max < b)
{
    max = b;
}
if(max < c)
{
    max = c;
}
document.write(`<p style="font-size:30px;">Broj ${max} je najveci.</p>`);
