const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const saudacao = require('./saudacaoMid')

app.use(bodyparser.text())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(saudacao('Guilherme'))

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatório: completo = ${req.query.completo}, ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    //let corpo = ''
    //req.on('data', function(parte) {
    //    corpo += parte 
    //})
//
    //req.on('end', function() {
    //    res.send(corpo)
    //})
    res.send(req.body.nome)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.use((req, res, next) => {
    console.log('Antes...');
    next()
})

app.get('/opa', (req, res, next) => {
    //res.send(`<h1>Estou Bem!</h1><br><br><h2>Tipo é HTML!</h2>`)

    //res.json({
    //    name: 'iPad 32gb',
    //    price: 1899.00,
    //    discount: 0.12,
    //})

    console.log('Durante...');

    res.json({
        data: [
            { id: 7, name: 'Ana', position: 1 },
            { id: 34, name: 'Bia', position: 2 },
            { id: 73, name: 'Carlos', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200,

    })

    next()
})

app.use((req, res) => {
    console.log('Depois!');
})

app.listen(3000, () => {
    console.log('Backend executando...');
})