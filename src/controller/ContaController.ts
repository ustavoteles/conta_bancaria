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
        }
        else {
            console.log("\nConta não encontrada!");
        }
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
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