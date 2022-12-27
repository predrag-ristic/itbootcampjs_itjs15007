let p = document.getElementsByTagName(`p`)
console.log(p);

for(let i = 0; i < p.length; i++)
{
    if(i % 2 == 0)
    {
        p[i].classList.add(`error`)
    }
    else
    {
        p[i].classList.add(`success`)
    };

    if(i % 3 == 0)
    {
        p[i].style.fontSize = `15px`;
    }
    else if(i % 3 == 1)
    {
        p[i].style.fontSize = `20px`;
    }
    else
    {
        p[i].style.fontSize = `25px`;
    };

    if(p[i].textContent.includes(`error`))
    {
        p[i].classList.add(`error`)
    };
    
    if(p[i].textContent.includes(`success`))
    {
        p[i].classList.add(`success`)
    };

    p[i].classList.toggle(`error`);
}