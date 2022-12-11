// Zadatak 1
// a
let i = 0;
let message = ""
while(i <= 20)
{
    message += i + ' ';
    i++;
}
console.log(message);

// b
i = 1;
while(i <= 20)
{
    console.log(i);
    i++;
}

// Zadatak 2
i = 20;
while(i >= 1)
{
    console.log(i);
    i--;
}

// Zadatak 3
i = 1;
while(i <= 20)
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
    i++;
}

// Zadatak 4
i = 1;
while(i <= 6)
{
    if(i % 2 == 0)
    {
        document.write(`<p style='color:red'>A red paragraph.</p>`)
    }
    else if(i % 3 == 0)
    {
        document.write(`<p style='color:yellow'>A yellow paragraph.</p>`)
    }
    else
    {
        document.write(`<p style='color:green'>A green paragraph.</p>`)
    }
    i++;
}

// Zadatak 5
i = 1;
while(i <= 6)
{
    if(i % 2 == 0)
    {
        document.write(`<img src="https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000" width="200px" style="border:4px solid black">`)
    }
    else 
    {
        document.write(`<img src="https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg?w=2000" width="200px" style="border:4px dotted black">`)
    }
    i++;
}

// Zadatak 6
i = 1;
sum = 0;
while(i <= 100)
{
    sum += i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 je: ${sum}`);

// Zadatak 7
i = 1;
n = 155;
sum = 0
while(i <= n)
{
    sum += i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} je: ${sum}`);

// Zadatak 8
n = 6;
m = 198;
i = n;
sum = 0;
while(i <= m)
{
    sum += i;
    i++;
}
console.log(`Suma brojeva od ${n} do ${m} je: ${sum}`);

// Zadatak 9
n = 1;
m = 6;
i = n;
pro = 1;
while(i <= m)
{
    pro *= i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} je: ${pro}`);

// Zadaatak 10
n = 1;
m = 5;
i = n;
let sumKvPar = 0;
let sumKuNpr = 0;
while(i <= m)
{
    if(i % 2 == 0)
    {
        sumKvPar += i ** 2
    }
    if(i % 2 == 1)
    {
        sumKuNpr += i ** 3
    }
    i++;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} je: ${sumKvPar}`);
console.log(`Suma kubova neparnih brojeva od ${n} do ${m} je: ${sumKuNpr}`);

// Zadatak 11
let k = 200;
i = 1;
let brDel = 0;
while(i <= k)
{
    if(k % i == 0)
    {
        brDel++;
    }
    i++;
}
console.log(`Broj delioca broja ${k} je: ${brDel}`);

// Zadatak 12
n = 27;
i = 1;
brDel = 0;
while(i <= n)
{
    if(n % i == 0)
    {
        brDel++;
    }
    i++;
}
if(brDel == 2)
{
    console.log(`Broj ${n} je prost`);
}
else
{
    console.log(`Broj ${n} je slozen`);
}