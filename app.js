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

    else{
        fs.readFile('./data/medicines.json', (err, data) =>{
            if (err) throw err
            const medics = JSON.parse(data)

            medics.push({
                id: id (),
                name: title,
                description: detail,
            })
            fs.writeFile('./data/medicines.json', JSON.stringify(medics), err =>{
                if (err){throw err}

                res.render('add', {success: true})
            })

        })

    }

})


app.get('/medicine', (req, res) =>{

    fs.readFile('./data/medicines.json', (err, data) =>{
        if (err){throw err}
    
        const medicines = JSON.parse(data)
        res.render('medicine', {medicines: medicines})
    })
})

app.get('/medicine/detail', (req, res)=>{
    res.render('detail')
})
app.listen(PORT, err =>{
    if (err)
        console.log(err)
    console.log(`App is running on port ${PORT}`)
})

function id() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
    // the code was taken from user Ken Ng
  };