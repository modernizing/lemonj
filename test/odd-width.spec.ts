import assert from 'assert';
import { refactorAnalysis } from '../src';

describe('Odd', function () {
  it('odd width', function () {
    let result = refactorAnalysis(
      `
h1 {
  width: 233px;
}
`,
      'demo.less',
      1
    );

    assert.strictEqual(Object.keys(result.metadata.oddWidth).length, 1);
    assert.strictEqual(result.metadata.oddWidth[0].origin, '233px');
  });
});
