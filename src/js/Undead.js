import Character from './Character';

class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this._attack = 25;
    this.defence = 25;
  }
}

export default
Undead;
