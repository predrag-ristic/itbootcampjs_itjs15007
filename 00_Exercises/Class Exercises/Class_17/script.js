// Nizovi - zadaci iz prezentacije	-  https://docs.google.com/presentation/d/14JcyN6iv7FHE5tzIhlTY_jFWjmgCpGF3/edit#slide=id.p9

// Zadatak 1
//Ispisati sve elemente niza od 5 stringova.
let string = [`Toyota`, `Peugeot`, `BMW`, `Mazda`, `Mercedes`]

let carsList = cars =>
{
    return cars;
}
console.log(carsList(string));


// Zadatak 2
// Odrediti zbir elemenata celobrojnog niza.
let numbers = [8, 4, -2, 0, 1, 0];

let sumElem = arr => 
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
};
console.log(sumElem(numbers));


// Zadatak 3
// Odrediti proizvod elemenata celobrojnog niza.
numbers = [8, 4, 2, 1];

let multElem = arr =>
{
    let mult = 1;
    for(let i = 0; i < arr.length; i++)
    {
        mult *= arr[i];
    }
    return mult;
}
console.log(multElem(numbers));


// Zadatak 4
// Odrediti srednju vrednost elemenata celobrojnog niza.
numbers = [8, 4, 2];

let medValue = arr =>
{
    for(let i = 0; i < arr.length; i++)
    {
        return sumElem(arr) / arr.length;
    }
}
console.log(medValue(numbers));


// Zadatak 5
// Odrediti maksimalnu vrednost u celobrojnom nizu.
numbers = [8, 43, -2, 20, 11, 100];

let maxVal = arr =>
{
    let max = arr[0]
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > max)
        {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxVal(numbers));


// Zadatak 6
// Odrediti minimalnu vrednost u celobrojnom nizu.
numbers = [8, -43, -2, 20, 11, -100];

let minVal = arr =>
{
    let min = arr[0]
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] < min)
        {
            min = arr[i]
        }
    }
    return min;
}
console.log(minVal(numbers));