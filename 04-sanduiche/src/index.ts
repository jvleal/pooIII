import SanduicheBSuilder from "./builder/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sandduiche";

const builder : SanduicheBSuilder = new SanduicheBSuilder();
const director : Director = new Director(builder);

director.constructSCarne();
const scarne : Sanduiche = builder.getSanduiche();
console.log("Preparando o sanduiche ...");
console.log("Tipo: " + scarne.sanduicheType);
console.log("Proteina: " + scarne.protein);