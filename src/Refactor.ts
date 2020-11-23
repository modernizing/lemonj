import fs from 'fs';
import mappingAnalysis from './MappingAnalysis';
import CodeFile from './editor/CodeFile';
import { Dir } from './dir';

export function issueToModifyModel(issues, mappings) {
  let modifierInfo = [];
  for (let issue of issues) {
    modifierInfo.push({
      line: issue.pos.start.line,
      column: issue.pos.start.column,
      length: issue.origin.length,
      text: mappings[issue.origin],
    });
  }

  return modifierInfo;
}

export function refactorDir(mappingFile: Dir, issuesFile: Dir) {
  const fileContents = fs.readFileSync(mappingFile, 'utf8');
  let mappings = mappingAnalysis(fileContents).mapping;

  const issues_text = fs.readFileSync(issuesFile, 'utf8');
  const allIssues = JSON.parse(issues_text).issues;

  for (let metadata of allIssues) {
    const data = fs.readFileSync(metadata.filePath, 'utf8');

    let codeFile = new CodeFile(data);
    codeFile.batchLines(issueToModifyModel(metadata.issues, mappings));

    fs.writeFileSync(metadata.filePath, codeFile.toString());
  }
}
