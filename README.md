# ercoffice — Website 2.0

ercoffice 個人作品集網站，於 2026 年使用 Astro 重新建構。

Website: https://ercoffice.net  
Repository: https://github.com/ercoranger/ercoranger.github.io

## 1. 技術架構（Tech Stack）

網站採用 **Astro + Markdown + CSS + GitHub Pages** 建構。

- **Astro**：靜態網站框架（Static Site Generator），負責頁面路由、元件管理與網站編譯。
- **Markdown / YAML**：管理作品內容、metadata 與中英文敘事。
- **JSON**：管理 Header 等網站介面的雙語固定文字。
- **CSS**：使用原生 CSS Grid（12-column grid）建立版面，不依賴 Bootstrap。
- **JavaScript**：處理作品側邊導覽、頁面互動等功能。
- **Git / GitHub**：管理原始碼與版本歷史。
- **GitHub Actions**：自動測試、編譯與部署。
- **GitHub Pages**：託管正式網站，使用自訂網域 `ercoffice.net`。

網站採用 Static Build，不需要持續運作的 Node.js 後端伺服器。

## 2. 專案結構

```text
/
├── .github/
│   └── workflows/
│       ├── astro-check.yml      # Build 測試
│       └── deploy.yml           # GitHub Pages 部署
│
├── public/
│   ├── CNAME                   # 自訂網域記錄
│   ├── favicon.ico
│   └── imgs/                   # 首頁縮圖與公開圖片
│
├── src/
│   ├── assets/                 # 作品圖片，由 Astro 處理
│   │
│   ├── components/
│   │   ├── header.astro
│   │   ├── footer.astro
│   │   └── project-menu.astro
│   │
│   ├── content/
│   │   ├── objects/            # 每件作品的 Markdown
│   │   └── site.json           # 網站介面雙語資料
│   │
│   ├── layouts/
│   │   └── base-layout.astro
│   │
│   ├── pages/
│   │   ├── index.astro         # 根目錄入口
│   │   └── [locale]/
│   │       ├── index.astro     # 中英文首頁
│   │       └── [slug].astro    # 動態作品頁面
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── package-lock.json
└── tsconfig.json
```

## 3. 網站路由與雙語系統

網站使用 Astro 的 File-based Routing。

`[locale]` 代表語言，`[slug]` 代表作品名稱。

```text
/en/                  English homepage
/zh/                  中文首頁

/en/Mineralloop/      English project
/zh/Mineralloop/      中文作品頁面
```

作品網址保留 Markdown 檔案名稱的大小寫，例如 `Mineralloop`，不自動改成小寫。

中英文內容主要整合在同一份 Markdown 中，透過 `.lang-en`、`.lang-zh` 等標記控制顯示。

`[slug].astro` 提供共用的作品頁框架，每件作品則可在 Markdown 中使用不同的 Sections 與版面配置。

## 4. 作品內容管理

每件作品使用一份 Markdown：

```text
src/content/objects/Mineralloop.md
```
