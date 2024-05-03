import Beer from "../services/drink/Beer";
import IDrink from "../services/drink/interfaces/IDrink";
import Hamburguer from "../services/food/Hamburguer";
import IFood from "../services/food/interfaces/IFood";
import IDeliveryFactory from "./Interfaces/IDeliveryFactory";

export default class AiQFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
}