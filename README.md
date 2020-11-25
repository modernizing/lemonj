# CSS/LESS/SCSS Auto Refactor

Features:

- [x] Color refactor
  - [x] analysis colors
  - [x] auto-refactor colors
- [ ] 3+ level class nested Refactor
  - [ ] analysis 3+ level nested
  - [ ] process 3+ level nested
- [ ] selector auto folding. `.level1.level2{}` to `.level1{.level2}}`
  - [ ] analysis need to merge selector
  - [ ] refactor selector
- [ ] sort `colors.less` by colors
- [ ] Summary
  - [x] fontFamily
  - [x] colors
  - [x] importants
  - [x] mediaQueries
  - [x] is-odd-width
  - [x] absolute

Todo:

- [ ] command split
  - [ ] Split `color` refactor as subcommand
- [ ] migration to TypeScript
  - [ ] split ast packages
  - [ ] use lerna
  - [x] use esbuild

## Refactor Color

1. analysis files

```
node dist/cli.js analysis _fixtures
```

2. modify `mappings.less` to current vars

```less
// _fixtures/less/color/border.less
@color1: #ddd;
// _fixtures/less/color/border.less
@color2: green;
// _fixtures/less/color/rgba.less
@color3: rgba(255, 0, 0, 0.3);
// _fixtures/less/color/sample.less
@color4: #ff7f50;
// _fixtures/less/color/sample.less
// _fixtures/less/color/sample2.less
@color5: #800080;
// _fixtures/less/color/sample.less
@color6: red;
// _fixtures/less/color/sample.less
// _fixtures/less/color/sample.less
@color7: #428bca;
// _fixtures/less/color/sample.less
@color8: #fff;
// _fixtures/less/color/sample2.less
@color9: #000000;
```

3. run refactoring

```
node dist/cli.js refactor _fixtures
```

## Todo

### Change to Less API

```javascript
var less = require('less'),
  fs = require('fs'),
  path = require('path');

var src = './test_import.less';
var result = less.parse(
  fs.readFileSync(src).toString(),
  {
    filename: path.resolve(src),
  },
  function (e, tree) {
    console.log(JSON.stringify(tree, null, 2));
  }
);
```

## Refs

1. [CSS structure](https://rscss.io/css-structure.html)

## related

1. [CSSO](https://github.com/css/csso) is a CSS minifier. It performs three sort of transformations: cleaning (removing redundant), compression (replacement for shorter form) and restructuring (merge of declarations, rulesets and so on). As a result your CSS becomes much smaller.
