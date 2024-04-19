export default class Produto {
    private _codigo : number;
    private _descricao : string;
    private _valor : number;

    constructor(descricao: string, codigo: number, valor: number) {
        this._descricao = descricao;
        this._codigo = codigo;
        this._valor = valor;
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(descricao: string) {
        this._descricao = descricao;
    }
    

    get codigo(): number {
        return this._codigo;
    }

    set codigo(codigo: number) {
        this._codigo = codigo;
    }

    // Método get
    get valor(): number {
        return this._valor;
    }

    // Método set
    set valor(valor: number) {
        this._valor = valor;
    }
}