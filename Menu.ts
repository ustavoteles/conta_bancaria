import readlinesync = require("readline-sync")
import { colors } from "./src/util/Colors"
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    //Criando um Objeto da classe Conta Controller
    const contas = new ContaController();

    //Novas Instâncias da Classe ContaCorrente (Objetos)
    contas.cadastrarConta(new ContaCorrente(contas.gerarNumer(), 1234, 1, 'Amanda Magro', 1000000.00, 100000.00));
    contas.cadastrarConta(new ContaCorrente(contas.gerarNumer(), 4578, 1, 'João da Silva', 1000.00, 100.00));

    // Novas Instâncias da Classe ContaPoupança (Objetos)
    contas.cadastrarConta(new ContaPoupanca(contas.gerarNumer(), 5789, 2, "Geana Almeida", 10000, 10));
    contas.cadastrarConta(new ContaPoupanca(contas.gerarNumer(), 5698, 2, "Jean Lima", 15000, 15));

    do {

        chamarMenu()
        opcao = readlinesync.questionInt()

        if (opcao >= 1 && opcao <= 9) {

            if (opcao === 9) {
                about()
                process.exit(0)
            }

            if (opcao === 1) {
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n",
                    colors.reset)

                console.log("Digite o número da Agência: ");
                agencia = readlinesync.questionInt('');

                console.log("Digite o Nome do Titular: ");
                titular = readlinesync.question('');

                console.log("Escolha o tipo da conta: ")
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel: false }) + 1;

                console.log("Digite o Saldo da conta: ");
                saldo = readlinesync.questionFloat('');


                if (tipo === 1) {
                    console.log("Digite o Limite da Conta: ");
                    limite = readlinesync.questionFloat("");
                    contas.cadastrarConta(new ContaCorrente(contas.gerarNumer(), agencia, tipo, titular, saldo, limite));

                }

                if (tipo === 2) {
                    console.log("Digite o Dia do Aniversário da Poupança: ");
                    aniversario = readlinesync.questionInt("");
                    contas.cadastrarConta(new ContaPoupanca(contas.gerarNumer(), agencia, tipo, titular, saldo, aniversario));

                }
                keyPress();
            }

            if (opcao === 2) {
                console.log(colors.fg.whitestrong, "Listar todas as Contas", colors.reset);

                contas.listarTodas()
                keyPress();
            }

            if (opcao === 3) {
                console.log(colors.fg.whitestrong, "\n\nBuscar Conta por Número\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                contas.procurarPorNumero(numero)

                keyPress();
            }

            if (opcao === 4) {
                console.log(colors.fg.whitestrong, "\n\nAtualizar Dados da Conta\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                let conta = contas.buscarNoArray(numero);

                if (conta !== null) {

                    console.log("Digite o número da Agência: ");
                    agencia = readlinesync.questionInt('');

                    console.log("Digite o Nome do Titular: ");
                    titular = readlinesync.question('');

                    console.log("Digite o novo Saldo da conta: ");
                    saldo = readlinesync.questionFloat('');


                    //atenção! tipo=conta.tipo
                    tipo = conta.tipo;

                    if (tipo === 1) {
                        console.log("Digite o novo Limite da Conta: ");
                        limite = readlinesync.questionFloat("");
                        contas.atualizarConta(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));

                    }

                    if (tipo === 2) {
                        console.log("Digite o novo Dia do Aniversário da Poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.atualizarConta(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));

                    }
                } else {
                    console.log("Conta não encontrada!");
                }
                keyPress();
            }

            if (opcao === 5) {
                console.log(colors.fg.whitestrong, "\n\nApagar Conta\n\n", colors.reset);
                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt('');

                contas.deletarConta(numero);

                keyPress();
            }

            if (opcao === 6) {
                console.log(colors.fg.whitestrong, "\n\nSacar\n\n", colors.reset);

                keyPress();
            }

            if (opcao === 7) {
                console.log(colors.fg.whitestrong, "\n\nDepositar\n\n", colors.reset);;

                keyPress();
            }

            if (opcao === 8) {
                console.log("Transferir Valores entre Contas");

                keyPress();
            }
        } else {
            console.log("Opção Inválida");

            keyPress();
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


function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
function about() {
    console.log("Obrigado Por usar o Banco Purple")
    console.log("Criado por Gustavo Teles")
}

main();