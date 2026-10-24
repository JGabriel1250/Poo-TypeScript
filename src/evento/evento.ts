import { Endereco } from "../endereco/endereco.js";
import { Pessoa } from "../pessoa/pessoa.js";
import { TipoEvento } from "./tipoEvento.js";

export class Evento {

    private _nome: string;
    private _tipoEvento: TipoEvento;
    private _endereco: Endereco;
    private _participantes: Array<Pessoa> = [];

    constructor(nome: string, tipoEvento: TipoEvento, endereco: Endereco) {
        this._nome = nome;
        this._tipoEvento = tipoEvento;
        this._endereco = endereco;

    }

    adicionarParticipante(participante: Pessoa): void {

        if (!this._participantes.includes(participante)) {
            this._participantes.push(participante);
            participante.adicionarEvento(this);
        }

    }

    listarParticipantes(): void {

        console.log(`\nParticipantes inscritos no evento ${this._nome}:`);
        this._participantes.forEach(participante => {
            console.log(` - ${participante.nome} | Matrícula: ${participante.matricula}`)
        });
    }

    // GETTERS AND SETTERS

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get tipoEvento(): TipoEvento {
        return this._tipoEvento;
    }

    public set tipoEvento(value: TipoEvento) {
        this._tipoEvento = value;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }

    public set endereco(value: Endereco) {
        this._endereco = value;
    }

    public get participantes(): Array<Pessoa> {
        return this._participantes;
    }

}