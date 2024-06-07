import Token from "../utils/Token";
import IPaypalPayment from "./interfaces/IPaypalPayment";

export default class PayPal implements IPaypalPayment{
    private token : Token;
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+ this.token.token);
        console.log("");
    }
    paypalReceive(): void {
        console.log("");
    }

}