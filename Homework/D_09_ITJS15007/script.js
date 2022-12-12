// Zadatak 1

/*
let n = 5;
let i = 1;
while(i <= n)
{
    if(i % 2 == 0)
    {
        document.write(`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU" alt="200px" style="border: 3px solid red; margin:5px">`)
    }
    else
    {
        document.write(`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU" alt="200px" style="border: 3px solid blue; margin:5px">`)
    }
    i++;
}
*/

let n = 5;
for(i = 1; i <= n; i++)
{
    if(i % 2 == 0)
    {
        document.write(`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU" alt="200px" style="border: 3px solid red; margin:5px">`)
    }
    else
    {
        document.write(`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU" alt="200px" style="border: 3px solid blue; margin:5px">`)
    }
}


// Zadatak 2
n = 113;
let brDel = 0
for(i = 1; i <= n; i++)
{
    if(n % i == 0)
    {
        brDel++;
    }
}
if(brDel == 2)
{
    console.log(`Broj ${n} je prost.`);
}
else
{
    console.log(`Broj ${n} je slozen.`);
}