// Zadatak 18
let a = 10;
let b = 20;
let c = 15;

if(a > b)
{
    if(a > c)
    {
        console.log(`Najveci broj je ${a}.`);
        if(b > c)
        {
            console.log(`Srednji broj je ${b}`);
            console.log(`Najmanji broj je ${c}`);
        }
        else
        {
            console.log(`Srednji broj je c, ${c}`);
            console.log(`Najmanji broj je b, ${b}`);
        }
    }
    else
    {
        console.log(`Najveci broj je c, ${c}`);
        console.log(`Srednji broj je a, ${a}`);
        console.log(`Najmanji broj je b, ${b}`);
    }
}
else
{
    // Ili je b najveci ili je c najveci
    if(b > c)
    {
        console.log(`Najveci broj je b, ${b}`);
        if(a > c)
        {
            console.log(`Srednji broj je a, ${a}`);
            console.log(`Najmanji broj je c, ${c}`);
        }
        else
        {
            console.log(`Srednji broj je c, ${c}`);
            console.log(`Najmanji broj je a, ${a}`);           
        }
    }
    else
    {
        console.log(`Najveci broj je c, ${c}`);
        console.log(`Srednji broj je b, ${b}`);
        console.log(`Najmanji broj je a, ${a}`);   
    }
}

// Zadatak 19
let n1 = 54;
let n2 = 74;
if(n1 > n2)
{
    if(n1 % 2 == 0)
    {
        console.log(`Broj jedan, ${n1} je veci i paran.`);
    }
    else
    {
        console.log(`Broj jedan, ${n1}, je veci i neparan.`);
    }
}
else
{
    if(n2 % 2 == 0)
    {
        console.log(`Broj dva, ${n2}, je veci i paran`);
    }
    else
    {
        console.log(`Broj dva, ${n2}, je veci i neparan`);
    }
}


// Zadatak 20
d1 = 10;
m1 = 12;
g1 = 2020;

d2 = 12;
m2 = 12;
g2 = 2019;

// Nacin 1
// if(g1 < g2)
// {
//     console.log(`Raniji datum je ${d1}.${m1}.${g1}`);
// }
// else if(g1 == g2)
// {
//     if(m1 < m2)
//     {
//         console.log(`Raniji datum je ${d1}.${m1}.${g1}`);
//     }
//     else if(m1 == m2)
//     {
//         if(d1 < d2)
//         {
//             console.log(`Raniji datum je ${d1}.${m1}.${g1}`);
//         }
//         else if(d1 == d2)
//         {
//             console.log(`Datumi su isti`);
//         }
//         else
//         {
//             console.log(`Raniji datum je ${d2}.${m2}.${g2}`);
//         }
//     }
//     else
//     {
//         console.log(`Raniji datum je ${d2}.${m2}.${g2}`);
//     }
// }
// else
// {
//     console.log(`Raniji datum je ${d2}.${m2}.${g2}`);
// }


// Nacin 2
if(g1 < g2)
{
    console.log(`Raniji datum je ${d1}.${m1}.${g1}`);
}
else if(g2 < g1)
{
    console.log(`Raniji datum je ${d2}.${m2}.${g2}`);
}
else // Obuhvata iste godine
{
    if(m1 < m2)
    {
        console.log(`Raniji datum je ${d1}.${m1}.${g1}`);
    }
    else if(m2 < m1)
    {
        console.log(`Raniji datum je ${d2}.${m2}.${g2}`);
    }
    else // Obuhvata iste mesece
    {
        if(d1 < d2)
        {
            console.log(`Raniji datum je ${d1}.${m1}.${g1}`);
        }
        else if(d2 < d1)
        {
            console.log(`Raniji datum je ${d2}.${m2}.${g2}`);
        }
        else
        {
            console.log(`Datumi su isti`);
        }
    }
}