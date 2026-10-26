import { Endereco } from "../endereco/endereco.js";
import { TecnicoAdministrativo } from "./tecnico-administrativo.js";

export class Psicologo extends TecnicoAdministrativo {

    private _CRP: number = 0;

    constructor(nome: string, sobrenome: string, sexo: string, cpf: string, idade: number, brasileiro: boolean, enderecos: Endereco[], nacionalidade: string, CRP: number) {
        super(nome, sobrenome, sexo, cpf, idade, brasileiro, enderecos, nacionalidade);
        this._CRP = CRP;
        
    }
    

    // GETTERS AND SETTERS

    public get CRP(): number {
        return this._CRP;
    }

    public set CRP(value: number) {
        this._CRP = value;
    }

}