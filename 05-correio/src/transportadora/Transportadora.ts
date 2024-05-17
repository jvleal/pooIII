import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora{
    send() {
        console.log("Encomenda enviada!");
    }
    recive() {
        console.log("Encomenda recebida!");
    }

}