// Ispis poruke Zdravo pet puta
// let i = 1;

// while(i <= 5)
// {
//     console.log(`Zdravo` + i);
//     i++;
// }

// console.log(`Poruka nakon WHILE petlje.`);
// console.log(`Vrednost promenljive i nakon whle perlje je: ${i}`);

// // Ispis brojeva od 1 do 5
// i = 1;
// console.log(i);

// while(i <= 5)
// {
//     console.log(i);
//     i++;
// }

// console.log(`Vrednost promenljive i nakon whle perlje je: ${i}`);



/*
if(uslov)
{
    Blok naredbi
}
while(uslov)
{
    Blok naredbi
}

IF      ->  Blok naredbi izvrsava 0 ili 1 put
WHILE   ->  Blok naredbi se izvrsava 0, 1, 2, 3, 4 .......
*/

// Zadatak 1a
// i = 1;
// let poruka = ""
// while(i <= 20)
// {
    // poruka += i + " ";  // poruka = poruka + i + " ";
    // i++; // i += 1  // i = i + 1
// }
// console.log(poruka);

// Zadatak 1b
// while(i <= 20)
// {
//     console.log(i);
//     i++;
// }

/*

#   |     poruka        |   i
------------------------------
0   |        ""         |   1
1   |       "1 "        |   2
2   |      "1 2 "       |   3
3   |     "1 2 3 "      |   4
... |       ...         |  ...
20  | "1 2 ... 19 20 "  |   21

*/

// Zadatak 2
// Nacin 1
// i = 20;
// while(i >= 1)
// {
//     console.log(i);
//     i--;    // i -= 1   // i = i - 1
// }

// Nacin 2
// i = 1;
// while(i <= 20)
// {
//     console.log(21 - i);
//     i++;
// }
/*
i = 1   ->   20 = 21 - i
i = 2   ->   19 = 21 - i
i = 3   ->   18 = 21 - i
-----
i = 19   ->   2 = 21 - i
i = 20   ->   1 = 21 - i
*/

// Zadatak 3
// Nacin 1
// i = 1;
// while(i<=20)
// {
//     if(i%2==0)
//     {
//         console.log(i);
//     }
//     i++; // Izvan IF petlje kako bi se obavezno izvrsilo
// }

// Nacin 2
// i=2;
// while(i<=20)
// {
//     console.log(i);
//     i+=2;
// }

/*
#       |       i
-----------------
0       |       1
1       |       1
2       |       2
*/

// Zadatak 4
// Nacin 1
// let n = 5;
// i = 1;
// while(i<=n)
// {
//     if(i%3==0)
//     {
//         document.write(`<p style='color:red'>Ovo je tekst ${i}. paragrafa</p>`);
//     }
//     else if(i%3==1)
//     {
//         document.write(`<p style='color:blue'>Ovo je tekst ${i}. paragrafa</p>`);
//     }
//     else
//     {
//         document.write(`<p>Ovo je tekst ${i}. paragrafa</p>`);
//     }
//     i++;
// }

// Nacin 2
// n = 7;
// i = 1
// while(i <= n)
// {
//     if(i % 3 == 0)
//     {
//         document.body.innerHTML += "<p class='blue'>Neki tekst</p>";
//     }
//     else if(i % 3 == 1)
//     {
//         document.body.innerHTML += "<p class='green'>Neki tekst</p>";
//     }
//     else
//     {
//         document.body.innerHTML += "<p class='red'>Neki tekst</p>";
//     }
//     i++;
// }

// Zadatak 5
// n = 5;
// i = 1;
// while(i<=n)
// {
//     if(i%2==0)
//     {
//         document.write(`<img src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg' style='border:5px solid black;' width='150px;'/>`);
//     }
//     else
//     {
//         document.write(`<img src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg' style='border:5px dotted black;' width='150px;'/>`);
//     }
//     i++;
// }

// Zadatak 6
i = 1;
let sum = 0;
while(i<=100)
{
    sum += i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 je: ${sum}.`);

/*
#       |       suma    |       i
-------------------------------------
0       |        0      |       1
1       |        1      |       2
2       |        3      |       3
3       |        6      |       4
4       |       10      |       5
5       |       15      |       6
*/

// Zadatak 7
i = 1;
n = 873;
sum = 0;
while(i<=n)
{
    sum+=i;
    i++;
}
console.log(`Suma brojeva od 1 do n je: ${sum}.`);

// Zadatak 8
n = 83;
let m = 175;
sum = 0;
i = n;
while(i<=m)
{
    sum+=i;
    i++;
}
console.log(`Suma brojeva od ${n} do ${m} je: ${sum}.`);

// Zadatak 9
n = 3;
m = 6;
i = n;
let proizvod = 1;
while(i <= m)
{
    proizvod = proizvod * i;
    i++;
}
console.log(`Proizvod brojeva od ${i} do ${m} je: ${proizvod}.`);

/*
#       |       proizvod      |       n       |       m
---------------------------------------------------------
0       |           1         |       3       |       6
1       |           3         |       4       |       6
2       |          12         |       5       |       6
3       |          60         |       6       |       6
3       |         360         |       7       |       6
*/

// Zadatak 10
n = 2;
m = 6;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;
i = n; // Pocetna vrednost
while (i<=m)
{
    if(i % 2 == 0)
    {
        // sumaKvadrataParnih += i * i;
        sumaKvadrataParnih += i ** 2;
    }
    else
    {
        // sumaKubovaNeparnih += i * i * i;
        sumaKubovaNeparnih += i ** 3;
    }
    i++;    
}
console.log(`Suma kvadrata parnih projeva od ${n} do ${m} jednaka je ${sumaKvadrataParnih}`);
console.log(`Suma kubova neparnih projeva od ${n} do ${m} jednaka je ${sumaKubovaNeparnih}`);

// Zadatak 11
let k = 227;
i = 1;
let = brojDelioca = 0;
while(i<=k)
{
    if(k % i == 0)
    {
        brojDelioca++
    }
    i++;
}
console.log(`Broj delioca broja ${k} jednak je: ${brojDelioca}`);

// Zadatak 12
if(brojDelioca == 2)
{
    console.log(`Broj ${k} je prost`);
}
else
{
    console.log(`Broj ${k} je slozen.`);
}