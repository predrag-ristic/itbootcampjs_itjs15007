// Pitanja
let pitanje1 = 
{
    tekst: `Kako se zove najviša planina na svetu?`,
    odgovori: [`Alpi`,`Kilimandžaro`,`Himalaji`,`Elbrus`],
    indeksTacan: 2
}
let pitanje2 = 
{
    tekst: `Koji od sledećih kontinenata je najveći?`,
    odgovori: [`Amerika`,`Azija`,`Afrika`,`Antarktik`],
    indeksTacan: 1
}
let pitanje3 = 
{
    tekst: `Šta je epilog?`,
    odgovori: [`Stilska figura`,`Pogovor, završna reč`,`Vrsta pesme`,`Važan dogadjaj`],
    indeksTacan: 1
}
let pitanje4 = 
{
    tekst: `Kaligrafija je:`,
    odgovori: [`lepo pisanje`,`jedinica za merenje`,`ukras`,`tehnika crtanja`],
    indeksTacan: 0
}
let pitanje5 = 
{
    tekst: `Prema narodnim pričama, onaj ko zna nemušti jezik:`,
    odgovori: [`razume sve svetske jezike`,`razume govor životinja`,`tumači svete knjige`,`može da razgovara sa mrtvima`],
    indeksTacan: 1
}
let pitanje6 = 
{
    tekst: `Kako je Aljaska pripala Sjedinjenim Američkim Državama?`,
    odgovori: [`SAD su je kupile od Rusije`,`SAD su je osvojile u borbi sa Kanadom`,`Kanada, SAD, Rusija i Japan su postigli dogovor u Londonu`,`Ništa od navedenog`],
    indeksTacan: 0
}
let pitanje7 = 
{
    tekst: `Ko je bio na čelu Drugog srpskog ustanka?`,
    odgovori: [`Karađorđe`,`Miloš Obrenović`,`Stanoje Glavaš`,`Miloš Obilić`],
    indeksTacan: 3
}
let pitanje8 = 
{
    tekst: `Koji hemijski element nosi oznaku "H"?`,
    odgovori: [`Helijum`,`Hidroksid`,`Vodonik`,`Hafnium`],
    indeksTacan: 2
}
let pitanje9 = 
{
    tekst: `Ko medju navedenima nije bio vojskovodja?`,
    odgovori: [`Hanbal`,`Vergilije`,`Bajazit`,`Atila`],
    indeksTacan: 2
}
let pitanje10 = 
{
    tekst: `Gde su održane Olimpijske igre 2008?`,
    odgovori: [`U Pekingu`,`U Sidneju`,`U Nju Delhiju`,`U Londonu`],
    indeksTacan: 0
}
let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];


// Deklarisanje elemenata

let kviz = document.getElementById(`kviz`)
// let hPitanje1 = document.getElementById(`pitanje_1`)
// let hPitanje2 = document.getElementById(`pitanje_2`)
// let hPitanje3 = document.getElementById(`pitanje_3`)
// let hPitanje4 = document.getElementById(`pitanje_4`)
// let hPitanje5 = document.getElementById(`pitanje_5`)

// let spanOdgovor1 = document.getElementsByClassName(`odgovor_1`)

// let radioBtnOdg1 = document.getElementsByName(`odg1`)
// let radioBtnOdg2 = document.getElementsByName(`odg2`)
// let radioBtnOdg3 = document.getElementsByName(`odg3`)
// let radioBtnOdg4 = document.getElementsByName(`odg4`)
// let radioBtnOdg5 = document.getElementsByName(`odg5`)

// let boxOdgovori1 = document.getElementById(`box_pitanje_1`);
// let boxOdgovori2 = document.getElementById(`box_pitanje_2`);
// let boxOdgovori3 = document.getElementById(`box_pitanje_3`);
// let boxOdgovori4 = document.getElementById(`box_pitanje_4`);
// let boxOdgovori5 = document.getElementById(`box_pitanje_5`);

// // Dugmad
// let btnOdgovori = document.getElementById(`posalji`);
// let btnReset = document.getElementById(`resetuj`);

// // Rezultat
// let pOdgovor1 = document.getElementsByClassName(`odgovor1`);
// let pOdgovor2 = document.getElementsByClassName(`odgovor2`);
// let pOdgovor3 = document.getElementsByClassName(`odgovor3`);
// let pOdgovor4 = document.getElementsByClassName(`odgovor4`);
// let pOdgovor5 = document.getElementsByClassName(`odgovor5`);


// Randomizacija
function randomizacija(niz)
{
    for (let i = niz.length - 1; i > 0; i--)
    {
        let j = Math.floor(Math.random() * (i + 1));
        [niz[i], niz[j]] = [niz[j], niz[i]];
    }

}
randomizacija(pitanja);

// Ispisivanje kviza

// hPitanje1.innerHTML = pitanja[0].tekst
// hPitanje2.innerHTML = pitanja[1].tekst
// hPitanje3.innerHTML = pitanja[2].tekst
// hPitanje4.innerHTML = pitanja[3].tekst
// hPitanje5.innerHTML = pitanja[4].tekst


// spanOdgovor1.innerHTML = pitanja[1][0]

let formKviz = document.createElement(`form`);
let btnOdgovori = document.createElement(`input`)
let btnReset = document.createElement(`input`)
for(let i = 0; i < 5; i++)
{
    let divBoks = document.createElement(`div`);
    let divOpcije = document.createElement(`div`);
    let hPitanje = document.createElement(`h3`);
    hPitanje.textContent = `${i + 1}. ` + pitanja[i].tekst
    let inpRadio = document.createElement(`input`);
    let spanOdg = document.createElement(`span`);
    spanOdg.textContent = pitanja[i].odgovori[i];
    let pResenje = document.createElement(`p`);
    
    formKviz.append(divBoks);
    divBoks.append(hPitanje);
    divBoks.append(divOpcije);

    for(let j = 0; j < 5; j++)
    {
        divOpcije.append(inpRadio);
        divOpcije.append(spanOdg);
    }

    formKviz.append(pResenje);
    
    
    
    
}
document.body.append(formKviz);
formKviz.append(btnOdgovori);
formKviz.append(btnReset);



// Rezultati
btnOdgovori.addEventListener(`click`, () =>
{
    if(pitanja.indeksTacan == 2)
    {
        pResenje.textContent = `Tačno ste odgovorili na ${1}. pitanje`;
    }
    else
    {
        pResenje.textContent = `Niste tačno odgovorili na ${1}. pitanje`;
    }
});

// Novi niz
btnReset.addEventListener(`click`, () =>
{
    window.location.reload(true)
});