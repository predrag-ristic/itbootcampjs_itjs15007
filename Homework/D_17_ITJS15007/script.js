let getResponse = resource => {
    let request = new XMLHttpRequest();
    request.open("GET", resource);
    request.send();

    return new Promise((resolved, rejected) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState == 4 && request.status == 200) {
                let data = JSON.parse(request.responseText);
                resolved(data)
            }
            else if (request.readyState == 4) {
                rejected("Error")
            }
        });
    });
};

// All players
getResponse("./JSON/athletes.json")
    .then(athletes => {
        console.log(athletes);
    })
    .catch(err => {
        console.log(err);
    });

// Average height
getResponse("./JSON/athletes.json")
    .then(athletes => {
        let sum = 0;
        athletes.forEach(a => {
            sum += a.height
        });
        console.log(`Average height for Top 20 NBA players is ${sum / athletes.length}cm.`);
    })
    .catch(err => {
        console.log(err);
    });

// Player with the least number of transfers
getResponse("./JSON/athletes.json")
    .then(athletes => {
        let min = athletes[0].teams.length
        for (let i = 0; i < athletes.length; i++) {
            if (athletes[i].teams.length < min) {
                min = athletes[i].teams.length
                console.log(`${athletes[i].name} is one of the players with the least number of transfers.`);
            };
        };
    })
    .catch(err => {
        console.log(err);
    });

// Players who played for Los Angeles Lakers
getResponse("./JSON/athletes.json")
    .then(athletes => {
        athletes.forEach(a => {
            let teams = a.teams
            teams.forEach(t => {
                if (t.includes("Lakers")) {
                    console.log(`${a.name} played for Los Angeles Lakers.`);
                };
            });
        });
    })
    .catch(err => {
        console.log(err);
    });