class Endereco {
    private _CEP: string = " ";
    private _numero: number = 0;
    private _rua: string = " ";
    private _bairro: string = " ";
    private _cidade: string = " ";
    private _estado: string = " ";

    constructor(CEP: string, numero: number, rua: string, bairro: string, cidade: string, estado: string) {
        this._CEP = CEP;
        this._numero = numero;
        this._rua = rua;
        this._bairro = bairro;
        this._cidade = cidade;
        this._estado = estado;
    }

    get CEP(): string {
        return this._CEP;
    }

    set CEP(CEP: string) {
        this._CEP = CEP;
    }

    get numero(): number {
        return this._numero;
    }

    set numero(numero: number) {
        this._numero = numero;
    }

    get rua(): string {
        return this._rua;
    }

    set rua(rua: string) {
        this._rua = rua;
    }

    get bairro(): string {
        return this._bairro;
    }

    set bairro(bairro: string) {
        this._bairro = bairro;
    }

    get cidade(): string {
        return this._cidade;
    }

    set cidade(cidade: string) {
        this._cidade = cidade;
    }

    get estado(): string {
        return this._estado;
    }

    set estado(estado: string) {
        this._estado = estado;
    }
} 

export { Endereco };