import { Pessoa } from "./pessoa.js"

const diego: Pessoa = new Pessoa("Diego", "Souza", 45, true, ["Rua A"]);

console.log(diego.exibirNomeCompleto());
console.log(diego.recuperarEndereco(0));