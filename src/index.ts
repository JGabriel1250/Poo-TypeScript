import { Endereco } from "./endereco/endereco.js";
import { Aluno, Situacao } from "./aluno/aluno.js";
import { Professor } from "./professor/professor.js";
import { Bibliotecario } from "./tecnico-administrativo/bibLiotecario.js";
import { Emprestimo } from "./biblioteca/emprestimo.js";

// 1. Instanciando Endereços
const endereco01 = new Endereco("490000", 12, "Rua A", "Bairro A", "Cidade A", "Estado A");
const endereco02 = new Endereco("470000", 23, "Rua B", "Bairro B", "Cidade B", "Estado B");

// 2. Instanciando Usuários com regras diferentes
const alunoAtivo = new Aluno("Souza", "José", "M", "123.446.789-00", 20, true, [endereco01], "BSI", Situacao.ATIVO);
const alunoTrancado = new Aluno("Silva", "João", "M", "111.222.333-44", 22, true, [endereco01], "BSI", Situacao.TRANCADO);
const professor = new Professor("Maria", "Ana", "F", "999.888.777-66", 34, true, [endereco02], 5000);

// 3. Instanciando o funcionário responsável
const bibliotecario = new Bibliotecario("Santos", "Carlos", "M", "555.444.333-22", 40, true, [endereco01], "Brasileiro", 1234);

// 4. Testes Iniciais
console.log("=== DADOS BÁSICOS ===");
console.log(alunoAtivo.exibirNomeCompleto());
alunoAtivo.submeterProjetoPesquisa();
console.log(professor.exibirNomeCompleto());
professor.submeterProjetoExtensao();
console.log("=====================\n");

// 5. Teste de Polimorfismo na Biblioteca
console.log("=== TESTE DO SISTEMA DE BIBLIOTECA ===");

const emp1 = new Emprestimo("Padrões de Projeto", alunoAtivo, endereco01, "26/10/2026", "10/11/2026");
const emp2 = new Emprestimo("Clean Code", alunoTrancado, endereco01, "26/10/2026", "10/11/2026");
const emp3 = new Emprestimo("Arquitetura Limpa", professor, endereco01, "26/10/2026", "15/11/2026");

// O bibliotecário processa sem "saber" quem é o usuário
bibliotecario.registrarEmprestimo(emp1); // Esperado: Sucesso
bibliotecario.registrarEmprestimo(emp2); // Esperado: Bloqueado
bibliotecario.registrarEmprestimo(emp3); // Esperado: Sucesso