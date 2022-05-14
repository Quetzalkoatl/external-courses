/* eslint-disable no-restricted-syntax */
class ElectricDevice {
  constructor(options) {
    this.name = options.name;
    this.power = options.power;
    this.powerStatus = options.powerStatus;
  }
}

const teapot = new ElectricDevice({
  name: 'teapot',
  power: 500,
  powerStatus: true,
});

const lamp = new ElectricDevice({
  name: 'lamp',
  power: 1000,
  powerStatus: false,
});

const smartphone = new ElectricDevice({
  name: 'smartphone',
  power: 1500,
  powerStatus: true,
});

const laptop = new ElectricDevice({
  name: 'laptop',
  power: 2000,
  powerStatus: false,
});

const ROOM = [teapot, lamp, smartphone, laptop];

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

searchForDevice(ROOM, 'laptop');

totalPower(ROOM);
