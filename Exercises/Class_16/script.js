// Zadatak 1
// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.
let pozdrav = (a, b) => console.log(`Zdravo ` + a + ` ` + b);
pozdrav(`Petar`,`Petrovic`)


// Zadatak 2
// Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
let zbir = (a, b) => console.log(a + b);
zbir(4, 5)


// Zadatak 3
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = n => (n % 2 != 0);
console.log(neparan(6));


// Zadatak 4
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
let maks2 = (a, b) => 
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
console.log(maks2(15, 8));

let maks4 = (a, b, c, d) => maks2(maks2(maks2(a, b), c), d)
console.log(maks4(24, 16, 8, 11));


// Zadatak 5
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
let slika = address => document.write(`<img src=${address} width="300px">`);
slika(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU`);


// Zadatak 6
// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
let boja = color => document.write(`<p style="color:${color}">Tekst obojen prosledjenom bojom.</p>`)
boja(`green`);


// Zadatak 7
// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?



// Zadatak 8
// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.
let deljivSaTri = (n, m) =>
{
    let brDel = 0;
    for(i = n; i <= m; i++)
    {
        if(i % 3 == 0)
        {
            brDel++;
            document.write(`<p>Broj deljiv sa 3 u intervalu od ${n} do ${m} je ${i}.</p>`);
        }
    }
    return brDel;
}
console.log(deljivSaTri(1, 8));


// Zadatak 9
// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.
let sumiraj = (n, m) =>
{
    let sum = 0;
    for(i = n; i <= m; i++)
    {
        sum += i
    }
    return sum;
}
console.log(sumiraj(1, 6));


// Zadatak 10
// Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.
let mnozi = (n, m) =>
{
    let pro = 1;
    for(i = n; i <= m; i++)
    {
        pro *= i
    }
    return pro;
}
console.log(mnozi(1, 9));


// Zadatak 11
// Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.



// Zadatak 12
// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m.
// Brojeve n i m proslediti kao parametre funkciji.



// Zadatak 13
// Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.



// Zadatak 14
// Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 



// Zadatak 15
// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
// Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
// Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).



// Zadatak 16
// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
