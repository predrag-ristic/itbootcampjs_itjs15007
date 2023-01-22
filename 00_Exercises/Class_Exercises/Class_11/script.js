// Zadatak 21
let a = 25;
let b = 16;
let c = 68;
if(a > b && b > c)
{
    document.write(`<p style="font-size:30px;">Najveci broj je broj ${a}.</p>`);
}
else if(b > a && b > c)
{
    document.write(`<p style="font-size:30px;">Najveci broj je broj ${b}.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Najveci broj je broj ${c}.</p>`);
}

// Zadatak 22
let temp = -15;
if(temp < -15 || temp > 40)
{
    document.write(`<p style="font-size:30px;">Ekstremna tempratura.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Regularna temperatura.</p>`);
}

// Zadatak 23
let date = new Date();
let year = date.getFullYear();
// let year = 1988;
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
{
    document.write(`<p style="font-size:30px;">Godina je prestupna.</p>`);
}
else
{
    document.write(`<p style="font-size:30px;">Godina nije prestupna.</p>`);
}

// Zadatak 24
let day = date.getDay();
let hour = date.getHours();
// let day = 1;
// let hour = 9;
console.log(day, hour);
if(day == 0 || day == 6)
{
    if(hour >= 10 && hour < 18)
    {
        document.write(`<p style="font-size:30px;">Butik je otvoren.</p>`);
        document.write(`<img src="https://media.istockphoto.com/id/1172483739/vector/open-sign-line-icon-editable-stroke-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=LLRc54B-XWsNvEUljIRi2hNx_kb5DKbTr7dZXnxSAKk=" width="100px">`);
    }
    else
    {
        document.write(`<p style="font-size:30px;">Butik je zatvoren.</p>`);
        document.write(`<img src="https://static.vecteezy.com/system/resources/thumbnails/000/436/200/small/Ecommerce__2813_29.jpg" width="100px">`);
    }
}
else
{
    if(hour >=9 && hour < 20)
    {
        document.write(`<p style="font-size:30px;">Butik je otvoren.</p>`);
        document.write(`<img src="https://media.istockphoto.com/id/1172483739/vector/open-sign-line-icon-editable-stroke-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=LLRc54B-XWsNvEUljIRi2hNx_kb5DKbTr7dZXnxSAKk=" width="100px">`);
    }
    else
    {
        document.write(`<p style="font-size:30px;">Butik je zatvoren.</p>`);
        document.write(`<img src="https://static.vecteezy.com/system/resources/thumbnails/000/436/200/small/Ecommerce__2813_29.jpg" width="100px">`);
    }
}