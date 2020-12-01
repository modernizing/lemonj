import { refactorAnalysis } from '../../src';
import * as fs from 'fs';

describe('E2E', function () {
  it('e2e', function () {
    let code = fs.readFileSync("_fixtures/e2e/main.css").toString();
    let result = refactorAnalysis(code, 'demo.less', 1);

  });
});
