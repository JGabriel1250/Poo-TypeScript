import { Emprestimo } from "../biblioteca/emprestimo.js";
import { Endereco } from "../endereco/endereco.js";
import { TecnicoAdministrativo } from "./tecnico-administrativo.js";

export class Bibliotecario extends TecnicoAdministrativo {
    private _CRB: number = 0;

    private _emprestimo: Array<Emprestimo> = [];

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, enderecos: Endereco[], nacionalidade: string, CRB: number) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, enderecos, nacionalidade);
        this._CRB = CRB;
    }

    registrarEmprestimo(emprestimo: Emprestimo): void {
        if(emprestimo.usuario.aptoParaEmprestimo()) {
            this._emprestimo.push(emprestimo);
            console.log(`Empréstimo do livro ${emprestimo.tituloDoLivro} registrado com sucesso para ${emprestimo.usuario.nome}!`);
        } else {
            console.log(`Ação bloqueada: O usuário ${emprestimo.usuario.nome} possui matrícula inativa.`);
        }
    }

    // GETTERS AND SETTERS

    public get CRB(): number {
        return this._CRB;
    }

    public set CRB(value: number) {
        this._CRB = value;
    }

    public get emprestimo(): Array<Emprestimo> {
        return this._emprestimo;
    }
}