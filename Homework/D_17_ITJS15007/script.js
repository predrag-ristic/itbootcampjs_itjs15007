
// Uspostaviti konekciju ka fajlu sportisti.json.
// Ispisati prosečnu visinu svih sportista.
// Ispisati ime i prezime sportiste sa najmanje transfera (bilo kog ako ima više takvih sportista).
// Ispisati imena i prezimena svih sportista koji su igrali za „Lakers“-e.

let getResponse = resource => 
    {
    let request = new XMLHttpRequest();
    request.open("GET", resource);
    request.send();

    return new Promise((resolved, rejected) =>
    {
        request.addEventListener("readystatechange", () => {
            if (request.readyState == 4 && request.status == 200) 
            {
                resolved(request.responseText)
            }
            else if (request.readyState == 4) 
            {
                rejected("Error")
            }
        });
    })
}

getResponse("./JSON/athletes.json").then(athletes =>
    {
        console.log(athletes);
    }).catch(err =>
        {
            console.log(err);
        });