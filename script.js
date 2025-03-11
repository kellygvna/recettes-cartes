let recettes = [
    {
        nom: "Crêpes",
        auteur: "Marmiton",
        ustensiles: ["louche", "poêle", "saladier", "fouet"],
        temps: 10,
        nombre: 4,
        vegan: false,
        ingredients: [
            "50g de beurre fondu",
            "3 oeufs",
            "300g de farine",
            "3 cuillères à soupe de sucre",
            "60cl de lait",
            "2 cuillères à soupe d'huile"
        ],
        photo: "crepes.jpg"
    },
    {
        nom: "Gâteau au Chocolat",
        auteur: "Marmiton",
        ustensiles: ["moule", "saladier", "fouet", "four"],
        temps: 40,
        nombre: 6,
        vegan: false,
        ingredients: [
            "200g de chocolat noir",
            "100g de beurre",
            "100g de sucre",
            "3 oeufs",
            "50g de farine"
        ],
        photo: "gateau_chocolat.jpeg"
    },
    {
        nom: "Cookies",
        auteur: "Marmiton",
        ustensiles: ["couteau", "saladier", "fouet", "four"],
        temps: 25,
        nombre: 4,
        vegan: false,
        ingredients: [
            "1 cuillère à cafe de levure chimique",
            "100g de chocolat noir",
            "150g de farine",
            "1 oeuf",
            "85g de sucre",
            "85g de beurre"
        ],
        photo: "cookies.jpg"
    },
    {
        nom: "Tiramisu",
        auteur: "Marmiton",
        ustensiles: ["frigo", "saladier", "fouet"],
        temps: 15,
        nombre: 6,
        vegan: false,
        ingredients: [
            "45g de cacaco en poudre",
            "375g de mascarpone",
            "150g de sucre roux",
            "4.5 oeufs",
            "36 biscuits à la cuillère",
            "30cl de café"
        ],
        photo: "tiramisu.jpg"
    }
];

function creerCarte(recette, format) {
    let listeIngredients = recette.ingredients.map(ingr => `<li>${ingr}</li>`).join("");

    let nomAffiche = format === "miniature" ? recette.nom.substring(0, 15) + "..." : recette.nom;

    let contenu = `
        <img src="${recette.photo}" alt="${recette.nom}">
        <h1 class="nom">${nomAffiche}</h1>
        <div class="details">
            <p><strong>Auteur :</strong> ${recette.auteur}</p>
            <p><strong>Temps :</strong> ${recette.temps} min</p>
            <p><strong>Pour :</strong> ${recette.nombre} personnes</p>
            <p><strong>Vegan :</strong> ${recette.vegan ? "Oui" : "Non"}</p>
            <p><strong>Ingrédients :</strong></p>
            <ul class="ingredients">${listeIngredients}</ul>
        </div>
    `;

    let carte = document.createElement("div");
    carte.innerHTML = contenu;
    carte.classList.add("carte", format);
    return carte;
}

function afficherCartes(format) {
    let conteneur = document.getElementById("recette");
    conteneur.innerHTML = "";

    recettes.forEach(recette => {
        let carte = creerCarte(recette, format);
        conteneur.appendChild(carte);
    });

    conteneur.classList.remove("mosaique", "carousel");
    conteneur.classList.add(format === "miniature" ? "mosaique" : "carousel");
}

document.getElementById("changer-vue").addEventListener("click", () => {
    let conteneur = document.getElementById("recette");
    if (conteneur.classList.contains("mosaique")) {
        afficherCartes("grand-format");
    } else {
        afficherCartes("miniature");
    }
});

window.onload = () => afficherCartes("miniature");