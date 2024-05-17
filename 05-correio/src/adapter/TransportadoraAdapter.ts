import ICorreios from "../correios/interfaces/ICorreios";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreios{
    constructor(private transportadora : Transportadora){
        console.log("Correio p Transportadora");
    }
    sendCorreios() {
        return this.transportadora.send();
    }
    reciveCorreios() {
        return this.transportadora.recive();
    }
}