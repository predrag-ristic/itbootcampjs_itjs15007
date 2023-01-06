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
    indeksTacan: 1
}
let pitanje10 = 
{
    tekst: `Gde su održane Olimpijske igre 2008?`,
    odgovori: [`U Pekingu`,`U Sidneju`,`U Nju Delhiju`,`U Londonu`],
    indeksTacan: 0
}
let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];


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
let row = document.createElement('div')
let div1 = document.createElement(`div`)
let div2 = document.createElement(`div`)
let div3 = document.createElement(`div`)
let formKviz = document.createElement(`form`);
let btnOdgovori = document.createElement(`input`)
let btnReset = document.createElement(`input`)

for(let i = 0; i < 5; i++)
{
    let divBoks = document.createElement(`div`);
    let hPitanje = document.createElement(`h3`);
    hPitanje.textContent = `${i + 1}. ` + pitanja[i].tekst
    
    formKviz.append(divBoks);
    divBoks.append(hPitanje);
    divBoks.classList.add(`form`)
    
    for(let j = 0; j < pitanja[i].odgovori.length; j++)
    {
        // Div koji nosi opcione odgovore
        let divOpcije = document.createElement(`div`);
        divBoks.append(divOpcije);

        // Radio dugme
        let inpRadio = document.createElement(`input`);
        let spanOdg = document.createElement(`span`);
        divOpcije.append(inpRadio);
        inpRadio.type = `radio`;
        inpRadio.value = j;
        inpRadio.name = `opcija${i}`;
        inpRadio.classList.add(`disable`)
        if(inpRadio.value == `0`)
        {
            inpRadio.checked = true
        };

        // Span koji nosi tekst opcionih odgovora
        divOpcije.append(spanOdg);
        spanOdg.textContent = pitanja[i].odgovori[j];
    }
}
div2.append(formKviz);

// Risponsiv
document.body.append(row)
row.classList.add(`row`)
row.append(div1);
div1.classList.add(`col-4`)
row.append(div2);
div2.classList.add(`col-4`)
row.append(div3);
div3.classList.add(`col-4`)

// Dugmad
formKviz.append(btnOdgovori);
btnOdgovori.type =`button`
btnOdgovori.value = `Pošalji odgovore`
btnOdgovori.classList.add(`disable`)
formKviz.append(btnReset);
btnReset.type = `reset`;
btnReset.value = `Nova pitanja`;

// Paragrafi koji ispisuju resenja

let pResenje1 = document.createElement(`p`);
formKviz.append(pResenje1);
let pResenje2 = document.createElement(`p`);
formKviz.append(pResenje2);
let pResenje3 = document.createElement(`p`);
formKviz.append(pResenje3);
let pResenje4 = document.createElement(`p`);
formKviz.append(pResenje4);
let pResenje5 = document.createElement(`p`);
formKviz.append(pResenje5);


// Rezultati
btnOdgovori.addEventListener(`click`, () =>
{
    let check0 = document.querySelector(`input[name='opcija0']:checked`).value;
    let check1 = document.querySelector(`input[name='opcija1']:checked`).value;
    let check2 = document.querySelector(`input[name='opcija2']:checked`).value;
    let check3 = document.querySelector(`input[name='opcija3']:checked`).value;
    let check4 = document.querySelector(`input[name='opcija4']:checked`).value;

    if(check0 == pitanja[0].indeksTacan)
    {
        pResenje1.textContent = `Tačno ste odgovorili na 1. pitanje`;
        pResenje1.style = `color: green`;
    }
    else
    {
        pResenje1.textContent = `Niste tačno odgovorili na 1. pitanje`;
        pResenje1.style = `color: red`;
    }

    if(check1 == pitanja[1].indeksTacan)
    {
        pResenje2.textContent = `Tačno ste odgovorili na 2. pitanje`;
        pResenje2.style = `color: green`;
    }
    else
    {
        pResenje2.textContent = `Niste tačno odgovorili na 2. pitanje`;
        pResenje2.style = `color: red`;
    }

    if(check2 == pitanja[2].indeksTacan)
    {
        pResenje3.textContent = `Tačno ste odgovorili na 3. pitanje`;
        pResenje3.style = `color: green`;
    }
    else
    {
        pResenje3.textContent = `Niste tačno odgovorili na 3. pitanje`;
        pResenje3.style = `color: red`;
    }

    if(check3 == pitanja[3].indeksTacan)
    {
        pResenje4.textContent = `Tačno ste odgovorili na 4. pitanje`;
        pResenje4.style = `color: green`;
    }
    else
    {
        pResenje4.textContent = `Niste tačno odgovorili na 4. pitanje`;
        pResenje4.style = `color: red`;
    }

    if(check4 == pitanja[4].indeksTacan)
    {
        pResenje5.textContent = `Tačno ste odgovorili na 5. pitanje`;
        pResenje5.style = `color: green`;
    }
    else
    {
        pResenje5.textContent = `Niste tačno odgovorili na 5. pitanje`;
        pResenje5.style = `color: red`;
    }

    let disable = document.getElementsByClassName(`disable`);
    
    for(let i = 0; i < disable.length; i++)
    {
        if(disable[i].className == `disable`)
        {
            disable[i].disabled = true
        }
    }
});

// Novi niz
btnReset.addEventListener(`click`, () =>
{
    window.location.reload(true)
});