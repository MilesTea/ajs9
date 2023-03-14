import ArrayBuffer from '../ArrayBuffer';
import getBuffer from '../getBuffer';

test('ArrayBuffer toString test', () => {
  const testArrayBuffer = new ArrayBuffer();
  testArrayBuffer.load(getBuffer());
  expect(testArrayBuffer.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
