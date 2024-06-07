import Token from "../../utils/Token";

export default interface IMercPago{
    authToken() : Token;
    sendPayment(): void;
    recivePayment(): void;
}