import IPaltform from "./interfaces/IPlatform";

export default class TwitchTV implements IPaltform{
    constructor(){
        this.configureRMTO();
        console.log("TwitchTV: transmissão iniciada.");
    }

    configureRMTO(): void {
        this.authToken();
        console.log("TwitchTV: Configurando Broadcasting.");
    }
    authToken(): void {
        console.log("TwitchTV: Atorizando Aplicação.");
    }

}