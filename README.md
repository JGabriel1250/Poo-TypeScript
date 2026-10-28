# Projeto POO - TypeScript | Avaliação Prática

Repositório desenvolvido para a avaliação da primeira prova da disciplina de **Programação Orientada a Objetos (POO)** do curso de Bacharelado em Sistemas de Informação (BSI) do **Instituto Federal de Sergipe (IFS) - Campus Lagarto**, ministrada pelo professor **Diego**.

---

## 🎯 Sobre o Projeto

Este projeto tem como objetivo aplicar os principais fundamentos e conceitos do paradigma orientado a objetos utilizando **TypeScript** com módulos ES (`.js` nas importações) e execução via `tsx`. O sistema modela o domínio acadêmico de uma instituição de ensino, abrangendo gestão de pessoas (alunos, professores, técnicos administrativos e visitantes), campus, eventos acadêmicos e um sistema polimórfico de controle de empréstimos em bibliotecas.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **TypeScript** (Linguagem principal)
* **Node.js** (Ambiente de execução)
* **TSX** (Execução direta de arquivos TypeScript)
* **Git e GitHub** (Controle de versão)

---

## 📂 Estrutura de Diretórios

O projeto está modularizado de forma a separar responsabilidades em pastas coerentes com o domínio acadêmico:

```text
src/
├── aluno/              # Classes Aluno, VisitanteDiscente e Enum Situacao
├── biblioteca/         # Classe Emprestimo de livros
├── campus/             # Classe Campus e regras de alocação
├── endereco/           # Classe Endereco
├── evento/             # Classes Evento e TipoEvento
├── pessoa/             # Classe abstrata base Pessoa
├── professor/          # Classes Professor e VisitanteDocente
├── projeto/            # Interface Projeto (pesquisa e extensão)
├── tecnico-administrativo/ # Classes TecnicoAdministrativo, Bibliotecario e Psicologo
└── index.ts            # Arquivo principal para testes e simulações
🚀 Principais Requisitos Implementados
Abstração e Herança: Uso de classes abstratas (Pessoa, TecnicoAdministrativo) e herança para reutilização de código e estruturação de perfis acadêmicos específicos.

Encapsulamento: Atributos privados controlados rigidamente por métodos GET e SET.

Polimorfismo: Implementação do método abstrato aptoParaEmprestimo() na superclasse Pessoa, permitindo que o Bibliotecario processe transações de empréstimo de forma totalmente agnóstica em relação ao tipo de usuário (cada subclasse gerencia a sua própria regra de negócio, como validação de matrícula ativa/trancada).

Regras de Negócio e Associações:

Restrição de alocação de um professor a um único campus.

Geração de matrículas personalizadas e distintas para membros regulares e visitantes (discentes e docentes).

Inscrição única de participantes em eventos acadêmicos.

⚙️ Como Executar o Projeto
Certifique-se de ter o Node.js instalado na sua máquina.

Instancie as dependências do projeto na raiz:

Bash
npm install
Execute o arquivo de testes (index.ts) utilizando o tsx:

Bash
npx tsx src/index.ts
Desenvolvido por José Gabriel Souza de Lisboa Nascimento — Bacharelado em Sistemas de Informação (IFS Campus Lagarto).
