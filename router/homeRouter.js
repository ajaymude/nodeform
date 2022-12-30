const express = require('express');
const { model } = require('mongoose');
const Router = express.Router()

const postmodel = require('./model')

Router.get('/',(req,res)=>{
    res.render('index')
})

Router.post('/',(req,res)=>{
    console.log(req.body)
    const data =postmodel({
        name:req.body.name,
        pass:req.body.pass
    })
    data.save()
    console.log(data)
    res.redirect('/')
})

module.exports= Router