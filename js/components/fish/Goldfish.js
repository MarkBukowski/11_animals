import { Fish } from './Fish.js';

class Goldfish extends Fish {
    constructor(name, color, grantsWishes) {
        super(name, color);
        this.breed = 'Goldfish';
        this.grantsWishes = grantsWishes ?? false;
        this.sound = 'Bul buleea in goldfish';
    }

    makeWish(wish) {
        if (!this.grantsWishes) {
            console.log(`${this.breed} ${this.name} does not fulfill wishes...`);
            return false;
        }
        console.log(`${this.breed} ${this.name} grants your wish ${wish}!`);
    }
}

export { Goldfish }