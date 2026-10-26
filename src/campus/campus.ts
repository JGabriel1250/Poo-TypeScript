import { Aluno } from "../aluno/aluno.js";
import { Endereco } from "../endereco/endereco.js";
import { Professor } from "../professor/professor.js";
import { TecnicoAdministrativo } from "../tecnico-administrativo/tecnico-administrativo.js";

export class Campus {

    private _nome: string = ' ';
    private _endereco!: Endereco;
    private _alunos: Array<Aluno> = [];
    private _professores: Array<Professor> = [];
    private _tecnicosAdministrativos: Array<TecnicoAdministrativo> = [];

    constructor(nome: string, endereco: Endereco, alunos: Array<Aluno>, professores: Array<Professor>, tecnicosAdministrativos: Array<TecnicoAdministrativo>) {
        this._nome = nome;
        this._endereco = endereco;
        this._alunos = alunos;
        this._professores = professores;
        this._tecnicosAdministrativos = tecnicosAdministrativos; 
    }

    adicionarprofessor(professor: Professor): void {

        if (professor.campus !== undefined && professor.campus !== this) {
            throw new Error ("O professor já está alocado a outro campus.");
        }

        professor.campus = this;

        if (!this._professores.includes(professor)) {
            this._professores.push(professor);
        }
    }

    listarprofessores() : void {

        console.log(`Professores do campus ${this.nome}`);

        this._professores.forEach(pf => {
            console.log(`Nome: ${pf.nome} ${pf.sobrenome} | Matrícula: ${pf.matricula} | Vínculo: ${pf.descreverVinculo()}`)
        });
     }

    // GETTER AND SETTERS

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get endereco(): Endereco {
        return this._endereco;
    }

    public set endereco(value: Endereco) {
        this._endereco = value;
    }

    public get alunos(): Array<Aluno> {
        return this._alunos;
    }

    public set alunos(value: Array<Aluno>) {
        this._alunos = value;
    }

    public get professores(): Array<Professor> {
        return this._professores;
    }

    public set professores(value: Array<Professor>) {
        this._professores = value;
    }

    public get tecnicosAdministrativos(): Array<TecnicoAdministrativo> {
        return this._tecnicosAdministrativos;
    }

    public set tecnicosAdministrativos(value: Array<TecnicoAdministrativo>) {
        this._tecnicosAdministrativos = value;
    }
}