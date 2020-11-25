import { ModifierInfo } from '../Refactor';

export default class CodeFile {
  lines = [];
  origin = '';

  constructor(str: string) {
    this.origin = str;
    this.lines = str.split(/\r?\n/);
    this.lines.unshift('');
  }

  private spliceSlice(str, index, count, add) {
    if (index < 0) {
      index = str.length + index;
      if (index < 0) {
        index = 0;
      }
    }

    return str.slice(0, index) + (add || '') + str.slice(index + count);
  }

  updateLine(modifierInfo: ModifierInfo) {
    let lineText = this.lines[modifierInfo.line];
    lineText = this.spliceSlice(lineText, modifierInfo.column - 1, modifierInfo.length, modifierInfo.text);
    this.lines[modifierInfo.line] = lineText;
  }

  batchLines(willUpdateInfo: Array<ModifierInfo>) {
    // reverse for multiple change in online
    for (let info of willUpdateInfo.reverse()) {
      this.updateLine(info);
    }
  }

  toString() {
    let lines = this.lines;
    lines.shift();
    return lines.join('\n');
  }
}
