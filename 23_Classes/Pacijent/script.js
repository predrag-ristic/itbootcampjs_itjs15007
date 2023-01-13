import Pacijent from "./pacijent.js";

let p1 = new Pacijent (`Pera Peric`, 189, 104);
let p2 = new Pacijent (`Milka Milkic`, 154, 40);
let p3 = new Pacijent (`Laza Lazic`, 204, 150);
let p4 = new Pacijent (`Ilija Ilijic`, 189, 65);

let pacijenti = [p1,p2,p3,p4]

// p1.stampaj();
// p2.stampaj();
// p3.stampaj();
// p4.stampaj();

// Ispisati podatke od pacijentu sa najmanjom tezinom
let btnMinTezina = document.getElementById(`racunajMinTezinu`);
let pMinTezina = document.getElementById(`minTezina`);
btnMinTezina.addEventListener(`click`,() =>
{
    let minPac = pacijenti[0];
    pacijenti.forEach(p =>
        {
            if(p.tezina < minPac.tezina)
            {
                minPac = p; // U minPac se nalazi ceo objekat
            }
        });
    minPac.stampaj();
    pMinTezina.innerHTML = minPac.stampajListu();
});

// Ispisati podatke o pacijentu sa najvecom bmi vrednoscu
let btnMaxBMI = document.getElementById(`racunajBMI`);
let pMaxBMI = document.getElementById(`maxBMI`);
btnMaxBMI.addEventListener(`click`, () =>
{
    let maxBMI = pacijenti[0];
    pacijenti.forEach(p =>
        {
            if(p.bmi() > maxBMI.bmi())
            {
                maxBMI = p;
            }
        });
    maxBMI.stampaj();
    pMaxBMI.innerHTML = maxBMI.stampajListu();
});

// Ispisati sve pacijente cije ime sadrzi slovo A
let btnSadrziA = document.getElementById(`pacSlovoA`);
let pSadrziA = document.getElementById(`sadrziA`);
btnSadrziA.addEventListener(`click`, () =>
{
    pacijenti.forEach(a =>
        {
            if(a.ime.includes(`a`) || a.ime.includes(`A`))
            {
                pSadrziA.innerHTML += a.stampajListu();
            }
        });
});

// Napraviti funkciju srednjaVisina i vratiti srednju visinu pacijenata
let srednjaVisina = (niz) =>
{
    let sumaVisina = 0;
    let brPac = niz.length;
    niz.forEach(p =>
        {
            sumaVisina += p.visina
        });
    return sumaVisina / brPac
}
console.log(srednjaVisina(pacijenti));

let divAvgVisina = document.querySelector(`#avgVisina`);
divAvgVisina.innerHTML = `Prosecna visina svih pacijenata je ${srednjaVisina(pacijenti)} cm.`;