// Example use :
//
// sport.playerNames();
// returns ["Lebron James plays basketball", "Kevin Durant plays basketball"]

var sport = {
  name: 'basketball',
  players: [
    { name: 'LeBron James', age: 31 },
    { name: 'Kevin Durant', age: 28 }
  ],
  playerNames: function () {
    // YOUR CODE HERE
    return this.players.map((item) => {
      return `${item.name} plays ${this.name}`
    })
  }
};
console.log(sport.playerNames());