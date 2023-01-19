let input = document.getElementById(`obaveza`);
let ul = document.querySelector(`ul`);
let radio = document.getElementById(`prepend`);


input.addEventListener("keyup", e =>
{
    e.preventDefault();
    if(e.key == "Enter")
    {
        let value = input.value;
        if(value != '')
        {
            let toDoList = getTodos();
            if(radio.checked)
            {
                toDoList.unshift(value);
            }
            else
            {
                toDoList.push(value);
            }
            localStorage.setItem("todos", JSON.stringify(toDoList));
            input.value = '';
            displayTodos();
        };
    };
});
console.log(radio.checked);


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
    };
};


function displayTodos()
{
    let toDoList = getTodos();
    let write = "";
    for (let i = 0; i < toDoList.length; i++) 
    {
        write += "<li>" + toDoList[i] + "</li>";
    }
    ul.innerHTML = write;
};
displayTodos();


ul.addEventListener("click", e =>
{
    if(e.target.tagName == 'LI')
    {
        e.target.remove()
        let toDoList = getTodos();
        for(let i = 0; toDoList.length; i++)
        {
            let index = toDoList.indexOf(e.target.innerHTML)
            toDoList.splice(index, 1);
            break;
        };
        localStorage.setItem('todos', JSON.stringify(toDoList))
    };
});