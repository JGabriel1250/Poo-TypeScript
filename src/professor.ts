import { Pessoa } from "./pessoa.js";

class Professor extends Pessoa {

    salario: number;
    
    constructor (nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: string[], salario: number) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, endereco);
        this.matricula = this.gerarMatricula();
        this.salario = salario;
    }

    gerarMatricula() {
        return Math.floor(Math.random() * (999999999 - 100000000 + 1) * 100000000);
    }

} export { Professor };