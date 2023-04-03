const express = require('express')
const app = express()
const fs = require('fs')

const PORT = process.env.PORT || 5000
app.set('view engine', 'pug')
app.use('/static', express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/add', (req, res) =>{
    res.render('add')
})

app.post('/add', (req, res) =>{
    const title = req.body.title
    const detail = req.body.details
    if(title.trim() ===""){
        res.render('add', {error: true})
    }
    else if(detail.trim()===""){
        res.render('add', {error: true})
    }
})


const med = ['medicine1', 'tue']

app.get('/medicine', (req, res) =>{
    res.render('medicine', {medicines: med})
})

app.get('/medicine/detail', (req, res)=>{
    res.render('detail')
})
app.listen(PORT, err =>{
    if (err)
        console.log(err)
    console.log(`App is running on port ${PORT}`)
})