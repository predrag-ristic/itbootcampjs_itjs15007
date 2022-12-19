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

// b
let srednjaVrednost2 = niz =>
{
    let sum = sumElem(niz);
    let br = niz.length;
    return sum / br;
}

// c
let srednjaVrednost3 = niz => sumElem(niz) / niz.length


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



// Pozivi funkcija
// Zadatak 1

// Zadatak 2
// console.log(sumElem(numbers1));
// console.log(sumElem(numbers2));
// Zadatak 3
// console.log(multElem(numbers1));
// console.log(multElem(numbers2));
// Zadatak 4a
// console.log(srednjaVrednost1(numbers1));
// console.log(srednjaVrednost1(numbers2));
// console.log(srednjaVrednost2(numbers1));
// console.log(srednjaVrednost2(numbers2));
// console.log(srednjaVrednost3(numbers1));
// console.log(srednjaVrednost3(numbers2));
// Zadatak 4b
// console.log(srednjaVrednostParnih(numbers1));
// console.log(srednjaVrednostParnih(numbers2));
// Zadatak 5
console.log(maksVred(numbers1));
console.log(maksVred(numbers2));
// Zadatak 6
console.log(minVred(numbers1));
console.log(minVred(numbers2));