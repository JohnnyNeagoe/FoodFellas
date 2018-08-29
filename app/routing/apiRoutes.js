var path = require("path");
var friendsData = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


app.post("/api/friends", function(req, res) {
  const userInput = req.body;
  var userScores = userInput.scores;
  var matchName = '';
  var matchEmail = '';
  var totalDifference = 1000000;

  for (var i = 0; i < friendsData.length; i++){
    var diff = 0;
    for (var j = 0; j < userScores.length; j++){
      diff += Math.abs(friendsData[i].scores[j] - userScores[j]);
    }
    if (diff < totalDifference) {
      totalDifference = diff;
      matchName = friendsData[i].name;
      matchEmail = friendsData[i].email;
    }
  }

  friendsData.push(userInput);
  res.json({status: 'OK', matchName: matchName, matchEmail: matchEmail});

});
}
