
// Function to generate a random team from a list of players
function generateTeams(players, numTeams) {
  // Shuffle the players
  shuffleArray(players);

  // Divide the players into teams
  var teams = [];
  for (var i = 0; i < numTeams; i++) {
    teams.push([]);
  }
  for (var i = 0; i < players.length; i++) {
    teams[i % numTeams].push(players[i]);
  }

  return teams;
}

// Function to shuffle an array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

// Example usage:
var players = ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"];
var numTeams = 2;
var teams = generateTeams(players, numTeams);
console.log(teams);