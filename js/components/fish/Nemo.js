import { Fish } from './Fish.js';

class Nemo extends Fish {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Smol fish';
        this.sound = 'Bul bul';
        this.canSwim = false;
    }
    swimAway() {
        if (!this.canSwim) {
            console.log(`Since ${this.name} is not in water, it cannot swim.`);
            return false;
        }
        console.log(`${this.name} swims away!`);
    }
}

export { Nemo }