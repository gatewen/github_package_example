# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

這是一個用於學習 GitHub Packages 發布流程的簡單 JavaScript 專案。專案設計極簡，只包含最基本的功能來示範完整的套件發布流程。

## Development Commands

```bash
# 測試套件功能
npm test

# 手動發布到 GitHub Packages (需要先設定 token)
npm publish

# 本地測試
node test.js
```

## Architecture & Structure

```
GitHubPackage/
├── .github/workflows/
│   └── publish.yml      # GitHub Action 自動發布配置
├── index.js            # 主要模組 (exports: greet, add, getVersion)
├── test.js            # 簡單測試檔案
├── package.json       # NPM 配置，已設定 GitHub Packages registry
├── .npmrc            # NPM registry 配置
└── README.md         # 使用說明文件
```

## Key Patterns & Conventions

1. **套件命名**: 使用 `@username/package-name` 格式以符合 GitHub Packages 要求
2. **版本管理**: 使用語意化版本 (Semantic Versioning)
3. **自動發布**: 推送 `v*` 標籤時自動觸發 GitHub Action 發布
4. **測試**: 使用簡單的 Node.js 腳本進行功能驗證

## GitHub Packages 發布流程

1. 確保 `package.json` 中的 `name` 欄位格式為 `@你的GitHub用戶名/套件名`
2. 設定 GitHub Personal Access Token (需要 `write:packages` 權限)
3. 使用 `git tag v版本號` 建立版本標籤並推送以觸發自動發布