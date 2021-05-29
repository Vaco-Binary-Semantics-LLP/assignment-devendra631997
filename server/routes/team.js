var express = require('express');
var Team = require('../models/team');
var router = express.Router();

router.get('/', function(req, res){
    console.log('getting all books');
    Team.find({}).exec(function(err, team){
        if(err) {
            res.send('error has occured');
        } else {
            console.log(team);
            res.json(team);
        }
    });
});

router.get('/:id', function(req, res){
    console.log('getting one book');
    Team.findOne({
        _id: req.params.id
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
    newTeam.title = req.body.title;
    newTeam.player = req.body.player;
    newTeam.save(function(err, team){
        if(err) {
            res.send('error saving book');
        } else {
            console.log(team);
            res.send(team);
        }
    });
});

router.put('/:id', function(req, res){
    Team.findOneAndUpdate({
        _id: req.params.id
    },{
        $set: {
            title: req.body.title,
            player: req.body.player,
        }
    },{
        upsert: true
    },function(err, newTeam){
        if(err) {
            res.send('error updating book');
        } else {
            console.log(newTeam);
            res.send(newTeam);
        }
    });
});

router.delete('/:id', function(req, res){
    Team.findByIdAndRemove({
        _id: req.params.id
    },function(err, team){
        if(err) {
            res.send('error deleting book');
        } else {
            console.log(team);
            res.send(team);
        }
    });
});

module.exports = router;