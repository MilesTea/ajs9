import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

const testType = 'Bowman';

test('test test', () => { const a = 5; expect(a).toEqual(5); });

test.each([
  [1, true],
  [2, false],
  [10, false],
  [11, true],
])('testing Character constructor on name validation with %i symbol(s)', (symbols, error) => {
  function testFunction() { new Character('a'.repeat(symbols), testType); }
  if (error) {
    expect(testFunction).toThrow(Error);
  } else {
    expect(testFunction).not.toThrow(Error);
  }
});

test.each([
  ['Bowman', false],
  ['NonexistantType', true],
])('testing Character constructor type validation', (type, error) => {
  function testFunction() { new Character('test', type); }
  if (error) {
    expect(testFunction).toThrow(Error);
  } else {
    expect(testFunction).not.toThrow(Error);
  }
});

test.each([
  [25, false],
  [0, true],
  [-5, true],
])('testing levelUp function with %i hp', (hp, error) => {
  const testCharacter = new Character('test', 'Swordsman');
  testCharacter.health = hp;
  function testFunction() { testCharacter.levelUp(); }
  if (error) {
    expect(testFunction).toThrow(Error);
  } else {
    expect(testFunction).not.toThrow(Error);
  }
});

test.each([
  [20, 40],
  [100, 0],
  [120, 0],
])('testing damage function with 50 hp and %i damage', (damage, hpExpected) => {
  const testCharacter = new Character('test', 'Swordsman');
  testCharacter.health = 50;
  testCharacter.defence = 50;
  testCharacter.damage(damage);
  expect(testCharacter.health).toEqual(hpExpected);
});

test.each([
  [Bowman],
  [Swordsman],
  [Magician],
  [Undead],
  [Zombie],
  [Daemon],
])('testing character creation with %p class', (TestClass) => {
  expect(new TestClass('test')).toBeInstanceOf(Character);
});

test.each([
  [Magician, 1, 1],
  [Magician, 2, 0.9],
  [Magician, 6, 0.5],
  [Daemon, 1, 1],
  [Daemon, 2, 0.9],
  [Daemon, 6, 0.5],
])('testing %p class damage with %i distance', (TestClass, distance, expectedMultiplier) => {
  const testCharacter = new TestClass('testName');
  testCharacter.attack = 100;
  const baseDamage = testCharacter.attack;
  const damage = testCharacter.getAttack(distance);
  expect(damage).toEqual(baseDamage * expectedMultiplier, 5);
});

test.each([
  [Magician, 1, 100],
  [Magician, 2, 85],
  [Magician, 6, 37],
  [Daemon, 1, 100],
  [Daemon, 2, 85],
  [Daemon, 6, 37],
])('testing %p class damage with %i distance and stoned condition', (TestClass, distance, expectedDamage) => {
  const testCharacter = new TestClass('testName');
  testCharacter.attack = 100;
  testCharacter.stoned = true;
  const damage = testCharacter.getAttack(distance);
  expect(damage).toEqual(expectedDamage, 5);
});
