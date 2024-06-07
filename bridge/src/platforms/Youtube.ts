import IPaltform from "./interfaces/IPlatform";

export default class Youtube implements IPaltform{
    constructor(){
        this.configureRMTO();
        console.log("Youtube: transmissão iniciada.");
    }

    configureRMTO(): void {
        this.authToken();
        console.log("Youtube: Configurando Broadcasting.");
    }
    authToken(): void {
        console.log("Youtube: Atorizando Aplicação.");
    }

}