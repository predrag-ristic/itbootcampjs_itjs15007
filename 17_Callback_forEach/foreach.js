let a = [1, 3, 4, 6]; /*****************************/// NIZ
let b = [1, 3, 6, -8, 6, 6, 4]; /*****************************/// NIZ

// Zadatak 1


// Zadatak 2
let sumaElem = niz =>
{
    let suma = 0;
    niz.forEach(el => 
        {
            suma += el;
        }); // ova arrow funkcija JESTE callback funkcija
    return suma;
}
console.log(sumaElem(a)); // sumElem NIJE callback funkcija


// Zadatak 3


// Zadatak 4


// Zadatak 5
let maxVr = niz =>
{
    let max = niz[0];
    niz.forEach(el => 
        {
            if(el > max)
            {
                max = el;
            }
        })
        return max;
}
console.log(maxVr(a));


// Zadatak 6


// Zadatak 7
// a
let indexMaxVr1 = niz =>
{
    let max = niz[0];
    let idx = 0;
    niz.forEach((el, i) =>
        {
            if(el > max)
            {
                max = el;
                idx = i;
            }
        });
        return idx;
}
console.log(indexMaxVr1(a));
console.log(indexMaxVr1(b));

// b
let indexMaxVr2 = niz =>
{
    let max = maxVr(niz);
    let idx = undefined;
    niz.forEach((el, i) =>
    {
        if(el == max && idx == undefined)
        {
            idx = i;
        }
    })
    return idx;
}
console.log(indexMaxVr2(b)); // gadja prvi najveci prvoj

// c
let indexMaxVr3 = niz =>
{
    let max = maxVr(niz);
    let idx = 0;
    niz.forEach((el, i) =>
    {
        if(el == max)
        {
            idx = i;
        }
    })
    return idx;
}
console.log(indexMaxVr3(b)); // gadja poslednji  najvecibroj


// Izlistavanje indekasa svih maksimalnih bojeva u nizu
let indexSvihMaxVr = niz =>
{
    let max = maxVr(niz);
    let indices = [];
    niz.forEach((el, i) =>
    {
        if(el == max)
        {
            indices.push(i);
        }
    })
    return indices;
}
console.log(indexSvihMaxVr(b));


// Zadatak 19
let nekiNiz = [`astal`,`kompjuter1`,`tabla`,`olovka`,`hemijska`,`kompjuter2`,`mis`] /*****************************/// NIZ
let duzineSvihElem = niz =>
{
    niz.forEach(e =>
        {
            console.log(e.length);
        });
}
duzineSvihElem(nekiNiz)


// Zadatak 20
let maxDuzinaPoslednji = niz =>
{
    let maxStr1 = 0;
    niz.forEach(e =>
        {
            if(e.length > maxStr1)
            {
                maxStr1 = e.length;
            }
        });
    let maxStr2 = undefined;
    niz.forEach(e =>
        {
            if(e.length == maxStr1)
            {
                maxStr2 = e;
            }
        });
    return maxStr2;
}
console.log(maxDuzinaPoslednji(nekiNiz));


let maxDuzinaPrvi = niz =>
{
    let maxStr1 = 0;
    niz.forEach(e =>
        {
            if(e.length > maxStr1)
            {
                maxStr1 = e.length;
            }
        });
    let maxStr2 = undefined;
    niz.forEach(e =>
        {
            if(e.length == maxStr1 && maxStr2 == undefined)
            {
                maxStr2 = e;
            }
        });
    return maxStr2;
}
console.log(maxDuzinaPrvi(nekiNiz));


// Zadatak 21
let prosecnaDuzina = niz =>
{
    let duz = 0;
    niz.forEach(e =>
        {
            duz += e.length;
        });
    return duz / niz.length;
}
console.log(prosecnaDuzina(nekiNiz));


let brojNatrosecnoDugih = niz =>
{
    let duz = prosecnaDuzina(niz);
    let br = 0;
    niz.forEach(e =>
        {
            if(e.length > duz)
            {
                br++;
            }
        });
    return br;
}
console.log(brojNatrosecnoDugih(nekiNiz));


// Zadatak 22
let brojSadrziA = niz =>
{
    let br = 0;
    niz.forEach(e =>
        {
            if(e.includes(`a`) || e.includes(`A`))
            br++;
        });
    return br;
}
console.log(brojSadrziA(nekiNiz));


// Zadatak 23
let brojPocinjeA = niz =>
{
    let br = 0;
    niz.forEach(e =>
        {
            if(e[0] == (`a`) || e[0] == (`A`))
            br++;
        });
    return br;
}
console.log(brojPocinjeA(nekiNiz));