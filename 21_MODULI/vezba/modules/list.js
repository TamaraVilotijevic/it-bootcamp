import generateImage from "./general.js";

let generateList = parent => {
    let lista = document.createElement('ul');
    lista.style.listStyle = 'none';
    parent.appendChild(lista);
    return lista;
}

let generateItem = (parent, src) => {
    let liItem = document.createElement('li');
    liItem.appendChild(generateImage(src));
    parent.appendChild(liItem);
    return liItem;
}

export { generateList, generateItem };