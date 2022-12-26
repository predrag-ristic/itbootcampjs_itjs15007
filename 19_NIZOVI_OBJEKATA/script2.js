let blog1 = 
{
    title: `HTML`,
    likes: 50,
    dislikes: 5,
};

let blog2 = 
{
    title: `CSS`,
    likes: 20,
    dislikes: 5,
};

let blog3 = 
{
    title: `JavaScript!`,
    likes: 70,
    dislikes: 7,
};

let blog4 = 
{
    title: `PHP`,
    likes: 3,
    dislikes: 15,
};

let blog5 = 
{
    title: `C`,
    likes: 200,
    dislikes: 15,
};

let blog6 = 
{
    title: `Python`,
    likes: 700,
    dislikes: 70,
};

let user = 
{
    username: `John Doe`,
    age: 14,
    blogs: [blog1, blog2, blog3],
    logBlogs: function()
    {
        this.blogs.forEach(blog =>
            {
                console.log(blog.title);
            });
    },
};

let user1 = 
{
    username: `Jane Doe`,
    age: 33,
    blogs: [blog4, blog5],
    logBlogs: function()
    {
        this.blogs.forEach(blog =>
            {
                console.log(blog.title);
            });
    },
};

let user2 = 
{
    username: `Jolene Doe`,
    age: 16,
    blogs: [blog6],
    logBlogs: function()
    {
        this.blogs.forEach(blog =>
            {
                console.log(blog.title);
            });
    },
};

console.log(user.blogs); // Ispisati sve blogove korisnika user

console.log(user.blogs[0]); // Ovo je prvi blog

console.log(user.blogs[0].title); // Ispisati naslov prvog bloga koji je napisao korisnik user

user.logBlogs();

////////////////////////////////////////////

let users = [user, user1, user2];

// Ispisati imena autora koji imaju ispod 18 godina
users.forEach(u =>
    {
        if(u.age < 18)
        {
            console.log(u.username);
        }
    });


// Ovo ispod je primer ugnjezdene petlje
users.forEach(user =>
    {
        let blogs = user.blogs; // Niz blogova tekuceg user-a
        blogs.forEach(blog =>
            {
                if(blog.likes > 50)
                {
                    console.log(blog.title);
                }
            })
    });

// Ispisati sve blogove autora ciji je user John Doe
users.forEach(user =>
    {
        if(user.username == `John Doe`)
        {
            user.logBlogs();
        }
    });

// Napraviti arrow funkciju kojoj se prosledjuje username autora, a ona ispisuje sve njegove blogove
    let printBlogs = username =>
    {
        users.forEach(user =>
            {
                if(user.username == username)
                {
                    user.logBlogs();
                }
            });
    }

    printBlogs(`Jolene Doe`);


// kroz niz users pa onda kroz njihove nizove blogs, blogs je objekat i tu treba da trazim likes. Treba odrediti prosecan broj lajkova pa onda opet kroz usere i njihove blogove.

users.forEach(u =>
    {
        let blogs = u.blogs;
        let sum = 0;
        blogs.forEach(b =>
            {
                sum += b.likes
            });
        if(sum > 100)
        {
            console.log(user.username);
        }
    });

// Ispisati naslove onih blogova koji imaju natprosecan broj pozitivnih ocena
let avgLikes = users =>
{
    let sum = 0; // Ukupna suma lajkova
    let br = 0; // Ukupan broj blogova
    for(let i = 0; i < users.length; i++)
    {
        let user = users[i]; // Ovo daje objekat user (jedan element iz niza users)
        let blogs = user.blogs; // Ovo daje niz blogova za `selektovanog` korisnika
        for(let j = 0; j < blogs.length; j++)
        {
            let blog = blogs[j]; // Ovo daje objekat blog (jedan element iz niza blogs)
            sum += blog.likes; // Dodaje lajkove na sumu
            br++; // Racuna broj blogova
        }
    }
    return sum / br;
}

let avgDislikes = users =>
{
    let sum = 0; // Ukupna suma lajkova
    let br = 0; // Ukupan broj blogova
    for(let i = 0; i < users.length; i++)
    {
        let user = users[i]; // Ovo daje objekat user (jedan element iz niza users)
        let blogs = user.blogs; // Ovo daje niz blogova za `selektovanog` korisnika
        for(let j = 0; j < blogs.length; j++)
        {
            let blog = blogs[j]; // Ovo daje objekat blog (jedan element iz niza blogs)
            sum += blog.dislikes; // Dodaje lajkove na sumu
            br++; // Racuna broj blogova
        }
    }
    return sum / br;
}

let aboveAvgLikes = users =>
{
    let avgL = avgLikes(users);
    let avgDl = avgDislikes(users);
    for(let i = 0; i < users.length; i++)
    {
        let user = users[i];
        let blogs = user.blogs;
        for(let j = 0; j < blogs.length; j++)
        {
            let blog = blogs[j];
            if(blog.likes > avgL && blog.dislikes < avgDl)
            {
                console.log(blog.title);
            }
        }
    }
}
console.log(`Prosecan broj lajkova je ${avgLikes(users)}`)
console.log(`Prosecan broj dislajkova je ${avgDislikes(users)}`)
aboveAvgLikes(users);