import generateImage from "./general.js";

let generateTable = parent => {
    let tabela = document.createElement('table');
    tabela.style.border = '2px solid red';
    parent.appendChild(tabela);
    return tabela;
}

let generateTableRow = parent => {
    let tr = document.createElement('tr');
    parent.appendChild(tr);
    return tr;
}

let generateItem = (parent, src) => {
    let td = document.createElement('td');
    parent.appendChild(td);
    td.appendChild(generateImage(src));
    return td;
}

export { generateItem, generateTableRow, generateTable };