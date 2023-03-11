import CharacterMagic from './CharacterMagic';

class Daemon extends CharacterMagic {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export default
Daemon;
