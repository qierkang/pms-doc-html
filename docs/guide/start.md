# 快速开始

## 环境

`pms-doc` 支持在浏览器和 Nodejs 环境运行。

## 安装

`pms-doc` 支持使用包管理器安装或者通过 `<script />`链接引入。

### 使用包管理器

推荐使用包管理器进行安装：

```perl
# 选择一个你喜欢的包管理器

# NPM
$ npm install pms-doc --save

# Yarn
$ yarn add pms-doc

# pnpm
$ pnpm install pms-doc
```

### Script 链接

也可以通过浏览器的 `script` 标签导入 CDN 文件使用，下面以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) CDN 厂商为例：

#### unpkg

```html
<!-- 引入固定版本 -->
<head>
  <script src="https://unpkg.com/pms-doc@3.18.2/dist/index.js"></script>
</head>

<!-- 自动引入最新版本 -->
<head>
  <script src="https://unpkg.com/pms-doc"></script>
</head>
```

#### jsDelivr

```html
<!-- 引入固定版本 -->
<head>
  <script src="https://cdn.jsdelivr.net/npm/pms-doc@3.18.2/dist/index.js"></script>
</head>

<!-- 自动引入最新版本 -->
<head>
  <script src="https://cdn.jsdelivr.net/npm/pms-doc"></script>
</head>
```

::: tip
我们建议使用 CDN 引入 `pms-doc` 的用户在链接地址上锁定版本，以固定版本的方式引入，以免将来 `pms-doc` 升级时受到非兼容性更新的影响。如果你有自己的 CDN，也建议将 `pms-doc` 文件下载下来托管到你自己的 CDN 上，以免第三方 CDN 不稳定带来的影响。
:::

## 使用

支持多种环境及模块化规范的使用方式。

### ESM

```js
import { pinyin } from 'pms-doc';

pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'
```

### 动态导入

```js
import('pms-doc').then((exports) => {
  exports.pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'
});
```

### Script 连接

当你使用 `<script />` 引入 `pms-doc` 时，会在全局(window)挂载一个名为 `pinyinPro` 变量。

```html
<script src="https://unpkg.com/pms-doc"></script>

<script>
  var { pinyin } = pinyinPro;
  pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'
</script>
```

### CommonJS

```js
const { pinyin } = require('pms-doc');

pinyin('汉语拼音'); // 'hàn yǔ pīn yīn'
```
