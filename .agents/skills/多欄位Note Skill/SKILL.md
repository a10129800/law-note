---
name: 多欄位Note-Skill
description: >-
  多欄位Note Skill：嚴格依據書本內容整理筆記，並建置現代高質感多欄位漸進閱讀器（導論下巢狀分列第一章、第二章，點按章節前隱藏其餘內容與右側清單，點按章節後跳轉內文並顯現右側章節清單）。
  適用於法律筆記、教科書導讀、技術文檔與各類學術知識庫之系統化建置。
---

# 多欄位Note Skill (教材依據型多欄位漸進閱讀器規範)

本 Skill 專門用於指導 Agent 遵循**「嚴格依據書本內容整理，絕不自行查找腦補」**的核心原則，建置現代高質感（Pagefy / Mintlify / Stripe Docs 風格）的多欄位筆記閱覽器，並實踐**「漸進式揭露（Progressive Disclosure）」**的互動體驗。

---

## 核心工作法則 (Core Principles)

### 1. 嚴格書本依據原則 (Strict Textbook Fidelity)
- **禁止自行查找或預填學說**：嚴禁在未收到使用者提供的課本內文前，依據外部資料庫或 AI 自身記憶預先撰寫或腦補學說內容。
- **逐字逐頁精確核對**：收錄之導讀、引言、定義與案例必須標註教材頁碼（例如：第 XVIII-1 頁、第 1-1 頁），原文忠實呈現。
- **插槽保留機制**：若使用者尚未提供某一章節內文，應在中欄保留優雅的「待填入插槽卡片」，絕不隨意填充假資料。

### 2. 漸進式閱讀與視圖控制原則 (Progressive Disclosure)
- **【左側選單層級架構】**：
  - 上層篇名（如：`導論 犯罪概念與論罪結構`）。
  - 縮排子章節（如：`第一章 犯罪的概念`、`第二章 刑法的論罪結構`）。
  - 選中時呈現**柔和淺藍底、深藍字**（`bg-[#EBF3FE] text-blue-600`）。
- **【點按章節前 / 導論畫面】**：
  - **中欄閱讀區**：**僅顯示導論／本篇導讀原文**，絕對不出現其餘章節或未解鎖內容，維持無干擾的極簡閱讀環境。
  - **右側清單**：**完全不出現（隱藏）**，避免讀者在未進入內文時看到空白或過早的章節目錄。
- **【點按左側「第一章 犯罪的概念」後】**：
  - **中欄閱讀區**：平滑切換至第一章內文，頂部具備麵包屑導航與隨時可點擊之「返回導讀」連結。
  - **右側清單**：**同步顯現**（在桌面端右側展開章節 TOC 清單，支援平滑滾動至各段落錨點與回到頂部）。
- **【點按「返回導讀」或「導論」】**：
  - 頁面即刻回退至導讀視圖，右側清單再次自動隱藏。

### 3. 現行法規核對與出處標註原則 (Statutory Currency & Official Sourcing)
- **實質查核現行法規**：當使用者要求查找現行法規有無更動時，必須實際查核全國法規資料庫、立法院法律系統與重大憲法法庭判決。
- **卡片下方標準化備註**：在每個案例或法條卡片下方，必須增設專屬「法規查核區塊」：
  1. **現行狀態徽章**：明確標註「條文無更動（維持現行法）」或「條文文字未動・受憲法裁判重大拘束」或具體修正內容。
  2. **條文精準內容**：摘錄現行法規核心文字與法理要旨。
  3. **周邊連動修正與司法判決**：補充民法成年年齡下修、保安處分修正（如刑法 § 87）、憲法法庭裁判（如 113 年憲判字第 8 號）等重大實務進展。
  4. **權威官方出處**：直接附上全國法規資料庫、憲法法庭或立法院官方連結。

### 4. DOM 結構閉合完整性原則 (HTML Tag Integrity & Anti-Drop Shield)
- **嚴防未配對或多餘閉合標籤（Stray Closing Tag Trap）**：
  - 嚴禁在案例或段落卡片結尾遺留多餘的 `</div>`！
  - 一旦內文中出現多餘的 `</div>`，瀏覽器會提前閉合中央 `<main>` 與最外層三欄網格容器 `.app-layout-container`。
  - **災難後果**：右側清單 `#rightTocAside` 會被踢出三欄網格容器外，淪為頁面底部的普通全寬區塊，導致右側清單「掉落至頁面下方或左下角橫向展開，無法吸頂跟隨」。
  - **結構鐵律**：`.app-layout-container` 內部**必須且只能**存在 3 個一級子節點：
    - 節點 1：`aside#sidebar`（左側目錄）
    - 節點 2：`main`（中央閱讀區）
    - 節點 3：`aside#rightTocAside`（右側章節清單）

---

## 標準版面架構 (Layout Architecture)

採用現代響應式三欄結構：

```text
+-----------------------------------------------------------------------------------+
| 頂部導航列 (Sticky Header) : 標題 + 章節動態徽章 (Badge) + 深淺主題切換 (Sticky)   |
+---------------------+---------------------------------------+---------------------+
| 左側目錄 (Sidebar)  | 中央主閱讀區 (Center Reader)          | 右側章節 (TOC)      |
| [260px, Sticky]     | [minmax(0, 1fr), 自適應擴展]           | [280px, Sticky]     |
|                     |                                       |                     |
| 導論 犯罪概念...    | [狀態 A - 未按章節前 / 導論]          | [狀態 A]            |
|   第一章 犯罪概念   | 僅顯示導讀卡片，無其餘干擾。          | 【完全隱藏】        |
|   第二章 論罪結構   | ------------------------------------- | ------------------- |
| (選中時淺藍底藍字)  | [狀態 B - 點選第一章後]                | [狀態 B]            |
|                     | 麵包屑導航 + 第一章內文與原文圖解     | 📌 第一章 章節清單  |
|                     |                                       |  - 一、核心概念     |
|                     |                                       |  - 二、不法推定罪責 |
|                     |                                       |  - ... (共八小節)   |
|                     |                                       |  - 回到頂部 / 複製  |
+---------------------+---------------------------------------+---------------------+
```

---

## 關鍵技術實作指引 (Implementation Guide)

### 1. 三欄網格佈局與吸頂防落規範 (CSS Grid & Sticky Locking)

容器必須採用嚴格的 CSS Grid，並設定適當的軌道與間距：

```css
/* 三欄容器：外層容器不可加 align-items: start，讓各欄軌道拉伸至與中央等高 */
.app-layout-container {
  display: grid !important;
  grid-template-columns: 260px minmax(0, 1fr) 280px !important;
  gap: 1.5rem !important;
  width: 100% !important;
  max-width: 92rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 1.5rem 1rem !important;
  box-sizing: border-box !important;
}

/* 1. 左側目錄：鎖定第 1 欄，頂部吸頂 */
#sidebar {
  grid-column: 1 !important;
  grid-row: 1 !important;
  position: sticky !important;
  top: 5rem !important;
  align-self: start !important;
  max-height: calc(100vh - 6.5rem) !important;
  overflow-y: auto !important;
}

/* 2. 中央主閱讀區：鎖定第 2 欄 */
main {
  grid-column: 2 !important;
  grid-row: 1 !important;
  min-width: 0 !important;
  width: 100% !important;
}

/* 3. 右側章節清單：嚴格鎖定第 3 欄，吸頂在右上角（紅圈處） */
#rightTocAside {
  grid-column: 3 !important;
  grid-row: 1 !important;
  display: block !important;
  position: sticky !important;
  top: 5rem !important; /* 吸頂於導航列下方 */
  align-self: start !important;
  width: 280px !important;
  min-width: 280px !important;
  max-width: 280px !important;
  max-height: calc(100vh - 6.5rem) !important;
  overflow-y: auto !important;
  z-index: 30 !important;
}

/* 響應式斷點規範 */
@media (max-width: 1200px) {
  .app-layout-container {
    grid-template-columns: 240px minmax(0, 1fr) 260px !important;
    gap: 1rem !important;
  }
  #rightTocAside {
    width: 260px !important;
    min-width: 260px !important;
    max-width: 260px !important;
  }
}

@media (max-width: 1023px) {
  .app-layout-container {
    grid-template-columns: minmax(0, 1fr) 260px !important;
    gap: 1rem !important;
  }
  #sidebar {
    display: none !important;
  }
  main {
    grid-column: 1 !important;
  }
  #rightTocAside {
    grid-column: 2 !important;
    width: 260px !important;
    min-width: 260px !important;
    max-width: 260px !important;
  }
}

@media (max-width: 767px) {
  .app-layout-container {
    grid-template-columns: 1fr !important;
  }
  #sidebar {
    display: none !important;
  }
  main {
    grid-column: 1 !important;
  }
  #rightTocAside {
    display: none !important;
  }
}
```

### 2. 視圖切換與路由邏輯 (JavaScript State Routing)

```javascript
const viewIntro = document.getElementById('viewIntro');
const viewChapter1 = document.getElementById('viewChapter1');
const currentChapterBadge = document.getElementById('currentChapterBadge');
const rightTocAside = document.getElementById('rightTocAside');

function switchView(viewName, shouldScrollTop = true) {
  if (viewName === 'chapter-1') {
    // 1. 中央隱藏導讀，顯示第一章
    viewIntro.classList.add('hidden');
    viewChapter1.classList.remove('hidden');

    // 2. 啟動 body 狀態類別與右側清單顯示
    document.body.classList.add('in-chapter', 'in-chapter-1');
    if (rightTocAside) {
      rightTocAside.style.setProperty('display', 'block', 'important');
    }

    // 3. 更新標籤與左側高亮
    currentChapterBadge.textContent = '第一章';
    updateNavHighlight('chapter-1');
    renderToc('chapter-1');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (history.replaceState) history.replaceState(null, '', '#chapter-1');
    }
  } else {
    // 1. 中央僅顯示導讀
    viewIntro.classList.remove('hidden');
    viewChapter1.classList.add('hidden');

    // 2. 導讀視圖設定
    document.body.classList.remove('in-chapter', 'in-chapter-1');
    currentChapterBadge.textContent = '導論';
    updateNavHighlight('intro');
    renderToc('intro');

    if (shouldScrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (history.replaceState) history.replaceState(null, '', '#intro');
    }
  }
}

// ⚠️ 關鍵防護：右側小節 TOC 錨點點擊與 Hash 路由
// 必須使用 scrollToSection 或檢查 startsWith('#sec-')，絕不能在點擊小節錨點時誤觸 else 踢回導論！
function scrollToSection(e, targetId) {
  if (e) e.preventDefault();
  if (viewChapter1.classList.contains('hidden')) {
    switchView('chapter-1', false);
  }
  const target = document.getElementById(targetId);
  if (target) {
    const offset = target.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    if (history.replaceState) history.replaceState(null, '', '#' + targetId);
  }
}

function handleHashRouting() {
  const hash = window.location.hash;
  if (hash === '#chapter-1') {
    switchView('chapter-1', true);
  } else if (hash.startsWith('#sec-')) {
    switchView('chapter-1', false);
    scrollToSection(null, hash.substring(1));
  } else if (hash === '#intro' || hash === '' || hash === '#') {
    switchView('chapter-1', false); // 預設展示章節體驗
  }
}

window.addEventListener('DOMContentLoaded', handleHashRouting);
window.addEventListener('hashchange', handleHashRouting);
```

### 3. Scrollspy 動態捲動高亮規範 (Dynamic Scrollspy)
- 監聽 `window.onscroll` 事件，依據當前可見章節錨點，自動高亮右側清單對應連結：
  - 作用中小節套用：`-ml-px border-l-2 border-blue-600 dark:border-blue-400 bg-blue-50/50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 font-semibold`。
  - 未作用項目保持半透明灰色，維持視覺重點清晰。

---

## 多檔同步標準 (File Synchronization Standard)

任何更動必須同步維持以下檔案的一致性：
1. **`CRIMINAL_LAW_NOTES.md`**：Markdown 筆記本體，標註頁碼，僅保留經核實的內容。
2. **`index.html`**：主要互動式閱覽器入口。
3. **`note_3column.html`**：鏡像檔，確保直接開啟任一 HTML 均呈現相同體驗。
4. **`visual.html`**：視覺化／圖解專屬頁面，同步維持一致的章節切換狀態。

---

## 驗收檢查清單 (Quality Checklist)

- [ ] **版面定位**：右側章節清單 `#rightTocAside` 是否精確位於螢幕右上角（紅圈處，寬度 280px）？
- [ ] **吸頂跟隨**：在中央內文長頁面滾動時，右側清單是否能維持 `top: 5rem` 持續固定吸頂？
- [ ] **防落檢驗**：滾動至頁面最底端時，右側清單是否**絕無掉落至頁面下方或左下角滿版**？
- [ ] **標籤閉合**：所有卡片（案例、圖解面板）之 `<div>` 標籤是否精確閉合，`.app-layout-container` 是否僅有 3 個一級子節點？
- [ ] **清單內文核實**：右側清單是否包含完整小節標題（一至八項全部吻合）？
- [ ] **點擊跳轉與防回退**：點擊右側各小節標題時，是否平滑跳轉至該段落且不會誤跳回導論？
- [ ] **Scrollspy 高亮**：滾動閱讀到各個案例或圖解段落時，右側對應標題是否即時亮起？
- [ ] **法規標註規範**：案例卡片底部是否皆有「2026 現行法規狀態」查核徽章與官方資料庫出處？
- [ ] **多檔同步**：`index.html`、`note_3column.html`、`visual.html` 是否同步維持此最新規範？
