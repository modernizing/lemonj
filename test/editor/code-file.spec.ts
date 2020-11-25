import assert from 'assert';
import { CodeFile, issueToModifyModel, refactorAnalysis } from '../../src';

describe('Files', function () {
  it('file change', function () {
    let code = `h1 {
   color: #800080;
}`;
    let codeFile = new CodeFile(code);

    codeFile.updateLine({
      line: 1,
      column: 1,
      length: 2,
      text: 'h2',
    });

    assert.strictEqual(
      codeFile.toString(),
      `h2 {
   color: #800080;
}`
    );
  });

  it('multiple change', function () {
    let code = `h1 {
   box-shadow: 3px 3px red, -1em 0 0.4em olive;
}`;
    let result = refactorAnalysis(code, 'demo.less', 1);
    let model = issueToModifyModel(result.metadata.issues, result.colorMappings);
    let codeFile = new CodeFile(code);

    codeFile.batchLines(model);
    assert.strictEqual(
      codeFile.toString(),
      `h1 {
   box-shadow: 3px 3px @color1, -1em 0 0.4em @color2;
}`
    );
  });
});
