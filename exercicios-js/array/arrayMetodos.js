const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona na última posição
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // remover 1 a partir do índice
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do índice
console.log(algunsPilotos1) 

const algunsPilotos2 = pilotos.slice(1, 4) // novo array a partir do índice até antes do segundo índice
console.log(algunsPilotos2)