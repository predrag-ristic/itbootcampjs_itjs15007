console.log("Callback Hell");

let getResponse = (resource, callback) => 
    {
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) 
        {
            callback(request.responseText, undefined)
        }
        else if (request.readyState == 4) 
        {
            callback(undefined, "Error")
        }
    });

    request.open("GET", resource);
    request.send();
}

// Ucitaj najpre prvi.json file
getResponse("../JSON/prvi.json", (data, err) =>
{
    if(data)
    {   
        // Ukoliko je sve OK sa prvi.json fajlom, ispisi njegove podatke i potom ucitaj drugi.json fajl
        console.log(data);
        getResponse("../JSON/drugi.json", (data, err) =>
        {
            if(data)
            {   
                // Ukoliko je sve OK sa drugi.json fajlom, ispisi njegove podatke i potom ucitaj treci.json fajl
                console.log(data);
                getResponse("../JSON/treci.json", (data, err) =>
                {
                    if(data)
                    {
                        console.log(data);
                    }
                    else
                    {
                        console.log(err); // Ispisuje gresku ukoliko treci.json fajl nije prosao
                    }
                })
            }
            else
            {
                console.log(err); // Ispisuje gresku ukoliko drugi.json fajl nije prosao
            }
        });
    }
    else
    {
        console.log(err); // Ispisuje gresku ukoliko prvi.json fajl nije prosao
    }
});

console.log("Kraj");