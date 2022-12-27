let blog1 = 
{
    title: `HTML`,
    likes: 30,
    dislikes: 5,
};

let blog2 = 
{
    title: `CSS`,
    likes: 20,
    dislikes: 25,
};

let blog3 = 
{
    title: `JavaScript!`,
    likes: 70,
    dislikes: 7,
};

let blogs = [blog1, blog2, blog3];

// Ispis niz objekata
console.log(blogs);

// Ispis jednog objekta iz niza
console.log(blogs[2]);

// Ispis propertija
console.log(blogs[2].title);

// Ispis svih naslova blogova
blogs.forEach(blog => 
    {
        console.log(blog.title);
    });

// Ispis svih naslova blogova na stranici
for(let i = 0; i < blogs.length; i++)
{
    document.body.innerHTML += `<h3>${blogs[i].title}</h3>
                                <p>Likes: ${blogs[i].likes}</p>
                                <p>Dislikes: ${blogs[i].dislikes}</p>`;
}

// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova
let sumLikes = arrObjs =>
{
    let sum = 0;
    arrObjs.forEach(obj => 
        {
            sum += obj.likes;
        });
    return sum;
}
console.log(sumLikes(blogs)); // arrObj = blogs

// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca prosecan broj lajkova
let avgLikes = blogs =>
{
    return sumLikes(blogs) / blogs.length;
}
console.log(`Prosecan broj lajkova je: ${avgLikes(blogs)}`);

// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca sve naslove za blogove koji imaju vise lajkova nego dislajkova
let moreLikes = blogLikes =>
{
    for(let i = 0; i < blogLikes.length; i++)
    {
        if(blogLikes[i].likes > blogLikes[i].dislikes)
        {
            console.log(blogLikes[i].title);
        }
    }
}
moreLikes(blogs);


// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca sve naslove za blogove koji imaju najmanje dva puta vise lajkova nego dislajkova
let twiceAsManyLikes = twiceLikes =>
{
    for(let i = 0; i < twiceLikes.length; i++)
    {
        if(twiceLikes[i].likes >= twiceLikes[i].dislikes * 2)
        {
            console.log(twiceLikes[i].titles);
        }
    }
}
twiceAsManyLikes(blogs);


// Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona ispisuje sve naslove koji se zavrsavaju uzvicnikom
let exclamation = exclame =>
{
    exclame.forEach(exc =>
        {
            if(exc.title[exc.title.length - 1] == `!`)
            {
                console.log(exc.title);
            }
        })
}
exclamation(blogs);