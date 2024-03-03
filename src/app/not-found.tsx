export default function NotFound(){ //utilisé comme une page par défaut pour gérer les erreurs 404
    return (                                    //Si une URL spécifique n'est pas associée à une page existante dans l'application, Next.js redirigera automatiquement vers cette page "NotFound"
        <div>
        <h2>Page non trouvé</h2>
            <p>Impossible de trouver la ressource demandée</p>
        </div>)
}