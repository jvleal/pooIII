import IAircraft from "./interfaces/IAirCraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicóptero: hélices ligadas")
    }
    getCargo(): void {
        console.log("Helicóptero: Passageiros embarcados");
    }
    checkWind(): void {
        console.log("Helicóptero: ventos a 42Km, Sudoeste");
    }

}