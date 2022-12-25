// Nizovi - zadaci iz prezentacije	-  https://docs.google.com/presentation/d/14JcyN6iv7FHE5tzIhlTY_jFWjmgCpGF3/edit#slide=id.p9

let sumElem = arr => 
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
};
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
let medValue = arr =>
{
    for(let i = 0; i < arr.length; i++)
    {
        return sumElem(arr) / arr.length;
    }
}
// Zadatak 7
// Odrediti indeks maksimalnog elementa celobrojnog niza.
numbers = [48, 4, -2, 10, 101, 20];

let maxInd = arr =>
{
    let max = maxVal(arr);
    let index;
    for(let i = 0; i < arr.length; i++)
    {
        if(max == arr[i])
        {
            index = i;
        }
    }
    return index;
}
console.log(maxInd(numbers));


// Zadatak 8
// Odrediti indeks minimalnog elementa celobrojnog niza.
numbers = [-48, 4, -2, 10, 101, 20];

let minInd = arr =>
{
    let min = minVal(arr);
    let index;
    for(let i = 0; i < arr.length; i++)
    {
        if(min == arr[i])
        {
            index = i;
        }
    }
    return index;
}
console.log(minInd(numbers));


// Zadatak 9
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
numbers = [50, 70, 100, 20];

let largeThanMidVal = arr =>
{
    let avr = medValue(arr);
    let brEl = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > avr)
        {
            brEl++;
        }
    }
    return brEl;
}
console.log(largeThanMidVal(numbers));


// Zadatak 10
// Izračunati zbir pozitivnih elemenata celobrojnog niza.
numbers = [-48, 4, -2, 10, 101, 20];

let sumPositive = arr =>
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > 0)
        {
            sum += arr[i]
        }
    }
    return sum;
}
console.log(sumPositive(numbers));



// Zadatak 11
// Odrediti broj parnih elemenata u celobrojnom nizu.
numbers = [-47, 4, 2, 10, 101, 20];

let noEven = arr =>
{
    let noEl = 0;
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 == 0)
        {
            noEl++
        }
    }
    return noEl;
}
console.log(noEven(numbers));


// Zadatak 12
// Odrediti broj parnih elemenata sa neparnim indeksom.
numbers = [-47, 4, 2, 10, 101, 21];

let noEvenOddIndex = arr =>
{
    let noEl = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        if(arr[i] % 2 == 0 && i % 2 != 0)
        {
            noEl++;
        }        
    }
    return noEl;
}
console.log(noEvenOddIndex(numbers));


// Zadatak 13
// Izračunati sumu elemenata niza sa parnim indeksom.
numbers = [-47, 4, 2, 10, 101, 21];

let sumElEvenIndex = array =>
{
    let sum = 0;
    for(let i = 0; i < array.length; i++) 
    {
        if(i % 2 == 0) 
        {
            sum += array[i];
        }
    }
    return sum;
}
console.log(sumElEvenIndex(numbers));


// Zadatak 14
// Promeniti znak svakom elementu celobrojnog niza.
numbers = [-47, 4, -2, 10, 101, -21];

let elSignCh = array =>
{
    for (let i = 0; i < array.length; i++) 
    {
        array[i] *= -1;
    }
    return array;
}
console.log(elSignCh(numbers));


// Zadatak 15
// Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
numbers = [-47, 4, -2, 10, 101, -21];

let oddElEvenIndexSignCh = array =>
{
    for (let i = 0; i < array.length; i++) 
    {
        if (array[i] % 2 != 0 && i % 2 == 0) 
        {
            array[i] *= -1
        }
    }
    return array;
}
console.log(oddElEvenIndexSignCh(numbers));


// Zadatak 16
// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let shopska = [`Paradajz`, `Krastavac`, `Sir`, `So`, `Zejtin`];

let list = `<ul>`;

let shoppingList = array =>
{
    for (let i = 0; i < array.length; i++) 
    {
        list +=
        `
        <li>${array[i]}</li>
        `
    }
    list += `</ul>`;
    return array;
}
shoppingList(shopska);
document.body.innerHTML += list;


// Zadatak 17
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
let NBA = [`Kings`, `Lakers`, `Raptors`, `Maverics`, `Heat`]

let table = `<table border="1px solid black">`;

let basketballTeams = array =>
{
    for (let i = 0; i < array.length; i++) 
    {
        table +=
        `
        <tr>
            <td>${array[i]}</td>
        </tr>
        `
    }
    table += `</table>`;
    return array;
}
basketballTeams(NBA);
document.body.innerHTML += table;


// Zadatak 18
// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
let imageAddresses = [`https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60`,`https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60`,`https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60`,`https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60`,`https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60`]

let div = `<div>`

let landscape = array =>
{
    for (let i = 0; i < array.length; i++) 
    {
        div +=
        `
        <img src="${array[i]}" width="200px">
        `
    }
    div += `</div>`
    return array;
}
landscape(imageAddresses)
document.body.innerHTML += div;


// Zadatak 19
// Ispisati dužinu svakog elementa u nizu stringova. 
let string = [`Kings`, `Lakers`, `Raptors`, `Maverics`, `Heat`]

let elLength = array =>
{
    for (let i = 0; i < array.length; i++) 
    {
        console.log(array[i].length);;
    }
    return array;
}
elLength(string)


// Zadatak 20
// Odrediti element u nizu stringova sa najvećom dužinom.
string = [`Kings`, `Lakers`, `Raptors`, `Maverics`, `Heat`]

let longestString = array =>
{
    let maxStr = 0;
    let index = 0;
    for (let i = 0; i < array.length; i++) 
    {
        if(array.length > maxStr)
        {
            maxStr = array.length;
        }
    }
    return maxStr;
}
console.log(longestString(string));



// Zadatak 21
// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.



// Zadatak 22
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 



// Zadatak 23
// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
