import Character from './Character';

class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this._attack = 25;
    this.defence = 25;
  }
}

export default Bowman;
