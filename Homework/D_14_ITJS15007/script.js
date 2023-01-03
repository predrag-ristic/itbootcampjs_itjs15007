let knjiga1 = 
{
    naslov: `The Ultimate Hitchhiker's Guide to the Galaxy`,
    autor: `Douglas Adams`,
    slika: `images/gallaxy.jpg`,
    procitana: true
}
let knjiga2 = 
{
    naslov: `Only Forward`,
    autor: `Michael Marshal Smith`,
    slika: `images/only_forward.jpeg`,
    procitana: true
}
let knjiga3 = 
{
    naslov: `Animal Farm`,
    autor: `George Orwell`,
    slika: `images/animal_farm.jpg`,
    procitana: false
}
let knjiga4 = 
{
    naslov: `We`,
    autor: `Yevgeny Zamyatin`,
    slika: `images/we.jpg`,
    procitana: true
}
let knjiga5 = 
{
    naslov: `Brave New World`,
    autor: `Aldous Huxley`,
    slika: `images/brave_new_world.jpg`,
    procitana: false
}

let knjiga = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5]

let table = document.createElement(`table`)
for(let i = 0; i < knjiga.length; i++)
{
    let row = document.createElement(`tr`);
    let td1 = document.createElement(`td`);
    let td2 = document.createElement(`td`);
    let img = document.createElement(`img`);
    img.src = knjiga[i].slika;
    let p1 = document.createElement(`p`);
    p1.textContent = knjiga[i].naslov + `—` + knjiga[i].autor;

    table.append(row);
    row.append(td1);
    row.append(td2);
    td1.append(img)
    td2.append(p1)
}
document.body.append(table);

let row = document.getElementsByTagName(`tr`)
for(let i = 0; i < row.length; i++)
{
    if(i % 2 == 0)
    {
        row[i].style.backgroundColor = `lightblue`;
    }
    else
    {
        row[i].style.backgroundColor = `lightpink`;
    };
};

let p = document.getElementsByTagName(`p`)
for(let i = 0; i < p.length; i++)
{
    if(knjiga[i].procitana == true)
    {
        p[i].style.color = `blue`
    }
    else
    {
        p[i].style.color = `grey`
    }
};

let img = document.getElementsByTagName(`img`);
for(let i = 0; i < img.length; i++)
{
    img[i].style.height = `150px`;
}