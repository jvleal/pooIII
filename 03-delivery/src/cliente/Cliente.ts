import IDeliveryFactory from "../delivery/Interfaces/IDeliveryFactory";
import IDrink from "../services/drink/interfaces/IDrink";
import IFood from "../services/food/interfaces/IFood";

export default class Cliente{
    private food: IFood;
    private drink: IDrink;

    constructor(factory: IDeliveryFactory){
        this.food = factory.createDeliveryFood();
        this.drink = factory.createDeliveryDrink();
    }

    startDelivery() : void{
        this.food.startRoute();
        this.drink.startRoute();
    }
}