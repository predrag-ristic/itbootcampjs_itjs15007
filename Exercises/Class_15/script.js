// Zadatak 1
// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.
function pozdrav (a, b)
{
    console.log(`Zdravo ` + a + ` ` + b);
}
pozdrav(`Petar`, `Petrovic`)


// Zadatak 2
// Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
function zbir (b1, b2)
{
    console.log(b1 + b2);
    console.log(b1 - b2);
    console.log(b1 * b2);
    console.log(b1 / b2);
}
zbir(3, 5);


// Zadatak 3
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
function neparan(n)
{
    if(n % 2 == 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(neparan(6));


// Zadatak 4
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
function maks2(a, b)
{
    if(a > b)
    {
        return a;
    }
    else
    {
        return b;
    }
}
console.log(maks2(3, 7));

function maks4(a, b, c, d)
{
    return maks2(maks2(maks2(a, b), c), d);
}
console.log(maks4(34, 27, 13, 39));


// Zadatak 5
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(address)
{
    document.write(`<img src=${address} width="300px">`);
}
slika(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU`)


// Zadatak 6
// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function boja(color)
{
    document.write(`<p style="color:${color}">Ovo je tekst kome je prosledjena boja.</p>`)
}
boja(`green`);


// Zadatak 7
// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
// Dan
// Version 1
switch (new Date().getDay())
{
    case 0:
        day = `Sunday`;
        break;
    case 1:
        day = `Monday`;
        break;
    case 2:
        day = `Tuesday`;
        break;
    case 3:
        day = `Wednesday`;
        break;
    case 4:
        day = `Thursday`;
        break;
    case 5:
        day = `Friday`;
        break;
    case 6:
        day = `Saturday`;
        break;
}
function sedmiDan1(n)
{
    return n;
}
console.log(sedmiDan1(day));

// Version 2
function sedmiDan2(n)
{
    if(n % 7 == 0)
    {
        return `Sunday`;
    }
    else if(n % 7 == 1)
    {
        return `Monday`;
    }
    else if(n % 7 == 2)
    {
        return `Tuesday`;
    }
    else if(n % 7 == 3)
    {
        return `Wednesday`;
    }
    else if(n % 7 == 4)
    {
        return `Thursday`;
    }
    else if(n % 7 == 5)
    {
        return `Friday`;
    }
    else
    {
        return `Saturday`;
    }
}
console.log(sedmiDan2(7));

// Mesec
switch (new Date().getMonth())
{
    case 0:
        month = `January`;
        break;
    case 1:
        month = `February`;
        break;
    case 2:
        month = `March`;
        break;
    case 3:
        month = `April`;
        break;
    case 4:
        month = `May`;
        break;
    case 5:
        month = `June`;
        break;
    case 6:
        month = `July`;
        break;
    case 7:
        month = `August`;
        break;
    case 8:
        month = `September`;
        break;
    case 9:
        month = `October`;
        break;
    case 10:
        month = `November`;
        break;
    case 11:
        month = `December`;
        break;
}
function mesec1(n)
{
    return n;
}
console.log(mesec1(month));


// Zadatak 8
// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
let brDel = 0;
function deljivSaTri(n, m)
{
    for(i = n; i <= m; i++)
    {
        if(i % 3 == 0)
        {
            brDel++;
            console.log(`Broj deljiv sa 3 u intervalu od ${n} do ${m} je ${i}.`);
        }
    }
    return brDel;
}
console.log(deljivSaTri(2, 7));


// Zadatak 9
// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.
function sumiraj(n, m)
{
    let sum = 0;
    for(i = n; i <= m; i++)
    {
        sum += i
    }
    return sum;
}
console.log(sumiraj(4, 7));


// Zadatak 10
// Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
function mnozi(n, m)
{
    let pro = 1;
    for(i = n; i <= m; i++)
    {
        pro *= i
    }
    return pro;
}
console.log(mnozi(5, 7));


// Zadatak 11
// Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
function arit_mid1(n, m)
{
    let sum = 0;
    let brDel = 0;
    for(i = n; i <= m; i++)
    {
        sum += i;
        brDel++;
    }
    return sum / brDel;
}
console.log(arit_mid1(3, 9));


// Zadatak 12
// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
function arit_mid2(n, m)
{
    let sum = 0;
    let brDel = 0;
    for(i = n; i <= m; i++)
    {
        if(i % 10 == 3)
        {
            sum += i;
            brDel++;
        }
    }
    return sum / brDel;
}
console.log(arit_mid2(1, 14));


// Zadatak 13
// Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function font(n)
{
    document.write(`<p style="font-size:${n}px">Paragraf sa prosledjenom velicinom fonta.</p>`)
}
font(24);


// Zadatak 14
// Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 
function recenica(n)
{
    let m = n + 5;
    for(i = n; i < m; i++)
    {
        document.write(`<p style="font-size:${i}px">Recenica kojoj se font povecava promenom iteratora i sada je ${i}px.</p>`);
    }
}
recenica(16);


// Zadatak 15
// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
// Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
// Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
function praksa(n, a, d)
{
    for(i = 1; i <= n; i++)
    {
        a += d;
    }
    return a;
}
// praksa(5, 10000, 5000);
console.log(praksa(5, 10000, 5000));

// Zadatak 16
// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
function igraBezGranica(t, p, n)
{
    if(t <= p)
    {
        return `<p>0 sekunci, kreni odmah.</p>`
    }
    else
    {
        if(t <= p + n)
        {
            return `<p>Kreni za ${p + n - t} sekundu/i.</p>`
        }
        else
        {
            return `<p>0 sekundi, kreni odmah.</p>`
        }
    }
}
document.write(igraBezGranica(25, 20, 6))