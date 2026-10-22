import { Endereco } from "../endereco/endereco.js";

export abstract class Pessoa {

    protected _matricula: number = 0;
    protected _nome: string = " ";
    private _sobrenome: string = " ";
    private _sexo: string = " ";
    private _cpf: string = " ";
    private _idade: number = 0;
    private _brasileiro: boolean = true;
    private _endereco: Endereco[] = [];

    private static qtdPessoas: number = 0;

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: Endereco[]) {
        this.matricula = this.gerarMatricula();
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.cpf = cpf;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.endereco = endereco;
        Pessoa.qtdPessoas++;
    }


    public exibirNomeCompleto(): string {
        return (`Nome completo: ${this.nome} ${this.sobrenome}`);
    }

    public recuperarEndereco(posicao: number): Endereco | undefined {
        return this.endereco[posicao];
    }

    static getQtdPessoa(): number {
        return Pessoa.qtdPessoas;
    }

    protected abstract gerarMatricula(): number;


    // GETTERS AND SETTERS

    public get matricula(): number {
        return this._matricula;
    }

    protected set matricula(valor: number) {
        this._matricula = valor;
    }

    public get nome(): string {
        return this._nome;
    }

    protected set nome(valor: string) {
        this._nome = valor;
    }

    public get sobrenome(): string {
        return this._sobrenome;
    }

    public set sobrenome(value: string) {
        this._sobrenome = value;
    }

    public get sexo(): string {
        return this._sexo;
    }

    public set sexo(value: string) {
        this._sexo = value;
    }

    public get cpf(): string {
        return this._cpf;
    }

    public set cpf(valor: string) {
        let padraoCPF: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;

        if (padraoCPF.test(valor)) {
            this._cpf = valor;
        } else {
            throw Error("CPF Inválido");
        }
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(value: number) {
        this._idade = value;
    }

    public get brasileiro(): boolean {
        return this._brasileiro;
    }

    public set brasileiro(value: boolean) {
        this._brasileiro = value;
    }

    public get endereco(): Endereco[] {
        return this._endereco;
    }
    public set endereco(value: Endereco[]) {
        this._endereco = value;
    }

}