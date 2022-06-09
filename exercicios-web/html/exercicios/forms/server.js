const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const { response } = require('express')

app.use(bodyParse.urlencoded({extended: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns, usuário incluído!</h1>')
})
app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns, usuário alterado!</h1>')
})
app.listen(3003)