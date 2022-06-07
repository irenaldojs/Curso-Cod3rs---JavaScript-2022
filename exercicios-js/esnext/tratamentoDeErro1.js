function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try{
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro')
            }else{
                resolve(valor)
            }
        }catch(e){
            resolve(e)
        }      
    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err=>console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!!'))