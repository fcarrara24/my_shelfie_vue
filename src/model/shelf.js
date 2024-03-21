

export default class Shelf {
    playerId;
    matrix = [];
    linearMatrix = [];

    constructor(playerId) {
        this.playerId = playerId;
        this.setupMatrix();
    }

    setupMatrix() {
        for (let i = 0; i < 6; i++) {
            this.matrix.push([]);
            for (let j = 0; j < 5; j++) {
                this.matrix[i].push(0);
                this.linearMatrix.push(0);
            }
        }
        console.log(this.matrix);
    }
    /**
     * TOTEST
     * @param {*} col 
     * @param {*} color 
     */
    insertTile(col, color) {
        //controllo che almeno l'ultimo elemento sia libero
        if (matrix[0][col] == 0) {
            alert('spazio libero')
            let i = 5;
            while (matrix[0][col] != 0) {
                i--
            }
            this.matrix[i][col] = color
        }
    }
}

new Shelf(1)