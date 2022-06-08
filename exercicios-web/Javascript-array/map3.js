Array.prototype.map2 = function(callback){
    const newArray = []
    for( i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }',
]

const precoObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

console.log(carrinho.map2(precoObjeto).map2(apenasPreco))
