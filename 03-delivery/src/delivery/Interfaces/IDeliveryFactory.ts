import IDrink from "../../services/drink/interfaces/IDrink";
import IFood from "../../services/food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryFood(): IFood;
    createDeliveryDrink(): IDrink;
}