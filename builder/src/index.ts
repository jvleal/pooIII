import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director : Director = new Director(builder);

director.constructSedanCar();
const sedan : Vehicle = builder.getVehicle();
console.log("Construindo Veiculo ...");
console.log("Tipo: "+sedan.vehicleType);
console.log("potência: "+sedan.engine.power);