let input = document.getElementById(`obaveza`);
let ul = document.querySelector(`ul`);
let radio = document.getElementById(`radio`)

// input.addEventListener(`keyup`, e =>
// {
//     if(e.key == 'Enter')
//     {
//         let value = input.value;
//         if(value != '')
//         {
//             let li = document.createElement(`li`);
//             li.textContent = value;
//             input.value = ''
//             if(radio.checked)
//             {
//                 ul.prepend(li);
//             }
//             else
//             {
//                 ul.appendChild(li);
//             };
//         };
//     };
// });


input.addEventListener("keyup", e =>
{
    e.preventDefault();
    if(e.key == "Enter")
    {
        let value = input.value;
        if(value != '')
        {
            let toDoList = getTodos();
            toDoList.push(value);
            localStorage.setItem("todos", JSON.stringify(toDoList));
            input.value = "";
            displayTodos();
        }
    }
});

function getTodos()
{
    let toDoList = localStorage.getItem("todos");
    if (toDoList === null)
    {
        return [];
    }
    else
    {
        return JSON.parse(toDoList);
    }
}

function displayTodos()
{
    let toDoList = getTodos();
    let write = "";
    for (let i = 0; i < toDoList.length; i++) 
    {
        write += "<li>" + toDoList[i] + "</li>";
    }
    ul.innerHTML = write;
}
displayTodos();


ul.addEventListener('click', e =>
{
    if(e.target.tagName == 'LI')
    {
        e.target.remove()
        let toDoList = JSON.parse(localStorage.getItem('todos'));
        for(let i = 0; toDoList.length; i++)
        {
            let index = toDoList.indexOf(e.target.innerHTML)
            toDoList.splice(index, 1);
            break;
        };
        localStorage.setItem('todos', JSON.stringify(toDoList))
    };
});