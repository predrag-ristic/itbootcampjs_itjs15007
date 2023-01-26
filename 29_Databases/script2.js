// db.collection('customers')
// .doc('cust001')
// .delete()
// .then(() => {
//     console.log("Dokument uspesno izbrisan");
// })
// .catch((err) => {
//     console.log("Greska kod brisanja dokumenta: " + err);
// });

// Dodavanje dokumenara u kolekciju preko metode add()
// db.collection("customers")
// .add({
//     name: "Mika Mikic",
//     age: 25,
//     salary: 800,
//     addresses: ["Beograd","Novi Sad"]
// })
// .then(() => {
//     console.log("Dokument uspesno dodat");
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

// 1. Moze se dohvatiti jedan dokument
// 2. Moze se dohvatiti vise dokumenata

// 1.
// db.collection("users")
// .doc("mradojkovic")
// .get()
// .then((doc) => {
//     if(doc.exists) {
//         let data = doc.data();
//         console.log("Uspesno sknut dokument: " + doc.id);
//         console.log(data);
//     }
//     else {
//         console.log("Ne postoji dati dokument.");
//     }
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

// 2.
// db.collection("customers")
// .get()
// .then((snapshot) => {
//     snapshot.forEach((doc) => {
//         console.log("Uspesno skinuta kolekcija dokumenata: " + doc.id);
//         console.log(doc.data());
//     });
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

// GET metoda kod kolekcije:
// 1. Prikazivanje dokumenata u odredjenom redosledu (orderBy)
// 2. Prikazivanje odredjenog broja dokumenata (limit)
// 3. Prikazivanje dokumenata koji zadovoljavaju odredjene kriterijume - filtriranje (where)

// 1. orderBy metoda
// db.collection("customers")
// .orderBy("salary", "desc")
// .orderBy("name", "asc")
// .get()
// .then((snapshot) => {
//     snapshot.forEach((doc) => {
//         console.log("Uspesno skinuta kolekcija dokumenata: " + doc.id);
//         console.log(doc.data());
//     });
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

// 2. limit metoda
// db.collection("customers")
// .limit(3)
// .orderBy("salary", "desc")
// .orderBy("name", "asc")
// .get()
// .then((snapshot) => {
//     snapshot.forEach((doc) => {
//         console.log("Uspesno skinuta kolekcija dokumenata: " + doc.id);
//         console.log(doc.data());
//     });
// })
// .catch((err) => {
//     console.log("Error: " + err);
// });

// 3. where metoda
db.collection("customers")
// .where("salary",">",500)    // Svi oni cija je plata veca od 500
// .where("salary","<=",600)      // Svi oni cija je plata manja ili jednaka 600
// .where("name","in", ["Laza", "Mika"])
.where("name",">=","M")
.where("name","<","N")
// .orderBy("name")
// .orderBy("age")
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Uspesno skinuta kolekcija dokumenata: " + doc.id);
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});