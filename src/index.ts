import { Pessoa } from "./pessoa.js"

const diego: Pessoa = new Pessoa("Diego", "Souza", 45, true, ["Rua A"]);
const Souza: Pessoa = new Pessoa("Souza", "José", 34, false, ["Rua B"]);
const Ana: Pessoa = new Pessoa("Ana" ,"Lisboa", 30, true, ["Rua C"]);

console.log(diego.exibirNomeCompleto());
console.log(Souza.exibirNomeCompleto());
console.log(Ana.exibirNomeCompleto());
console.log(Pessoa.getQtdPessoa())