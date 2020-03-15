import {Spacecraft, ContainerShip} from './Spacecraft';
import {MilleniumFalcon} from './MilleniumFalcon';

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

let falcon = new MilleniumFalcon();
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob (falcon) ? 'YES' : 'NO'}`);