// import {GL, GI} from "./modules/list.js";
// import {generateTable, generateTableRow, generateItem as generateTableItem} from "./modules/table.js";


// let ul = GL(document.body);
// GI(ul, "images/slika_1.jpg")
// GI(ul, "images/slika_2.jpg")
// GI(ul, "images/slika_3.jpg")

// let table = generateTable(document.body)
// let tr = generateTableRow(table)
// generateTableItem(tr, "images/slika_1.jpg")
// generateTableItem(tr, "images/slika_2.jpg")
// generateTableItem(tr, "images/slika_3.jpg")

import * as List from "./modules/list.js"
import * as Table from "./modules/table.js"

let ul = List.GL(document.body);
// List.length = 2; - ne moze jer je ovo read-only svojstvo
for(let i = 1; i <= List.length; i++)
{
    List.GI(ul, `images/slika_${i}.jpg`);
}

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
for(let i = 1; i <= Table.length;  i++)
{
    Table.generateItem(tr, `images/slika_${i}.jpg`);
}