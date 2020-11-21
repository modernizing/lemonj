import assert from 'assert';
import {refactorAnalysis} from '../src';

describe('Color', function () {
  it('hex color', function () {
    let result = refactorAnalysis(`
h1 {
   color: #800080;
}
`, 'demo.less', 1);

    assert.ok(result.colorMappings['#800080'] === '@color1');
  });

  it('string color', function () {
    let result = refactorAnalysis(`
h1 {
   color: red;
}
`, 'demo.less', 1);

    assert.strictEqual(result.colorMappings['red'], '@color1');
  });

  it('rgba color', function () {
    let result = refactorAnalysis(`
h1 {
   color: rgba(255, 0, 0, 0.3);
}
`, 'demo.less', 1);

    assert.ok(result.colorMappings['rgba(255, 0, 0, 0.3)'] === '@color1');
  });

  it('rgb color', function () {
    let result = refactorAnalysis(`
h1 {
   color: rgb(255, 0, 0);
}
`, 'demo.less', 1);

    assert.ok(result.colorMappings['rgb(255, 0, 0)'] === '@color1');
  });

  it('hsl color', function () {
    let result = refactorAnalysis(`
h1 {
   background-color: hsl(120, 100%, 50%);
}
`, 'demo.less', 1);

    assert.ok(result.colorMappings['hsl(120, 100%, 50%)'] === '@color1');
  });

  it('hsla color', function () {
    let result = refactorAnalysis(`
h1 {
   background-color: hsla(0, 100%, 50%, 0.5);
}
`, 'demo.less', 1);

    assert.ok(result.colorMappings['hsla(0, 100%, 50%, 0.5)'] === '@color1');
  });
});
