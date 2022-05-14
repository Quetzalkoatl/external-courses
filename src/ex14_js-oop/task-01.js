/* eslint-disable no-unused-vars */
// Robot class
class Robot {
  constructor(options) {
    this.power = options.power;
    this.isEnabled = options.isEnabled;
  }

  switchPower() {
    this.isEnabled = !this.isEnabled;
    console.log(`Device enabled status is: ${this.isEnabled}`);
  }
}

// Cleaning Device class
class CleaningDevice extends Robot {
  constructor(options) {
    super(options);
    this.cleaningMode = options.cleaningMode;
  }

  changeCleaningMode() {
    if (this.isEnabled) {
      if (this.cleaningMode === 'dry') {
        this.cleaningMode = 'wet';
      } else {
        this.cleaningMode = 'dry';
      }
    } else {
      console.log("This device's power is off");
      return;
    }
    console.log(`Cleaning mode is: ${this.cleaningMode}`);
  }
}

// Vacuum Cleaner class
class VacuumCleaner extends CleaningDevice {
  getDeviceInfo() {
    console.log(`This device's power is: ${this.power}`);
    console.log(`This device's cleaning mode is: ${this.cleaningMode}`);
  }
}

const vacuumCleaner = new VacuumCleaner({
  power: 500,
  isEnabled: false,
  cleaningMode: 'dry',
});

// Robot Cleaner class
class RobotCleaner extends CleaningDevice {
  constructor(options) {
    super(options);
    this.cardStatus = options.cardStatus;
  }

  scan() {
    if (this.isEnabled) {
      if (this.cardStatus) {
        console.log('Scanning...');
      } else {
        console.log('Scanning cannot be started, please install the card');
      }
    } else {
      console.log("This device's power is off");
    }
  }

  getDeviceInfo() {
    console.log(`This device's power is: ${this.power}`);
    console.log(`This device's cleaning mode is: ${this.cleaningMode}`);
    console.log(`This device's card status is: ${this.cardStatus}`);
  }
}

const robotCleaner = new RobotCleaner({
  power: 2000,
  isEnabled: true,
  cleaningMode: 'wet',
  cardStatus: true,
});

// Robot Soldier class
class RobotSoldier extends Robot {
  constructor(options) {
    super(options);
    this.cardStatus = options.cardStatus;
    this.isShooting = options.isShooting;
  }

  scan() {
    if (this.isEnabled) {
      if (this.cardStatus) {
        console.log('Scanning...');
      } else {
        console.log('Scanning cannot be started, please install the card');
      }
    } else {
      console.log("This device's power is off");
    }
  }

  startShooting() {
    if (this.isEnabled) {
      this.isShooting = true;
    } else {
      console.log("This device's power is off");
    }
  }

  stopShooting() {
    if (this.isEnabled) {
      this.isShooting = false;
    } else {
      console.log("This device's power is off");
    }
  }

  getShootingStatus() {
    console.log(`Shooting status is: ${this.isShooting}`);
  }

  getDeviceInfo() {
    console.log(`This device's power is: ${this.power}`);
    console.log(`This device's card status is: ${this.cardStatus}`);
    console.log(`This shooting status is: ${this.isShooting}`);
  }
}

const robotSoldier = new RobotSoldier({
  power: 3500,
  isEnabled: true,
  cardStatus: true,
  isShooting: false,
});
