import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startRoute(): void {
        this.getcargo();
        console.log("Soft Drink: iniciando a entrega.");
    }
    getcargo(): void {
        console.log("Soft Drink: bebida retirada.");
    }
}