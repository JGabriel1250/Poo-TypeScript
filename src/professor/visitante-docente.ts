import { Situacao } from "../aluno/aluno.js";
import { Endereco } from "../endereco/endereco.js";
import { Professor } from "./professor.js";

export class VisitanteDocente extends Professor {

    private _instituicaoDeOrigem: string;
    private _areaDeAtuacao: string;
    private _periodoDePermanencia: string;

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: Endereco[], salario: number, instituicaoDeOrigem: string, areaDeAtuacao: string, periodoDePermanencia: string) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, endereco, salario);
        this._instituicaoDeOrigem = instituicaoDeOrigem;
        this._areaDeAtuacao = areaDeAtuacao;
        this._periodoDePermanencia = periodoDePermanencia;
    }

    descreverVinculo(): string {
        return `Professor Visitante - Origem: ${this.instituicaoDeOrigem}, Área: ${this._areaDeAtuacao}`;
    }

    gerarMatricula(): number {
        return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000)
    }

    // GETTERS AND SETTERS

    public get instituicaoDeOrigem(): string {
        return this._instituicaoDeOrigem;
    }

    public set instituicaoDeOrigem(value: string) {
        this._instituicaoDeOrigem = value;
    }

    public get areaDeAtuacao(): string {
        return this._areaDeAtuacao;
    }

    public set areaDeAtuacao(value: string) {
        this._areaDeAtuacao = value;
    }

    public get periodoDePermanencia(): string {
        return this._periodoDePermanencia;
    }

    public set periodoDePermanencia(value: string) {
        this._periodoDePermanencia = value;
    }
    
}