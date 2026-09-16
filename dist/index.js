"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nome;
let sobrenome;
let nomeCompleto;
let idade;
let brasileiro;
let endereco;
nome = "Will";
sobrenome = "Smith";
nomeCompleto = nome + " " + sobrenome;
idade = 43;
brasileiro = false;
endereco = ["Aracaju", "Rua B", "Tobias"];
let exibirNomeCompleto = function () {
    return nomeCompleto;
};
let recuperarEndereco = function (posicao) {
    return endereco[posicao] ?? "";
};
console.log(exibirNomeCompleto());
console.log(recuperarEndereco(1));
//# sourceMappingURL=index.js.map