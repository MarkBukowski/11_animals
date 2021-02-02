import { Burd } from './Burd.js';

class Dragonfly extends Burd {
    constructor(name, color) {
        super(name, color);
        this.sound = 'bzzzzz';
        this.canFly = true;
        this.isImposter = true;
    }
}

export { Dragonfly }