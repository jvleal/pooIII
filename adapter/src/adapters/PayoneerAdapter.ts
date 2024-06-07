import Payoneer from "../payoneer/Payoneer";
import IPaypalPayment from "../paypal/interfaces/IPaypalPayment";
import Token from "../utils/Token";

export default class PayoneerAdapter implements IPaypalPayment{
    private token : Token;
    constructor(private payoneer : Payoneer){
        console.log("")
    }
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.payoneer.sendPayment();
    }
    paypalReceive(): void {
        this.payoneer.recivePayment();
    }

}