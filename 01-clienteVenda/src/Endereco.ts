export default class Endereco{
    private _rua : string;
    private _numero : number;
    private _cidade : string;
    private _estado : string;

    constructor(numero: number, rua: string, cidade: string, estado: string) {
        this._numero = numero;
        this._rua = rua;
        this._cidade = cidade;
        this._estado = estado;
    }

    get numero(): number {
        return this._numero;
    }

    set numero(valor: number) {
        this._numero = valor;
    }

    get rua(): string {
        return this._rua;
    }
    
    set rua(rua: string) {
        this._rua = rua;
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