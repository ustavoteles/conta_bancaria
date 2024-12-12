import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    private _aniversario: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, aniversario: number) {
        super(numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
    }

    public get aniversario(): number {

        return this._aniversario;
    }

    public set aniversario(value: number) {
        if (value < 1 || value > 31) {
            throw new Error("O aniversário deve ser um número entre 1 e 31")
        }
        this._aniversario = value;
    }

    public visualizar() {
        super.visualizar();
        console.log(`Aniversário da conta é dia: ${this._aniversario}`);
    }
}