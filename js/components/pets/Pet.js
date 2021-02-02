import { Animal } from '../Animal.js';

class Pet extends Animal {
    constructor(name, color) {
        super(name, color);
        this.environment = 'land';
        this.cover = 'fur';
        this.sound = 'Miau Au Nom!';
    }
}

export { Pet }