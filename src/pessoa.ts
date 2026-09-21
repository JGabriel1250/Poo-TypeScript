class Pessoa {

    matricula: number = 0;
    nome: string = " ";
    sobrenome: string = " ";
    sexo: string = " ";
    cpf: string = " ";
    idade: number = 0;
    brasileiro: boolean = true;
    endereco: string[] = [];

    static qtdPessoas: number = 0;

    constructor(matriculo: number, nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: string[]) {
        this.matricula = matriculo;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.cpf = cpf;
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