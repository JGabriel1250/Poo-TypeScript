import { Endereco } from "./endereco.js";

abstract class Pessoa {

    matricula: number = 0;
    nome: string = " ";
    sobrenome: string = " ";
    sexo: string = " ";
    cpf: string = " ";
    idade: number = 0;
    brasileiro: boolean = true;
    endereco: Endereco[] = [];

    static qtdPessoas: number = 0;

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: Endereco[]) {
        this.matricula = this.gerarMatricula();
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.cpf = cpf;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.endereco = endereco;
        Pessoa.qtdPessoas++;
    }

    exibirNomeCompleto(): string {
        return (`Nome completo: ${this.nome} ${this.sobrenome}`);
    }

    recuperarEndereco(posicao: number): Endereco | undefined {
        return this.endereco[posicao];
    }

    static getQtdPessoa(): number {
        return Pessoa.qtdPessoas;
    }

    abstract gerarMatricula(): number;

}

export { Pessoa };