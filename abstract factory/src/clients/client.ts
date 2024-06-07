import ITransportFactory from "../Transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAirCraft";
import ILandVehicles from "../vehicles/land/interfaces/ILandVehicles";

export default class Client{
    private vehicle : ILandVehicles;
    private airCraft : IAircraft;

    constructor(factory : ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.airCraft = factory.createTransportAircraft();
    }

    startRoute() : void{
        this.vehicle.startRoute();
        this.airCraft.startRoute();
    }
}