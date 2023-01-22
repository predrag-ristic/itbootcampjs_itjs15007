let day = 
{
    date: `2022/12/26`,
    rainy: true,
    sunny: true,
    cloudy: true,
    temperature: [5, 10, 15, 15, 15],
    average: function()
    {
        let sum = 0;
        this.temperature.forEach(e =>
            {
                sum += e;
            })
        return sum / this.temperature.length;
    },
    noAboveAverage: function()
    {
        let no = 0;
        let avg = this.average();
        this.temperature.forEach(e =>
            {
                if(e > avg)
                {
                    no++
                }
            })
        return no;
    },
    maxTemp: function()
    {
        let max = this.temperature[0]
        this.temperature.forEach(e =>
            {
                if(e > max)
                {
                    max = e;
                }
            });
        return max;
    },
    noMaxTemp: function()
    {
        let no = 0;
        this.temperature.forEach(e =>
            {
                let max = this.maxTemp(e);
                if(max == e)
                {
                    no++
                }
            });
        return no;
    },
    tempBetweenTwo: function(n, m)
    {
        let no = 0;
        this.temperature.forEach(e =>
            {
                if(e > n && e < m)
                {
                    no++;
                }
            });
        return no;
    },
    aboveAvg: function()
    {
        let noAboveAverage = this.noAboveAverage();
            if(noAboveAverage > this.temperature.length / 2)
            {
                return true;
            }
            else
            {
                return false;
            }
    },
    icyDay: function()
    {
        // for(let i = 0; i < this.temperature.length; i++)
        // {
        //     if(this.temperature[i] > 0)
        //     {
        //         return false;
        //     }
        // }
        // return true;
        let icy = true;
        this.temperature.forEach(e =>
            {
                if(e > 0)
                {
                    icy = false;
                }
            });
        return icy;
    },
    tropicalDay: function()
    {
        for(let i = 0; i < this.temperature.length; i++)
        {
            if(this.temperature[i] < 24)
            {
                return false;
            }
        };
        return true;
    },
    unpleasantDay: function()
    {
        for(let i = 1; i < this.temperature.length; i++)
        {
            if((this.temperature[i] - this.temperature[i - 1]) > 8 || (this.temperature[i - 1] - this.temperature[i]) > 8)
            {
                return true;
            }
        }
        return false;
    },
    oddDay: function()
    {
        for(let i = 0; i < this.temperature.length; i++)
        {
            if((day.rainy == true && this.temperature[i] < -5) || (day.cloudy == true && this.temperature[i] > 25) || (day.cloudy == true && day.rainy == true && day.sunny == true))
            {
                return true;
            }
        }
        return false;
    }
};
console.log(day.average());
console.log(day.noAboveAverage());
console.log(day.maxTemp());
console.log(day.noMaxTemp());
console.log(day.tempBetweenTwo(1, 15));
console.log(day.aboveAvg());
console.log(day.icyDay());
console.log(day.tropicalDay());
console.log(day.unpleasantDay());
console.log(day.oddDay());


let blog1 = 
{
    title: `1. HTML`,
    likes: 30,
    dislikes: 35
};
let blog2 =
{
    title: `2. CSS!`,
    likes: 25,
    dislikes: 8
};
let blog3 =
{
    title: `3. JS`,
    likes: 40,
    dislikes: 15
};
let blog4 = 
{
    title: `4. C!`,
    likes: 70,
    dislikes: 85
};
let blog5 =
{
    title: `5. Python!`,
    likes: 50,
    dislikes: 40
};
let blog6 =
{
    title: `6. Java`,
    likes: 120,
    dislikes: 35
};
let blogs = [blog1, blog2, blog3, blog4, blog5, blog6];


let totalLikes = array =>
{
    let sum = 0;
    array.forEach(e =>
        {
            sum += e.likes;
        });
    return sum;
};
console.log(`Total number of likes is ${totalLikes(blogs)}`);


let totalDislikes = array =>
{
    let sum = 0;
    array.forEach(e =>
        {
            sum += e.dislikes;
        });
    return sum;
};
console.log(`Total number of dislikes is ${totalDislikes(blogs)}`);


let avgLikes = array =>
{
    return totalLikes(array) / array.length;
}
console.log(`Average number of likes is ${avgLikes(blogs)}`);

let avgDislikes = array =>
{
    return totalDislikes(array) / array.length;
}
console.log(`Average number of likes is ${avgDislikes(blogs)}`);



let blogsMoreLikes = array =>
{
    for(let i = 0; i < array.length; i++)
    {
        if(array[i].likes > array[i].dislikes)
        {
            console.log(`Blog with more likes than dislikes is ${array[i].title}`);
        }
    };
    // let titles = undefined;
    // array.forEach(e =>
    //     {
    //         if(e.likes > e.dislikes)
    //         {
    //             console.log(`Blog with more likes than dislikes is ${array[i].title}`);
    //         }
    //     });
    // return titles;
}
blogsMoreLikes(blogs);


let twiceAsManyLikes = array =>
{    
    // for(let i = 0; i < array.length; i++)
    // {
    //     if(array[i].likes >= array[i].dislikes * 2)
    //         {
    //             console.log(`Blog with twice as many likes is ${titles = e.title}`);
    //         }
    // };
    let titles = undefined;
    array.forEach(e =>
        {
            if(e.likes >= e.dislikes * 2)
            {
                console.log(`Blog with twice as many likes is ${titles = e.title}`);
            }
        });
}
twiceAsManyLikes(blogs)


let exclamationEnd = array =>
{
    // for(let i = 0; i < array.length; i++)
    // {
    //     if(array[i].endsWith(`!`))
    //     {
    //         console.log(`Blog with an exclamation point is ${e.title}`);
    //     }
    // }
    array.forEach(e =>
        {
            if(e.title.endsWith("!"))
            {
                console.log(`Blog with an exclamation point is ${e.title}`);
            }
        });
}
exclamationEnd(blogs)


let user1 =
{
    username: `John Doe`,
    age: 34,
    blogs: [blog1, blog2, blog3],
    logBlogs: function()
    {
        this.blogs.forEach(e =>
            {
                console.log(e.title);
            });
    }
};
let user2 =
{
    username: `Jane Doe`,
    age: 30,
    blogs: [blog2, blog3, blog4],
    logBlogs: function()
    {
        this.blogs.forEach(e =>
            {
                console.log(e.title);
            });
    }
};
let user3 =
{
    username: `Jill Doe`,
    age: 16,
    blogs: [blog1, blog5, blog6],
    logBlogs: function()
    {
        this.blogs.forEach(e =>
            {
                console.log(e.title);
            });
    }
};

let users = [user1, user2, user3]

users.forEach(e =>
    {
        if(e.age < 18)
        {
            console.log(e.username);
        };
    });

users.forEach(e =>
    {
        let blogs = e.blogs;
        blogs.forEach(e =>
            {
                if(e.likes > 50)
                {
                    console.log(e.title);
                }
            });
    });

users.forEach(e =>
    {
        if(e.username == `John Doe`)
        {
            e.logBlogs();
        }
    });

let printBlogs = array =>
{
    users.forEach(e =>
        {
            if(e.username == array)
            {
                e.logBlogs();
            }
        })
}
printBlogs(`Jill Doe`)

users.forEach(e =>
    {
        let blogs = e.blogs;
        let sum = 0;
        blogs.forEach(e =>
            {
                sum += e.likes;
            });
        if(sum > 100)
        {
            console.log(e.username);
        }
    });

let abvAvg = array =>
{
    let avg = avgLikes(blogs);
    for(let i = 0; i < array.length; i++)
    {
        let user = array[i];
        let blogs = user.blogs;
        for(let j = 0; j < blogs.length; j++)
        {
            let blog = blogs[j];
            if(blog.likes > avg)
            {
                console.log(blog.title);
            }
        }
    }
}
console.log(avgLikes(blogs));
abvAvg(users);


// Napisati metode koje:
// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

// Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)

// Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
// Ispisati poslednji od njih

// Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom