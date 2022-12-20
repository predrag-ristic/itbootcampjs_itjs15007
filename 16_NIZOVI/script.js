let cars = [`Toyota`, `BMW`, `Volvo`];
console.log(cars);
console.log(cars[0]); // Toyota
console.log(cars[2]); // Volvo
console.log(cars[3]); // undefined jer nema cetvrtog elementa

cars[1] = `Peugeot`; // menjanje elementa
cars[1] = cars[1] + ` 207` // dodavanje informacija elementu
console.log(cars);

let razno = [15, -3.5, `Hello`, true, [1, 2, 3]];
console.log(razno);

// Ispis elemenata niza cars
for(let i = 0; i < cars.length; i++)
{
    console.log(cars[i]);
}

// Pristup elementima niza u okviru niza
for(let i = 0; i < razno.length; i++)
{
    console.log(razno[i]);
}
let unutrasnjiNiz = razno[4];
for(let i = 0; i < unutrasnjiNiz.length; i++)
{
    console.log(unutrasnjiNiz[i]); // nacin 1
}

for(let i = 0; i < razno[4].length; i++)
{
    console.log(razno[4][i]); // nacin 2
}

razno[4][1] = 5; // Promena vrednosti u nizu u okviru niza

for(let i = 0; i < razno[4].length; i++)
{
    console.log(razno[4][i]);
}

// Uvecanje vrednosti unutrasnjeg niza za po 10%
for(let i = 0; i < razno[4].length; i++)
{
    razno[4][i] *= 1.1;
    console.log(razno[4][i]);
}

// Zadatak 1



let numbers1 = [8, 4, -2, 16, 1, -3];
let numbers2 = [-10, 15, 4, -3]

// Zadatak 2
let sumElem = seq => 
{
    let sum = 0;
    for(let i = 0; i < seq.length; i++)
    {
        sum += seq[i];
    }
    return sum;
}
// console.log(sumElem(numbers1));
// console.log(sumElem(numbers2));


// Zadatak 3
let multElem = seq =>
{
    let mult = 1;
    for(let i = 0; i < seq.length; i++)
    {
        mult *= seq[i];
    }
    return mult;
}
// console.log(multElem(numbers1));
// console.log(multElem(numbers2));


// Zadatak 4a
// a
let srednjaVrednost1 = niz =>
{
    let sum = 0;
    let brBro = 0;
    for(let i = 0; i < niz.length; i++)
    {
        sum += niz[i];
        brBro++;
    }
    return sum / brBro;
}
// console.log(srednjaVrednost1(numbers1));
// console.log(srednjaVrednost1(numbers2));

// b
let srednjaVrednost2 = niz =>
{
    let sum = sumElem(niz);
    let br = niz.length;
    return sum / br;
}
// console.log(srednjaVrednost2(numbers1));
// console.log(srednjaVrednost2(numbers2));

// c
let srednjaVrednost3 = niz => sumElem(niz) / niz.length
// console.log(srednjaVrednost3(numbers1));
// console.log(srednjaVrednost3(numbers2));


// Zadatak 4b - Naci srednju vrednost parnih elemenata celobrojnog niza
let srednjaVrednostParnih = niz =>
{
    let sum = 0;
    let brBro = 0;
    for(let i = 0; i < niz.length; i++)
    {
        if(niz[i] % 2 == 0)
        {
            sum += niz[i];
            brBro++;
        }
    }
    return sum / brBro;
}
// console.log(srednjaVrednostParnih(numbers1));
// console.log(srednjaVrednostParnih(numbers2));


// Zadatak 5
let maksVred = niz =>
{
    let max = niz[0];
    for(let i = 1; i < niz.length; i++)
    {
        if(niz[i] > max)
        {
            max = niz[i];
        }
    }
    return max;
}
console.log(maksVred(numbers1));
console.log(maksVred(numbers2));


// Zadatak 6
let minVred = niz =>
{
    let min = niz[0];
    for(let i = 1; i < niz.length; i++)
    {
        if(niz[i] < min)
        {
            min = niz[i];
        }
    }
    return min;
}
console.log(minVred(numbers1));
console.log(minVred(numbers2));


// Zadatak 7
// Ovakva funkcija vraca index poslednjeg maximuma
let indMaxNiza = niz =>
{
    let max = maksVred(niz);
    let index = -1;
    for(let i = 0; i < niz.length; i ++)
    {
        if(max == niz[i])
        {
            index = i;
        }
    }
    return index;
}
// niz = [15, 13, 12]
// max = 15
// index = 0
let elementi = [16, -13, 15, 10, 11];
console.log(indMaxNiza(elementi));


// Ovakva funkcija vraca index prvog maksimuma.
// a
let indMaxNiza2 = niz =>
{
    let max = maksVred(niz);
    let index = -1;
    for(let i = 0; i < niz.length; i ++)
    {
        if(max == niz[i])
        {
            index = i;
            break;
        }
    }
    return index;
}
console.log(indMaxNiza2(elementi));


// b
let indMaxNiza3 = niz =>
{
    let max = maksVred(niz);
    for(let i = 0; i < niz.length; i++)
    {
        if(max == niz[i])
        {
            return i;
        }
    }

}
console.log(indMaxNiza3(elementi));


// Zadatak 8



// Zadatk 9
let veciOdSrVred = niz =>
{
    let srVred = srednjaVrednost1(niz);
    let brElem = 0;
    for(let i = 0; i < niz.length; i++)
    {
        if(niz[i] > srVred)
        {
            brElem++;
        }
    }
    return brElem;
}
console.log(srednjaVrednost1(elementi));
console.log(veciOdSrVred(elementi));


// Zadatak 10
let zbirPozElem = niz =>
{
    let sum = 0;
    for(let i = 0; i < niz.length; i++)
    {
        if(niz[i] > 0)
        {
            sum += niz[i];
        }
    }
    return sum;
}
console.log(zbirPozElem(elementi));


// Zadatak 11
let brParElem = niz =>
{
    let brElem = 0;
    for(let i = 0; i < niz.length; i++)
    {
        if(niz[i] % 2 == 0)
        {
            brElem++;
        }
    }
    return brElem;
}
console.log(brParElem(elementi));


// Zadatak 12
// a
let brParElemNeparInd = niz =>
{
    let brElem = 0;
    for(let i = 0; i < niz.length; i++)
    {
        if(niz[i] % 2 == 0 && i % 2 != 0)
        {
            brElem++;
        }
    }
    return brElem;
}
console.log(brParElemNeparInd(elementi));

// b
let brParElemNeparInd1 = niz =>
{
    let brElem = 0;
    for(let i = 1; i < niz.length; i+=2)
    {
        if(niz[i] % 2 == 0)
        {
            brElem++;
        }
    }
    return brElem;
}
console.log(brParElemNeparInd1(elementi));

// Zadatak 13
let sumElemParInd = niz =>
{
    let sum = 0;
    for(let i = 0; i < niz.length; i+=2)
    {
        sum += niz[i]
    }
    return sum;
}
// let elementi = [16, -13, 15, 10, 11];
console.log(sumElemParInd(elementi));


// Zadatak 14
let promZnakElem = niz =>
{
    for(let i = 0; i < niz.length; i++)
    {
        niz[i] *= -1
    }
    return niz;
}
// let elementi = [16, -13, 15, 10, 11];
console.log(promZnakElem(elementi));
// let elementi = [-16, 13, -15, -10, -11];


// Zadatak 15
let promZnakNeparElemParInd = niz =>
{
    for(let i = 0; i < niz.length; i++)
    {
        if(i % 2 == 0 && niz[i] % 2 != 0)
        {
            niz[i] *= -1
        }
    }
    return niz;
}
// let elementi = [16, -13, 15, 10, 11];
console.log(promZnakNeparElemParInd(elementi));
// let elementi = [16, -13, -15, 10, -11];


// Zadatak 6
