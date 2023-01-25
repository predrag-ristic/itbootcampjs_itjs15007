// Adding movies
let movies = db.collection("movies")
db.collection("movies")
    .doc("ACO")
    .set({
        name: "A Clockwork Orange",
        director: {
            name: "Stanley",
            surname: "Kubrick"
        },
        release_year: 1971,
        genres: ["Science Fiction", "Crime", "Mystery", "Teen"],
        rating: 88
    }, { merge: true })
    .then(function () {
        console.log("Movie successfully added!");
    })
    .catch(function (err) {
        console.error("Error adding movie: ", err);
    })

db.collection("movies")
    .doc("LOtR")
    .set({
        name: "The Lords of the Rings",
        director: {
            name: "Peter",
            surname: "Jackson"
        },
        release_year: 2001,
        genres: ["Fantasy Fiction", "Adventure"],
        rating: 91
    }, { merge: true })
    .then(function () {
        console.log("Movie successfully added!");
    })
    .catch(function (err) {
        console.error("Error adding movie: ", err);
    })

db.collection("movies")
    .doc("HP")
    .set({
        name: "Harislav Poteric",
        director: {
            name: "David",
            surname: "Yates"
        },
        genres: ["Fantasy", "Adventure"],
        rating: 80
    }, { merge: true })
    .then(function () {
        console.log("Movie successfully added!");
    })
    .catch(function (err) {
        console.error("Error adding movie: ", err);
    })

db.collection("movies")
    .doc("AVTR")
    .set({
        name: "Avatar",
        director: {
            name: "ime",
            surname: "przime"
        },
        release_year: 2009,
        genres: ["Action", "Adventure", "Fantasy", "Mystery", "Comedy"],
        rating: 82
    }, { merge: true })
    .then(function () {
        console.log("Movie successfully added!");
    })
    .catch(function (err) {
        console.error("Error adding movie: ", err);
    })

db.collection("movies")
    .doc("DUNE")
    .set({
        name: "Dina",
        director: {
            name: "Denis",
            surname: "Villeneuve"
        },
        release_year: 2021,
        genres: ["Action", "Adventure", "Fantasy", "Drama"],
        rating: 83
    }, { merge: true })
    .then(function () {
        console.log("Movie successfully added!");
    })
    .catch(function (err) {
        console.error("Error adding movie: ", err);
    })

db.collection("movies")
    .doc("SW")
    .set({
        name: "Star Wars",
        director: {
            name: "George",
            surname: "Lucas"
        },
        release_year: 1987,
        genres: ["Science Fiction", "Action", "Advanture", "Fantasy"],
        rating: 90
    }, { merge: true })
    .then(function () {
        console.log("Movie successfully added!");
    })
    .catch(function (err) {
        console.error("Error adding movie: ", err);
    })

// Changing
db.doc('movies/ACO')
    .update({
        rating: 8.8
    })
    .then(() => {
        console.log("Task successfully updated.");
        return db.doc('movies/AVTR')
            .update({
                rating: 8.2
            })
    })
    .then(() => {
        console.log("Task successfully updated.");
        return db.doc('movies/DUNE')
            .update({
                rating: 8.3
            })
    })
    .then(() => {
        console.log("Task successfully updated.");
        return db.doc('movies/HP')
            .update({
                rating: 8
            })
    })
    .then(() => {
        console.log("Task successfully updated.");
        return db.doc('movies/LOtR')
            .update({
                rating: 9.1
            })
    })
    .then(() => {
        console.log("Task successfully updated.");
        return db.doc('movies/SW')
            .update({
                rating: 9
            })
    })
    .catch((err) => {
        console.error("Error updating task: ", err);
    });

db.doc("movies/AVTR")
    .update({
        "director.name": "James",
        "director.surname": "Cameron",
    })
    .then(() => {
        return db.doc("movies/LOtR")
            .update({
                name: "Lord of the Rings"
            })
            .then(() => {
                return db.doc("movies/HP")
                    .update({
                        name: "Harry Potter"
                    })
                    .then(() => {
                        return db.doc("movies/DUNE")
                            .update({
                                name: "Dune"
                            })
                    })
            })
    })

// Deletion
db.doc("movies/ACO")
    .update({
        genres: firebase.firestore.FieldValue.arrayRemove("Teen")
    })
    .then(() => {
        return db.doc("movies/AVTR")
            .update({
                genres: firebase.firestore.FieldValue.arrayRemove("Comedy")
            })
    })

// Addition
db.doc("movies/LOtR")
    .update({
        genres: firebase.firestore.FieldValue.arrayUnion("Fantasy")
    })
    .then(() => {
        return db.doc("movies/HP")
            .update({
                release_year: 2001
            })
    })

// Collection Log
db.collection("movies")
    .get()
    .then(function (allMovies) {
        allMovies.forEach(function (doc) {
            console.log(doc.id, "=>", doc.data());
        });
    })
    .catch(function (err) {
        console.log("Error getting documents: ", err);
    });
