import assert from 'assert';
import {analysisDir} from '../src';

describe('Files', function () {
  it('file testings', function () {
    let result = analysisDir('_fixtures/less/color');

    assert.strictEqual(result.issues.length, 6);
    assert.strictEqual(result.colorMappings['#ddd'], '@color1');
  });
});
