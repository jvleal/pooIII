import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole{
    constructor(){
        this.configurarGame();
        console.log("Xbox: jogo iniciado.");
    }
    configurarGame(): void {
        this.authToken();
        console.log("Xbox: comfigurando o jogo.");
    }
    authToken(): void {
        console.log("Xbox: Autorizando aplicação.");
    }

}