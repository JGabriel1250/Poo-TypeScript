import { Pessoa } from "./pessoa.js"

class Aluno extends Pessoa {
    curso: string;
    situacao: string;

    constructor(matriculo: number, nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: string[], curso: string, situacao: string) {
        super(matriculo, nome, sobrenome, sexo, cpf, idade, brasileiro, endereco);
        this.curso = curso;
        this.situacao = situacao;
    }

} export { Aluno }