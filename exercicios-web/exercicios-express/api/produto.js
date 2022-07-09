module.exports = (app, texto) => {
    function saltar(req, res) {
        res.send('Produto > salvar > ' + texto)
    }
    function obter(req, res) {
        res.send('Produto > obter > ' + texto)
    }
    app.post('/produto', saltar)
    app.get('/produto', obter)

    return {saltar, obter}
}