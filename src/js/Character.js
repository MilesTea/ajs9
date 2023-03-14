class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('Недопустимое имя');
    }

    if (!types.includes(type)) {
      throw new Error('Неизвестное существо');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this._attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Персонаж мертв');
    }
    this.level += 1;
    this._attack = Math.round(this._attack * 1.2);
    this.defence = Math.round((100 - this.defence) * 0.2) + this.defence;
    this.health = 100;
  }

  damage(points) {
    const damage = Math.round(points * (1 - this.defence / 100));
    this.health -= damage;
    if (this.health < 0) { this.health = 0; }
  }

  get attack() {
    return this._attack;
  }

  set attack(number) {
    this._attack = number;
  }
}

export default Character;
