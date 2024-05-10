import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Sanduiche{
    private _SanduicheType: SanduicheType;
    sanduicheType: any;
    public get SanduicheType_1(): SanduicheType {
        return this._SanduicheType;
    }
    public set SanduicheType_1(value: SanduicheType) {
        this._SanduicheType = value;
    }

    private _bread: Bread;
    public get bread(): Bread {
        return this._bread;
    }
    public set bread(value: Bread) {
        this._bread = value;
    }

    private _protein: Protein;
    public get protein(): Protein {
        return this._protein;
    }
    public set protein(value: Protein) {
        this._protein = value;
    }

    private _salad: Salad[] = [];
    addSalad(salad : Salad){
        this._salad.push(salad);
    }
    public get salad(): Salad[] {
        return this._salad;
    }
    public set salad(value: Salad[]) {
        this._salad = value;
    }
    

    private _sauce: Sauce[] = [];
    addSauce(sauce : Sauce){
        this._sauce.push(sauce);
    }
    public get sauce(): Sauce[] {
        return this._sauce;
    }
    public set sauce(value: Sauce[]) {
        this._sauce = value;
    }
    
}