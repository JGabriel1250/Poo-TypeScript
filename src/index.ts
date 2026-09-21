import { Pessoa } from "./pessoa.js"
import { Aluno } from "./aluno.js"

const diego: Pessoa = new Pessoa(100, "Diego", "Souza", "M", "12345678900", 45, true, ["Rua A"]);
const Souza: Aluno = new Aluno(200, "Souza", "José", "M", "12344678900", 34, false, ["Rua B"], "Bsi", "Aprovado");


console.log(diego.exibirNomeCompleto());
console.log("==".repeat(10));
console.log(Pessoa.getQtdPessoa());

console.log(Souza.exibirNomeCompleto());
console.log("==".repeat(10));
console.log(Pessoa.getQtdPessoa());