import IBuilder from "../builder/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder : IBuilder){}

    constructSCarne(){
        this.builder.setSanduicheType(SanduicheType.SIMPLES);
        this.builder.setBread(Bread.ITALIANO);
        this.builder.setProtein(Protein.CARNE);
        this.builder.addSalad(Salad.TOMATE);
        this.builder.addSalad(Salad.CEBOLA);
        this.builder.addSalad(Salad.PICLES);
        this.builder.addSauce(Sauce.BARBECUE);
        this.builder.addSauce(Sauce.CHIPOTLE);
    }
}