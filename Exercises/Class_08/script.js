// Zadatak 1
let sat = 13;
let min = 45;
min_od_pon = sat * 60 + min;
// console.log(min_od_pon);
min_do_pon = 24 * 60 - min_od_pon
// console.log(min_do_pon);


// Zadatak 2
// 1. nacin
sat = Math.floor(min_od_pon / 60);
// console.log(sat);
min = min_od_pon % 60;
// console.log(min);
// console.log(sat + ":" + min);

// 2. nacin
min = min_od_pon % 60;
sat = (min_od_pon - min) / 60;
// console.log(sat + ":" + min);


// Zadatak 3
let cena = 1499;
let kes = 5000;
kusur = kes - cena;
// console.log(kusur);


// Zadatak 4
let date = new Date(); // Datum je objekat koji sadrzi trenutno vreme
let month = date.getMonth() + 1;
let year = date.getFullYear();
// console.log(date.getFullYear() + "/" + month);
let h = date.getHours();
let mins = date.getMinutes();
// console.log(h + ":" + m);
let mop = h * 60 + mins;
// console.log(mop);


// Zadatak 5
const d = date.getDate();
const m = date.getMonth() + 1;
const y = date.getFullYear();
// console.log(d + '.' + m + "." + y);


// Zadatak 6
let eur = 2475;
let kurs1 = 116.96;
din = eur * kurs1;
// console.log(din);

let kurs2 = 117.66;
eur = din / kurs2;
// console.log(eur);


// Zadatak 7
let e = 154;
let eu_rs = 117.66;
let rs_eu = 116.96;
let us_rs = 111.7;
let rs_us = 111.04;
us = e * eu_rs / rs_us;
// console.log(us);
eu = us * us_rs / rs_eu;
// console.log(eu);


// Zadatak 8
let cel = 7;
far = cel * 1.8 + 32;
// console.log(far);
cel = (far - 32) /1.8;
// console.log(cel);


// Zadatak 9
let c = 18;
k = c + 273.15
// console.log(k);
c = k - 273.15
// console.log(c);