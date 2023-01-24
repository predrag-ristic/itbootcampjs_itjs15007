// `Igramo se Ikee :)
// Robna kuća “Ikea” vas je angažovala da joj pomognete u realizaciji aplikacije koja će omogućiti lakši rad zaposlenima u prodavnici.
// Uvidom u način rada svih zaposlenih, zaključili ste da menadžment firme funkcioniše na sledeći način:
// ●      Radnici u magacinu proveravaju stanje artikala, i oni su zaduženi da vode evidenciju o brojnom stanju svakog artikla.
// ●      Ekonomisti na osnovu analize tržišta, kao i troškova firme određuju cene, i oni su zaduženi da vode računa o ceni svakog artikla.
// ●      Radnici u kamionu za prevoz poseduju posebnu vagu koja je u mogućnosti da izmeri svaki proizvod, i oni su zaduženi da vode evidenciju o težini svakog artikla.
// Na osnovu ovih informacija, odlučili ste da kreirate tri json fajla, tako da svaki sektor unosi podatke u svoj poseban json fajl. Sadržaj svakog fajla je string u JSON formatu koji odgovara nizu objekata, pri čemu svaki objekat od atributa sadrži:
// ●      stock.json: id (identifikacioni broj artikla), item (naziv artikla), stock (broj artikala na stanju),
// ●      prices.json: id (identifikacioni broj artikla), item (naziv artikla), price (cena artikla),
// ●      weights.json: id (identifikacioni broj artikla), item (naziv artikla), weight (težina artikla izražena u kilogramima).
// Menadžment kompanije je od vas zatražio da radnik u prodavnici može da otvori pretraživač, i na stranici da mu se prikaže sledeće:
// 1.	Jedna forma u kojoj se nalazi input u koji može da se upiše neki broj, koji predstavlja ukupnu težinu u kilogramima koju prihvata kamion za prevoz. Pored inputa, nalazi se i dugme. Klikom na dugme potrebno je da odredite da li u kamion za prevoz može da stane ukupna težina svih proizvoda kojih više nema na stanju. Zapravo, potrebno je uraditi sledeće:
// a.	Odrediti koji proizvodi više nisu na stanju i koje treba poručiti. Pretpostavljamo da se naručuje po jedna količina svakog artikla koji nije na stanju.
// b.	Ako je težina svih proizvoda koje treba poručiti veća od kapaciteta kamiona, ispisati poruku “Not enought capacity in truck!!“.
// c. 	U suprotnom, ispisati ukupnu cenu svih artikala koje treba naručiti.
// d.	BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala.
// 2.	Jedna forma u kojoj se nalazi jedan tekstualni input (gde se unosi deo naziva proizvoda), kao i dva numerička inputa (gde se unose neke cene). Pored njih nalazi se i dugme. Klikom na dugme potrebno je uraditi sledeće:
// a.	Odrediti sve proizvode koji su na stanju.
// b.	Naći takve proizvode koji u nazivu sadrže reč koju je korisnik uneo.
// c. 	Kao i one čija je cena između dve vrednosti zadate u dva numerička inputa.
// d.	Korisniku prikazati u listi nazive tih artikala.
// e.	BONUS VARIJANTA: Ne ispisati samo nazive artikala, već ispis izvršiti u tabeli sa tri kolone: U prvoj koloni staviti naziv artikla, u drugoj stanje u magacinu, u trećoj cenu artikla.



// Kreirati fajl fruits.json koji sadrži niz podataka.
// Svaki od podatak ima name (naziv voća) i weight (količinu voća u kilogramima).


// Kreirati fajl vegetables.json koji sadrži niz podataka.
// Svaki od podatak ima name (naziv povrća) i weight (količinu povrća u kilogramima).

// U svim predstojećim zadacima uzeti u obzir da je moguće i da je došlo do greške prilikom poziva fajla. Grešku do koje je došlo ispisati u konzoli.

// Iz fajla fruits.json dohvatiti i u konzoli ispisati svo voće koje u svom nazivu sadrži reč “berries” (koristiti fatch)


// U fajlu fruits.json prebrojati i u konzoli ispisati koliko naziva voća ne sadrži u svom imenu reč “berries (koristiti fatch)


// Ispisati naslov treće veličine (h3) “Fruits”, zatim iza njega u tabeli ispisati sve nazive voća iz fruits.json fajla. Ispis vršiti tako da u svakom redu tabela ima po dve ćelije, gde je u prvoj ćeliji naziv voća, dok je u drugoj ćeiji količina tog voća. 
// Na primer:
// apple
// 40


// Potom ispisati naslov treće veličine (h3) “Vegetables” iza koga sledi tabela sa nazivima povrća iz vegetables.json fajla. Ispis za povrće vršiti po istom principu kao i ispis za voće.

// Nadograditi prethodni zadatak i nakon ispisane tabele voća u tabelu dodati još jedan red koji će ispisati ukupnu težinu svog voća u kilogramima. Zatim, ispod tabele povrća u poslednjem redu tabele ispisati ukupnu težinu povrća u kilogramima. Ove vrednosti ispisati podebljano.
