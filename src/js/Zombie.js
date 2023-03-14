import Character from './Character';

class Zombie extends Character {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this._attack = 40;
    this.defence = 10;
  }
}
export default
Zombie;
