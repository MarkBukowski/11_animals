import { Burd } from './Burd.js';

class Eagle extends Burd {
    constructor(name, color) {
        super(name, color);
        this.sound = 'screeeeee!';
        this.canFly = true;
    }
}

export { Eagle }