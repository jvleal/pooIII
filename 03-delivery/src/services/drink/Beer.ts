import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startRoute(): void {
        this.getcargo();
        console.log("Beer: iniciando a entrega.");
    }
    getcargo(): void {
        console.log("Beer: bebida retirada.");
    }
}