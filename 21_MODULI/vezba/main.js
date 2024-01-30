// import { generateList, generateItem as generateListItem} from "./modules/list.js";
// import { generateTable, generateTableRow, generateItem as generateTableItem } from "./modules/table.js";

// let ul = generateList(document.body);
// generateListItem(ul, 'images/photo1.jpg');
// generateListItem(ul, 'images/photo2.jpg');
// generateListItem(ul, 'images/photo3.jpg');

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr, 'images/photo1.jpg');
// generateTableItem(tr, 'images/photo2.jpg');
// generateTableItem(tr, 'images/photo3.jpg');

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

let ul = List.generateList(document.body);
List.generateItem(ul, 'images/photo1.jpg');
List.generateItem(ul, 'images/photo2.jpg');
List.generateItem(ul, 'images/photo3.jpg');

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, 'images/photo1.jpg');
Table.generateItem(tr, 'images/photo2.jpg');
Table.generateItem(tr, 'images/photo3.jpg');