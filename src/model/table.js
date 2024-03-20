import Bag from './bag.js';

export default class Table {
    static HEIGHT = 9;
    static WIDTH = 9;
    static matrix;
    static arrayOptions;

    static totalSolutions = [];
    constructor(selectedSetup) {

        Table.matrix = selectedSetup.map((line) => line.map(
            (el) => {
                if (el) {
                    return el = Bag.extractItem();
                } else {
                    return 0
                }
            })
        )

        //console.log(Table.matrix)
    }

    static flattenedMatrix() {

        return this.matrix.flat(); // Flatten the matrix array
    }

    static selectTile(x, y) {
        this.arrayOptions = [];
        this.totalSolutions = [];
        //se l'elemento iniziale è prendibile
        if (Table.pickable(x, y)) {
            //first solution
            let startOut = [[x, y]];
            this.totalSolutions.push(...startOut);
            this.arrayOptions.push(startOut);
            console.log(this.arrayOptions)
            let depth = 1;
            //up
            Table.checkIfTakeable(x, y, [0, 1], depth, startOut);
            //down
            Table.checkIfTakeable(x, y, [0, -1], depth, startOut);
            //left
            Table.checkIfTakeable(x, y, [-1, 0], depth, startOut);
            //right
            Table.checkIfTakeable(x, y, [1, 0], depth, startOut);
        }
        return this.totalSolutions;

    }

    static checkIfTakeable(startX, startY, dir, depth, prevOut) {
        //aggiorno le coordinate di valutazione
        let newX = startX + dir[0];
        let newY = startY + dir[1];
        let newOut = [...prevOut];
        if (depth < 3 && this.pickable(newX, newY)) {
            //aggiorno l'array di partenza
            this.totalSolutions.push([newX, newY])
            newOut.push([newX, newY])
            //aggiungo il tutto all'array delle possibilita
            this.arrayOptions.push(newOut);

            depth++;
            Table.checkIfTakeable(newX, newY, dir, depth, newOut)
        }
    }

    static pickable(x, y) {
        return Table.inBounds(x, y) && Table.occupied(x, y) && Table.isSideFree(x, y);
    }

    static inBounds(x, y) {
        return (x > 0 && x < this.WIDTH && y > 0 && y < this.HEIGHT)
    }
    static occupied(x, y) {
        return this.matrix[x][y] > 0;
    }
    static isSideFree(x, y) {
        let freeSides = 0;
        if (Table.inBounds(x + 1, y) && this.matrix[x + 1][y] == 0) freeSides += 1;
        if (Table.inBounds(x - 1, y) && this.matrix[x - 1][y] == 0) freeSides += 1;
        if (Table.inBounds(x, y + 1) && this.matrix[x][y + 1] == 0) freeSides += 1;
        if (Table.inBounds(x, y - 1) && this.matrix[x][y - 1] == 0) freeSides += 1;

        return freeSides > 0
    }
    // You can add more methods here as needed
}