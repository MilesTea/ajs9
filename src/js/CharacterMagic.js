import Character from './Character';

class CharacterMagic extends Character {
  constructor(name, type) {
    super(name, type);
    this.stoned = false;
  }

  getAttack(range) {
    const distance = Math.max(range, 1);
    let newAttack = this.attack * (Math.max((100 - 10 * (distance - 1)), 0) * 0.01);
    if (this.stoned) {
      newAttack -= (Math.log2(distance) * 5);
    }
    return Math.round(newAttack);
  }
}

export default
CharacterMagic;
