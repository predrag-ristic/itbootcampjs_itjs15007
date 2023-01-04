let inputRuze = document.getElementById(`ruze`);
let inputLjiljani = document.getElementById(`ljiljani`);
let inputGerberi = document.getElementById(`gerberi`);

let checkBox = document.getElementsByName(`poklon`)
let checkBombonjera = document.getElementById(`bombonjera`);
let checkCokolada = document.getElementById(`cokolada`);
let checkSampanjac = document.getElementById(`sampanjac`);

let radioButton = document.getElementsByName(`placanje`)

let btnIzracunaj = document.getElementById(`izracunaj`);
let btnReset = document.getElementById(`resetuj`)

let divImgRuze = document.getElementById(`slikaRuza`)
let divImgLjiljani = document.getElementById(`slikaLjiljan`)
let divImgGerberi = document.getElementById(`slikaGerber`)

let pBombonjera = document.getElementById(`parBombonjera`)
let pCokolada = document.getElementById(`parCokolada`)
let pSampanjac = document.getElementById(`parSampanjac`)

let hCenaKes = document.getElementById(`cenaKes`)

let pCenaKartica = document.getElementById(`parCenaKartica`)
let hCenaKartica = document.getElementById(`hCenaKartica`)


btnIzracunaj.addEventListener(`click`, () =>
{
// Cvece
    let ruze = inputRuze.value;
    let ljiljani = inputLjiljani.value;
    let gerberi = inputGerberi.value;

    for(let i = 0; i < ruze; i++)
    {
        divImgRuze.innerHTML += `<img src="images/rose_flower.png">`
    }
    for(let i = 0; i < ljiljani; i++)
    {
        divImgLjiljani.innerHTML += `<img src="images/lily_flower.png">`
    }
    for(let i = 0; i < gerberi; i++)
    {
        divImgGerberi.innerHTML += `<img src="images/gerber_flower.png">`
    }

// Pokloni
    let pokloni = 0;
    let br = 0;
    checkBox.forEach(e =>
        {
            if(e.checked)
            {
                br++;
            }
        });
    pokloni = br * 500;

    if(checkBombonjera.checked)
    {
        pBombonjera.innerHTML = `+ bombonjera`
    }
    if(checkCokolada.checked)
    {
        pCokolada.innerHTML = `+ cokolada`
    }
    if(checkSampanjac.checked)
    {
        pSampanjac.innerHTML = `+ sampanjac`
    }
    
//Racun
    let totalValue = ruze * 150 + ljiljani * 120 + gerberi * 70 + pokloni
    radioButton.forEach(e =>
        {
            if(e.checked)
            {
                if(e.value == `kes`)
                {
                    hCenaKes.innerHTML = `Cena je: ${totalValue} din.`
                }
                else
                {
                    if(totalValue > 2000)
                    {
                        pCenaKartica.innerHTML = `Cena bez popusta je: ${totalValue} din.`
                        hCenaKartica.innerHTML = `Cena za popustom je: ${totalValue - (totalValue * 0.1)} din.`
                    }
                    else
                    {
                        hCenaKes.innerHTML = `Cena je: ${totalValue} din.`
                    }
                }
            }
        });
});

btnReset.addEventListener(`click`, () =>
{
    window.location.reload(true)
})