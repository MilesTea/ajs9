import CharacterMagic from './CharacterMagic';

class Magician extends CharacterMagic {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export default
Magician;
