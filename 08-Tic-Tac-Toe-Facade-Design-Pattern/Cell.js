class Cell {
    constructor() {
        this.mark = "z"
    }

    isMarked(){
        return this.mark == 'z'
    }

    isEmpty(){
        return this.mark == 'z'
    }
    markCell(symbol) {
        if (this.isEmpty()) {
            this.mark = symbol
            return true
        }
        return false
    }
    // getMark(){
    //     return this.marked
    // }
}

module.exports = Cell