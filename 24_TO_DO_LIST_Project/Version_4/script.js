let ul = document.querySelector(`ul`);
let input = document.getElementById(`obaveza`);
let radio = document.getElementById(`radio`)

let arrTasks = [];

if (localStorage.getItem("obaveza") == null) {
    // Ne postoji takav key u memoriji i treba ga kreirati
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
}
else {
    // Postoji takav key u memoriji
    arrTasks = JSON.parse(localStorage.getItem("tasks"));
    arrTasks.forEach(task => {
        let li = document.createElement(`li`);
        li.textContent += task;
        ul.appendChild(li);
    });
};

input.addEventListener(`keyup`, e => {
    if (e.key == 'Enter') {
        let value = input.value;
        if (value != '') {
            let li = document.createElement(`li`);
            li.textContent = value;
            if (radio.checked) {
                ul.prepend(li);
                arrTasks.unshift(value); // Dodaje na pocetak niza
            }
            else {
                ul.appendChild(li);
                arrTasks.push(value); // Dodaj na kraj niza
            };
            input.value = '';
            localStorage.setItem("tasks", JSON.stringify(arrTasks));
        };
    };
});

ul.addEventListener('click', e => {
    if (e.target.tagName == 'LI') {
        e.target.remove();
        let index = arrTasks.indexOf(e.target.textContent);
        arrTasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    };
});

