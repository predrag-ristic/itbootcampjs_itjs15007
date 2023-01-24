console.log(db); // db - objekat baze podataka

let users = db.collection('users');
console.log(users);

let user1 = users.doc('pristic');
console.log(user1);

let user2 = db.doc('users/bradojkovic');
console.log(user2);

/*
Kada "pikiramo" dokument preko ovih komandi,
mozemo da izvrsimo jednu od osnovne cetiri operacije:
    CRUD (Create, Read, Update, Delete)
    1. Create:  doc.set(...)
    2. Read:    doc.get(...)
    3. Update:  doc.update(...)
    4. Delete   doc.delete(...)
Sve cetiri metode kao rezultat vracaju Promise
=> Mozemo da lancamo .then() i .catch() na bilo koju od ove cetiri metode
*/

db.collection('customers')
    .doc('cust001')
    .set({
        name: "Laza Lazic",
        age: 35,
        addresses: ["Beograd", "Cacak"],
        salary: 400
    })
    .then(() => {
        console.log("Uspesno dodat korisnik");
    })
    .catch((err) => {
        console.log("Greska: " + err);
    });

db.collection('customers')
    .doc('cust001')
    .set({
        height: 185
    }, {
        merge: true
    })
    .then(() => {
        console.log("Uspesno dodat korisnik");
    })
    .catch((err) => {
        console.log("Greska: " + err);
    });

console.log(1);
console.log(2);

let datum1 = new Date("2021-03-15 19:00:00");
let datum2 = new Date("2021-03-15 21:00:00");

db.collection("tasks")
    .doc("fudbal")
    .set({
        title: "Fudbal",
        start_date: firebase.firestore.Timestamp.fromDate(datum1),
        due_date: firebase.firestore.Timestamp.fromDate(datum2),
        priority: false,
        description: "Fudbalica sa drustvom"
    }, { merge: true })
    .then(function () {
        console.log("Task successfully added!");
    })
    .catch(function (error) {
        console.error("Error adding task: ", error);
    });

let datum3 = new Date("2023-01-26 20:30:00");
let datum4 = new Date("2023-01-26 22:00:00");
db.collection("tasks")
    .doc("rukomet")
    .set({
        title: "Rukomet",
        start_date: firebase.firestore.Timestamp.fromDate(datum3),
        due_date: firebase.firestore.Timestamp.fromDate(datum4),
        priority: true,
        description: "Polufinalna utakcima Svetskog Prvenstva u Rukometu"
    }, { merge: true })
    .then(function () {
        console.log("Task successfully added!");
    })
    .catch(function (err) {
        console.error("Error adding task: ", err);
    });

db.collection("users")
    .doc("mradojkovic")
    .set({
        age: 40,
        name: "Mladen",
        surname: "Radojkovic",
        username: "mr"
    }, { merge: true })
    .then(function () {
        console.log("Task successfully added!");
    })
    .catch(function (err) {
        console.error("Error adding task: ", err);
    })

// Movies collection
db.collection("movies")
    .doc("ACO")
    .set({
        name: "A Clockwork Orange",
        director: {
            name: "Stanley",
            surname: "Kubrick"
        },
        release_year: 1971,
        ganres: ["Science Fiction", "Drama", "Crime", "Mystery"],
        rating: 88
    }, { merge: true })
    .then(function () {
        console.log("Movie successfully added!");
    })
    .catch(function (err) {
        console.error("Error adding movie: ", err);
    })

// Update metoda
db.collection("users")
    .doc("mradojkovic")
    .update({
        age: 33,
        adrese: ["Nis", "Beograd"]
    })
    .then(() => {
        console.log("Korisnik uspesno promenjen.")
        return db.collection("users")
            .doc("mradojkovic")
            .update({
                adrese: firebase.firestore.FieldValue.arrayUnion("Leskovac")
            })
    })
    .then(() => {
        console.log("Korisnik uspesno promenjen.")
        return db.collection("users")
            .doc("mradojkovic")
            .update({
                adrese: firebase.firestore.FieldValue.arrayUnion("Cacak")
            })
    })
    .catch((err) => {
        console.log(err);
    });

