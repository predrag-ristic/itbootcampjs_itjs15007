console.log("Poruka iz JS datoteke");

let y; //Deklarisanje promenljive y
console.log(y);
let x = 3; // Deklaracija promenljive x i dodeljenje vrednosti 3
console.log(x);
x = "Pera";
console.log(x);

y = -10; //Dodeljena je pocetna vrednost promenljive y
console.log(y);
x = 8;
console.log(x - y);

let z = true;
console.log(z);

const pi = 3.141592;
console.log(pi);

let age;  // age = undefined
console.log(age); // undefined
console.log(age + 3); //NaN - not a number

let age2;
age2 = null;
console.log(age2);
console.log(age2 + 3);

let ime = "Stefan";
console.log(ime);
let ime2 = 'Stefan';
console.log(ime2);

let ime3 = "Stefan's room";
console.log(ime3);

let ime4 = 'This was a "funny" joke';
console.log(ime4);

let ime5 = "This was a \"funny\" joke";
console.log(ime5);

x = 5;
// x = x + 3;
x += 3;
console.log(x);

// x = x / 2;
x /= 2;
console.log(x);


x = 6;
x ++
console.log(x);

++x;
console.log(x);

x = 6; 
console.log(x++);  // 6 (Prvo se iskoristi stara vrednost pa se ona uveca)
console.log(x); // 7
console.log(++x); // 8 (Prvo se uveca vrednost promenljive x pa se onda koristi)

x = 6;
console.log(x--); // 6
console.log(--x); // 4

console.log(7 / 3); // 7 = 2 * 3 + 1 -> kolicnik: 2, ostatak: 1
console.log(7 % 3);
console.log(24 % 18); // 24 = 1 * 18 + 6 kolicnik 1, ostatak 6

console.log((52 % 13) + 1);

x = 5;
y = 3;
console.log(x ** y);