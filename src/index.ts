import { Pessoa } from "./pessoa/pessoa.js"
import { Aluno, Situacao } from "./aluno/aluno.js"
import { Professor } from "./professor/professor.js"
import { Endereco } from "./endereco/endereco.js";

const endereco01: Endereco = new Endereco("490000", 12, "Rua A", "Bairro A", "Cidade A", "Estado A");
const endereco02: Endereco = new Endereco("470000", 23, "Rua B", "Bairro B", "Cidade B", "Estado B");

const Souza: Aluno = new Aluno("Souza", "José", "M", "123.446.789-00", 34, false, [endereco01], "Bsi", Situacao.FORMANDO);
const Ana: Professor = new Professor("Maria", "Ana", "M", "123.446.789-00", 34, false, [endereco02], 5000);


console.log(Souza.exibirNomeCompleto());
console.log(Souza);
Souza.submeterProjetoPesquisa()
console.log("==".repeat(10));
console.log(Pessoa.getQtdPessoa());

console.log(Ana.exibirNomeCompleto());
console.log(Ana);
Ana.submeterProjetoExtensao()
console.log("==".repeat(10));
console.log(Pessoa.getQtdPessoa());