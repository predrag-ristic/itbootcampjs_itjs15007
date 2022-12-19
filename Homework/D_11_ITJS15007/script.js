// Zadatak 1
// Function
function arSr1 (n, m)
{
    let sum = 0;
    let brDel = 0;
    for(i = n; i <= m; i++)
    {
        if(i % 3 != 0)
        {
            sum += i;
            brDel++;
        }
    }
    return (`<p>Aritmeticka sredina brojeva koji nisu deljivi sa tri u intervalu od ${n} do ${m} je: ${sum / brDel}.</p>`);
}
document.write(arSr1(1, 8));

// Arrow
let arSr2 = (n, m) => arSr1(n, m);
document.write(arSr2(2, 9));


// Zadatak 2
// Function
function br_str1 (n, s)
{
    document.write(`<p style="font-size:${n}px">${s}</p>`)
}
br_str1(24, `Ovo je prvi prosledjeni string koji ima prosledjenu velicinu fonta.`)

// Arrow
let br_str2 = (n, s) => br_str1 (n, s)
br_str2(34, `Ovo je drugi prosledjeni string koji ima prosledjenu velicinu fonta.`)