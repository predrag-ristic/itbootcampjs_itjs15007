// let p1 = document.querySelector(`p`)
// console.log(p1);

// let div1 = document.querySelector(`error`)
// console.log(div1);

// let tr = document.getElementById(`row`)
// console.log(tr);

// let a = document.getElementsByTagName(`a`)
// for(let i = 0; i < a.length; i++)
// {
//     console.log(a[i]);
// }

// let img = document.getElementsByTagName('img')
// for(let i = 0; i < img.length; i++)
// {
//     console.log(img[i]);
// }


// let par = document.querySelectorAll(`p`);
// for(let i = 0; i > par.length; i++)
// {
//     par[i].innerHTML += ` VAZNO!!!`
// }


// let divError = document.querySelector(`.error`);
// console.log(divError)
// divError.innerHTML += `<h1>GRESKA!</h1>`;


// par = document.querySelectorAll(`p`);
// for(let i = 0; i <= par.length; i++)
// {
//     par[i].style.color = `purple`;
// }

// let img = document.getElementsByTagName('img')
// for(let i = 0; i < img.length; i++)
// {
//     img[i].alt = `sve slike`;
// }

let a = document.getElementsByTagName(`a`)
console.log(a);
for(let i = 0; i < a.length; i++)
{
    a[i].style.padding = `10px`;
    a[i].style.fontSize = `18px`;
    a[i].style.textDecoration = `none`;
    if(i % 2 == 0)
    {
        a[i].style.backgroundColor = `green`;
    }
    else
    {
        a[i].style.backgroundColor = `purple`;
    };
    if(a[i].target == `_blank`)
    {
        a[i].attribute = `_top`
    }
    else
    {
        a[i].target == `_blank`
    }
};


let img = document.getElementsByTagName(`img`)
console.log(img);
for(let i = 0; i < img.length; i++)
{
    if(img[i].src.endsWith(`png`))
    {
        img[i].style.border = `2px solid red`
    }
};