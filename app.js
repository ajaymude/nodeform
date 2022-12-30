const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb+srv://ravimude:ajay7777@cluster0.thi8yzl.mongodb.net/form1')
.then(()=>{ console.log('connected with db')})
.catch(()=>{ console.log('not conneted with db ')})



port = process.env.port || 5555;
app.set('view engine', 'ejs')



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const homeRouter = require('./router/homeRouter')

app.use('/',homeRouter)


app.listen(port, ()=>{ console.log( 'server is runnig on port')})