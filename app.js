const express = require('express');

const app = express()

app.set('view engine', 'ejs')


app.use(express.static('views'));

app.listen(3000)

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.use((req,res)=>{
    res.status(404).send('/404')
})

