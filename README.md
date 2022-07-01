# taro-app
Taro 小程序模板

### React + Taro + TS + Hooks 技术栈

### 目录结构

### 常用命令

```bash
yarn dev:weapp # 开发环境
```

### Eslint 
```bash
yarn add @babel/eslint-parser@7.15.0 # 安装解释器
```

```js
// .eslintrc 自定义解释器和规则
"parser": "@babel/eslint-parser",
"rules": {
  "react/jsx-uses-react": "off",
  "react/react-in-jsx-scope": "off",
  "no-unused-vars": ["error", {"varsIgnorePattern": "Taro|wx"}],
  "no-mixed-spaces-and-tabs": 2, // 禁止空格 和 tab 的混合缩进
  "no-debugger": 2, // 禁止有debugger
  "space-infix-ops": 2, // 要求操作符周围有空格
  "space-before-blocks": 2, // 要求语句块之前有空格
  "indent": ["error", 2, {"SwitchCase": 1}], // 缩进使用两个空格
  "jsx-quotes": ["error", "prefer-double"], // JSX属性使用双引号
  "import/first": 0 // 消除绝对路径必须在相对路径前引入的问题
}

// 安装vscode的eslint插件，检查vscode 是否有以下配置
"eslint.validate": [
  "javascript",
  "javascriptreact",
  "vue",
  "typescript",
  "typescriptreact"
],

// package.json 配置eslint 命令
"lint": "eslint --ext .js,.tsx,.ts,.jsx src"
```

```bash
# 全局格式化命令
yarn lint
```

#### husky + lint-staged
- husky：属于git hook工具，用来配置npm脚本的
- lint-staged：能够检查本地代码的改动，帮我们只校验改动过的文件，大大提升了校验效率

```bash
# 安装
yarn add husky lint-staged -D
```

```js
// package.json 配置一下
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,ts,tsx,jsx}": "eslint -cache"
}
```

### 全局配置

#### 别名（alias）

```js
// config/index.js
alias: {
  "@": path.resolve(__dirname, "..", "src/"),
},
// tsconfig.json
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}
```

#### css modules 配置

```js
// config/index.js
cssModules: {
  enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
  config: {
    namingPattern: "module", // 转换模式，取值为 global/module
    generateScopedName: "[name]__[local]___[hash:base64:5]",
  },
},
```

```js
// 文件需命名 xxx.module.scss

import styles from "./index.module.scss";
<Text className={styles.abc}>css modules</Text>;
```
