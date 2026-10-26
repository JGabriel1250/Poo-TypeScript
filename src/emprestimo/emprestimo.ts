import { Endereco } from "../endereco/endereco.js";
import { Pessoa } from "../pessoa/pessoa.js";

export class Emprestimo {

    private _tituloDoLivro: string;
    private _usuario: Pessoa;
    private _enderecoUnidade: Endereco;
    private _dataEmprestimo: string;
    private _dataDevolucao: string;

    constructor(titulloDoLivro: string, usuario: Pessoa, enderecoUnidade: Endereco, dataEmprestimo: string, dataDevolucao: string) {
        this._tituloDoLivro = titulloDoLivro;
        this._usuario = usuario;
        this._enderecoUnidade = enderecoUnidade;
        this._dataEmprestimo = dataEmprestimo;
        this._dataDevolucao = dataDevolucao;
    }

    // GETTERS AND SETTERS

    public get tituloDoLivro(): string {
        return this._tituloDoLivro;
    }

    public set tituloDoLivro(value: string) {
        this._tituloDoLivro = value;
    }

    public get usuario(): Pessoa {
        return this._usuario;
    }

    public set usuario(value: Pessoa) {
        this._usuario = value;
    }

    public get enderecoUnidade(): Endereco {
        return this._enderecoUnidade;
    }

    public set enderecoUnidade(value: Endereco) {
        this._enderecoUnidade = value;
    }

    public get dataEmprestimo(): string {
        return this._dataEmprestimo;
    }

    public set dataEmprestimo(value: string) {
        this._dataEmprestimo = value;
    }

    public get dataDevolucao(): string {
        return this._dataDevolucao;
    }

    public set dataDevolucao(value: string) {
        this._dataDevolucao = value;
    }

} 