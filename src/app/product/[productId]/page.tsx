import Link from "next/link" // Importe le composant de lien de la bibliothèque Next.js pour la navigation entre les pages
import { Label } from "@/components/ui/label" // Importe le composant Label depuis le dossier components/ui dans src
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel"


export default function Component({ params }: { params: any }) { //Utilise le référencement dynamique : selon l'URL spécifié, (/product/1 par exemple) donne la page produit lié

    // Liste des produits avec description
    const productData = [{
        id: 1,
        name: "Borne EV301",
        description: "Borne de charge domestique pratique et rapide pour véhicule électrique. " +
            "Conçue pour une installation facile et un entretien minimal, la station de charge est compacte mais puissante, " +
            "offrant une capacité de 32A et une charge jusqu'à 4 fois plus rapide qu'avec un cordon EV standard." ,
        price: "5 550,99€",
        priceRev: "2 330,99€",
        review: "4 / 5 (556 Reviews)",


    }, {
        id: 2,
        name: "Product 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Sed gravida ultricies velit, quis facilisis eros facilisis eget. Donec ac nibh a nisi interdum iaculis. " +
            "Nullam aliquam, turpis eget accumsan dictum, risus ex finibus ipsum, at ultrices mi orci at eros.",
        price: "0€",
        priceRev: "0€",
        review: "0 / 5 (0 Review)",

    }];

    // Recherche un produit spécifique dans la liste productData en fonction de son identifiant et renvoi en fonction un bool
    const selectedProduct = productData.find((product) => product.id === parseInt(params.productId));


    // Si le produit est référencé, alors on affiche
    if (selectedProduct) {
        return (

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex flex-col w-full lg:w-1/2">

                        <div className="flex items-center gap-2 text-sm">
                            {/* Lien vers la page d'accueil */}
                            <Link className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/">
                                Home
                            </Link>

                            {/* Icône de flèche vers la droite (voir fonction plus bas) pour séparer les liens */}
                            <ChevronRightIcon className="h-3 w-3 fill-current-foreground-50 text-gray-400"/>

                            <Link
                                className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                href="/product">
                                Products
                            </Link>

                            <ChevronRightIcon className="h-3 w-3 fill-current-foreground-50 text-gray-400"/>

                            {/* Affiche le nom du produit sélectionné */}
                            <span className="font-medium">{selectedProduct.name}</span>
                        </div>

                        {/* Affiche le nom du produit sélectionné : c'est le titre de la page */}
                        <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-gray-900">{selectedProduct.name}</h1>
                        {/* Paragraphe affichant le prix initial du produit sélectionné*/}
                        <p className="mt-7 text-sm text-gray-400 line-through">{selectedProduct.price}</p>
                        {/* Paragraphe affichant le prix spécial du produit sélectionné*/}
                        <p className="text-3xl font-extrabold text-gray-900">{selectedProduct.priceRev}</p>

                        <div className="flex items-center mt-3">
                            {/* Affichage des cinq icônes d'étoile (voir fonction plus bas) pour représenter une notation */}
                            <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400"/>
                            <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400"/>
                            <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400"/>
                            <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400"/>
                            <StarIcon className="w-5 h-5 text-yellow-400"/>

                            {/* Paragraphe affichant la note du produit sélectionné*/}
                            <p className="ml-2 text-sm text-gray-500">{selectedProduct.review}</p>
                        </div>

                        {/* Paragraphe affichant quel type d'utilisateur est connecté et rappelant si il y a une réduction*/}
                        <p className="mt-3 text-sm text-gray-600">
                            Connecté en tant que <span className="font-medium text-gray-900">Revendeur</span> -
                            Réduction prix appliquée
                        </p>
                        {/* Paragraphe affichant la description du produit sélectionné*/}
                        <p className="mt-4 text-sm text-gray-600">
                            {selectedProduct.description}
                        </p>

                        {/* Formulaire pour la sélection de la couleur et le nombre d'article */}
                        <form className="mt-6 grid gap-4 md:gap-8">

                            <div className="grid gap-2">
                                {/* Libellé du champ de couleur */}
                                <Label className="text-base" htmlFor="color">
                                    Color
                                </Label>
                                {/* Groupe de boutons pour les options de couleur */}
                                <RadioGroup className="flex items-center gap-2" defaultValue="black" id="color">
                                    <Label className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800" htmlFor="color-black">
                                        <RadioGroupItem id="color-black" value="black"/>
                                        Black
                                    </Label>
                                    <Label className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800" htmlFor="color-white">
                                        <RadioGroupItem id="color-white" value="white"/>
                                        White
                                    </Label>
                                    <Label className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800" htmlFor="color-blue">
                                        <RadioGroupItem id="color-blue" value="violet"/>
                                        Violet
                                    </Label>
                                </RadioGroup>
                            </div>

                            <div className="grid gap-2">
                                {/* Libellé du champ de quantité */}
                                <Label className="text-base" htmlFor="quantity">
                                    Quantity
                                </Label>
                                {/* Sélecteur de quantité */}
                                <Select defaultValue="1">
                                    <SelectTrigger className="w-24">
                                        <SelectValue placeholder="Select"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                        <SelectItem value="5">5</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                {/* Bouton "Add to wishlist" */}
                                <Button className="text-red-600" size="lg" variant="outline">
                                    <HeartIcon className="w-4 h-4 mr-2"/>
                                    Add to wishlist
                                </Button>
                                {/* Bouton "Add to cart" */}
                                <Button className="ml-2 w-full bg-blue-900 text-white" size="lg" variant="outline">
                                    Add to cart
                                </Button>
                            </div>


                        </form>

                    </div>

                    {/* Conteneur pour l'image (grosse) avec position relative */}
                    <div className="flex flex-col w-full lg:w-1/2">
                        <div className="relative">
                            {/* Carousel pour permettre le changement de l'image avec les boutons */}
                            <Carousel>
                                <CarouselContent>
                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-0">
                                                <Card className="overflow-hidden rounded-lg border-2 border-gray-200">
                                                    <CardContent >
                                                        {index === 0 && <img src={"/ev301_1.png"} alt="Image 1" className="w-full h-auto" />}
                                                        {index === 1 && <img src={"/ev301_2.png"} alt="Image 2" className="w-full h-auto" />}
                                                        {index === 2 && <img src={"/ev301_3.png"} alt="Image 3" className="w-full h-auto" />}
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>

                        </div>

                        {/* Conteneur pour les petites images */}
                        <div className="grid grid-cols-4 gap-4 mt-4">
                            <img
                                className="w-full h-auto rounded-lg border-2 border-gray-200"
                                height="100"
                                src="/ev301_1.png"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="100"
                            />
                            <img
                                alt=""
                                className="w-full rounded-lg h-auto border-2 border-gray-200"
                                height="100"
                                src="/ev301_2.png"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="100"
                            />
                            <img
                                alt=""
                                className="w-full rounded-lg h-auto border-2 border-gray-200"
                                height="100"
                                src="/ev301_3.png"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="100"
                            />
                            <img
                                alt=""
                                className="w-full rounded-lg h-auto border-2 border-gray-200"
                                height="100"
                                src="/ev301_4.png"
                                style={{
                                    aspectRatio: "100/100",
                                    objectFit: "cover",
                                }}
                                width="100"
                            />
                        </div>



                    </div>
                </div>
            </div>
        )
    }

    else { // Si le produit n'est pas trouvé, on affiche rien
        return (<h1>404 - Produit non trouvé</h1>)
    }

}

function ChevronRightIcon(props) { //fonction pour le visuel des boutons : ici, c'est le "<"
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6"/>
        </svg>
    )
}


function StarIcon(props) { //fonction pour le visuel des boutons : ici, c'est l'étoile
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
    )
}


function HeartIcon(props) { //fonction pour le visuel des boutons : ici, c'est le coeur
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
    )
}
