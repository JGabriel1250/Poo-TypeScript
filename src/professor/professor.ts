import { Campus } from "../campus/campus.js";
import { Endereco } from "../endereco/endereco.js";
import { Pessoa } from "../pessoa/pessoa.js";
import { Projeto } from "../projeto/projeto.js";

export class Professor extends Pessoa implements Projeto {

    private _salario: number = 0;
    private _campus?: Campus;

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: Endereco[], salario: number) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, endereco);
        this.matricula = this.gerarMatricula();
        this.salario = salario;
    }

    protected gerarMatricula() {
        return Math.floor(Math.random() * (999999999 - 100000000 + 1) * 100000000);
    }

    submeterProjetoPesquisa(): void {
        console.log("Isso é uma submissão de projeto de pesquisa de professor.");
    }
    submeterProjetoExtensao(): void {
        console.log("Isso é uma submissão de projeto de pesquisa de professor.");
    }

<<<<<<< HEAD
    public aptoParaEmprestimo(): boolean {
        return true;
=======
    descreverVinculo(): string {
        return `Professor Regular - Campus: ${this.campus?.nome || "Não Alocado"} `;
>>>>>>> 9981b5922449549f7973ba14b250dfd2080edb88
    }

    // GETTERS AND SETTERS

    public get salario(): number {
        return this._salario;
    }

    public set salario(value: number) {
        this._salario = value;
    }

    public get campus(): Campus | undefined {
        return this._campus;
    }

    public set campus(value: Campus) {
        this._campus = value;
    }
}