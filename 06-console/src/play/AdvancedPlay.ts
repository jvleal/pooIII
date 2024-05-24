import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(console : IConsole){
        super(console);
    }

    mission() : void{
        console.log("Notificações de missão ativadas")
    }

    trophy() : void{
        console.log("Notificações de trofeus ativadas")
    }
}