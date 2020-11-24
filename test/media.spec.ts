import assert from 'assert';
import { refactorAnalysis } from '../src';

describe('Media', function () {
  it('media', function () {
    let result = refactorAnalysis(
      `
@media (min-height: 680px), screen and (orientation: portrait) {
  h1 {
    color: white;
  }
}
`,
      'demo.less',
      1
    );

    assert.strictEqual(result.metadata.mediaQueries.length, 1);
  });
});
