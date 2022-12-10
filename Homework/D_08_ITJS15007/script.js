// Zadatak 1
let v = 150;
let n = 51;
if(n * 3 <= v)
{
    document.write(`<p style="font-family: Arial, Helvetica, sans-serif; font-size: 60px; border: 2px solid black; padding: 40px; margin-left: auto; margin-right: auto; width: 200px; background-color: green; text-align: center; color: white;">DA</p>`);

}
else
{
    document.write(`<p style="font-family: Arial, Helvetica, sans-serif; font-size: 60px; border: 2px solid black; padding: 40px; margin-left: auto; margin-right: auto; width: 200px; background-color: red; text-align: center; color: white;">NE</p>`);
    document.write(`<p style="font-family: Arial, Helvetica, sans-serif; font-size: 40px; text-align: center; color: red;">Broj gostiju koji treba da napusti objekat je ${n - (v / 3)}.</p>`);
}


// Zadatak 2
n = 3;
let m = 24;
let i = n;
sum = 0;
while(i <= m)
{
    if(i % 3 == 0 && i % 7 != 0)
    {
        sum += i
    }
    i++;
}
console.log(`Zbir brojeva od ${n} do ${m} koji su deljivi sa 3 a nisu sa 7 je: ${sum}`);


// Zadatak 3
n = 30;
i = 1;
let brojDelioca = 0;
while(i <= n)
{
    if(i % 3 == 0 && i % 2 != 0 && n % i == 0)
    {
        brojDelioca++
    }    
    i++;
}
console.log(`Broj ${n} ima ${brojDelioca} delioca koji su deljivi brojem 3 i neparni su.`);