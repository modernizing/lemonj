# 🍋 lemonj

CSS/LESS/SCSS 自动重构、坏味道检查工具。

## 💡 Features:

- 重构
  - CSS 颜色自动抽离重构变量
- 坏味道
  - 字体
  - 奇数宽度
  - `importants`
  - `position: absolute`
  - `mediaQueries`

## 📦 Install

```
npm install lemonj -g
```

或者

```
yarn global add lemonj
```

## 🌰 Demo

### CSS 颜色自动抽离变量

我们要重构 `\_fixtures` 文件夹下 `less` 样式文件：

1. 分析文件

```
lemonj analysis _fixtures
```

输出代码坏味道：

```
Code Smell:  {
  colors: 24,
  importants: 4,
  issues: 8,
  mediaQueries: 1,
  absolute: 0,
  oddWidth: 1
}
```

2. 每种颜色都重构为一个变量在 `mappings.less` 中，你可以修改对应的颜色：

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

3. 运行重构命令：

```
lemonj refactor _fixtures
```

此时每个写死的颜色，都抽离到变量中。

## 🛣️ RoadMap:

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
- [ ] command split
  - [ ] Split `color` refactor as subcommand
- [ ] migration to TypeScript
  - [ ] split ast packages
  - [ ] use lerna
  - [x] use esbuild
