const { json } = require('express');
const users = require('../users.json');
const fs = require('fs');

function getUser(req,res){
    try{
        let id = parseInt(req.params.id);
        let user = users.find((user)=> user.id === id);
        res.json(user)

    }catch(err){
        console.log(err)
    }
}



function getParticularUser(req,res){
    try{
       let id = parseInt(req.params.id);
       let user = users.find((user)=> user.id === id);
       res.json(user);
    }catch(err){

    }

}
module.exports ={
    getUser,
    getParticularUser
    
}