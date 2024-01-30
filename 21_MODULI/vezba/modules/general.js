let generateImage = src => {
    let slika = document.createElement('img');
    slika.src = src;
    slika.style.width = '400px';
    return slika;
}

export default generateImage;   //kad exportujemo jednu stavku moze sa default