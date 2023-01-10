let usd = 926;
let kurs = 111.37;

// console.log(din = usd * kurs);

let x = 16 + "Volvo";
let y = "16" + "Volvo";
let z = 16 + 4 + "Volvo";
let t = "Volvo" + 16 + 4;
let p = 5 / "hello";

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(t);
// console.log(p);

let date = new Date();
let sec = date.getSeconds();
let min = date.getMinutes();
let hour = date.getHours();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

document.getElementsByClassName("date").innerHTML = date;

// Zadatak 1
since_mid = hour * 60 + min;
console.log(since_mid);

// Zadatak 2
// g - 12-hour format of an hour (1 to 12)
// G - 24-hour format of an hour (0 to 23)
// h - 12-hour format of an hour (01 to 12)
// H - 24-hour format of an hour (00 to 23)
// i - Minutes with leading zeros (00 to 59)
// date_default_timezone_set('Europe/Belgrade'); - promena vremenske zone

$sati = date.getHours('H');
$minuti = date.getMinutes('i');
console.log($sati + ':' + $minuti);

// Zadatal 3
roba = 350;
novcanica = 1000;
console.log(kusur = novcanica - roba);

// Zadatak 4
eur = 350;
kurs = 117.8;
console.log(din = eur * kurs);
console.log(eur = din / kurs);

// Zadatak 5
usd = 500
usd_kurs = 112
console.log(rsd = usd * usd_kurs);
console.log(eur = rsd / kurs);

// Zadatak 6
c = 8
console.log(f = c * 1.8 + 32);
console.log(c = (f - 32) / 1.8);

// Zadatak 7
console.log(k = c + 273.15);
console.log(c = k - 273.15);

// Zadatak 8
gal = 75642
console.log(l = gal * 3.785);
console.log(g = l / 3.785);