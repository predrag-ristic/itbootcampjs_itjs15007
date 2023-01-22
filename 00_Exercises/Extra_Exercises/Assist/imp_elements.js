// Zadatak 1
let pastaCarbonara = [`Barilla no.5`,`Eggs`,`Parmesan`,`Pecorino`,`Pancetta`,`Garlic`,`Butter`,`Salt`,`Pepper`];

let list = `<ul>`;

let shippingList = arr =>
{
    for(let i = 0; i < arr.length; i++)
    {
        list += 
        `
            <li>${arr[i]}</li>
        `;
    }
    list += `</ul>`;
    return arr;
}
shippingList(pastaCarbonara);
document.write(list);


// Zadatak 2
let baketballTeam = [`Chicago Bulls`,`Sacramento Kings`,`Dallas Mavericks`,`Los Angeles Lakers`,`Golden State Warriors`,`Boston Celtics`,`San Antonio Spurs`,`Detroit Pistons`,`Miami Heat`,`Philadelphia 76ers`,`Orlando Magic`,`Detroit Pistons`,`Utah Jazz`];

let table = `<table>`;

let nbaBasketballTeam = arr =>
{
    for(let i = 0; i < arr.length; i++)
    {
        table +=
        `
            <tr>
                <td>${arr[i]}</td>
            </tr>
        `;
    }
    table += `</table>`;
    return arr;
}
nbaBasketballTeam(baketballTeam);
document.write(table);


// Zadatak 3
let imageAddress = [`https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60`,`https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=60`,`https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60`,`https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60`,`https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=300&q=60`]

let div = `<div>`

let imageGallery = arr =>
{
    for(let i = 0; i < arr.length; i++)
    {
        div +=
        `
            <img src="${arr[i]}">
        `
    }
    div += `</div>`
    return arr;
}
imageGallery(imageAddress)
document.write(div)