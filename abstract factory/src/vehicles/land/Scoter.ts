import ILandVehicles from "./interfaces/ILandVehicles";

export default class Scoter implements ILandVehicles{
    startRoute(): void {
        this.gatCargo();
        console.log("Scuter: iniciando a entrega")
    }
    gatCargo(): void {
        console.log("Scuter: encomenda retirada");
    }

}