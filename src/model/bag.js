export default class Bag {
    static StartContent = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6
    ];
    static bag = [];
    static extractItem() {

        // Controlla se la borsa è vuota
        if (Bag.bag.length === 0) {
            return null; // Restituisce null se la borsa è vuota
        }

        // Genera un indice casuale per l'elemento da estrarre
        const randomIndex = Math.floor(Math.random() * Bag.bag.length);

        // Estrae l'elemento dalla borsa utilizzando l'indice casuale
        const extractedItem = Bag.bag.splice(randomIndex, 1)[0];

        // Restituisce l'elemento estratto
        return extractedItem;

    }
    constructor() {
        Bag.bag = Bag.StartContent.slice(); // Assegna una copia di StartContent a bag
    }
}