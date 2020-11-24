import assert from 'assert';
import { ColorSupport } from '../src';

describe('Color Support', function () {
  it('3-digit to 6-digit hex', function () {
    let hex = ColorSupport.hexThreeToSix('#DFD');
    assert.strictEqual(hex, '#DDFFDD');
  });

  it('names color to hex', function () {
    let hex = ColorSupport.colourNameToHex('white');
    assert.strictEqual(hex, '#ffffff');
  });
});
