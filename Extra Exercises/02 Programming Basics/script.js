let student1 = {
    ime: "Dragan",
    prezime: "Petrovic",
    godStudija: 3,
    ocene: [8, 9, 8, 9],
};
let student2 = {
    ime: "Milan",
    prezime: "Markovic",
    godStudija: 4,
    ocene: [10, 10, 9],
};
let student3 = {
    ime: "Milos",
    prezime: "Zarkovic",
    godStudija: 4,
    ocene: [10, 10, 10, 9],
};
let student4 = {
    ime: "Mosa",
    prezime: "Pijade",
    godStudija: 4,
    ocene: [10, 10, 10, 9],
};

let studenti = [student1, student2, student3, student4];



let prosecnaOcena = ocene =>
{
    let sum = 0;
    ocene.forEach(o =>
        {
            sum += o;
        });
    return sum / ocene.length;
};

let najStudent = studenti =>
{
    let naj = studenti[0]; // Pretpostavka da je ovo najbolji student.
    studenti.forEach(student =>
        {
            if(prosecnaOcena(naj.ocene) < prosecnaOcena(student.ocene))
            {
                naj = student;
            }
        });
    return `${naj.ime} ${naj.prezime}`;
}
console.log(najStudent(studenti));




// Zbir ocena funkcija

let najStudent1 = studenti =>
{
    let ime_najboljeg = ``;
    let prezime_najboljeg = ``;
    let prosek_najboljeg = -1;

    studenti.forEach(student =>
        {
            let zbir = 0;
            student.ocene.forEach(ocena =>
                {
                    zbir += ocena;
                });
            let prosek = zbir / student.ocene.length

            // > vraca prvog studenta sa najvecim prosekom
            // >= vcara poslednjeg studenta sa najvecim prosekom
            if(prosek >= prosek_najboljeg)
            {
                prosek_najboljeg = prosek;
                ime_najboljeg = student.ime;
                prezime_najboljeg = student.prezime;
            }
        });
    return `${ime_najboljeg} ${prezime_najboljeg}`;
}
console.log(najStudent1(studenti));


let sviNajStudenti = studenti =>
{
    let prosek_najboljeg = -1;

    studenti.forEach(student =>
        {
            let zbir = 0;

            // 1. Izdracunamo koji je najveci prosek
            student.ocene.forEach(ocena =>
                {
                    zbir += ocena;
                });
            let prosek = zbir / student.ocene.length;

            if(prosek > prosek_najboljeg)
            {
                prosek_najboljeg = prosek;
            }
        });

    // 2. Trazimo sve studente koji imaju prosek koji smo dobili kao najveci u 1

    studenti.forEach(student =>
        {
            if(prosek_najboljeg == prosecnaOcena(student.ocene))
            {
                console.log(`${student.ime} ${student.prezime}`);
            }
        });
}
sviNajStudenti(studenti);