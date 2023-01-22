import generateImage from "./general.js";

function generateTable(parent)
{
    let table = document.createElement(`table`);
    table.style.border = `1px solid black`;
    parent.append(table);
    return table;
}

function generateTableRow(parent)
{
    let tr = document.createElement(`tr`);
    parent.append(tr);
    return tr;
}

function generateItem(parent, src)
{
    let td = document.createElement(`td`);
    let img = generateImage(src);
    td.append(img)
    parent.append(td);
}

const length = 3;

export{generateTable, generateTableRow, generateItem, length};