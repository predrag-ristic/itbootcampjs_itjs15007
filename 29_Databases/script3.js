db.collection("customers")
.orderBy("name")
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("0. Sortirani klijenti");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

db.collection("customers")
.where("addresses","array-contains","Nis")
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("1. Zivi u Nisu");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

db.collection("customers")
.where("salary",">=",500)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("2. Plata veca ili jednaka od 500");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

db.collection("customers")
.where("salary",">",300)
.where("salary","<",800)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("3. Plata izmedju 300 i 800");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

db.collection("customers")
.where("salary","<",900)
.where("age","==",30)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("4. Plata ispod 900 i 30 godina");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

db.collection("customers")
.where("addresses","array-contains-any",["Nis","Beograd"])
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("5. Adresa u Nisu ili Beogradu");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

db.collection("customers")
.where("age","in", [22, 25, 28])
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("6. Ima 22, 25 ili 28 godina");
        console.log(doc.data());
    });
})
.catch((err) => {
    console.log("Error: " + err);
});

