import Token from "../utils/Token";
import IMercPago from "./interfaces/IMercPago";

export default class MercPago implements IMercPago{
    private token : Token;
    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: "+ this.token.token);
    }
    recivePayment(): void {
        throw new Error("Method not implemented.");
    }

}