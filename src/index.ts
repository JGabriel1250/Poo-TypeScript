import { Pessoa } from "./pessoa.js"
import { Aluno } from "./aluno.js"
import { Professor } from "./professor.js"

const Souza: Aluno = new Aluno("Souza", "José", "M", "12344678900", 34, false, ["Rua B"], "Bsi", "Aprovado");
const Ana: Professor = new Professor("Maria", "Ana", "M", "12344678900", 34, false, ["Rua B"], 5000);


console.log(Souza.exibirNomeCompleto());
console.log(Souza);
console.log("==".repeat(10));
console.log(Pessoa.getQtdPessoa());

console.log(Ana.exibirNomeCompleto());
console.log(Ana);
console.log("==".repeat(10));
console.log(Pessoa.getQtdPessoa());