import { Burd } from './Burd.js';

class Chicken extends Burd {
    constructor(name, color) {
        super(name, color);
        this.sound = 'cluck cluck';
        this.canFly = false;
    }
}

export { Chicken }