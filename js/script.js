let tab_img = ["img/cat1.jpg", "img/cat2.jpg", "img/cat3.jpg", "img/cat4.jpg", "img/cat5.jpg", "img/dog1.jpg", "img/dog2.jpg", "img/dog3.jpg", "img/dog4.jpg", "img/dog5.jpg"];


function creer_carte(chemin_image) {
    let div_row = document.createElement('div');
    div_row.className = "row apparition";

    let div_col = document.createElement('div');
    div_col.className = "column col-100";

    let div_card = document.createElement('div');
    div_card.className = "card";

    let img_avatar = document.createElement('img');
    img_avatar.className = "avatar";
    img_avatar.src = getIMG_animal(chemin_image);
    img_avatar.alt = getIMG_type(chemin_image);
    img_avatar.id = "animalImage";

    let div_container = document.createElement('div');
    div_container.className = "container";

    let h4 = document.createElement('h4');
    h4.textContent = getIMG_type() + "mignon";

    let bouton = document.createElement('button');
    bouton.className = "button primary";
    bouton.textContent = "Changer";

    div_container.appendChild(bouton);
    div_container.appendChild(h4);

    div_card.appendChild(div_container);
    div_card.appendChild(img_avatar);

    div_col.appendChild(div_card);

    div_row.appendChild(div_col);

    return div_row;
}

function getIMG_animal(chemin_image) {
    
}