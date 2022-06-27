/*

const express = require('express')
const Router = express.Router();
const homeSchema = require('../models/homeSchema')

Router.get('/',(err,res) =>{
    res.render('register.ejs',{title:'Sign up to explore!', password:'',email:''})
})



Router.post('/register',async(req,res) =>{
  try{
    const {
        name,
        email,
        password,
        cpassword
    } = req.body;
    
    if(password === cpassword){
        const userData = new homeSchema ({
            name,
            email,
            password
        })
        userData.save(err =>{
            if(err){
                console.log('Error!')
            }else{
                res.render('register',{title:'Sign up successfull!', password:'',email:''})
            }
            
        })

    } else{
        res.render('register',{title:'Passwords does not match!', password:'',email:''})

    }
    
  } catch(error){

    res.render('register',{title:'Error!', password:'',email:''})
  }
})



//same above get and post route for login.ejs
Router.get('/',(err,res) =>{
    res.render('login.ejs',{title:'Sign in to explore power!', password:'',email:''})
})

Router.post('/login',async(req,res) =>{
  try{
    const {
        email,
        password,
        cpassword
    } = req.body;
    
    if(password === cpassword){
        const userData = new homeSchema ({
            email,
            password
        })
        userData.save(err =>{
            if(err){
                console.log('Error!')
            }else{
                res.render('login',{title:'Sign up successfull!', password:'',email:''})
            }
            
        })

    } else{
        res.render('login',{title:'Passwords does not match!', password:'',email:''})

    }
    
  } catch(error){

    res.render('login',{title:'Error!', password:'',email:''})
  }
})





module.exports = Router;

*/