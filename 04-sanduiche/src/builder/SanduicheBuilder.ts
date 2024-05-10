import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sandduiche";
import IBuilder from "./interfaces/IBuilder";

export default class SanduicheBSuilder implements IBuilder{
    private sanduiche = new Sanduiche();
    reset(): void {
        this.sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(value: SanduicheType) {
        this.sanduiche.sanduicheType = value;
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein;
    }
    addSalad(salad: Salad) {
        this.sanduiche.addSalad(salad);
    }
    addSauce(sauce: Sauce) {
        this.sanduiche.addSauce(sauce);
    }

}