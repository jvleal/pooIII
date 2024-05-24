import IConsole from "../consoles/interfaces/IConsole";
import IPlay from "./interfaces/IPlay";

export default class Play implements IPlay{
    constructor(private console : IConsole){}
    palying(): void {
        console.log("Carregando o jogo");
    }
    result(): void {
        console.log("****Jogando****");
    }

}