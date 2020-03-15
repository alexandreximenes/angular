import {Spacecraft, ContainerShip} from './Spacecraft';

export class MilleniumFalcon extends Spacecraft implements ContainerShip {

    cargoContainers: number

    constructor() {
        super("hyperdriver");
        this.cargoContainers = 2
    }

    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log('Faild to jump into hyperdrive');
        }
    }
}