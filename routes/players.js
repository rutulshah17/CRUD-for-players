/**
 * Created by Rutul Shah on 2017-02-22.
 */

var express = require('express');
var router = express.Router();

var Player = require('../models/player');

router.get('/', function(req, res, next){

    Player.find(function (err, players) {
        if (err) {
            console.log(err);
            res.end(err);
            return;
        }

        res.render('players', {
            players: players
        });
    });
});

module.exports = router;