class Pessoa {

    nome: string;
    sobrenome: string;
    idade: number;
    brasileiro: boolean;
    endereco: string[];

    constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, endereco: string[]) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.endereco = endereco;
    }

    exibirNomeCompleto(): string {
        return (`Nome completo: ${this.nome} ${this.sobrenome}`);
    } 

    recuperarEndereco(posicao: number): string {
        return this.endereco[posicao] ?? "";
    }
}

export { Pessoa };