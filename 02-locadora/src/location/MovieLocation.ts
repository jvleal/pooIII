import Location from "./Location";
import IProduct from "./product/interface/IProduct";
import Movie from "./product/Movie";

export default class MovieLocation extends Location{
    protected createItem(): IProduct {
        return new Movie();
    }

}