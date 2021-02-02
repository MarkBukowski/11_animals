import { Animal } from '../Animal.js';

class Burd extends Animal {
    constructor(name, color) {
        super(name, color);
        this.environment = 'Air';
        this.cover = 'feathers';
        this.sound = 'Ca-caaaaw!🐦🦅🐔';
        this.wingsCount = 2;
    }
    flyAway() {
        if (!this.canFly) {
            console.log(`Unfortunately, ${this.name} is a non flying burd.`);
            return false;
        }
        console.log(`${this.name} flies away with great speed!`);
    }
}

export { Burd }