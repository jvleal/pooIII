import Drone from "../vehicles/aerial/Drone";
import IAircraft from "../vehicles/aerial/interfaces/IAirCraft";
import ILandVehicles from "../vehicles/land/interfaces/ILandVehicles";
import Scoter from "../vehicles/land/Scoter";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class InDrive implements ITransportFactory{
    createTransportVehicle(): ILandVehicles {
        return new Scoter();
    }

    createTransportAircraft(): IAircraft {
        return new Drone();
    }
}