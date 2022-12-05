let date = new Date(day, mon, year);

let day = date.getDay();
let mon = date.getMonth();
let year = date.getFullYear();

document.getElementById('head').innerHTML = date.('IT Bootcamp Nis' + '(' + day + '.' + mon + "." + year + ')');