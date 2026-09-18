class Pessoa {

    nome: string;
    sobrenome: string;
    idade: number;
    brasileiro: boolean;
    endereco: string[];

    static qtdPessoas: number = 0;

    constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, endereco: string[]) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.endereco = endereco;
        Pessoa.qtdPessoas++;
    }

    exibirNomeCompleto(): string {
        return (`Nome completo: ${this.nome} ${this.sobrenome}`);
    } 

    recuperarEndereco(posicao: number): string {
        return this.endereco[posicao] ?? "";
    }

    
    static getQtdPessoa() : number {
        return Pessoa.qtdPessoas;
    }
    
}

export { Pessoa };