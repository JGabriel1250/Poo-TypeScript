import { Endereco } from "../endereco/endereco.js";
import { Pessoa } from "../pessoa/pessoa.js";

export abstract class TecnicoAdministrativo extends Pessoa {

    private _nacionalidade: string;

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, enderecos: Endereco[], nacionalidade: string) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, enderecos);
        this._nacionalidade = nacionalidade;
        this._matricula = this.gerarMatricula();
    }

    protected gerarMatricula(): number {
        return Math.floor(Math.random() * 9000) + 1000;
    }



    // GETTER AND SETTERS

    public get nacionalidade(): string {
        return this._nacionalidade;
    }

    public set nacionalidade(value: string) {
        this._nacionalidade = value;
    }
    
}