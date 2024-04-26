import IProduct from "./product/interface/IProduct";

export default abstract class Location{
    startItem() : void{
        const product = this.createItem();
        product.start();
    }

    protected abstract createItem() : IProduct;
}