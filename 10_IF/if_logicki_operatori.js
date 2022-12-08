// Prioritet u logickim operatorima:
// 1. !
// 2. &&
// 3. ||

// and - &&
// Daje TRUE iskljucivo ako imamo TRUE && TRUE
let a = 5;
let b = 6;

if(a==5 && b==6)
{
    console.log(`Hello!`);
}

// or - ||
// NE daje TRUE iskljucivo ako su oba izraza netacna
// daje TRUE ukoliko je makar jedan izraz tacan

if(a==5 || b==6)
{
    console.log(`Hola!`);
}

let c = -7;
if(a==5 && b==6 && c==7)
{
    console.log(`Sva tri su tacna`);
}
else
{
    console.log(`Neki od uslova nije tacan`);
}

if(a==5 || b==6 || c==7)
{
    console.log(`Makar jedan od uslova je tacan`);
}
else
{
    console.log(`Ni jedan od uslova nije tacan`);
}

// not - !
// 

if(c!=7)
{
    console.log(`C nije 7`);
}

if( !(c==7) )
{
    console.log(`C nije 7`);
}

// Zadatak 21
a = 36;
b = 119;
c = 328;

if(a > b && a > c)
{
    console.log(`${a} je najveci broj`);
}
else if(b > a && b > c)
{
    console.log(`${b} je najveci broj`);
}
else
{
    console.log(`${c} je najveci broj`);
}

// Zadatak 22
let temp = 35;

//Nacin 1
if(temp < -15 || temp > 40)
{
    console.log(`Ekstremna temperatura`);
}
else
{
    console.log(`Umerena temperatura`);
}

// Nacin 2
if(temp > -15 && temp < 40)
{
    console.log(`Umerena temperatura`);
}
else
{
    console.log(`Ekstremna temperatura`);
}

//Zadatak 23
let date = new Date();
let year = date.getFullYear();
// let year = 1988;
console.log(year);

if( (year%4==0 && year%100!=0) || year%400==0)
{
    console.log(`Godina ${year}. je prestupna.`);
}
else
{
    console.log(`Godina ${year}. nije prestupna.`);
}

// Zadatak 24
let day = date.getDay();
let hour = date.getHours();
console.log(day);
// let day = 5;
// let hour = 18;

if(day==0 || day==6) //Vikend
{
    if(hour>=10 && hour<18)
    {
        console.log(`Vikend je i butik je trenutno otvoren.`);
        document.write(`<img src="https://static.vecteezy.com/system/resources/thumbnails/003/501/836/small/come-in-we-are-open-icon-sign-illustration-free-vector.jpg" width="200px">`)
    }
    else
    {
        console.log(`Vikend je i butik je trenutno zatvoren.`);
        document.write(`<img src="https://media.istockphoto.com/id/1152587244/vector/sorry-we-are-closed-in-signboard-with-a-rope-on-transparent-background-vector.jpg?s=612x612&w=0&k=20&c=IL6LCdRjsBw-O1D9p41Mxvf195jELOMCH05ECo--E7o=" width="200px">`);
    }
}
else //Radni dan
{
    if(hour>=9 && hour<20)
    {
        console.log(`Radni dan je i butik je otvoren.`);
        document.write(`<img src="https://static.vecteezy.com/system/resources/thumbnails/003/501/836/small/come-in-we-are-open-icon-sign-illustration-free-vector.jpg" width="200px">`);
    }
    else
    {
        console.log(`Radni dan je i butik je zatvoren`);
        document.write(`<img src="https://media.istockphoto.com/id/1152587244/vector/sorry-we-are-closed-in-signboard-with-a-rope-on-transparent-background-vector.jpg?s=612x612&w=0&k=20&c=IL6LCdRjsBw-O1D9p41Mxvf195jELOMCH05ECo--E7o=" width="200px">`);
    }
}