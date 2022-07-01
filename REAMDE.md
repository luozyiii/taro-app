### React + Taro + TS + Hooks 技术栈

### 目录结构

### 常用命令

```bash
yarn dev:weapp # 开发环境
```

### Eslint +

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
