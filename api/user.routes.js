const express = require('express');
const UserRoutes = express.Router();
const mongoose = require('mongoose');

let UserModel = require('./user-model');

// add user
UserRoutes.route('/add').post((req,res)=>{
    let user  = new UserModel(req.body);
    user.save()
    
    .then(user=> {
        res.status(200).json({'user':'User added successfully..'});
    })
    .catch(err=>{
        res.status(400).send("Unabale To save User");
    });
});

//get Data
UserRoutes.route('/').get(function(req,res){
UserModel.find(function(err,user){
    if(err)
    console.log(err);
    else{
        res.json(user);
    }
});

});

//edit user
 UserRoutes.route('/edit/:id').get(function(req,res){
     let id = req.params.id;
     UserModel.findById(id,function(err,user){
         if(err){
             console.log(err);
         }
         else{
             res.json(user); 
         }
     });
 });

 //update user

 UserRoutes.route('/update/:id').post(function(req,res){
     UserModel.findById(req.params.id,function(err,user){
         if(!user){
            res.status(404).send("This User is not found");
         }
         else{
             user.fullname = req.body.fullname;
             user.email = req.body.email;
             user.password = req.body.password;
             user.address = req.body.address;

             user.save().then(user => {
                 res.json('Update successfully');
             })
             .catch(err =>{
                 res.status(400).send("Unable to save Database..")
             });
         }
     
     });
 });

 // delete user

 UserRoutes.route('/delete/:id').get(function(req,res){
     UserModel.findByIdAndRemove({_id: req.params.id}, function(err,user){
         if(err){
             res.json(err)
         }
         else{
             res.json("Removed Successfully");
         }
     });
 });

 module.exports = UserRoutes;