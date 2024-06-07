import IPaltform from "../platforms/interfaces/IPlatform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(paltform: IPaltform){
        super(paltform);
    }
    
    subtitles() : void{
        console.log("Legendas ativadas na Transmissão");
    }

    comments() : void{
        console.log("Comentarios Liberados");
    }
}