import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente{
    private _nome : string;
    private _cpf : number;
    private _data_nascimento : number;
    private _sexo : string;
    private _endereco : Endereco;
    private _telefone : Telefone[];
}