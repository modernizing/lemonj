import assert from 'assert';
import { refactorAnalysis } from '../src';

describe('Font Family', function () {
  it('Font', function () {
    let result = refactorAnalysis(
      `
#h2 {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
`,
      'demo.less',
      1
    );

    assert.strictEqual(result.metadata.fontFamily.length, 1);
  });
});
