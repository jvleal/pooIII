import ILandVehicles from "./interfaces/ILandVehicles";

export default class Motorcycle implements ILandVehicles{
    startRoute(): void {
        this.gatCargo();
        console.log("Moto: iniciando a entrega");
    }
    gatCargo(): void {
        console.log("Moto: encomenda retirada");
    }

}