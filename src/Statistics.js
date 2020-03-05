class Statistics {
    constructor() {
        this.gameResult = [];
    }

    addGameToStats(win, bid) {
        let gameResult = {
            win,
            bid,
        }
        this.gameResult.push(gameResult)
    }

    showGameStats() {
        let games = this.gameResult.length;
        let wins = this.gameResult.filter(result => result.win).length
        let losses = this.gameResult.filter(result => !result.win).length

        return [games, wins, losses]
    }
}