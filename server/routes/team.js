var express = require('express');
var Team = require('../models/team');
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all team');
    Team.find({}).exec(function(err, team){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(team);
            res.json(team);
        }
    });
});

router.get('/oneteam', function(req, res){
    console.log('getting one team');
    Team.findOne({
        _id: req.body.id
    }).exec(function(err, team){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(team);
            res.json(team);
        }
    });
});

router.post('/', function(req, res){
    var newTeam = new Team();
    newTeam.title = req.body.data.title;
    newTeam.player = req.body.data.player;
    newTeam.save(function(err, team){
        if(err) {
            res.send('error saving team');
        } else {
            console.log(team);
            Team.find({}).exec(function(err, teams){
                if(err) {
                    res.send('error has occured');
                } else {
                    console.log(teams);
                    res.json(teams);
                }
            });
        }
    });
});

router.put('/', function(req, res){
    Team.findOneAndUpdate({
        _id: req.body.id
    },{
        $set: {
            title: req.body.title,
            player: req.body.player,
        }
    },{
        upsert: true
    },function(err, newTeam){
        if(err) {
            res.send('error updating team');
        } else {
            console.log(newTeam);
            Team.find({}).exec(function(err, teams){
                if(err) {
                    res.send('error has occured');
                } else {
                    console.log(teams);
                    res.json(teams);
                }
            });
        }
    });
});

router.delete('/', function(req, res){
    // console.log("request=========================>",req)
    Team.findByIdAndRemove({
        _id: req.body.id
    },function(err, team){
        if(err) {
            // console.log("error=================>",err)
            res.send('error deleting team');
        } else {
            console.log(team);
            Team.find({}).exec(function(err, teams){
                if(err) {
                    res.send('error has occured');
                } else {
                    console.log(teams);
                    res.json(teams);
                }
            });
        }
    });
});

module.exports = router;