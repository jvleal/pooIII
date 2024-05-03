import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    startRoute(): void {
        this.checkFood();
        this.getcargo();
        console.log("Hotdog: iniciando a entrega.");
    }
    getcargo(): void {
        console.log("Hotdog: comida embalada.");
    }
    checkFood(): void {
        console.log("Hotdog: a comida está pronta.");
    }

}