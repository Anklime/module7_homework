//задание 5

class ElectricalApp {
    constructor(name) {
        this.device = 'household electrical appliance';
        this.name = name;
    }

    getPowerConsumption (power, t, on) {
        let turnOn = on;
        if(on === 1){
            turnOn = 'Вкл';
        }else{
            turnOn = 'Выкл';
        };


        console.log(`Расход эл. энергии ${this.name} - (${this.color}) за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
    }

}

class Characteristic extends ElectricalApp {
    constructor (name, color) {
        super(name);
        this.color = color;
    }
}

const microwave = new Characteristic ('Microwave', 'black');
const fridge = new Characteristic ('Fridge', 'white');
const blender = new Characteristic ('Blender', 'blue');

console.log(microwave, fridge, blender)
microwave.getPowerConsumption(300, 2);
fridge.getPowerConsumption(500, 6, 1);
blender.getPowerConsumption(100, 5, 1);
