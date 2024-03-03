export default function ProductDetails({params} : {
    params : {
        productsId : string
    }
}) {
    return <h1>Détails à propos du produit {params.productsId}</h1>;
}