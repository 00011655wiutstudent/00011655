const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
app.set('view engine', 'pug')
app.use('/static', express.static('public'))

app.get('/', (req, res) =>{
    res.render('index')
})

app.get('/add', (req, res) =>{
    res.render('add')
})

const med = ['medicine1', 'tue']

app.get('/medicine', (req, res) =>{
    res.render('medicine', {medicines: med})
})

app.listen(PORT, err =>{
    if (err)
        console.log(err)
    console.log(`App is running on port ${PORT}`)
})