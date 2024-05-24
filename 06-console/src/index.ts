import IConsole from "./consoles/interfaces/IConsole";
import PlayStation from "./consoles/PlayStation";
import Xbox from "./consoles/Xbox";
import AdvancedPlay from "./play/AdvancedPlay";
import Play from "./play/Play";

function startPlay(pconsole : IConsole){
    console.log("aguarde");
    const play = new Play(pconsole);
    play.palying();
    play.result();
}

function startAdvancedPlay(pconsole : IConsole){
    console.log("aguarde");
    const play = new AdvancedPlay(pconsole);
    play.palying();
    play.mission();
    play.trophy();
    play.result();
}
startPlay(new PlayStation());
startAdvancedPlay(new Xbox());