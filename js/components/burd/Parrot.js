import { Burd } from './Burd.js';

class Parrot extends Burd {
    constructor(name, color) {
        super(name, color);
        this.sound = 'shiver me timbers';
        this.canFly = true;
    }
}

export { Parrot }