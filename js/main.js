import { Cat } from './components/pets/Cat.js';
import { Hamster } from './components/pets/Hamster.js';
import { Dog } from './components/pets/Dog.js';
import { Nemo } from './components/fish/Nemo.js';
import { Goldfish } from './components/fish/Goldfish.js';
import { Chicken } from './components/burd/Chicken.js';
import { Eagle } from './components/burd/Eagle.js';
import { Parrot } from './components/burd/Parrot.js';
import { Dragonfly } from './components/burd/Dragonfly.js';

const rexas = new Dog('Reksas', 'brown');
const pukis = new Cat('Pukis', 'patchy');
const jorkis = new Hamster('Jorkis', 'light',);
const nemo = new Nemo('Nemo', 'blue', false);
const ariele = new Goldfish('Ariele', 'blue', true);
const herta = new Chicken('Herta', 'white');
const flash = new Eagle('Flash', 'black and white');
const barbosa = new Parrot('Barbosa', 'red and blue');
const larry = new Dragonfly('Larry', 'dark blue');


// rexas.introduce();
// pukis.introduce();
// jorkis.introduce();

// nemo.swimAway();
// nemo.introduce();
// ariele.makeWish('gib potato');
// ariele.introduce();

// herta.introduce();
// herta.flyAway();
// flash.introduce();
// flash.flyAway();
// barbosa.introduce();
// barbosa.flyAway();
// console.log(barbosa.wingsCount);
// console.log(barbosa.environment);
larry.introduce();






/*
Animal.js (params: name, color, sound; methods: voice(), introduce();)

    Bird.js (viska paveldi is Animal.js;

    params: wingsCount, canFly; methods: flyAway();)

        Chicken.js (viska paveldi is Bird.js)
        Parrot.js (viska paveldi is Bird.js)
        Eagle.js (viska paveldi is Bird.js)
        Dragonfly.js (viska paveldi is Bird.js; params: imposter=true;)

*/