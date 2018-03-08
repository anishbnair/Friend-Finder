// ===============================================================================
// LOAD DATA
// ===============================================================================

var userData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(userData);
    });

    var userComparisonScore = 0;
    var friendCompatabilityScores = [];

    // app.post function
    // Get current new user score and hold it in an array
    // Loop through each existing userData and store the user score into an array
    // Compare new user score with each of the existing user score - how ????
    // Store the compared score (compatabilty score )

    app.post("/api/friends", function (req, res) {

        // store new user scores in an array 
        var newUserScores = req.body.scores;

        // loop through all userData and get scores of existing users for comparing the scores
        for (var i = 0; i < userData.length; i++) {

            // store exing scores of users in an array
            var existingUserScores = userData[i].scores;

            // find total difference between new user and each existing user
            userComparisonScore = calculateUserCompatibilityScore(newUserScores, existingUserScores);

            // build up array of user compatibility scores
            friendCompatabilityScores.push(userComparisonScore);

        }

        var index = 0;
        var value = friendCompatabilityScores[0];

        // Get index of lowest score
        for (var i = 0; i < friendCompatabilityScores.length; i++) {

            if (friendCompatabilityScores[i] < value) {
                value = friendCompatabilityScores[i];
                index = i;
            }
        }

        // best compatable friend
        // Send best friend as a response to display in modal
        res.send(userData[index]);

        // Push new user to user array
        userData.push(req.body);

    });

}


var totalDifference = 0;

// find total difference between new user and another user
function calculateUserCompatibilityScore(newUserScores, existingUserScores) {

    // reset the total difference counter each time function called
    totalDifference = 0;

    for (var i = 0; i < newUserScores.length; i++) {

        totalDifference += Math.abs(newUserScores[i] - existingUserScores[i]);
    }

    return totalDifference;
};
