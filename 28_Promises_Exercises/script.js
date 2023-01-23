let form = document.getElementById("order");
let truckCap = document.getElementById("cap");
let result = document.getElementById("result");

function getItems(resource, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.responseText);
            resolve(data)
        }
        else if (request.readyState == 4) {
            reject("Error");
        };
    });
    request.open("GET", resource);
    request.send();
};

function submitForm1(e) {
    e.preventDefault();
    let ids = [];
    getItems("./JSON/stock.json", (data) => { // 1. Iz fajla stock.json dohvati sve artikle koji nisu na stanju
        data.forEach(artikal => {
            if (artikal.stock == 0) {
                ids.push(artikal.id);
            };
        });
        getItems("./JSON/weights.json", (data) => { // 2. Iz fajla weights.json dohvati njihovu tezinu
            let totalWeight = 0;
            data.forEach(artikal => {
                if (ids.includes(artikal.id)) {
                    totalWeight += artikal.weight;
                };
            });
            if (totalWeight > truckCap.value) {
                result.innerHTML = "Kamion nema dovoljni kapacitet";
            }
            else {
                getItems("./JSON/prices.json", (data) => { // 3. Ako tezina nije veca od kapaciteta kamiona, iz fajla prices.json dohvati njihovu cenu
                    let totalPrice = 0;
                    data.forEach(artikal => {
                        if (ids.includes(artikal.id)) {
                            totalPrice += artikal.price;
                        };
                    });
                    result.innerHTML = `Ukupna cena prozivoda koji treba da se naruce je ${totalPrice}`
                }, (message) => {
                    result.innerHTML = message;
                });
            };
        }, (message) => {
            result.innerHTML = message;
        });
    }, (message) => {
        result.innerHTML = message;
    });
};

/*
PRVI PRISTUP: Da se funkcije getItems() zovu jedna ispod druge
OVO NIJE DOBRO!!!
jer svaki poziv getItems() je asinhroni poziv sto znaci da se oni ne izvrsavaju tim redom

DRUGI PRISTUP: Redosled asinhronih poziva se odvija preko callback funkcija
JESTE TACAN, ali jako nepraktican pristup (callback hell)

TRECI PRISTUP: Pozivi lancaju preko Promise
TACAN I PRAKTICAN
*/

function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if (request.readyState == 4 && request.status == 200) {
                let data = JSON.parse(request.responseText);
                resolve(data)
            }
            else if (request.readyState == 4) {
                reject("Error");
            };
        });
        request.open("GET", resource);
        request.send();
    });
};
function submitForm2(e) {
    e.preventDefault();
    let ids = [];
    getItemsReturnPromise("./JSON/stock.json")
        .then((data) => {
            data.forEach(artikal => {
                if (artikal.stock == 0) {
                    ids.push(artikal.id);
                };
            });
            return getItemsReturnPromise("./JSON/weights.json");
        })
        .then((data) => {
            let totalWeight = 0;
            data.forEach(artikal => {
                if (ids.includes(artikal.id)) {
                    totalWeight += artikal.weight;
                };
            });
            if (totalWeight > truckCap.value) {
                result.innerHTML = "Kamion nema dovoljni kapacitet";
            }
            else {
                return getItemsReturnPromise("./JSON/prices.json");
            };
        })
        .then((data) => {
            if (data !== undefined) {
                let totalPrice = 0;
                data.forEach(artikal => {
                    if (ids.includes(artikal.id)) {
                        totalPrice += artikal.price;
                    };
                });
                result.innerHTML = `Ukupna cena prozivoda koji treba da se naruce je ${totalPrice}`
            };
        })
        .catch((message) => {
            result.innerHTML = message;
        });
};

// form.addEventListener("submit", submitForm1);
form.addEventListener("submit", submitForm2);