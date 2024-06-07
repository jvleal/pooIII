import ILandVehicles from "./interfaces/ILandVehicles";

export default class Car implements ILandVehicles{
    startRoute(): void {
        this.gatCargo();
        console.log("Carro: iniciando Transporte")
    }
    gatCargo(): void {
        console.log("Carro: pasageiros embarcados");
    }

}