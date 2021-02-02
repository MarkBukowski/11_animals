import { Animal } from '../Animal.js';

class Fish extends Animal {
    constructor(name, color) {
        super(name, color);
        this.environment = 'water';
        this.cover = 'scales';
        this.sound = 'Bul buloooo';
    }
}

export { Fish }