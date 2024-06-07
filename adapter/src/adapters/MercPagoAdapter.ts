import MercPago from "../mercadopago/MercPago";
import IPaypalPayment from "../paypal/interfaces/IPaypalPayment";
import Token from "../utils/Token";

export default class MercPagoAdapter implements IPaypalPayment{
    private token : Token;
    constructor(private mercPago : MercPago){
        console.log("Paypal para MercadoPago")
    }
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        return this.mercPago.sendPayment();
    }
    paypalReceive(): void {
        return this.mercPago.recivePayment();
    }

}