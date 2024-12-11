import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors"

import { Conta } from "./src/model/Conta";

export function main() {

    let opcao: number;

    //Cria novas instâncias (Objetos) da Classe Conta
    const c1 = new Conta(1, 123, 1, "Gustavo", 100000);
    c1.visualizar();
    //Saque
    console.log(c1.sacar(200000.00));
    c1.visualizar();

    const c2 = new Conta(2,123,2,"Joice",10000);
    c2.visualizar();
    //Deposito
    c2.depositar(100.00);
    c2.visualizar();


    do {

        chamarMenu()
        opcao = readlinesync.questionInt()

        if (opcao >= 1 && opcao <= 9) {

            if (opcao === 9) {
                about()
                process.exit(0)
            }

            if (opcao === 1) {
                console.log("Criar Conta")
            }

            if (opcao === 2) {
                console.log("Listar todas as Contas")
            }

            if (opcao === 3) {
                console.log("Buscar Conta por Número")
            }

            if (opcao === 4) {
                console.log("Atualizar Dados da Conta")
            }

            if (opcao === 5) {
                console.log("Apagar Conta")
            }

            if (opcao === 6) {
                console.log("Sacar")
            }

            if (opcao === 7) {
                console.log("Depositar")
            }

            if (opcao === 8) {
                console.log("Transferir Valores entre Contas")
            }
        } else {
            console.log("Opção Inválida")
        }
    } while (true)
}

function chamarMenu() {
    console.log(colors.bg.magentabright, colors.fg.blackstrong);
    console.log("    ╔════════════════════════════════════════════════════╗");
    console.log("    ║                    BANCO PURPLE                    ║");
    console.log("    ╠════════════════════════════════════════════════════╣");
    console.log("    ║          1- Criar Conta                            ║");
    console.log("    ║          2- Listar todas as Contas                 ║");
    console.log("    ║          3- Buscar Conta por Número                ║");
    console.log("    ║          4- Atualizar Dados da Conta               ║");
    console.log("    ║          5- Apagar Conta                           ║");
    console.log("    ║          6- Sacar                                  ║");
    console.log("    ║          7- Depositar                              ║");
    console.log("    ║          8- Transferir valores entre Contas        ║");
    console.log("    ║          9- Sair                                   ║");
    console.log("    ╚════════════════════════════════════════════════════╝");
    console.log("Digite a opção desejada: ", colors.reset);
}


function about() {
    console.log("Obrigado Por usar o Banco Purple")
    console.log("Criado por Gustavo Teles")
}

main();