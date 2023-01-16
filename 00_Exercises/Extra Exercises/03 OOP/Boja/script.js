import { Boja } from "./boja.js";

let b1 = new Boja (380, 680, 2.95);
let b2 = new Boja (500, 600, 2.48);
let b3 = new Boja (565, 530, 2.34);
let b4 = new Boja (740, 480, 1.65);
let b5 = new Boja (625, 510, 2.00);
let b6 = new Boja (565, 530, 2.34);

let boje = [b1,b2,b3,b4,b5,b6];


function ispitajSlicnost(boja1, boja2)
{
    if(boja1 == boja2)
    {
        return true;
    }
    else
    {
        console.log(boja1);
        console.log(boja2);
    }
}
console.log(ispitajSlicnost(b3, b6));


let srednjaTalasnaDuzina = niz =>
{
    let sumTalDuz = 0;
    for(let i = 0; i < niz.length; i++)
    {
        sumTalDuz += niz[i].talasna_duzina;
    }
    return sumTalDuz / niz.length;
}
console.log(srednjaTalasnaDuzina(boje));