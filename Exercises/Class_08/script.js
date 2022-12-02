let sat = 13;
let min = 45;

// Zadatak 1
min_od_pon = sat * 60 + min;
console.log(min_od_pon);

min_do_pon = 24 * 60 - min_od_pon
console.log(min_do_pon);

// Zadatak 2

// 1. nacin
sat = Math.floor(min_od_pon / 60);

// sat = min_od_pon / 60;
// sat = ~~sat

console.log(sat);

min = min_od_pon % 60;
console.log(min);
console.log(sat + ":" + min);

// 2. nacin
min = min_od_pon % 60;
sat = (min_od_pon - min) / 60;
console.log(sat + ":" + min);

// Zadatak 4
let date = new Date(); // Datum je objekat koji sadrzi trenutno vreme
// let month = date.getMonth;
// console.log(date.getFullYear() + "/" + date.getMonth());
let h = date.getHours();
let m = date.getMinutes();
console.log(h + ":" + m);
let mop = h * 60 + m;
console.log(mop);