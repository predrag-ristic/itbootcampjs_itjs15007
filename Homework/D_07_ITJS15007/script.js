// Zadatak 1
let p = 500;
let m = 400;
let k = 200;

let dzemper = (p + m - k) / 2;
console.log(`Cena dzempera je ${dzemper} dinara.`);

let pk = p - dzemper;
console.log(`Perin kusur iznosi ${pk} dinara.`);

let mk = m - dzemper;
console.log(`Mikin kusur iznosi ${mk} dinara.`);



// Zadatak 2
let n = 54;
let a = 15;
let d1 = a;
let d2 = a + 2;
let ost = n - (d1 + d2);
console.log(`Ostalo je ${ost} poglavlja do kraja knjige.`);

if(n / 2 > ost)
{
    console.log("Citaocu je ostalo manje od polovine knjige.");
}
else
{
    console.log("Citaocu je ostalo vise od polovine knjige.");
}



// Zadatak 3
let u = 8000;
let kcal = u / 4.1868;
console.log(`Dnevni unos iznosi ${kcal} kalorija`);

if(kcal < 2000)
{
    console.log("Potrebno je uvecati dnevni unos.");
}
else
{
    console.log("Nije potrebno povecati dnevni unos.");
}