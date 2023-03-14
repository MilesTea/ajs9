import Character from './Character';

class CharacterMagic extends Character {
  constructor(name, type) {
    super(name, type);
    this.stonedCondition = false;
    this.attackDistance = 1;
  }

  get stoned() {
    return this.stonedCondition;
  }

  set stoned(state) {
    this.stonedCondition = state;
  }

  get attack() {
    let newAttack = this._attack * (Math.max((100 - 10 * (this.distance - 1)), 0) * 0.01);
    if (this.stonedCondition) {
      newAttack -= (Math.log2(this.distance) * 5);
    }
    return Math.round(newAttack);
  }

  set attack(number) {
    this._attack = number;
  }
}

export default
CharacterMagic;
