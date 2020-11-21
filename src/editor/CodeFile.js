export default class CodeFile {
  lines = [];
  origin = [];

  constructor(string) {
    this.origin = string;
    this.lines = string.split(/\r?\n/);
    this.lines.unshift('');
  }

  _spliceSlice(str, index, count, add) {
    if (index < 0) {
      index = str.length + index;
      if (index < 0) {
        index = 0;
      }
    }

    return str.slice(0, index) + (add || "") + str.slice(index + count);
  }

  updateLine(line, column, length, text) {
    let lineText = this.lines[line];
    lineText = this._spliceSlice(lineText, column - 1, length, text);
    this.lines[line] = lineText;
  }

  batchLines(willUpdateInfo) {
    // reverse for multiple change in online
    for (let info of willUpdateInfo.reverse()) {
      this.updateLine(info.line, info.column, info.length, info.text)
    }
  }

  toString() {
    let lines = this.lines
    lines.shift();
    return lines.join('\n');
  }
}
