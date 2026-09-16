let nome: string;
let sobrenome: string;
let nomeCompleto: string;
let idade: number;
let brasileiro: boolean;
let endereco: string[];

nome = "Will";
sobrenome = "Smith";
nomeCompleto = nome + " " + sobrenome;
idade = 43;
brasileiro = false;
endereco = ["Aracaju", "Rua B", "Tobias"];

let exibirNomeCompleto = function(): string {
    return nomeCompleto;
} 

let recuperarEndereco = function(posicao: number): string {
    return endereco[posicao] ?? "";
}

console.log(exibirNomeCompleto());
console.log(recuperarEndereco(1));