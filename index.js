const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
];

const affichageProduit = document.getElementById("table")
const rechercheProduit = document.getElementById("product_search");
const prixTotal = document.getElementById("price");
// Fonction supprimer un article
const supprimerProduit = () => {

}

const affichage = () => {
    const produitHTML = produits.map(produit =>
        `
            <tr>
                <td>${produit.nom}</td>
                <td>${produit.prix}€</td>
                <td><button onclick="supprimerProduit(${produit.id})">Supprimer</button></td>
            </tr>`


    )

affichageProduit.innerHTML = produitHTML;
};
affichage()

