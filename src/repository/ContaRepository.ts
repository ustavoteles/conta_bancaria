import { Conta } from "../model/Conta";

export interface ContaRepository {

    //Métodos do Crud (Create, Read, Update e Delete)
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrarConta(conta: Conta): void;
    atualizarConta(conta: Conta): void;
    deletarConta(numero: number): void;
    procurarPorTitular(titular: string): void;

    //Métodos Bancários (Responsável pelas operações Bancárias)
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;

}