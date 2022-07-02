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

#### husky + lint-staged (新版本配置)

- husky：属于 git hook 工具，用来配置 npm 脚本的
- lint-staged：能够检查本地代码的改动，帮我们只校验改动过的文件，大大提升了校验效率

```bash
# 安装
yarn add husky -D

# package.json 配置
"prepare": "husky install"

# 执行一次
npm run prepare

# 添加hooks
npx husky add .husky/pre-commit "npx lint-staged"

# 安装 lint-staged
yarn add -D lint-staged

# package.json 配置一下
"lint-staged": {
  "*.{js,ts,tsx,jsx}": "eslint --fix --quiet"
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

### 样式设置

#### 全局样式设置

- webpack 注入全局样式变量 [link](https://taro-docs.jd.com/taro/docs/config-detail#sass)

```js
// config/index.js
// 全局注入 scss 的例子: 往所有 scss 文件头部插入 scss 代码
// 全局 scss 变量，若 data 与 resource 中设置了同样的变量，则 data 的优先级高于 resource
module.exports = {
  // ...
  sass: {
    resource: ["src/styles/variable.scss", "src/styles/mixins.scss"],
    projectDirectory: path.resolve(__dirname, ".."),
    data: "$nav-height: 48px;",
  },
};
```

```js
// 样式目录：src/styles
// 页面示例：src/pages/examples/scss
```

- app.scss 设置全局样式类

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

### 常用 Taro API 封装

```
目录：src/common/tools.ts
```

- 网络请求：request
- 消息提示框：showToast
- loading 提示框：showLoading
- 带参数路由跳转：navigateTo
- 缓存：setStorageSyncWithTime 和 getStorageSyncWithTime

### dva 数据流

```bash
# 安装依赖
yarn add react-redux redux
yarn add dva-core dva-loading

```

```
示例目录：pages/examples/dva
```

- 主要改动目录：

```ts
// src/common/dva.ts
```

```ts
// src/app.ts => src/app.tsx
// 注意：import { Provider } from "react-redux"; 这个引入一直报错，最后只能对app.ts重命名为app.tsx
```

```ts
// src/models
```

### 骨架屏
