import { Pessoa } from "./pessoa.js"

class Aluno extends Pessoa {
    curso: string;
    situacao: string;

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: string[], curso: string, situacao: string) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, endereco);
        this.matricula = this.gerarMatricula();
        this.curso = curso;
        this.situacao = situacao;
    }

    gerarMatricula(): number {
        let ano: number = new Date().getFullYear();
        let numero: number = Math.floor(Math.random() * (9999 - 1000 + 1) * 1000);
        return Number(`${ano}${numero}`);
    }

} export { Aluno }