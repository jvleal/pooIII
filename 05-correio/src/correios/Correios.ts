import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{
    sendCorreios() {
        console.log("Correio enviado!");
    }
    reciveCorreios() {
        console.log("Correio recebido!");
    }

}