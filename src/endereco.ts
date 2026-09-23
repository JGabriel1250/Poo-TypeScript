class Endereco {
    _CEP: string = " ";
    _numero: number = 0;
    _rua: string = " ";
    _bairro: string = " ";
    _cidade: string = " ";
    _estado: string = " ";

    constructor(CEP: string, numero: number, rua: string, bairro: string, cidade: string, estado: string) {
        this._CEP = CEP;
        this._numero = numero;
        this._rua = rua;
        this._bairro = bairro;
        this._cidade = cidade;
        this._estado = estado;
    }
} 

export { Endereco };