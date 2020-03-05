class Statistics {
    constructor() {
        this.gameResult = [];
    }

    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid,
        }
        this.gameResult.push(gameResult)
    }

    showGameStatistics() {
        let games = this.gameResult.length;
        let wins = this.gameResult.filter(result => result.win).length
        let losses = this.gameResult.filter(result => !result.win).length

        retunr [games, wins, losses]
    }
}