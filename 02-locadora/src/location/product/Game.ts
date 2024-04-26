import IProduct from "./interface/IProduct";

export default class Game implements IProduct{
    start(): void {
        this.getDescripition;
        console.log("Jogo: item alugado");
    }
    getDescripition(): void {
        console.log("Jogo: Item selecionado");
    }
}