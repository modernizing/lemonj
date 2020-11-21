import assert from 'assert';
import {refactorAnalysis} from '../src';

describe('Absolute', function () {
  it('absolute', function () {
    let result = refactorAnalysis(`
h1 {
  position: absolute;
  width: 233px;
}
`, 'demo.less', 1);


    assert.strictEqual(Object.keys(result.metadata.absolute).length, 1);
    assert.strictEqual(result.metadata.absolute[0].origin, "absolute");
  });
});
