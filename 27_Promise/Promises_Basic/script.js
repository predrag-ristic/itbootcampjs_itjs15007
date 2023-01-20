let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        resolve("Sve je AOK"); // Ako je sve prosle OK onda je RESOLVE
        reject("Sve nije AOK"); // Ako nesto nije proslo dobro onda je REJECT
    });
    return obj; // Vraca objekat Promise
}

// Ako je Promise vratio resolve, realizuje se .then() grana
// Ako je Promise vratio reject, realizuje se .catch() grana
getSomething().then(a => {
    console.log(`Aktivirana je .then grana: ${a}.`);
}).catch(b => {
    console.log(`Aktivirana je .catch grana: ${b}.`);
});

