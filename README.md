# ⚖️ 刑法 3-Column 知識庫筆記 (Criminal Law Notes)

> 基於現代 **Note 3 Column** 規範打造的高美學、互動式刑法總論學習知識庫。以直觀「壞人做壞事」的生活常理為出發點，完整解析三階層論罪體系、雙重推定與反證邏輯，並收錄 15 大經典爭議案例精析。

---

## 🌟 核心特色

1. **三欄式現代知識庫架構 (3-Column Layout)**：
   - **左側邊欄 (Sidebar)**：篇章分類導航樹、章節即時篩選、手機抽屜式收合。
   - **中央主文 (Main Reader)**：麵包屑導航、層次分明標題、醒目 Callout 提示、經典案例速查卡片。
   - **右側目錄 (Table of Contents)**：動態 Scrollspy 滾動監聽定位、一鍵複製網址、平滑平頂。
2. **⚡ 論罪推定互動模擬器 (Interactive Presumption Visualizer)**：
   - 步進式觀察「形式不法（構成要件該當）」➔「實質不法（違法性）」➔「罪責（非難可能性）」的動態推定路徑與阻卻反證點亮。
3. **15 大經典教案精析收錄**：
   - 🍒 **案例 1-14 櫻桃案**：利益衡量極端懸殊與權利濫用之界限。
   - 🩸 **案例 1-15 輸血案**：手段不正與憲法人性尊嚴之不可侵犯性。
   - 👶 **案例 1-6 幼兒墜床燙衣火災案**：超法定阻卻罪責與期待可能性理論。
   - 案例 1-1 ～ 1-13：不法意識、責任能力、正當防衛、緊急避難、承諾與義務衝突。
4. **極致操作體驗**：
   - 全域鍵盤快捷鍵 `Ctrl + K`（或 Mac `⌘K`）即時喚醒搜尋彈窗。
   - 深色曜石黑（Obsidian `#0B0F17`）與俐落淺色（Clean Slate）一鍵切換。
   - 零依賴單檔 HTML 架構，任何電腦雙擊即可秒開瀏覽。

---

## 📂 專案檔案架構

```
criminal-law-notes/
├── visual.html                      # 🎨【全新】全圖解思維與論罪決策視覺版 (流程圖/決策樹/案例卡片)
├── index.html                       # 📖 筆記知識庫主頁面 (三欄式詳解版，直接雙擊即可開啟)
├── note_3column.html                # 📖 3-Column 知識庫筆記頁面鏡像
├── CRIMINAL_LAW_VISUAL_GUIDE.md     # 📊 配套圖解指南 (含 Mermaid 流程圖與速查表格)
├── CRIMINAL_LAW_NOTES.md            # 📄 完整純文字 Markdown 研讀手冊與案例筆記
├── push_to_github.bat               # 🚀 Windows 一鍵推送到 GitHub 批次檔
├── README.md                        # ℹ️ 本專案說明文件
└── .agents/
    └── skills/
        └── note-3-column/           # Note 3 Column 專用 Skill 定義
            ├── SKILL.md             # Skill 核心規範與檢核清單
            └── references/
                ├── layout-architecture.md  # 佈局幾何與 Flex-Sticky 架構規格
                └── style-tokens.md         # 色彩配色系統與 Design Tokens
```

---

## 🚀 本地即時瀏覽（雙軌系統）

- **喜歡圖形思維、流程圖與案例卡片**：直接在檔案總管中雙擊 **`visual.html`**，秒開【全圖解視覺版】（內建 10 大視覺化圖解模組、行為論思考三部曲、假釋保安雙軌與 26 大實戰教案情境卡片盒）！
- **需要深入檢索條文、法理爭點與學說**：雙擊 **`index.html`** 進入三欄式知識庫，兩版本頂部與側邊欄均支援一鍵無縫切換！

---

## 📤 一鍵推送到 GitHub

專案目錄內已內建高相容性的自動化腳本：

1. 雙擊執行 `push_to_github.bat`。
2. 腳本會自動檢查 Git 狀態、暫存變更並引導您輸入 Commit 訊息。
3. 若尚未關聯 GitHub 遠端，腳本會貼心提示您輸入倉庫 URL。
4. 自動推送至 `origin/main` 分支。

### 🌐 啟用 GitHub Pages 線上公開筆記
在您的 GitHub 倉庫頁面：
1. 點擊頂部 **Settings** ➔ 側邊欄點選 **Pages**。
2. 在 **Branch** 選擇 `main` 分支與 `/(root)` 目錄。
3. 點擊 **Save**，稍等 1~2 分鐘即可獲得專屬公開線上網址！

---

## 📜 依循規範
本專案嚴格遵循 `.agents/skills/note-3-column` 現代三欄式文檔規範進行設計與維護。
