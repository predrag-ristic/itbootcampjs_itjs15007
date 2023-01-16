let listItems = document.getElementsByTagName(`li`)

for(let i = 0; i < listItems.length; i++)
{
    // Nacin 1
    listItems[i].addEventListener(`click`, () =>
    {
        if(listItems[i].style.textDecoration == `line-through`)
        {
            listItems[i].style.textDecoration = "none"
        }
        else
        {
            listItems[i].style.textDecoration = `line-through`
        }
    });

    // Nacin 2
    // listItems[i].addEventListener(`toggle`, () =>
    // {
    //     listItems[i].classList.toggle("crossout");
    // });
};

