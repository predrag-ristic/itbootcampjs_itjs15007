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