import TransportadoraAdapter from "./adapter/TransportadoraAdapter";
import Correios from "./correios/Correios";
import Transportadora from "./transportadora/Transportadora";

const encomenda : Correios = new TransportadoraAdapter(new Transportadora());

encomenda.sendCorreios();
encomenda.reciveCorreios();