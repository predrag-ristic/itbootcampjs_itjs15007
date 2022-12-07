let date = new Date();

let day = date.getDate();
let mon = date.getMonth() + 1;
let year = date.getFullYear();

document.getElementById('head').innerHTML = ('IT Bootcamp Nis ' + '(' + day + '.' + mon + "." + year + ')');