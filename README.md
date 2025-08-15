# GitHub Package 測試專案

這是一個用於學習 GitHub Packages 發布流程的最簡單 JavaScript 專案。

## 🎯 專案目的

學習完整的 GitHub Packages 發布流程，包含：
- npm 套件發布到 GitHub Packages
- GitHub Actions 自動化發布
- 從 GitHub Packages 安裝套件

## 📦 套件功能

提供三個簡單的函數：
- `greet(name)` - 問候函數
- `add(a, b)` - 加法函數  
- `getVersion()` - 取得版本號

## 🚀 完整設定步驟

### 1. 建立專案結構

```bash
# 初始化專案
npm init -y

# 建立必要檔案
touch index.js test.js .npmrc .gitignore
mkdir -p .github/workflows
```

### 2. 設定 package.json

關鍵設定：
- `name`: 必須是 `@你的GitHub用戶名/套件名` 格式
- `publishConfig`: 指定發布到 GitHub Packages
- `repository`: 指定 GitHub repository

```json
{
  "name": "@gatewen/github-package-example",
  "version": "1.0.0",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/gatewen/github_package_example.git"
  }
}
```

### 3. 建立 .npmrc 配置

```
@gatewen:registry=https://npm.pkg.github.com
```

### 4. 設定 GitHub Actions

在 `.github/workflows/publish.yml` 建立自動發布工作流程：
- 當推送版本標籤 (`v*`) 時自動觸發
- 使用 `GITHUB_TOKEN` 自動認證

### 5. 建立 GitHub Personal Access Token

1. 到 GitHub Settings → Developer settings → Personal access tokens
2. 建立新的 token，勾選權限：
   - `write:packages` - 發布套件
   - `read:packages` - 讀取套件
   - `delete:packages` (選擇性)
3. **重要**：立即複製並安全保存 token

### 6. 設定 Git 與 SSH

如果有多個 GitHub 帳號，設定 SSH config：

```bash
# ~/.ssh/config
Host github.com-me
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519

# 使用特定 SSH key
git remote set-url origin git@github.com-me:gatewen/github_package_example.git
```

## 📤 發布套件

### 手動發布

```bash
# 登入 GitHub Packages
npm login --registry=https://npm.pkg.github.com
# Username: gatewen
# Password: 你的 GitHub Token

# 發布套件
npm publish
```

### 自動發布 (GitHub Actions)

```bash
# 更新版本號 (在 package.json)
npm version patch  # 或 minor, major

# 提交並推送
git add .
git commit -m "版本更新"
git push

# 建立並推送標籤觸發自動發布
git tag v1.0.1
git push origin v1.0.1
```

## 📥 安裝使用套件

### 在其他專案中安裝

1. 建立 `.npmrc` 檔案：
```
@gatewen:registry=https://npm.pkg.github.com
```

2. 安裝套件：
```bash
npm install @gatewen/github-package-example
```

3. 使用套件：
```javascript
const { greet, add, getVersion } = require('@gatewen/github-package-example');

console.log(greet('World'));        // Hello, World! This is from GitHub Package.
console.log(add(2, 3));             // 5
console.log(getVersion());          // 1.0.1
```

## 🧪 測試

```bash
npm test
```

## ⚠️ 常見問題

### 1. 版本衝突錯誤
```
Error: Cannot publish over existing version
```
**解決**：更新 package.json 中的版本號

### 2. 404 找不到套件
```
404 Not Found - GET https://registry.npmjs.org/@gatewen%2fgithub-package-example
```
**解決**：需要在專案中建立 `.npmrc` 指定 GitHub Packages registry

### 3. 權限錯誤
```
Permission denied to repository
```
**解決**：檢查 SSH key 設定或使用正確的 GitHub Token

### 4. GitHub Actions 發布失敗
- 確認 repository 有開啟 Actions
- 檢查 token 權限是否足夠
- 查看 Actions 頁面的錯誤日誌

## 📝 檔案說明

```
GitHubPackage/
├── .github/workflows/
│   └── publish.yml      # GitHub Action 自動發布配置
├── index.js            # 主要模組
├── test.js            # 測試檔案
├── package.json       # NPM 配置
├── .npmrc            # NPM registry 配置
├── .gitignore        # Git 忽略檔案
├── CLAUDE.md         # Claude Code 操作指引
└── README.md         # 本檔案
```

## 🔑 安全提醒

- **永遠不要** 分享或提交 GitHub Token
- Token 就像密碼一樣敏感
- 定期更新 Token（建議每 90 天）
- 使用最小必要權限原則

## License

MIT