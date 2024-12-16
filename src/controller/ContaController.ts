import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    //Coleção Array que armazena os Objetos Conta
    private listaContas = new Array<Conta>(); //do tipo conta pois ele vai guardar todos os objetos da classe Conta

    //Controla os Números das Contas
    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.visualizar();
        } else {
            console.log("\nConta não encontrada!");
        }
    }

    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar(); //visualizar esta vindo de conta.ts
        }
    }

    cadastrarConta(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi cadastrada com sucesso");
    }

    atualizarConta(conta: Conta): void {
        const buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta !== null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("A conta foi atualizada com sucesso!");
        }
        else {
            console.log("\nConta não encontrada!");
        }
    }

    deletarConta(numero: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log("A Conta foi deletada com sucesso!");
        }
        else {
            console.log("\nConta não encontrada!");
        }
    }

    //metodos bancários
    sacar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            if (buscaConta.sacar(valor) === true) {
                console.log("Saque efetuado com sucesso!");
            }
        }
        else {
            console.log("\nConta não encontrada!");
        }
    }

    depositar(numero: number, valor: number): void {
        const buscaConta = this.buscarNoArray(numero);

        if (buscaConta !== null) {
            buscaConta.depositar(valor)
            console.log("O depósito foi efetuado com sucesso!");
        }
        else {
            console.log("\nConta não encontrada!");
        }
    }

    //transferir é um saque seguido de um deposito
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const contaOrigem = this.buscarNoArray(numeroOrigem);
        const contaDestino = this.buscarNoArray(numeroDestino);

        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor);
                console.log("Saque efetuado com sucesso!");

            }
        }
        else {
            console.log("\n Conta de Origem e/ou Conta de Destino não foi encontrada!");
        }
    }


    //Método Auxiliares
    public gerarNumer(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Conta | null {
        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null;
    }
}