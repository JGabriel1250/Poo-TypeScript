import { Endereco } from "../endereco/endereco.js";
import { TecnicoAdministrativo } from "./tecnico-administrativo.js";

export class Bibliotecario extends TecnicoAdministrativo {
    private _CRB: number = 0;

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, enderecos: Endereco[], nacionalidade: string, CRB: number) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, enderecos, nacionalidade);
        this._CRB = CRB;
    }

    // GETTERS AND SETTERS

    public get CRB(): number {
        return this._CRB;
    }

    public set CRB(value: number) {
        this._CRB = value;
    }
}