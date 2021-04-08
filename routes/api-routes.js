let { Workout } = require('../models/');

module.exports = function(app) {
    // GET route /api/workouts
    app.get('/api/workouts', function(req, res) {
        // Returning the current list of workouts
        Workout.find()
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            res.err(err);
        });
    });

    // PUT route /api/workouts
app.put (''), function (req,res) {}



    // POST route /api/workouts
    app.post('/api/workouts', function (req, res) {
        Workout.create({})
        .then(function(data) {
            res.json(data)
        })
        .catch(function(err) {
            res.err(err); 
        });
    });

    // GET route /api/workouts/range
}