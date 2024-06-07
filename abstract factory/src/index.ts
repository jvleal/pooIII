import Client from "./clients/client";
import Company from "./Transport/Company";
import ITransportFactory from "./Transport/interfaces/ITransportFactory";
import NineNineTransport from "./Transport/NineNineTransport";
import UberTransport from "./Transport/UberTransport";

const currenCompany = Company.UBER;
let factory: ITransportFactory;

switch(currenCompany){
    case Company.UBER :
        factory = new UberTransport();
        break
    case Company.NINENINE :
        factory = new NineNineTransport();
        break
    default :
        console.log("Companhia não definida");
}
const client = new Client(factory);
client.startRoute();