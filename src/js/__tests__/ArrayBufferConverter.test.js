import { bufferToString, getBuffer } from '../ArrayBufferConverter';

test('ArrayBufferConverter test', () => {
  expect(bufferToString(getBuffer())).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
