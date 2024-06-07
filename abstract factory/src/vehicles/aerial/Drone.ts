import IAircraft from "./interfaces/IAirCraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: iniciando a entrga");
    }
    getCargo(): void {
        console.log("Drone: encomenda retirada.");
    }
    checkWind(): void {
        console.log("Drone: ventos a 20Km, noroeste.");
    }

}