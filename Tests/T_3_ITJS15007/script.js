let auto1 =
{
    marka: `Peugeot`,
    km: 135000,
    godiste: 2006,
    vlasnici: [`Pera`, `Mika`, `Laza`]
}
let auto2 =
{
    marka: `Audi`,
    km: 18000,
    godiste: 2018,
    vlasnici: [`Luka`, `Zika`, `Boba`]
}
let auto3 =
{
    marka: `Ford`,
    km: 18000,
    godiste: 2022,
    vlasnici: [`Ika`, `Nika`, `Leka`]
}
let auto4 =
{
    marka: `Peugeot`,
    km: 135000,
    godiste: 2006,
    vlasnici: [`Pera`, `Mika`, `Laza`]
}
let auto5 =
{
    marka: `Mercedes`,
    km: 8000,
    godiste: 2014,
    vlasnici: [`Luka`, `Zika`, `Boba`]
}
let auto6 =
{
    marka: `Mazda`,
    km: 8000,
    godiste: 2020,
    vlasnici: [`Ika`, `Nika`, `Leka`]
}

// Zadatak 1
let automobili = [auto1, auto2, auto3, auto4, auto5, auto6]


// Zadatak 2
let ukupnoGodiste = array =>
{
    let sum = 0;
    array.forEach(e =>
        {
            sum += e.godiste; 
        })
    return sum;
};
console.log(ukupnoGodiste(automobili));

let prosecnoGodiste = array =>
{
    let ukupnoGod = ukupnoGodiste(automobili) / array.length
    return Math.floor(ukupnoGod)
}
console.log(prosecnoGodiste(automobili));


// Zadatak 3
let najmanjeKm = array =>
{
    let min = array[0].km
    for(let i = 0; i < array.length; i++)
    {
        if(array[i].km < min)
        {
            min = array[i].km;
        }
    }
    return min;
}
console.log(najmanjeKm(automobili));

let markaNajmanjeKm = array =>
{
    let najmanje = najmanjeKm(automobili);
    for(let i = 0; i < array.length; i++)
    {
        if(najmanje == array[i].km)
        {
            console.log(array[i].marka);
        }
    }
}
markaNajmanjeKm(automobili);


// Zadatak 4
let ukupnoKm = array =>
{
    let sum = 0;
    array.forEach(e =>
        {
            sum += e.km; 
        })
    return sum;
};
console.log(ukupnoKm(automobili));

let prosecnoKm = array =>
{
    let ukupnoK = ukupnoKm(automobili) / array.length
    return ukupnoK
}
console.log(prosecnoKm(automobili));


let prosekKm10 = array =>
{
    for(let i = 0; i < array.length; i++)
    {
        let prosek = prosecnoKm(automobili)
        let godine = 2022 - array[i].godiste
        if(godine < 10)
        {
            return prosek / array.length
        }
    }
}
console.log(prosekKm10(automobili));


// Zadatak 5
let rokfeler = array =>
{
    for(let i = 0; i < array.length; i++)
    {
        for(let j = 0; j < array.length; j++)
        {
            if(array[j] )
            {

            }
        }
    }
}


// Zadatak 6

let skorije = array =>
{
    let stariji = []
    let noviji = []
    for(let i = 0; i < array.length; i++)
    {
        if(i > array.length / 2)
        {
            stariji += array[i]
        }
        else
        {
            noviji += array[i]
        }
    }
}
skorije(automobili)
