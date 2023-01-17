let input = document.getElementById(`obaveza`);
let ul = document.querySelector(`ul`);
let radio = document.getElementById(`radio`)

// let radioAdd = document.querySelector("input[name=radio]:checked")

input.addEventListener(`keyup`, e =>
{
    if(e.key == 'Enter') // Moze i e.keyCode == 13
    {
        let value = input.value;
        if(value != '')
        {
            let li = document.createElement(`li`);
            li.textContent = value;
            input.value = ''
            if(radio.checked)
            {
                ul.prepend(li);
            }
            else
            {
                ul.appendChild(li);
            };
        };
    };
});

ul.addEventListener('click', e =>
{
    if(e.target.tagName == 'LI')
    {
        e.target.remove()
    };
});

//////////////////////////////////////
// LOCAL STORAGE
//////////////////////////////////////
// Smestanje u lokalnu memoriju
// localStorage.setItem("name","Jelena");
localStorage.setItem("username","Jelena");
localStorage.setItem("city","Nis");

// Update u lokalnoj memoriji
localStorage.setItem("username","Stefan");
// Ukoliko key posotji vec u local storage onda vrsi update vrednosti za taj key
// Ukoliko key ne postoji u local storage onda vrsi dodavanje vrednosti (novi unos u local storage)

console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("name"));
let u = localStorage.getItem("username");
console.log(u);

localStorage.setItem("year",34)
let god = localStorage.getItem("year");
god++;
localStorage.setItem("year",god);
console.log(`Imam ${god} godina`);