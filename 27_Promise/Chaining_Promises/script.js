console.log("Callback Hell");

let getResponse = resource => 
    {
    let request = new XMLHttpRequest();
    request.open("GET", resource);
    request.send();

    return new Promise((resolve, reject) =>
    {
        request.addEventListener("readystatechange", () => {
            if (request.readyState == 4 && request.status == 200) 
            {
                resolve(request.responseText) // Sve je OK i koristimo resolve i prosledjujemo podatke iz json fajla
            }
            else if (request.readyState == 4)
            {
                reject("Error") // Sve nije OK i koristimo reject i saljemo tekst greske
            }
        });
    });
}

getResponse("../JSON/prvi.json").then(sadrzajPrvog =>
    {
        console.log("prvi.json resolved", sadrzajPrvog);
        return getResponse("../JSON/drugi.json"); // Vraca Promise, ukoliko je resolved, na njega se odnosi naredni .then()
    }).then(sadrzajDrugog =>
        {
            console.log("drugi.json resolved", sadrzajDrugog);
            return getResponse("../JSON/treci.json"); // Vraca Promise, ukoliko je resolved, na njega se odnosi naredni .then()
        }).then(sadrzajTreceg =>
            {
                console.log("treci.json resolved", sadrzajTreceg);
            })
    .catch(greska =>
        {
            console.log("Promise reject", greska);
        });

console.log("Kraj");