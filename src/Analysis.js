import {sortColors} from "./color/SortColor";

const fs = require('fs');

import {walkDir} from "./FileSupport";
import refactorAnalysis from "./RefactorAnalysis";

export function analysisDir(dir) {
  let data = {
    colorMappings: {},
    issues: [],
    fontFamily: [],
    importants: [],
    oddWidth: [],
    absolute: [],
    mediaQueries: [],
    colorFileMaps: {},
    summary: {}
  }

  let colorIndex = 1;
  walkDir(dir, function (filePath) {
    const filename = filePath.replace(/^.*[\\\/]/, '');

    if (!(filename.endsWith('.less') || filename.endsWith('.css'))) {
      return;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    let result = refactorAnalysis(fileContents, filePath, colorIndex);

    colorIndex = result.colorIndex;
    if (result.metadata.issues.length !== 0) {
      data.issues = data.issues.concat(result.metadata);
    }

    data.fontFamily = data.fontFamily.concat(result.metadata.fontFamily);
    data.importants = data.importants.concat(result.metadata.importants);
    data.mediaQueries = data.mediaQueries.concat(result.metadata.mediaQueries);
    data.oddWidth = data.oddWidth.concat(result.metadata.oddWidth);
    data.absolute = data.absolute.concat(result.metadata.absolute);

    Object.assign(data.colorMappings, result.colorMappings);
    Object.assign(data.colorFileMaps, result.colorFileMaps);
  });

  data.summary = {
    colors: Object.keys(data.colorMappings).length,
    importants: data.importants.length,
    issues: Object.keys(data.issues).length,
    mediaQueries: data.mediaQueries.length,
    absolute: data.absolute.length,
    oddWidth: data.oddWidth.length
  }

  fs.writeFileSync("results.json", JSON.stringify(data, null, '\t'));

  // fs.writeFileSync("mappings.less", buildMappings(data.colorMappings, data.colorFileMaps));
  fs.writeFileSync("mappings.less", buildSortMapping(data));
  return data;
}

function buildSortMapping(data) {
  if (Object.keys(data.colorMappings).length === 0) {
    return;
  }

  let colors = Object.keys(data.colorMappings);
  // failure in windows
  try {
    colors = sortColors(colors);
  } catch (err) {
    console.log(err);
  }

  let ret = '';
  let index = 1;
  for (const color of colors) {
    let files = data.colorFileMaps[color];
    for (let file of files) {
      ret = `${ret}// ${file}
`;
    }
    ret = `${ret}@color_${index}: ${color};
`;
    index = index + 1;
  }
  return ret;
}

function buildMappings(json, colorFileMaps) {
  let ret = '';
  for (const key in json) {
    let files = colorFileMaps[key];
    for (let file of files) {
      ret = `${ret}// ${file}
`;
    }
    ret = `${ret + [json[key]]}: ${key};
`;
  }
  return ret;
}
