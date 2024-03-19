import Bag from './bag.js';

export default class Table {
    static matrix;
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

    getName() {
        return this.name;
    }

    getData() {
        return this.data;
    }

    setData(newData) {
        this.data = newData;
    }

    // You can add more methods here as needed
}