export default function ProductDetails({params} : { //fonction react prend un objet en argument avec une propriété params
    params : {                                      //cette propriété est elle-même un objet avec deux propriétés productsId et reviewsId
        productsId : string                         //celles-ci sont utilisés pour personnaliser le contenu affiché en fonction du produit / avis séléctionné
        reviewsId : string
    }
}) {
    return <h1>Avis {params.reviewsId} à propos du produit {params.productsId}</h1>;
}