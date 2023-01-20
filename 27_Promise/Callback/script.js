console.log("Callback");

let getTodos = (resource, callback) => 
    {
    // 1. Kreiranje XML objekta
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) 
        {
            // console.log(request.responseText); // Sve OK!
            callback(request.responseText, undefined)
        }
        else if (request.readyState == 4) 
        {
            // console.log("Error"); // Nesto nije OK
            callback(undefined, "Error")
        }
    });

    // 2. Otvaranje kreiranog zahteva
    request.open("GET", resource);

    // 3. Slanje zahteva
    request.send();
}

getTodos("../JSON/todos.json", (data, err) =>
{
    // console.log(data, err);
    if(data)
    {
        console.log(data); // Ispisuje podatke sa kojima moze dalje da se raspolaze
    }
    else
    {
        console.log(err); // Ispisuje gresku
    }
});

console.log("Kraj");

