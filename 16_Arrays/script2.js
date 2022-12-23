// Zadatak 24
let zad24a = (a, b) =>
{
    let n = a.length; // n = b.length
    let c = [];
    for(let i = 0; i < n; i++)
    {
        c.push(a[i], b[i]);
    }// c = [ a[0], b[0], a[1], b[1], ... , a[n - 1], b[n - 1]]
    return c;
}

let zad24b = (a, b) =>
{
    let n = a.length; // n = b.length
    let d = [];
    for(let i = 0; i < n; i++)
    {
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    } // c = [ a[0], b[0], a[1], b[1], ... , a[2n - 1], b[2n - 1]]
    return c;
}


// Zadatak 25
let zad25 = (a, b) =>
{
    let n = a.length;
    let e = [];
    for(let i = 0; i < n; i++)
    {
        e[i] = a[i] * b[i];
    }
    return e;
}


// Zadatak 26
let zad26 = (a) =>
{
    let n = a.length;
    let f = [];
    for(let i = 0; i < n / 2; i++)
    {
        f[i] = (a[i] + a[n - 1 - i]) / 2;
    }
    return f;
}


let a = [1, 3, 5, 7];
let b = [2, 4, 6, 8];
let c = zad24a(a, b);
console.log(c);
let d = zad24b(a, b);
console.log(d);
let e = zad25(a, b)
console.log(e);
let f = zad26(a)
console.log(f);
f = zad26(b);
console.log(f);