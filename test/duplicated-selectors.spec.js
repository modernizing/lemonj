import {refactorAnalysis, safeStringify} from '../src';

describe('Duplicated Selectors', function () {
  it('duplicated', function () {
    let result = refactorAnalysis(`
.parent .child {}
.parent .note {}
`, 'demo.less', 1);
    
    // console.log(safeStringify(result.lastNode));
  });
});
