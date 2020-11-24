import assert from 'assert';
import { refactorAnalysis } from '../src';

describe('Important', function () {
  it('important checker', function () {
    let result = refactorAnalysis(
      `
h1 {
  color: #dddddd !important;
  color: firebrick !important;
}

`,
      'demo.less',
      1
    );

    assert.strictEqual(Object.keys(result.metadata.importants).length, 2);
  });

  it('should handle correct color ', function () {
    let result = refactorAnalysis(
      `
h1 {
  color: #dddddd !important;
}

`,
      'demo.less',
      1
    );

    assert.strictEqual(Object.keys(result.colorMappings)[0], '#dddddd');
  });
});
