import IDrink from "../services/drink/interfaces/IDrink";
import SoftDrink from "../services/drink/SoftDrink";
import HotDog from "../services/food/HotDog";
import IFood from "../services/food/interfaces/IFood";
import IDeliveryFactory from "./Interfaces/IDeliveryFactory";

export default class FoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }
}