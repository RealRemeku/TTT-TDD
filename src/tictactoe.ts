export class TicTacToe {
    activePlayer: string = "X"
    field: string[][] = [[]]
    genField() {
        this.field = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]
        return [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]
    }
    clickHandler(x: number, y: number) {
        this.field[y][x] = this.activePlayer
        if (this.activePlayer === "X") {
            this.activePlayer = "O"
            return
        }
        this.activePlayer = "X"
        return
    }
}