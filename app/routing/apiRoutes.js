var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/survey", function(req, res) {
      friendsData.push(req.body);
      res.json(req.body);
  });
}
