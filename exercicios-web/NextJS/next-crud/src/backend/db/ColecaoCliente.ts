import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import firebase from '../config'

export default class ColecaoCliente implements ClienteRepositorio {

    conversor = {
        toFirestore(cliente: Cliente): firebase.firestore.DocumentData {
            return {
                nome: cliente.nome,
                idade: cliente.idade
            };
        },
        fromFireStore(
            snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade);
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        return null
    }
    async excluir(cliente: Cliente): Promise<void> {
        return null
    }
    async obterTodos(): Promise<Cliente[]> {
        return null
    }

    private colecao() {
        //return firebase.firestore().collection('clientes').withConverter(this.conversor)
    }
}