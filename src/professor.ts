import { Pessoa } from "./pessoa.js";

class Professor extends Pessoa {
    
    constructor (matriculo: number, nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: string[]) {
        super(matriculo, nome, sobrenome, sexo, cpf, idade, brasileiro, endereco);
    }
} export { Professor };