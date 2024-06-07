import PayoneerAdapter from "./adapters/PayoneerAdapter";
import Payoneer from "./payoneer/Payoneer";
import IPaypalPayment from "./paypal/interfaces/IPaypalPayment";
import PayPal from "./paypal/PayPal";

const payment : IPaypalPayment = new PayoneerAdapter(new Payoneer());

payment.paypalPayment();
payment.paypalReceive();