/* eslint-disable no-tabs */
// Monster display and buttons
const setMonsterName = document.getElementById('setMonsterName');
const displayMonsterName = document.querySelector('.monsterName');
const displayMonsterHealth = document.getElementById('monsterHealth');
const displayMonsterMinAttack = document.getElementById('monsterMinAttack');
const displayMonsterMaxAttack = document.getElementById('monsterMaxAttack');
const monsterAvatar = document.getElementById('monsterAvatar');
let monsterName = '';
let monsterMaxHealth = 0;

// Healer display and buttons
const setHealerName = document.getElementById('setHealerName');
const healerHealWarriorBtn = document.getElementById('healWarriorBtn');
const healerHealMonsterBtn = document.getElementById('healMonsterBtn');
const displayHealerName = document.querySelector('.healerName');
const displayHealerHealth = document.getElementById('healerHealth');
const displayHealerMinHeal = document.getElementById('healerMinHeal');
const displayHealerMaxHeal = document.getElementById('healerMaxHeal');
const healerAvatar = document.getElementById('healerAvatar');
let healerName = '';

// Warrior display and buttons
const setWarriorName = document.getElementById('setWarriorName');
const warriorAttackBtn = document.getElementById('warriorActionBtn');
const displayWarriorName = document.querySelector('.warriorName');
const displayWarriorHealth = document.getElementById('warriorHealth');
const displayWarriorMinAttack = document.getElementById('warriorMinAttack');
const displayWarriorMaxAttack = document.getElementById('warriorMaxAttack');
const warriorAvatar = document.getElementById('warriorAvatar');
let warriorName = '';
let warriorMaxHealth = 0;

// Others
const restartTheGame = document.getElementById('restartTheGame');

// Monster settings
function Monster() {
  function setMonsterFeatures(nameStr) {
    this.name = nameStr;
    this.health = Math.floor(Math.random() * (100 - 10) + 10);
    monsterMaxHealth = this.health;
    this.minAttackPower = Math.floor(Math.random() * (20 - 1) + 1);
    this.maxAttackPower = Math.floor(Math.random() * (40 - 20) + 20);
    return this;
  }
  function getMonsterFeatures() {
    if (this.name) {
      console.log(`Monster's name is: ${this.name}`);
      console.log(`Monster's health is: ${this.health}`);
      console.log(`Monster's min attack power is: ${this.minAttackPower}`);
      console.log(`Monster's max attack power is: ${this.maxAttackPower}`);
    }

    return this;
  }

  return { setMonsterFeatures, getMonsterFeatures };
}

const monster = new Monster();

function showMonsterStats() {
  displayMonsterName.innerHTML = `Name: ${monster.name}`;
  displayMonsterHealth.innerHTML = `Health: ${monster.health}`;
  displayMonsterMinAttack.innerHTML = `Min Attack: ${monster.minAttackPower}`;
  displayMonsterMaxAttack.innerHTML = `Max Attack: ${monster.maxAttackPower}`;
}

// Warrior settings
function Warrior() {
  function setWarriorFeatures(nameStr) {
    this.name = nameStr;
    this.health = Math.floor(Math.random() * (100 - 10) + 10);
    warriorMaxHealth = this.health;
    this.minAttackPower = Math.floor(Math.random() * (20 - 1) + 1);
    this.maxAttackPower = Math.floor(Math.random() * (40 - 20) + 20);
    return this;
  }
  function getWarriorFeatures() {
    if (this.name) {
      console.log(`Warrior's name is: ${this.name}`);
      console.log(`Warrior's health is: ${this.health}`);
      console.log(`Warrior's min attack power is: ${this.minAttackPower}`);
      console.log(`Warrior's max attack power is: ${this.maxAttackPower}`);
    }

    return this;
  }

  return { setWarriorFeatures, getWarriorFeatures };
}

const warrior = new Warrior();

function showWarriorStats() {
  displayWarriorName.innerHTML = `Name: ${warrior.name}`;
  displayWarriorHealth.innerHTML = `Health: ${warrior.health}`;
  displayWarriorMinAttack.innerHTML = `Min Attack: ${warrior.minAttackPower}`;
  displayWarriorMaxAttack.innerHTML = `Max Attack: ${warrior.maxAttackPower}`;
}

// Healer settings
function Healer() {
  function setHealerFeatures(nameStr) {
    this.name = nameStr;
    this.health = Math.floor(Math.random() * (100 - 10) + 10);
    this.minHealPower = Math.floor(Math.random() * (20 - 1) + 1);
    this.maxHealPower = Math.floor(Math.random() * (40 - 20) + 20);
    return this;
  }
  function getHealerFeatures() {
    if (this.name) {
      console.log(`Healer's name is: ${this.name}`);
      console.log(`Healer's health is: ${this.health}`);
      console.log(`Healer's min heal power is: ${this.minHealPower}`);
      console.log(`Healer's max heal power is: ${this.maxHealPower}`);
    }

    return this;
  }

  return { setHealerFeatures, getHealerFeatures };
}

const healer = new Healer();

function showHealerStats() {
  displayHealerName.innerHTML = `Name: ${healer.name}`;
  displayHealerHealth.innerHTML = `Health: ${healer.health}`;
  displayHealerMinHeal.innerHTML = `Min Heal: ${healer.minHealPower}`;
  displayHealerMaxHeal.innerHTML = `Max Heal: ${healer.maxHealPower}`;
}

// Warrior attack button
warriorAttackBtn.addEventListener('click', () => {
  let warriorAttackPower = 0;
  let monsterAttackPower = 0;
  warriorAttackPower = Math.round(
    warrior.minAttackPower
			+ Math.random() * (warrior.maxAttackPower - warrior.minAttackPower),
  );
  monster.health -= warriorAttackPower;
  if (monster.health > 0) {
    console.log(
      `Warrior attacks Monster with ${warriorAttackPower} attack power`,
    );
  }
  if (monster.health <= 0) {
    console.log(
      `Warrior attacks Monster with ${warriorAttackPower} attack power`,
    );
    console.log('MONSTER IS DEAD! YOU WIN!!!');
    showMonsterStats();
    showWarriorStats();
    warriorAttackBtn.style.display = 'none';
    healerHealWarriorBtn.style.display = 'none';
    healerHealMonsterBtn.style.display = 'none';
    monsterAvatar.style.marginTop = '87px';
    monsterAvatar.style.filter = 'saturate(0%)';
    warriorAvatar.style.marginTop = '87px';
    healerAvatar.style.marginTop = '87px';
    restartTheGame.style.display = 'block';
    return;
  }
  monsterAttackPower = Math.round(
    monster.minAttackPower
			+ Math.random() * (monster.maxAttackPower - monster.minAttackPower),
  );
  warrior.health -= monsterAttackPower;
  if (warrior.health > 0) {
    console.log(`Monster attacks back with ${monsterAttackPower} attack power`);
  }
  if (warrior.health <= 0) {
    console.log(`Monster attacks back with ${monsterAttackPower} attack power`);
    console.log('YOU LOSE!!!');
    showMonsterStats();
    showWarriorStats();
    warriorAttackBtn.style.display = 'none';
    healerHealWarriorBtn.style.display = 'none';
    healerHealMonsterBtn.style.display = 'none';
    monsterAvatar.style.marginTop = '87px';
    warriorAvatar.style.marginTop = '87px';
    warriorAvatar.style.filter = 'saturate(0%)';
    healerAvatar.style.marginTop = '87px';
    healerAvatar.style.filter = 'saturate(0%)';
    restartTheGame.style.display = 'block';
    return;
  }
  showMonsterStats();
  showWarriorStats();
});

// Healer heal warrior button
healerHealWarriorBtn.addEventListener('click', () => {
  const healerHealPower = Math.round(
    healer.minHealPower
			+ Math.random() * (healer.maxHealPower - healer.minHealPower),
  );
  const monsterAttackPower = Math.round(
    monster.minAttackPower
			+ Math.random() * (monster.maxAttackPower - monster.minAttackPower),
  );
  warrior.health += healerHealPower;
  if (warrior.health > warriorMaxHealth) {
    warrior.health = warriorMaxHealth;
  }
  console.log(`Healer heals Warrior with ${healerHealPower} heal power`);
  healer.health -= monsterAttackPower;
  console.log(`Monster attacks Healer with ${monsterAttackPower} attack power`);
  showWarriorStats();
  showHealerStats();
  if (healer.health <= 0) {
    console.log('HEALER IS DEAD');
    healerHealWarriorBtn.style.display = 'none';
    healerHealMonsterBtn.style.display = 'none';
    healerAvatar.style.marginTop = '87px';
    healerAvatar.style.filter = 'saturate(0%)';
  }
});

// Healer heal monster button
healerHealMonsterBtn.addEventListener('click', () => {
  const healerHealPower = Math.round(
    healer.minHealPower
			+ Math.random() * (healer.maxHealPower - healer.minHealPower),
  );
  const monsterAttackPower = Math.round(
    monster.minAttackPower
			+ Math.random() * (monster.maxAttackPower - monster.minAttackPower),
  );
  monster.health += healerHealPower;
  if (monster.health > monsterMaxHealth) {
    monster.health = monsterMaxHealth;
  }
  console.log(`Healer heals Monster with ${healerHealPower} heal power`);
  warrior.health -= monsterAttackPower;
  console.log(
    `Monster attacks Warrior with ${monsterAttackPower} attack power`,
  );
  showMonsterStats();
  showWarriorStats();
  if (warrior.health <= 0) {
    console.log(
      "Warrior is dead, seems like you can't continue this fight, so you lost it. The game is over",
    );
    warriorAttackBtn.style.display = 'none';
    healerHealWarriorBtn.style.display = 'none';
    healerHealMonsterBtn.style.display = 'none';
    monsterAvatar.style.marginTop = '87px';
    warriorAvatar.style.marginTop = '87px';
    warriorAvatar.style.filter = 'saturate(0%)';
    healerAvatar.style.marginTop = '87px';
    healerAvatar.style.filter = 'saturate(0%)';
    restartTheGame.style.display = 'block';
  }
});

// Start the game
function startGame() {
  healerName = setHealerName.value;
  healer.setHealerFeatures(healerName);
  healer.getHealerFeatures();
  warriorName = setWarriorName.value;
  warrior.setWarriorFeatures(warriorName);
  warrior.getWarriorFeatures();
  monsterName = setMonsterName.value;
  monster.setMonsterFeatures(monsterName);
  monster.getMonsterFeatures();
  setHealerName.style.display = 'none';
  healerHealWarriorBtn.style.display = 'block';
  healerHealMonsterBtn.style.display = 'block';
  setWarriorName.style.display = 'none';
  warriorAttackBtn.style.display = 'block';
  setMonsterName.style.display = 'none';
  monsterAvatar.style.marginTop = '87px';
  warriorAvatar.style.marginTop = '37px';
  healerAvatar.style.marginTop = '12px';
  showMonsterStats();
  showHealerStats();
  showWarriorStats();
}

// Set features button
const setCharactersFeatures = document.getElementById('charactersFeaturesBtn');

setCharactersFeatures.addEventListener('click', () => {
  if (setMonsterName.value && setWarriorName.value && setHealerName.value) {
    startGame();
    setCharactersFeatures.style.display = 'none';
  } else {
    console.log(
      "It seems like some characters aren't ready, please input all the names",
    );
  }
});

// Restart the game
restartTheGame.addEventListener('click', () => {
  warriorAttackBtn.style.display = 'none';
  healerHealWarriorBtn.style.display = 'none';
  healerHealMonsterBtn.style.display = 'none';
  displayWarriorName.innerHTML = '';
  displayWarriorHealth.innerHTML = '';
  displayWarriorMinAttack.innerHTML = '';
  displayWarriorMaxAttack.innerHTML = '';
  displayMonsterName.innerHTML = '';
  displayMonsterHealth.innerHTML = '';
  displayMonsterMinAttack.innerHTML = '';
  displayMonsterMaxAttack.innerHTML = '';
  displayHealerName.innerHTML = '';
  displayHealerHealth.innerHTML = '';
  displayHealerMinHeal.innerHTML = '';
  displayHealerMaxHeal.innerHTML = '';
  setMonsterName.style.display = 'block';
  setMonsterName.value = '';
  setWarriorName.style.display = 'block';
  setWarriorName.value = '';
  setHealerName.style.display = 'block';
  setHealerName.value = '';
  setCharactersFeatures.style.display = 'block';
  restartTheGame.style.display = 'none';
  healerAvatar.style.filter = 'saturate(150%)';
  healerAvatar.style.marginTop = '140px';
  warriorAvatar.style.filter = 'saturate(150%)';
  warriorAvatar.style.marginTop = '140px';
  monsterAvatar.style.filter = 'saturate(150%)';
  monsterAvatar.style.marginTop = '140px';
  console.log('NEW GAME HAS BEEN STARTED');
});
