import IConsole from "./interfaces/IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.configurarGame();
        console.log("PlayStation: jogo iniciado.");
    }
    configurarGame(): void {
        this.authToken();
        console.log("PlayStation: comfigurando o jogo.");
    }
    authToken(): void {
        console.log("PlayStation: Autorizando aplicação.");
    }

}