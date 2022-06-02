const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulher = a => a.genero == 'F'
const china = a => a.pais == 'China'
const menorSalario = (anterior, atual) => anterior.salario < atual.salario ? anterior : atual

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(mulher).filter(china).reduce(menorSalario))
})


