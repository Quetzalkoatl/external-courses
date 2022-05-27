/* eslint-disable no-restricted-syntax */
class Device {
  constructor(options) {
    this.name = options.name;
    this.cost = options.cost;
  }
}

const cup = new Device({ name: 'cup', cost: 50 });
const screwdriver = new Device({ name: 'skrewdriver', cost: 100 });

class ElectricDevice extends Device {
  constructor(options) {
    super(options);
    this.power = options.power;
    this.powerStatus = options.powerStatus;
  }
}

const teapot = new ElectricDevice({
  name: 'teapot',
  cost: 150,
  power: 500,
  powerStatus: true,
});

const lamp = new ElectricDevice({
  name: 'lamp',
  cost: 300,
  power: 1000,
  powerStatus: false,
});

const smartphone = new ElectricDevice({
  name: 'smartphone',
  cost: 800,
  power: 1500,
  powerStatus: true,
});

const laptop = new ElectricDevice({
  name: 'laptop',
  cost: 1500,
  power: 2000,
  powerStatus: false,
});

const ROOM = [cup, screwdriver, teapot, lamp, smartphone, laptop];

function searchForDevice(obj, name) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key].name === name) {
        console.log(`Yes, ${name} is in this room`);
        return;
      }
    }
  }
  console.log(`${name} is not detected`);
}

function totalPower(obj) {
  let power = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key].powerStatus) {
        power += obj[key].power;
      }
    }
  }
  console.log(`Total power is: ${power}`);
}

searchForDevice(ROOM, 'cup');

totalPower(ROOM);
