# GitHub Package 測試專案

這是一個用於學習 GitHub Packages 發布流程的簡單 JavaScript 專案。

## 安裝

```bash
npm install @gatewen/github-package-example
```

## 使用方法

```javascript
const { greet, add, getVersion } = require('@gatewen/github-package-example');

console.log(greet('World'));        // Hello, World! This is from GitHub Package.
console.log(add(2, 3));             // 5
console.log(getVersion());          // 1.0.0
```

## 發布到 GitHub Packages

### 手動發布

1. 設定 GitHub Personal Access Token (需要 `write:packages` 權限)
```bash
npm login --registry=https://npm.pkg.github.com
# Username: YOUR_GITHUB_USERNAME
# Password: YOUR_GITHUB_TOKEN
```

2. 發布套件
```bash
npm publish
```

### 自動發布 (使用 GitHub Actions)

當推送版本標籤時會自動觸發發布：
```bash
git tag v1.0.0
git push origin v1.0.0
```

## 測試

```bash
npm test
```

## License

MIT