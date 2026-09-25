import { Endereco } from "../endereco/endereco.js";
import { Pessoa } from "../pessoa/pessoa.js";
import { Projeto } from "../projeto/projeto.js";

class Professor extends Pessoa implements Projeto {

    private _salario: number = 0;


    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: Endereco[], salario: number) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, endereco);
        this.matricula = this.gerarMatricula();
        this.salario = salario;
    }

    public get salario(): number {
        return this._salario;
    }

    public set salario(value: number) {
        this._salario = value;
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

}

export { Professor };