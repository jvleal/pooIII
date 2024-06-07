import IAircraft from "./interfaces/IAirCraft";

export default class AirPlane implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Avião: motores ligados")
    }
    getCargo(): void {
        console.log("Avião: Passageiros embarcados");
    }
    checkWind(): void {
        console.log("Avião: ventos a 25KM");
    }

}