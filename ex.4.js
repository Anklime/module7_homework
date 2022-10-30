// задание 4

function ElectricalApp(name) {
    this.device = 'household electrical app',
        this.name = name

}

ElectricalApp.prototype.getPowerConsumption = function (power, t, on) {
    let turnOn = on;
    if(on === 1){
        turnOn = 'on';
    }else{
        turnOn = 'off';
    };


    console.log(`Расход эл. энергии ${this.name} за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
};

function Characteristic(name, color) {
    this.name = name,
        this.color = color
}

Characteristic.prototype = new ElectricalApp();

const microwave = new Characteristic ('Microwave', 'black');
const fridge = new Characteristic ('Fridge', 'white');
const blender = new Characteristic ('Blender', 'blue');

console.log(microwave, fridge, blender);
microwave.getPowerConsumption(300, 2);
fridge.getPowerConsumption(500, 6, 1);
blender.getPowerConsumption(100, 5, 1);