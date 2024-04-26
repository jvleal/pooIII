import Location from "./Location";
import Game from "./product/Game";
import IProduct from "./product/interface/IProduct";

export default class GameLocation extends Location{
    protected createItem(): IProduct {
        return new Game();
    }

}