let request = new XMLHttpRequest();
/*
request.addEventListener('readystatechange', function() // Ako anonimna onda moze this umesto request
{
    // console.log(request.readyState);
    if(this.readyState === 4)
    {
        console.log(this.responseText); 
    }
});
request.addEventListener('readystatechange', () =>  // Ako je arrow onda mora request, ne moze this
{
    // console.log(request.readyState);
    if(request.readyState === 4)
    {
        console.log(request.responseText);
    }
});
*/

request.addEventListener('readystatechange', () =>
{
    if(request.readyState === 4 && request.status === 200)
    {
        let data = JSON.parse(request.responseText); // data = JS objekat
        console.log(data);
    }
    else if(request.readyState === 4)
    {
        console.log('Desila se greska.');
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();


// Zadatak 2
let request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', () =>
{
    if(request1.readyState === 4 && request1.status === 200)
    {
        let data = JSON.parse(request1.responseText);
        for(let i = 0; data.length; i++)
        {
            if(data[i].website.includes('.com'))
            {

                console.log(`1. Sajtovi sa .com: ${data[i].website}.`);
            }
        }
    }
    else if(request1.readyState === 4)
    {
        console.log("Error");
    }
});
request1.open('GET', 'https://jsonplaceholder.typicode.com/users');
request1.send();


// Zadatak 3
let request2 = new XMLHttpRequest();
request2.addEventListener('readystatechange', () =>
{
    if(request2.readyState === 4 && request2.status === 200)
    {
        let data = JSON.parse(request2.responseText);
        for(let i = 0; data.length; i++)
        {
            if(data[i].name.includes('Clementin'))
            {
                console.log(`2. Osoba za Clementin u imenu: ${data[i].name}.`);
            }
        }
    }
    else if(request2.readyState === 4)
    {
        console.log("Error");
    }
});
request2.open('GET', 'https://jsonplaceholder.typicode.com/users');
request2.send();


// Zadatak 4
let request3 = new XMLHttpRequest();
request3.addEventListener('readystatechange', () =>
{
    if(request3.readyState === 4 && request3.status === 200)
    {
        let data = JSON.parse(request3.responseText);
        for(let i = 0; data.length; i++)
        {
            if(data[i].company.name.includes('Group') || data[i].company.name.includes('LLC'))
            {

                console.log(`3. Kompanije sa Group i LLC u imenu: ${data[i].company.name}.`);
            }
        }
    }
    else if(request3.readyState === 4)
    {
        console.log("Error");
    }
});
request3.open('GET', 'https://jsonplaceholder.typicode.com/users');
request3.send();


// Zadatak 5
let request4 = new XMLHttpRequest();
request4.addEventListener('readystatechange', () =>
{
    if(request4.readyState === 4 && request4.status === 200)
    {
        let cities = [];
        let data = JSON.parse(request4.responseText);
        for(let i = 0; data.length; i++)
        {
            if(! cities.includes(data[i].address.city))
            {
                cities.push(data[i].address.city)
            }
        }
        console.log(`4. Svi razliciti gradovi: ${cities}.`);
    }
    else if(request4.readyState === 4)
    {
        console.log("Error");
    }
});
request4.open('GET', 'https://jsonplaceholder.typicode.com/users');
request4.send();


// Zadatak 6
let request5 = new XMLHttpRequest();
request5.addEventListener('readystatechange', () =>
{
    if(request5.readyState === 4 && request5.status === 200)
    {
        let data = JSON.parse(request5.responseText);
        let br = 0;
        for(let i = 0; data.length; i++)
        {
            let lat = Number(data[i].address.geo.lat)
            let lng = Number(data[i].address.geo.lng)
            if(lat < 0 && lng < 0)
            {
                br++
            }
        }
        console.log(`Ima ${br} grada sa Lar i Lng u minusu.`);
    }
    else if(request5.readyState === 4)
    {
        console.log("Error");
    }
});
request5.open('GET', 'https://jsonplaceholder.typicode.com/users');
request5.send();




// Zadaci sa slajda 16
let getUsers = (resolve, reject) =>
{
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () =>
    {
        if(request.readyState === 4 && request.status === 200)
        {
            let data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if(request.readyState === 4)
        {
            reject("Desila se greska");
        }
    });
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();
}

let ispisKonzola = poruka =>
{
    console.log(poruka);
};

// Zadatak 2
let websiteCom = niz =>
{
    niz.forEach(user => // for(let i = 0; i < niz.length; i++) { let user = niz[i]}
        {
            if(user.website.includes(".com"))
            {
                console.log(`1. Sajtovi sa .com: ${user.website}.`);
            }
        })
}
getUsers(websiteCom, ispisKonzola);

// Zadatak 3
let nameClementin = niz =>
{
    niz.forEach(user => 
        {
            if(user.name.includes("Clementin"))
            {
                console.log(`2. Osobe sa Clementin u imenu: ${user.name}.`);
            }
        })
}
getUsers(nameClementin, ispisKonzola);

// Zadatak 4
getUsers((niz) =>
{
    niz.forEach(user =>
        {
            if(user.company.name.includes("Group") || user.company.name.includes("LLC"))
            {
                console.log(`3. Ovo su imena kompanija sa Group i LLC u imenu: ${user.company.name}.`);
            }
        })
}, (poruka) =>
{
    console.log(poruka);
});

// Zadatak 5
let gradovi = []
let razlicitiGradovi = niz =>
{
    niz.forEach(grad =>
        {
            if(! gradovi.includes(grad.address.city))
            {
                gradovi.push(grad.address.city)
            }
        })
    console.log(`4. Ovo su razliciti gradovi: ${gradovi}.`);
}
getUsers(razlicitiGradovi, ispisKonzola);

// Zadatak 6
let negativLatLon = niz =>
{
    let br = 0;
    niz.forEach(grad =>
        {
            let lat = Number(grad.address.geo.lat)
            let lng = Number(grad.address.geo.lng)
            if(lat < 0 && lng < 0)
            {
                br++
            }
        })
    console.log(`5. Ima ${br} grada za Lat i Lng u minusu.`);
}
getUsers(negativLatLon, ispisKonzola);