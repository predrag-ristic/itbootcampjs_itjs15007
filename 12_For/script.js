for(i = 1; i <= 5; i++)
{
    console.log(`Na redu je broj ${i}.`);
}

// Zadatak 1
// While
let w = 1;
while(w <= 20)
{
    console.log(`Ispisuje broj ${w}.`);
    w++;
}

// For
for(i = 1; i <= 20; i++)
{
    console.log(i);
}

// Zadatak 2
for(i = 20; i >= 1; i--)
{
    console.log(i);
}


// Zadatak 3
// Nacin a
for(i = 1; i <= 20; i++)
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
}
// Nacin b
for(i = 2; i <= 20; i += 2)
{
    console.log(i);
}


// Zadatak 4*
let n = 5;
let m = 15;
for(i = n; i <= m; i++)
{
    console.log(`Dvostruka vrednost brojeva od ${n} do ${m} je ${i*2}`);
}


// Zadatak 5
n = 5;
let sum = 0;
for(i = 1; i <= n; i++)
{
    sum += i
}
console.log(`Suma brojeva od 1 do ${n} je ${sum}`);


// Zadatak 6*
n = 2;
m = 7;
sum = 0;
for(i = n; i <= m; i++)
{
    sum += i
}
console.log(`Suma brojeva od ${n} do ${m} je ${sum}`);


// Zadatak 7
n = 2;
m = 5;
let prBr = 1;
for(i = n; i <= m; i++)
{
    prBr *= i
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${prBr}`);


// Zadatak 8*
n = 2;
m = 7;
sum = 0;
for(i = n; i <= m; i++)
{
    sum  = i ** 2
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${sum}`);


// Zadatak 9
for(i = 1; i <= 3; i++)
{
    document.write(`<img src="images/${i}.jpeg" width="200px" height="120px" style="border:10px solid white">`)
}

// Dodatni zadatak 1
// Ispisati prvih n parnih brojeva pocevsi od broja 8
n = 5;
i = 8;
brPar = 0;
while(brPar < n)
{
    if(i % 2 == 0)
    {
        brPar++;
        console.log(`${brPar}. od ${n} parnih brojeva je broj ${i}`);
    }
    i++;
}

// Dodatni zadatak 2
// Koliko brojeva ucestvuje u sumiranju dok suma ne predje broj k
let k = 10;
sum = 0;
let brBrojeva = 0;
i = 1;
while(sum < k)
{
    sum += i;
    brBrojeva++;
    i++;
}
console.log(`${brBrojeva} broja/eva ucestvuje u sumiranju dok suma ne predje broj ${k}`);

// Koliko neparnih brojeva ucestvuje u sumiranju dok suma ne predje broj k
k = 10;
sum = 0;
brBrojeva = 0;
i = 1;
while(sum < k)
{
    if(i % 2 != 0)
    {
        sum += i;
        brBrojeva++;
    }
    i++;
}
console.log(`${brBrojeva - 1} neparna/ih broja/eva ucestvuje u sumiranju dok suma ne predje broj ${k}`);

// Zadatak 10*


// Zadatak 11
let deljiv13 = 0;
for(b = 5; b <= 150; b++)
{
    if(b % 13 == 0)
    {
        console.log(b); // Provera kroz konzolu je dobar nacin da se radi debugging
        deljiv13++;
    }
}
console.log(`Broj brojeva od 5 do 150 deljivih sa 13 je ${deljiv13}.`);
// 13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143

// Zadatak 12
n = 10;
m = 14;
sum = 0;
brBrojeva = 0;
for(i = n; i <= m; i++)
{
    sum += i;
    brBrojeva++;
}
let arSr = sum / brBrojeva
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${arSr}.`);

// Zadatak 13
n = -3;
m = 9;
let negBr = 0;
let pozBr = 0;
for(i = n; i <= m; i++)
{
    if(i < 0)
    {
        negBr++;
    }
    if(i > 0)
    {
        pozBr++;
    }
}
console.log(`Broj negativnih brojeva je ${negBr} a broj pozitivnih brojeva je ${pozBr}`);

// Zadatak 14
n = 3;
m = 10;
let d3 = 0;
let d5 = 0;
for(i = n; i <= m; i++)
{
    if(i % 3 == 0)
    {
        d3++;
    }
    if(i % 5 == 0)
    {
        d5++;
    }
}
console.log(`Broj brojeva deljivih sa 3 je ${d3} a broj deljivih sa 5 je ${d5}`);

// Zadatak 15
// i % 10 == 4
n = 4;
m = 15;
let sumBrBrojeva = 0;
brBrojeva = 0;
for(i = n; i <= m; i++)
{
    if(i % 10 == 4)
    {
        brBrojeva++;
        sumBrBrojeva += i
    }
}
console.log(brBrojeva);
console.log(sumBrBrojeva);


// Zadatak 16
n = 4;
m = 8;
a = 3;
sum = 0;
for(i = n; i <= m; i++)
{
    if(i % a != 0)
    {
        sum += i
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${sum}.`);


// Zadatak 17
n = 3;
m = 7;
a = 3;
prBr = 1;
for(i = n; i <= m; i++)
{
    if(i % a == 0)
    {
        prBr *= i
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${prBr}.`);

// Zadatak 18


// Zadatak 19


// Zadatak 20
let str = `<table border="1px">`;
for(i = 1; i <=6; i++)
{
    if(i % 2 == 0)
    {
        str += 
        `
            <tr class="pink">
                <td>Text</td>
                <td>Text</td>
            </tr>
        `;
    }
    else
    {
        str += 
        `
            <tr>
                <td>Text</td>
                <td>Text</td>
            </tr>
        `;
    }
}
str += `</table>`
// document.body.innerHTML += str;
document.write(str);


// Zadatak 21
let list = `<ul>`;
for(i = 1; i <= 10; i++)
{
    if(i % 3 == 0)
    {
        list += 
        `
            <ul>
                <li>Element ${i}</li>
            </ul>
        `;
    }
    else
    {
        list += `<li>Element ${i}</li>`;
    }

}
list += `</ul>`;
document.write(list);


/* <ul>
    <li>Element 1</li>
    <li>Element 2</li>
    <li>
        <ul>
            <li>Element 3</li>
        </ul>
    </li>
</ul> */

// Zadatak 22


// Zadatak 23
