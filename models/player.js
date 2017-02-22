/**
 * Created by Rutul Shah on 2017-02-22.
 */

var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name is required'
    },
    lastName: {
        type: String,
        required: 'Last name is required'
    },
    number: {
        type: Number,
        max: 20
    }
});

module.exports = mongoose.model('Player',playerSchema);