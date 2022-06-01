const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Desafio 1: Todos os alunos são bolsistas ?

const resultado1 = alunos.map(a => a.bolsista).reduce(function (acumulado, atual) {
    return atual == false ? atual : acumulado
})

console.log(resultado1)

// Desafio 2: Algum aluno é bolsista ?

const resultado2 = alunos.map(a => a.bolsista).reduce(function (acumulado, atual) {
    return atual == true ? atual : acumulado
})

console.log(resultado2)

// Solução 1

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Solução 2

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))