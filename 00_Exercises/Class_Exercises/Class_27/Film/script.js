import { Film } from "./film.js";

let f1 = new Film(`Parasite`, `Bong Joon Ho`, 2019)
let f2 = new Film(`The Green Mile`, `Francis 
Frank Darabont`, 1999)
let f3 = new Film(`Django Unchained`, `Quentin Tarantino`, 2012)
let f4 = new Film(``, ``, 0)

f1.stampaj();
f2.stampaj();
f3.stampaj();
f4.stampaj();

console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);