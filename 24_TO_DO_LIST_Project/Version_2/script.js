let input = document.getElementById(`obaveza`);
let button = document.getElementById(`submit`);
let ul = document.querySelector(`ul`);
let pocetak = document.getElementById(`pocetak`)
let kraj = document.getElementById(`kraj`)

button.addEventListener(`click`, () =>
{
    let value = input.value
    if(value == '')
    {
        alert("Please, enter a valid task, don't be lazy!")
    }
    else
    {
        if(pocetak.checked)
        {
            let li = document.createElement(`li`);
            ul.prepend(li);
            li.textContent = value;
            li.setAttribute(`id`,`lista`)
            input.value = ''
        }
        else
        {
            let li = document.createElement(`li`);
            ul.appendChild(li);
            li.textContent = value;
            li.setAttribute(`id`,`lista`)
            input.value = ''
        }
    }
});

ul.addEventListener('click', () =>
{
    let li = document.getElementById(`lista`)
    ul.removeChild(li)
})