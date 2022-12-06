let x, y, z;
x = 3;
y = 3;
z = 40;
console.log(x == y);

if(x == y)
{
    console.log("Vredosti promenljivih x i y su jednake.");
    console.log('Jos jedna poruka.');
    console.log("Vredosti " + x + " i " + y + " su jednake.");
    console.log(`Vrednosti ${x} i ${y} su jednake.`)
}

console.log("Komanda posle IF grananja.");

x = 5; // integer
x = 4.5; // decimal
x = "4"; // string
y = '4';
if(x === y)
{
    console.log(`Vrednosti x i y su jednake po tipu i po vrednosti.`);
}

x = "14"
y = 4
if(x !== y)
{
    console.log(`Vrednosti x i y su razlicite po tipu ili po vrednosti ili po tipu i po vrednosti`);
}

