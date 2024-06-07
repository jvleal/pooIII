import IPaltform from "./interfaces/IPlatform";

export default class Facebook implements IPaltform{
    constructor(){
        this.configureRMTO();
        console.log("Facebook: transmissão iniciada.");
    }

    configureRMTO(): void {
        this.authToken();
        console.log("Facebook: Configurando Broadcasting.");
    }
    authToken(): void {
        console.log("Facebook: Atorizando Aplicação.");
    }

}