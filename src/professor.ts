import { Endereco } from "./endereco.js";
import { Pessoa } from "./pessoa.js";
import { Projeto } from "./projeto.js";

class Professor extends Pessoa implements Projeto {

    salario: number;
    
    constructor (nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: Endereco[], salario: number) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, endereco);
        this.matricula = this.gerarMatricula();
        this.salario = salario;
    }

    gerarMatricula() {
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