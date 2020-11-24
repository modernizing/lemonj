import fs from 'fs';
import { refactorAnalysis, safeStringify } from '../src';
import assert from 'assert';

describe('Nested', function () {
  it('nested', function () {
    let result = refactorAnalysis(
      `
.image-frame {
  > .description {
    color: #ddd;

    > .icon2 {
    }
    > .icon {
      color: #fff;
    }
  }
}
`,
      'deeps.less',
      1
    );

    let rootNode = result.lastNode;
    assert.strictEqual(rootNode.children[0].name, '.image-frame');
    assert.strictEqual(rootNode.children[0].children[0].name, '>.description');
  });
  it('nested 2', function () {
    let result = refactorAnalysis(
      `
.level1 {
  .level2_1 {
    .level3 { color: #333 }
  }
  .level2_2 { }
  .level2_3 { .level3_2 { } }
}
`,
      'deeps.less',
      1
    );

    let rootNode = result.lastNode;
    assert.strictEqual(rootNode.children[0].name, '.level1');
    assert.strictEqual(rootNode.children[0].children[0].name, '.level2_1');
    assert.strictEqual(rootNode.children[0].children[0].children[0].name, '.level3');
    assert.strictEqual(rootNode.children[0].children[1].name, '.level2_2');
    assert.strictEqual(rootNode.children[0].children[2].name, '.level2_3');
    assert.strictEqual(rootNode.children[0].children[2].children[0].name, '.level3_2');

    fs.writeFileSync('demo.json', safeStringify(rootNode, null));
  });
});
