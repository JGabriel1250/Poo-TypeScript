import { Endereco } from "./endereco.js";
import { Pessoa } from "./pessoa.js"
import { Projeto } from "./projeto.js";

class Aluno extends Pessoa implements Projeto {
    curso: string;
    situacao: Situacao;

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: Endereco[], curso: string, situacao: Situacao) {
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

    submeterProjetoPesquisa(): void {
        console.log("Isso é uma submissão de projeto de pesquisa de aluno");
    }
    submeterProjetoExtensao(): void {
        console.log("Isso é uma submissão de projeto de pesquisa de aluno");
    }

} 

enum Situacao {
    ATIVO = "Ativo",
    MATRICULADO = "Matriculado",
    TRANCADO = 'Trancado',
	CONCLUIDO = 'Concluído',
	CANCELADO = 'Cancelado',
	FORMANDO = 'Formando' 
}

export { Aluno, Situacao }