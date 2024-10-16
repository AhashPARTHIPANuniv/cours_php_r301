const tab_fic_animaux = ["img/cat2.jpg", "img/cat1.jpg", "img/cat3.jpg", "img/cat4.jpg", "img/cat5.jpg", "img/dog1.jpg", "img/dog2.jpg", "img/dog3.jpg", "img/dog4.jpg", "img/dog5.jpg"]

function creer_Cartes(chemin_image) {
    //var bouton = document.querySelector('button');
    var TypeAnimal = getTypeAnimal(chemin_image);
    var bouton = document.createElement('button');
    bouton.textContent = "Changer";
    /* button */
    bouton.className = "button primary";
    

    /* div row */
    const div_row = document.createElement('div');
    div_row.className = 'row apparition';

    /* div column */
    const div_col = document.createElement('div');
    div_col.className = "column col-100";

    /* div card */
    const carte = document.createElement('div');
    carte.className = 'card';

    /* img */
    const img = document.createElement('img');
    img.className = 'avatar';
    img.src = chemin_image;
    img.alt = TypeAnimal;
    img.id = "animalImage";

    /* div */
    const div_container = document.createElement('div');
    div_container.className = 'container';

    /* h4 */
    const titre = document.createElement('h4');
    titre.textContent = TypeAnimal + " mignon";

    
    
    div_container.appendChild(bouton);
    div_container.appendChild(titre);

    carte.appendChild(img);
    carte.appendChild(div_container);
    

    div_col.appendChild(carte);

    div_row.appendChild(div_col);

    bouton.addEventListener("click", () => {
        carte.classList.remove("apparition");
        carte.classList.add("disparition");
        asyncCall(800);
    })

    return div_row;
}

function getTypeAnimal(chemin_image){
    var TypeAnimal = ""

    if(chemin_image.includes("cat")){
        TypeAnimal = "Chat";
    }
    else {
        TypeAnimal = "Chien";
    }

    return TypeAnimal;
}


function getRandomName() {
    const random_name = Math.floor(Math.random() * tab_fic_animaux.length);
    return (tab_fic_animaux[random_name].toString());
}

function addToTheDOM(carte) {
    const view = document.getElementById("viewpanel");
    view.appendChild(carte)
}

function afficherRandomAnimal() {
    const random_image = getRandomName(); /* img/cat4.jpg */
    const carte = creer_Cartes(random_image);
    addToTheDOM(carte);
}

function waitMilliseconds(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {}, ms);
        resolve('fini');
    })
}

async function asyncCall(ms) {
    var x = await waitMilliseconds(ms);
    view = document.getElementById("viewpanel");
    view.innerHTML = "";
    afficherRandomAnimal();
}



afficherRandomAnimal();