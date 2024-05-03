import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    startRoute(): void {
        this.checkFood();
        this.getcargo();
        console.log("Hamburguer: iniciando a entrega.");
    }
    getcargo(): void {
        console.log("Hamburguer: comida embalada.");
    }
    checkFood(): void {
        console.log("Hamburguer: a comida está pronta.");
    }

}