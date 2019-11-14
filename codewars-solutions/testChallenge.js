// Declare a class player
class Player {
  // Add a constructor for initializing a player object.
  constructor (playerId, score) {
    this.playerId = playerId
    this.scores = []
    // At the time of initialization, totalScore is
    // the score with which the player is created.
    this.totalScore = score
    this.scores.push(score)
  }
  // addPlayerScore method adds a new score to the scores
  // array and increases the totalScore by the new score.
  addPlayerScore (score) {
    if (score >= 0 && score <= 100) {
      this.totalScore += score
      this.scores.push(score)
    } else {
      console.log('score should be an integer ranging from 0 to 100.')
    }
  }
  // playerAverageScore method calculates the average score for the player
  // by dividing the total score with the number of scores in the scores array
  // but returns 0 if the scores array is empty.
  playerAverageScore () {
    if (this.scores) {
      return this.totalScore / this.scores.length
    } else {
      return 0
    }
  }
  // a player's score is reset by setting totalScore to 0 and emptying the scores array.
  resetPlayerScore () {
    this.totalScore = 0
    this.scores = []
  }
}

// Declare a class LeaderBoard
class LeaderBoard {
  // Initialize the LeaderBoard as an object
  constructor () {
    this.board = {}
  }
  addScore (playerId, score) {
    // if player doesn't exist on the leaderboard, they are automatically added.
    if (!this.board[playerId]) {
      const player = new Player(playerId, score)
      this.board[playerId] = player
    } else {
      // a score is added to the player's scores using the addPlayerScore method from the Player class.
      this.board[playerId].addPlayerScore(score)
    }
    // addScore method returns the average for the player on the LeaderBoard which is calculated
    // using the playerAverageScore method from the Player class.
    const averageScore = this.board[playerId].playerAverageScore()
    return averageScore
  }

  // the top method returns the playerIds for the top players sorted in order of who has the
  // highest average score.
  top (numberOfPlayers) {
    return this.sortedPlayerIds('top', numberOfPlayers)
  }

  bottom (numberOfPlayers) {
    return this.sortedPlayerIds('bottom', numberOfPlayers)
  }

  sortedPlayerIds (sortOrder, numberOfPlayers) {
    if (sortOrder === 'top') {
      this.playerIds = Object.keys(this.board).sort(
        (a, b) => this.board[b].playerAverageScore() - this.board[a].playerAverageScore()
      )
    } else {
      this.playerIds = Object.keys(this.board).sort(
        (a, b) => this.board[a].playerAverageScore() - this.board[b].playerAverageScore()
      )
    }
    this.playerIds.length = numberOfPlayers
    return this.playerIds.map(playerId => Number(playerId))
  }

  // the reset method takes a playerId and removes all scores associated with that playerId
  // using the resetPlayerScore method from the Player class which also sets the totalScore to 0.
  reset (playerId) {
    this.board[playerId].resetPlayerScore()
    return void (0)
  }
}

const leaderBoard = new LeaderBoard()
console.log(leaderBoard.addScore(1, 50))
console.log(leaderBoard.addScore(2, 80)) // 80.0
console.log(leaderBoard.addScore(2, 70)) // 75.0
console.log(leaderBoard.addScore(2, 60)) // 70.0
console.log(leaderBoard.addScore(3, 90)) // 90.0
console.log(leaderBoard.addScore(3, 85))
console.log(leaderBoard.top(3)) // [3, 2, 1]
console.log(leaderBoard.top(2)) // [3, 2]
console.log(leaderBoard.top(1)) // [3]
console.log(leaderBoard.bottom(2)) // [3, 1]

console.log(leaderBoard.bottom(1)) // [3]
leaderBoard.reset(3)
console.log(leaderBoard.bottom(3))
