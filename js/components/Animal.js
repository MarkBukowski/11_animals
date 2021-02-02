class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.cover = 'skin';

    }
    voice() {
        console.log(`${this.name} says: ${this.sound}!`);
    }

    introduce() {
        if (this.isImposter) {
            console.log(`${this.name} is an impostor and does not get a chance to introduce.`);
            return false;
        }
        console.log(`Hi, I am ${this.name}, I have ${this.color} ${this.cover}, and I say ${this.sound}! I live in the ${this.environment}`);
    }
}

export { Animal }



