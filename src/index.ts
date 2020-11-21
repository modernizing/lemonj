import refactorAnalysis from './RefactorAnalysis';
import mappingAnalysis from './MappingAnalysis';
import { safeStringify } from './SafeStringfy';
import { analysisDir } from './Analysis';
import { refactorDir, issueToModifyModel } from './Refactor';
import { hexThreeToSix } from './color/HexConvert';
import { colourNameToHex } from './CssColors';
import CodeFile from './editor/CodeFile';

const ColorSupport = {
  hexThreeToSix,
  colourNameToHex,
};

export {
  refactorAnalysis,
  mappingAnalysis,
  analysisDir,
  refactorDir,
  safeStringify,
  ColorSupport,
  issueToModifyModel,
  CodeFile,
};
