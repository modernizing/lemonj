import assert from 'assert';
import {refactorAnalysis} from '../src';

describe('Box Shadow', function () {
  it('shadow color', function () {
    let result = refactorAnalysis(`
h1 {
  box-shadow: 60px -16px teal;
  box-shadow: 10px 5px 5px black;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  box-shadow: inset 5em 1em gold;
  box-shadow: 3px 3px red, -1em 0 0.4em olive;

}
`, 'demo.less', 1);

    assert.strictEqual(Object.keys(result.colorMappings).length, 6);
  });

  it('cross browser box-shadow color', function () {
    let result = refactorAnalysis(`
h1 {
  -webkit-box-shadow: 3px 3px 5px 6px #111;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #222;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #333;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
`, 'demo.less', 1);

    assert.strictEqual(Object.keys(result.colorMappings).length, 3);
  });

  it('multiple color', function () {
    let result = refactorAnalysis(`
h1 {
  box-shadow: 3px 3px red, -1em 0 0.4em olive;
}
`, 'demo.less', 1);

    assert.strictEqual(Object.keys(result.colorMappings).length, 2);
  });
});
