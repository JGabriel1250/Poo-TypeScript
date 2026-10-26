import { Endereco } from "../endereco/endereco.js";
import { Aluno, Situacao } from "./aluno.js";

export class VisitanteDiscente extends Aluno {

    private _instituicaoDeOrigem: string;
    private _cursoDeOrigem: string;
    private _periodoDePermanencia: string;

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, endereco: Endereco[], curso: string, situacao: Situacao, instituicaoDeOrigem: string, cursoDeOrigem: string, periodoDePermanencia: string) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, endereco, curso, situacao);
        this._instituicaoDeOrigem = instituicaoDeOrigem;
        this._cursoDeOrigem = cursoDeOrigem;
        this._periodoDePermanencia = periodoDePermanencia;
    }

    descreverVinculo(): string {
        return `Aluno Visitante - Origem: ${this._instituicaoDeOrigem}, Origem: ${this._cursoDeOrigem}, Período: ${this._periodoDePermanencia}`;
    }

    gerarMatricula(): number {
        return Math.floor(Math.random() * (99999 - 10000 + 1) + 10000)
    }

    // GETTERS AND SETTERS

    public get instituicaoDeOrigem(): string {
        return this._instituicaoDeOrigem;
    }

    public set instituicaoDeOrigem(value: string) {
        this._instituicaoDeOrigem = value;
    }

    public get cursoDeOrigem(): string {
        return this._cursoDeOrigem;
    }

    public set cursoDeOrigem(value: string) {
        this._cursoDeOrigem = value;
    }

    public get periodoDePermanencia(): string {
        return this._periodoDePermanencia;
    }

    public set periodoDePermanencia(value: string) {
        this._periodoDePermanencia = value;
    }
}