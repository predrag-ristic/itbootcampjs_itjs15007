db.collection("tasks")
.where("priority", "==", true)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Prioritet");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});


let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1); // 1. januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1); // 1. januar naredne godine
// let datum3 = new Date(godina, 11, 31, 59, 59, 999)
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);
// let ts3 = firebase.firestore.Timestamp.fromDate(datum3);

db.collection("tasks")
.where("due_date", ">=", ts1)
.where("due_date", "<", ts2)
// .where("due_date", "<=", ts3)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Tekuca godina");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

// let ts = firebase.firestore.Timestamp.fromDate(datum);
db.collection("tasks")
.where("due_date", "<", datum)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Zavrseni taskovi");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

db.collection("tasks")
.where("start_date", ">", datum)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Tek treba da pocnu");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

