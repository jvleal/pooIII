import IProduct from "./interface/IProduct";

export default class Movie implements IProduct{
    start(): void {
        this.getDescripition;
        console.log("Filme: item alugado");
    }
    getDescripition(): void {
        console.log("filme: Item selecionado");
    }
}