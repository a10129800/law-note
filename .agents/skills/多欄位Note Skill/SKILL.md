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

---

## 標準版面架構 (Layout Architecture)

採用現代響應式三欄結構：

```text
+-----------------------------------------------------------------------------+
| 頂部導航列 (Sticky Header) : 標題 + 章節動態徽章 (Badge) + 深淺主題切換       |
+-------------------+-------------------------------------+-------------------+
| 左側目錄 (Sidebar)| 中央主閱讀區 (Center Reader)        | 右側章節 (TOC)    |
|                   |                                     |                   |
| 導論 犯罪概念...  | [狀態 A - 未按章節前 / 導論]        | [狀態 A]          |
|   第一章 犯罪概念 | 僅顯示導讀卡片，無其餘干擾。        | 【完全隱藏】      |
|   第二章 論罪結構 | ----------------------------------- | ----------------- |
| (選中時淺藍底藍字)| [狀態 B - 點選第一章後]              | [狀態 B]          |
|                   | 麵包屑導航 + 第一章內文與原文圖解   | 📌 第一章 章節清單|
|                   |                                     |  - 小節標題導航   |
|                   |                                     |  - 回到頂部       |
+-------------------+-------------------------------------+-------------------+
```

---

## 關鍵技術實作指引 (Implementation Guide)

### 1. 右側章節清單的穩健顯隱控制 (CSS / Body Class)
避免使用複雜的多重 Utility Class 覆蓋，改以 `body` 狀態類別進行宣告式控制：

```css
/* 預設狀態：右側章節清單在未進入章節前絕對隱藏 */
#rightTocAside {
  display: none;
}

/* 進入第一章且螢幕為桌面尺寸 (>= 1024px) 時才顯現 */
body.in-chapter-1 #rightTocAside {
  display: none;
}

@media (min-width: 1024px) {
  body.in-chapter-1 #rightTocAside {
    display: block;
    animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 2. 視圖切換與路由邏輯 (JavaScript State Routing)

```javascript
const viewIntro = document.getElementById('viewIntro');
const viewChapter1 = document.getElementById('viewChapter1');
const currentChapterBadge = document.getElementById('currentChapterBadge');

function switchView(viewName) {
  if (viewName === 'chapter-1') {
    // 1. 中央隱藏導讀，顯示第一章
    viewIntro.classList.add('hidden');
    viewChapter1.classList.remove('hidden');

    // 2. 啟動 body 狀態，右側清單隨之顯現
    document.body.classList.add('in-chapter-1');

    // 3. 更新標籤與左側高亮
    currentChapterBadge.textContent = '第一章';
    updateNavHighlight('chapter-1');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = 'chapter-1';
  } else {
    // 1. 中央僅顯示導讀
    viewIntro.classList.remove('hidden');
    viewChapter1.classList.add('hidden');

    // 2. 移除狀態，右側清單隱藏
    document.body.classList.remove('in-chapter-1');

    // 3. 更新標籤與左側高亮
    currentChapterBadge.textContent = '導論';
    updateNavHighlight('intro');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.replaceState(null, '', '#intro');
  }
}

// ⚠️ 關鍵防護：右側小節 TOC 錨點點擊與 Hash 路由
// 必須使用 scrollToSection 或檢查 startsWith('#sec-')，絕不能在點擊小節錨點時誤觸 else 踢回導論！
function scrollToSection(e, targetId) {
  if (e) e.preventDefault();
  const target = document.getElementById(targetId);
  if (target) {
    const offset = target.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: offset, behavior: 'smooth' });
    if (history.replaceState) history.replaceState(null, '', '#' + targetId);
  }
}

function handleHashRouting() {
  const hash = window.location.hash;
  if (hash === '#chapter-1') {
    switchView('chapter-1');
  } else if (hash.startsWith('#sec-')) {
    // 處於第一章內的小節錨點，維持第一章視野並平滑滾動，絕不可跳回導論！
    switchView('chapter-1');
    scrollToSection(null, hash.substring(1));
  } else if (hash === '#intro' || hash === '' || hash === '#') {
    switchView('intro');
  }
}

window.addEventListener('DOMContentLoaded', handleHashRouting);
window.addEventListener('hashchange', handleHashRouting);
```

---

## 多檔同步標準 (File Synchronization Standard)

任何更動必須同步維持以下檔案的一致性：
1. **`CRIMINAL_LAW_NOTES.md`**：Markdown 筆記本體，標註頁碼，僅保留經核實的內容。
2. **`index.html`**：主要互動式閱覽器入口。
3. **`note_3column.html`**：鏡像檔，確保直接開啟任一 HTML 均呈現相同體驗。
4. **`visual.html`**：視覺化／圖解專屬頁面，同步維持一致的章節切換狀態。

---

## 驗收檢查清單 (Quality Checklist)

- [ ] 進入首頁時，中央是否**只有**導讀內容？（無其他干擾文字）
- [ ] 進入首頁時，右側章節清單是否**完全隱藏**？
- [ ] 點擊左側「第一章」後，頁面是否平滑切換至第一章內文？
- [ ] 點擊左側「第一章」後，右側章節清單是否**正確顯現**？
- [ ] 點擊「返回導讀」或「本篇導讀」後，右側清單是否能**重新隱藏**？
- [ ] 所有內文是否 100% 來自使用者提供的教材，無任何未確認的腦補學說？
