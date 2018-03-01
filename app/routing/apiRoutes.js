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


    // An array to hold friends compatability score

    // app.post function
        // Get current new user score and hold it in an array
        // Loop through each existing userData and store the user score into an array
        // Compare new user score with each of the existing user scope - how ????
        // Store the compared score (compatabilty score )


}