import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda {
    private _codigo : number;
    private _data : number;
    private _cliente : Cliente;
    private _produto : Produto[];
}