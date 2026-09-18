---
name: 多欄位Note-Skill
description: >-
  多欄位Note Skill：嚴格依據書本內容整理筆記，建置現代高質感多欄位漸進閱讀器。
  包含書籍主頁（書本資訊卡片、3D 封面圖與精選插圖展示）、本篇導論與巢狀章節閱讀（點選章節前隱藏其餘內容與右側清單，點選章節後跳轉內文並吸頂顯現右側小節清單）。
  適用於法律筆記、教科書導讀、技術文檔與各類學術知識庫之系統化建置。
---

# 多欄位Note Skill (教材依據型多欄位漸進閱讀器規範)

本 Skill 專門用於指導 Agent 遵循**「嚴格依據書本內容整理，絕不自行查找腦補」**的核心原則，建置具備現代高質感（Pagefy / Mintlify / Stripe Docs 風格）的多欄位筆記閱覽器。系統包含**「書籍主頁（展示書本資訊、封面與插圖）」**、**「本篇導論」**與**「章節內文」**，並完整實踐**「漸進式揭露（Progressive Disclosure）」**的互動體驗。

---

## 核心工作法則 (Core Principles)

### 1. 嚴格書本依據原則 (Strict Textbook Fidelity)
- **禁止自行查找或預填學說**：嚴禁在未收到使用者提供的課本內文前，依據外部資料庫或 AI 自身記憶預先撰寫或腦補學說內容。
- **逐字逐頁精確核對**：收錄之導讀、引言、定義與案例必須標註教材頁碼（例如：第 XVIII-1 頁、第 1-1 頁），原文忠實呈現。
- **插槽保留機制**：若使用者尚未提供某一章節內文，應在中欄保留優雅的「待填入插槽卡片」，絕不隨意填充假資料。

### 2. 書籍主頁與書本資訊／圖片展示規範 (Book Home & Media Showcase Standard)
每一套知識庫或筆記閱覽器，皆必須在左側目錄頂端設有專屬的**「🏠 書籍主頁 (Home)」**，集中呈現書籍基本資料與視覺形象：
- **書本中繼資料 (Book Metadata) 標準欄位**（以實例《刑法總則【圖說系列】》為基準）：
  1. **書名**：`刑法總則【圖說系列】`
  2. **副標題／外文名**：`Strafrecht`
  3. **作者／編著者**：`陳奕廷(易律師) 編著`
  4. **系列別**：`律師／司法三等／法研所`
  5. **出版社**：`高點 (高點法學系列)`
  6. **出版日期**：`2022／10／31`
  7. **國際標準書號 (ISBN)**：`9786263342880`
  8. **書號／代碼**：`L602210`
  9. **三大編排特色標語**：
     - `概念圖示・清晰易懂`
     - `重點彙整・深入淺出`
     - `例題研究・必勝關鍵`
- **書籍圖片與視覺展示 (Book Artwork & Illustrations)**：
  1. **立體質感書封 (3D Perspective Cover)**：
     - 書封外觀採用具備立體景深（`perspective: 1200px`、深層陰影）、微光澤邊框與書脊光澤之展示容器。
     - **自訂圖片插槽**：預設使用 `<img>` 標籤載入本機或上傳圖片（如使用者上傳之實體書封）。
     - **優雅降級佔位 (Graceful Fallback)**：當實體圖片檔案載入中或無法載入時，自動展示高質感之「CSS 漸層立體擬真書封」，帶有燙金標題、版次徽章與裝訂折痕陰影。
  2. **核心架構插圖與圖解藝廊 (Book Illustrations Grid)**：
     - 在主頁下方設有「書籍核心圖解與架構預覽」區塊，放置書中重點圖解（如圖 1-1、圖 1-2），點擊可直接跳轉至對應章節錨點。

### 3. 漸進式閱讀與三態視圖控制原則 (Progressive Disclosure)
閱覽器採用三態式視圖切換機制：

```text
狀態 0: 書籍主頁 (Home)    --> 狀態 1: 本篇導論 (Intro)    --> 狀態 2: 章節內文 (Chapter 1, 2...)
[中欄: 書籍資訊 + 封面插圖]    [中欄: 僅顯示本篇導讀原文]      [中欄: 章節內文與圖解詳解]
[右側 TOC: 完全隱藏]           [右側 TOC: 完全隱藏]            [右側 TOC: 吸頂顯現，跟隨高亮]
```

- **【狀態 0 - 書籍主頁 (`home`)】**：
  - **左側選單**：高亮「🏠 書籍主頁」（柔和淺藍底、深藍字）。
  - **中欄閱讀區**：展示書籍資訊看板、3D 封面圖、特色亮點與快速進入按鈕（「🚀 開始閱讀第一章」、「📖 查看本篇導論」）。
  - **右側清單**：**完全隱藏**，維持極簡專注的主頁視覺。
- **【狀態 1 - 本篇導論 (`intro`)】**：
  - **左側選單**：高亮「📖 導論 篇名」。
  - **中欄閱讀區**：**僅顯示導論／本篇導讀原文**，不出現其餘章節或未解鎖內容，維持無干擾的極簡閱讀環境。
  - **右側清單**：**完全隱藏**，避免讀者在未進入內文時看到空白或過早的章節目錄。
- **【狀態 2 - 點按章節（如「第一章 犯罪的概念」）後】**：
  - **左側選單**：高亮對應章節名稱。
  - **中欄閱讀區**：平滑切換至章節內文，頂部具備麵包屑導航與「← 返回主頁」、「← 返回導讀」連結。
  - **右側清單**：**同步顯現**（在桌面端右側展開章節 TOC 清單，支援平滑滾動至各段落錨點與回到頂部）。
- **【點按「返回導讀」或「返回主頁」】**：
  - 頁面即刻回退至對應視圖，右側清單再次自動隱藏。

### 4. 左側目錄階層樹與子目錄樣式規範 (Sidebar Hierarchical Tree & Sub-Directory Standard)
為了清楚呈現教科書或技術文檔「篇章 ➔ 巢狀子章節」的隸屬關係，左側目錄選單必須符合現代文檔庫（Mintlify / Stripe Docs 風格）之階層樹狀規範：
- **父層單元（Parent Unit / Preface / Part）**：
  - 例如「導論 犯罪概念與論罪結構」，字體採用較大粗體（`text-[14px]` 或 `text-[14.5px]`、`font-bold`），搭配單元圖示（如 `📖` 或 `📂`），作為目錄分組大綱。
- **子章節／子項目（Sub-Chapters / Nested Items）**：
  - 例如「第一章 犯罪的概念」、「第二章 刑法的論罪結構」：
  - **字體縮小**：字級一律縮小為 **`text-[13px]`**（精緻小巧，與父層形成明確主從視覺差）。
  - **縱向樹狀分支引導線 (Tree Line)**：子目錄容器外圍必須加上 **`ml-4 pl-3 border-l-2 border-slate-200 dark:border-slate-800/80`**，形成清晰的分支導引線。
  - **子節點指示圓點 (Item Dot Indicator)**：每個子章節按鈕前端必須配置微型圓點指示符號（如 `w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-500`），選中或懸停時連動發光高亮。
  - **緊湊微邊距**：邊距調整為 `py-1.5 px-2.5 rounded-lg`，避免按鈕尺寸過大而喧賓奪主，維持極簡專注的子目錄質感。

### 5. 現行法規核對與出處標註原則 (Statutory Currency & Official Sourcing)
- **實質查核現行法規**：當使用者要求查找現行法規有無更動時，必須實際查核全國法規資料庫、立法院法律系統與重大憲法法庭判決。
- **卡片下方標準化備註**：在每個案例或法條卡片下方，必須增設專屬「法規查核區塊」：
  1. **現行狀態徽章**：明確標註「條文無更動（維持現行法）」或「條文文字未動・受憲法裁判重大拘束」或具體修正內容。
  2. **條文精準內容**：摘錄現行法規核心文字與法理要旨。
  3. **周邊連動修正與司法判決**：補充民法成年年齡下修、保安處分修正（如刑法 § 87）、憲法法庭裁判（如 113 年憲判字第 8 號）等重大實務進展。
  4. **權威官方出處**：直接附上全國法規資料庫、憲法法庭或立法院官方連結。

### 6. DOM 結構閉合完整性與視圖容器獨立性原則 (HTML Tag Integrity & Blank Screen Prevention)
- **嚴防未配對或多餘閉合標籤（Stray Closing Tag Trap）**：
  - 嚴禁在案例或段落卡片結尾遺留多餘的 `</div>`！
  - 一旦內文中出現多餘的 `</div>`，瀏覽器會提前閉合中央 `<main>` 與最外層三欄網格容器 `.app-layout-container`。
  - **災難後果**：右側清單 `#rightTocAside` 會被踢出三欄網格容器外，淪為頁面底部的普通全寬區塊，導致右側清單「掉落至頁面下方或左下角橫向展開，無法吸頂跟隨」。
  - **結構鐵律**：`.app-layout-container` 內部**必須且只能**存在 3 個一級子節點：
    - 節點 1：`aside#sidebar`（左側目錄）
    - 節點 2：`main`（中央主閱讀區）
    - 節點 3：`aside#rightTocAside`（右側章節清單）
- **小節內部標籤配對自檢（Section & Card Tag Balance Check）**：
  - 教材各小節常包含豐富的案例、三階拆解、法條對比表格與邏輯推導卡片，HTML 巢狀深度常達 4～6 層（如 `<section> > div.p-6 > div.space-y-6 > div.grid > div.p-5`）。
  - **鐵律**：在結束該小節並開始下一個 `<section>` 之前，必須精確核對並閉合所有開啟的內部 `<div>` 以及外層 `<section>`。
  - **「內文沒東西 / 黑畫面」之致命根因警示**：
    - 若某一小節（如 Section 5）結尾少寫了 `</div>` 與 `</section>`，瀏覽器解析引擎**不會拋出報錯**，而是會自動將後續的小節甚至後續篇章的獨立視圖（如 `#viewChapter2`、`#viewPart0` 等）全部當作該未閉合段落的內部子元素！
    - **災難後果**：當讀者切換章節時，JavaScript 執行 `viewChapter2.classList.add('hidden')`，由於後續視圖被誤解析在內部，其父層受 `display: none` 影響，**連帶使子視圖全數隱藏，造成中央主閱讀區一片漆黑、完全無內容顯示（「內文沒東西？」）**！
  - **防範檢查規程**：
    1. 每個 `<section>` 必須有且僅有 1 個對應的 `</section>`，且該節內部的所有卡片容器必須在 `</section>` 前全數閉合。
    2. 新增或修訂任何章節段落後，必須確認所有 `<div id="viewXXX">` 彼此為 `<main>` 的平級兄弟節點（Direct Siblings），絕不允許相互巢狀包覆。

### 7. 母篇章（Part / Division）與「本篇導讀 (Conducted Read)」標準規範 (Conducted Read Standard Specification)
教科書除全書開篇「導論」外，通常依體系劃分為若干母篇章（例如「第零篇 刑法的運作、操作原理與法律效果」、「第一篇 犯罪論」等）。每篇在進入具體分章前，均設有「本篇導讀」：
- **左側目錄之母篇章與導讀子項目**：
  - **母篇章標題按鈕**（如 `navBtnPart0`）：採用較大粗體（`text-[14px]`、`font-bold`），點擊可直接跳轉該篇導讀。
  - **本篇導讀子按鈕**（如 `navBtnPart0Intro`）：縮排收納於子樹狀引導線內（`ml-4 pl-3 border-l-2`），字級 `text-[13px]`，配置子節點微型圓點指示符，名稱統一定為 **`本篇導讀 (Conducted read)`**。
- **中央主閱讀區之「本篇導讀」專用視圖容器規範**：
  - **視圖容器命名**：`#viewIntro`（導論）、`#viewPart0`（第零篇）、`#viewPart1`（第一篇）等。
  - **上方專業徽章**：必須置放微型等寬英文徽章 **`PREFACE • CONDUCTED READ`**（`text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider`）。
  - **篇章大標題**：採用醒目大字（`h2`，`text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight`）。
  - **本篇導讀原文卡片 (Conducted Read Card)**：
    - 容器外框：`p-6 sm:p-8 rounded-3xl border-2 border-blue-500/30 bg-white dark:bg-[#101623] shadow-sm space-y-4`。
    - 卡片頂部欄：包含 `📖 本篇導讀 (Conducted Read)`（`text-base sm:text-lg font-bold`）與精確教材頁碼標籤（如 `第 0-1 頁`、`第 XVIII-1 頁`，樣式：`text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold`）。
    - 原文引用區：使用 `blockquote` 搭配左側粗邊線（`border-l-4 border-blue-500 pl-4 py-1 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic`），完整忠實呈現作者課本原文，嚴禁任意刪減或自撰。
- **沉浸導讀原則（導讀狀態右側 TOC 隱藏）**：
  - 在所有「本篇導讀」狀態下（如 `#intro`, `#part-0` 等），**右側 TOC 清單必須嚴格隱藏（`display: none !important`）**，避免讀者在未正式進入章節內文前看到零散或空白的小節目錄，維持最高專注度的導讀體驗。
  - 唯有讀者點擊第一章、第二章等具體子章節時，右側清單才動態吸頂顯現。

### 8. 概念焦點框（Focus Box）實體天藍色塊美學與高對比標籤規範 (Focus Box & Callout Aesthetic Standard)
教材章節開篇核心引言（如「一個壞人做了一件壞事」）、思考核心、法理關鍵推導或總結概念卡片，外觀必須符合專屬的「概念焦點框（Focus Box / `.box-legal-navy`）」規範：
- **實體色塊底色原則（Vibrant Sky Blue Tint Block）**：
  - **明亮模式**：嚴禁使用死白無存在感的淡白漸層！必須採用飽滿溫潤的專屬天藍色漸層 **`linear-gradient(135deg, #BAE6FD 0%, #7DD3FC 100%) !important`**，使重點框框與周遭底色（`bg-slate-50`）形成清晰明確的層次區隔，展現扎實的「實體卡片框框」存在感。
  - **暗夜模式**：無縫切換為深邃沉穩的夜幕晶體藍 **`linear-gradient(135deg, rgba(8, 47, 73, 0.88) 0%, rgba(12, 74, 110, 0.78) 100%) !important`**，兼顧焦點凝聚與夜間長時間護眼。
- **精緻外框與重點導引線（Border & Left Accent）**：
  - 外圍配置 **`2px solid #38BDF8 !important`** 天藍邊框搭配 `rounded-2xl`（16px）柔和圓角。
  - 左側加設自信鮮明的粗體重點導引線 **`border-left: 6px solid #0284C7 !important`**（暗夜模式為 `6px solid #38BDF8 !important`）。
  - 搭配天藍色微散漫陰影 **`box-shadow: 0 4px 18px -2px rgba(2, 132, 199, 0.18) !important`**，賦予框框立體懸浮感。
- **超高易讀性內文字體（High-Contrast Readability）**：
  - 在天藍色底色上，內文正文一律採用深海軍藍 **`color: #0c4a6e !important`**（或 `#032034`），對比度遠超 WCAG AAA（7:1 以上）嚴格標準，消除閱讀疲勞。
  - 強調字級採用深墨藍色 **`color: #032034 !important; font-weight: 800;`**。
  - 暗夜模式正文為冰藍色 **`color: #e0f2fe !important`**，強調字為純白色 **`color: #ffffff !important`**。
- **框內立體純白膠囊標籤（In-Box White Pill Badges）**：
  - 框框內出現之法律關鍵字（如「一個壞人」、「一件壞事」、「壞事推定壞人」、「不法推定罪責」、「阻卻罪責事由」），在淺藍底色中**一律改採純白襯底＋彩色粗體邊線**立體襯托：
    - 藍色系標籤（評價客體/行為人）：`background: #ffffff !important; color: #0369a1 !important; border: 1.5px solid #0284c7 !important; font-weight: 800; box-shadow: 0 1px 3px rgba(0,0,0,0.08);`
    - 琥珀金色標籤（超法定/法益衡量）：`background: #ffffff !important; color: #b45309 !important; border: 1.5px solid #d97706 !important; font-weight: 800;`
    - 玫瑰紅色標籤（阻卻事由/例外排除）：`background: #ffffff !important; color: #be123c !important; border: 1.5px solid #e11d48 !important; font-weight: 800;`
  - 暗夜模式標籤則自動切換為對應深色半透明背景與亮彩色邊線文字，層次分明、重點立刻躍然紙上。

### 9. UTF-8 檔案編碼防護與母本同步安全原則 (UTF-8 Integrity & Master Sync Principle)
- **純 UTF-8 無 BOM 鐵律（Anti-Mojibake Shield）**：
  - 專案內所有 HTML、Markdown、JS、CSS 檔案必須始終保持標準 UTF-8 編碼。
  - 嚴防在 Windows 繁體中文環境下因 ANSI / Big5 (CP950) 判定衝突導致繁體中文字元裂解為菱形問號（`` Mojibake）。
- **雙重母本備援與安全同步架構（Master Sync Architecture）**：
  - 系統必須維護一組乾淨、無損的母本檔案（如 `visual.html` 為乾淨 UTF-8 母本）。
  - 所有建置與自動推送批次檔（如 `copy_cover_and_push.bat`）**同步方向必須嚴格鎖定由乾淨母本向目標檔覆蓋**（即 `copy /y visual.html index.html`），嚴禁未經編碼驗證之暫存檔逆向覆蓋母本。
  - 專案根目錄必須常備一鍵還原批次檔 `restore_index.bat`，若瀏覽器出現編碼暫態異常，讀者可雙擊一鍵無損秒級還原。

### 10. 法條原地指引卡片與零干擾防截斷規範 (Unobtrusive Statute Popover & Anti-Truncation Standard)
法條原地懸浮預覽旨在為讀者提供即時法理對照，但絕不能犧牲閱讀的流暢與版面的乾淨。必須嚴格恪守以下準則：
- **禁止正文貪婪掃描與底線雜訊污染（Zero Prose Clutter Principle）**：
  - 嚴禁用正則表達式遍歷內文所有 `span, a, strong, div` 節點自動套用虛線底線！這會使引言、標題、正文充滿突兀的點狀下劃線，破壞整齊度與排版美感。
  - **精準綁定鐵律**：事件監聽僅能鎖定「專屬案例卡片標頭膠囊徽章（如 `data-statute="刑法第16條"`）」或法規出處按鈕，維持內文閱讀區 100% 純淨無雜訊。
- **懸停防誤觸延遲機制（Desktop Hover Debounce）**：
  - 桌面端懸停觸發必須加入 **200~260ms** 的防誤觸計時器（`hoverTimer`）。
  - 當滑鼠只是快速劃過頁面時，卡片絕不突兀閃爍跳出；唯有讀者目光停留並刻意懸停時，才優雅淡入。
- **雙端響應式分流（Mobile Bottom Sheet vs. Desktop Floating Card）**：
  - **桌面端（`>= 768px`）**：採絕對定位懸浮卡片，最大寬度擴增至 **`max-w-[27rem]`（432px）**，確保長法條標題與階層徽章能從容舒展，不顯擁擠。
  - **行動端（`< 768px`）**：嚴禁在手機中央彈出懸浮窗！必須全面轉為標準的**「底部滑出抽屜式面板（Bottom Sheet）」**（`fixed inset-x-0 bottom-0`），配合全螢幕半透明毛玻璃遮罩（`backdrop-blur-sm bg-black/50`）與顯眼的專屬 `✕` 關閉按鈕，點擊遮罩或按鈕即刻向下滑出收起。
- **雙層頂部標頭與徹底防截斷規範（Two-Tier Anti-Truncation Standard）**：
  - 針對長法條名稱（如《刑法第 16 條【禁止錯誤／違法性錯誤】》），**嚴禁在單一行內擠入「圖示 + 標籤 + 標題 + 關閉按鈕」並施加 `truncate` 導致字尾被「...」無情裁切**！
  - **標準雙層版面結構**：
    - **第 1 層（輔助分類與操作列）**：左側放置法規圖示（`📜`）與彩色階層審查徽章（如 `罪責階段審查`）；右側放置顯眼的關閉按鈕（`✕`）。
    - **第 2 層（完整法定標題列）**：獨立成專屬整行，寬度滿版（`w-full`），標題標籤使用 **`h4.break-words.leading-snug`**，**絕對禁止使用 `truncate`**！確保長法條標題在手機與電腦端 100% 完整無漏展示。

### 11. 全域極速智慧搜尋系統規範 (Global Fast Search Standard - Ctrl+K)
知識庫文檔龐大時，必須為讀者提供秒級直達的智慧檢索中心：
- **全域快捷鍵召喚（Shortcut Binding）**：全域監聽 `Ctrl + K` 與 `Cmd + K`，亦在頂部導航列常駐搜尋入口按鈕，點擊即喚醒毛玻璃全螢幕搜尋浮層（Search Modal）。
- **四象限即時分類過濾膠囊（Filter Pills）**：
  - 搜尋列下方提供微型分類過濾標籤：`全部`、`⚖️ 案例`、`📜 法條`、`💡 核心學說`。
  - 支援點擊即時重篩，亦支援關鍵字模糊加權比對（標題、副標、關鍵爭點與法條條號）。
- **全鍵盤無障礙導航（Keyboard Accessibility）**：
  - 支援 `↑` / `↓` 鍵上下巡覽搜尋結果項目，被選中項目高亮凸顯；按下 `Enter` 鍵直接跳轉。
  - 按下 `Escape` 鍵或點擊遮罩即刻平滑關閉。
- **搜尋目標脈衝光暈導引（Search Target Pulse Glow）**：
  - 跳轉至目標案例或小節卡片時，系統自動將該卡片平滑滾動至螢幕正中央（`scrollIntoView({ behavior: 'smooth', block: 'center' })`）。
  - 目標元素自動注入專屬脈衝光暈 class（`.search-target-highlight`），觸發持續 **2.5 秒**的呼吸動態微光（外發光天藍色光暈與微浮放效果），讓讀者在滿版文字中瞬間鎖定答案，隨後光暈優雅自然消退。

### 12. 案例爭點一鍵導出與雙鏈筆記格式規範 (One-Click Note Export & Anki/Notion Formatting)
教科書的案例與爭點是考生與法律學習者的核心記憶資產，必須支援一鍵轉換為個人筆記：
- **案例標頭專屬動作鈕**：在每個案例卡片右上角配置低調精緻的「`📋 複製筆記`」操作按鈕。
- **標準化 Markdown 雙鏈筆記排版**：導出格式必須兼顧 Anki 卡片正面/背面、Notion 雙欄與 Obsidian 雙鏈語法：
  - `# ⚖️ 【案例 1-1】案例名稱`
  - `> 📖 出處：陳奕廷《刑法總則【圖說系列】》第 X-X 頁`
  - `## 📌 案件事實`：摘錄精簡事實。
  - `## 🔍 階層審查與核心爭點`：條列構成要件、違法性、罪責各階段審查結論。
  - `## 💡 考點速記口訣`：記憶公式與關鍵法理推導。
  - `## 📜 關聯法條`：列出關聯條號（如 `[[刑法第16條]]`）。
- **即時微互動反饋（Micro-Feedback）**：
  - 點擊後剪貼簿複製成功，按鈕文字與圖示暫態切換為「`✓ 已複製`」並變換亮色。
  - 同步於頁面右下角彈出精緻微型 Toast 提示通知（「已複製案例爭點筆記至剪貼簿」），維持 3 秒後平滑淡出。

### 13. 深層研讀進度可視化與章節分頁規範 (Reading Progress & Pagination Standard)
針對長篇學術知識庫，消除讀者進度迷失感並提供體系化沉浸導引：
- **頂部黏性進度微流光（2.5px Sticky Progress Bar）**：
  - 緊貼於頂部導航列下沿，高度為極細緻之 `2.5px`。
  - 隨頁面垂直滾動距離即時計算讀取百分比，採用柔和漸層（如天藍至青藍），微光流動，絕不阻擋任何文字點擊。
- **右下角懸浮環形進度回到頂部按鈕（Circular Progress FAB）**：
  - 右下角常駐 48x48px 晶體圓形按鈕，內嵌 SVG 環形進度軌道（直徑 40px，圓周長精確定為 `125.66px`）。
  - 當滾動深度小於 300px 時優雅隱藏；超過 300px 時平滑縮放浮現。
  - 平時以動態圓弧勾勒當前篇章研讀百分比，滑鼠懸停時中心箭頭平滑漸變為「數字百分比（如 `78%`）」，點擊後平滑滾動回頂。
- **章節底端雙向導航分頁卡片（Two-Way Pagination Cards）**：
  - 在所有主閱讀視圖（書籍主頁、導論、第一章、第二章）正文最底端，固定配置寬版雙向分頁導航卡片。
  - 左側為「← 上一單元」、右側為「下一單元 →」，內含單元識別微標籤、單元大標題與互動懸停位移動畫，引導讀者循序漸進完成整部知識庫之體系化研讀。

---

## 標準版面架構 (Layout Architecture)

採用現代響應式三欄結構：

```text
+-----------------------------------------------------------------------------------+
| 頂部導航列 (Sticky Header) : 標題 + 視圖動態徽章 (Badge) + 深淺主題切換 (Sticky)   |
+---------------------+---------------------------------------+---------------------+
| 左側目錄 (Sidebar)  | 中央主閱讀區 (Center Reader)          | 右側章節 (TOC)      |
| [260px, Sticky]     | [minmax(0, 1fr), 自適應擴展]           | [280px, Sticky]     |
|                     |                                       |                     |
| 🏠 書籍主頁 (Home)  | 【視圖 0 - 書籍主頁】                 | 【狀態 0 & 1】      |
| 📖 導論 犯罪概念... | 《刑法總則【圖說系列】》資訊 + 3D書封 | 【完全隱藏】        |
|   第一章 犯罪概念   | ------------------------------------- | ------------------- |
|   第二章 論罪結構   | 【視圖 1 - 本篇導論】                 | 【狀態 2 - 章節】   |
| (選中時淺藍底藍字)  | 僅顯示導讀卡片，無其餘干擾。          | 📌 第一章 章節清單  |
|                     | ------------------------------------- |  - 一、核心概念     |
|                     | 【視圖 2 - 第一章內文】               |  - 二、不法推定罪責 |
|                     | 麵包屑導航 + 第一章內文與原文圖解     |  - ... (共八小節)   |
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

/* 3. 右側章節清單：嚴格鎖定第 3 欄，吸頂在右上角 */
#rightTocAside {
  grid-column: 3 !important;
  grid-row: 1 !important;
  display: none; /* 預設在 home 與 intro 狀態下隱藏 */
  position: sticky !important;
  top: 5rem !important;
  align-self: start !important;
  width: 280px !important;
  min-width: 280px !important;
  max-width: 280px !important;
  max-height: calc(100vh - 6.5rem) !important;
  overflow-y: auto !important;
  z-index: 30 !important;
}

/* 進入章節狀態時在寬螢幕顯示右側清單 */
body.in-chapter #rightTocAside {
  display: block !important;
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 2. 書籍主頁 (Book Home) 結構與 3D 書封卡片實例

```html
<!-- 中央主閱讀區內：書籍主頁 (View Home) -->
<div id="viewHome" class="space-y-8">
  <!-- 書籍資訊看板 Hero Card -->
  <div class="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white/95 dark:bg-[#111726]/95 p-6 sm:p-8 backdrop-blur shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      
      <!-- 左側：立體書籍封面展示區 -->
      <div class="md:col-span-5 flex justify-center">
        <div class="perspective-[1200px] py-2">
          <!-- 3D 書封容器 -->
          <div class="relative w-56 h-80 rounded-2xl overflow-hidden shadow-2xl transition-all duration-400 hover:scale-105 border border-white/20 bg-slate-900">
            <!-- 實體圖片插槽 -->
            <img id="bookCoverImg" 
                 src="./book-cover.png" 
                 alt="刑法總則【圖說系列】封面" 
                 onerror="this.style.display='none'; document.getElementById('bookCoverFallback').style.display='flex';" 
                 class="w-full h-full object-cover object-top">
            
            <!-- 優雅降級 Fallback 擬真書封 -->
            <div id="bookCoverFallback" class="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-amber-950 p-5 flex flex-col justify-between text-white border border-white/20">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-bold border border-amber-400/40">圖說系列</span>
                <span class="text-[10px] text-white/70 font-mono">律師・司三・法研</span>
              </div>
              <div class="space-y-1.5 my-auto text-center">
                <div class="text-[10px] font-bold uppercase tracking-wider text-amber-300">高點法學</div>
                <h3 class="text-2xl font-black tracking-tight text-white">刑法總則</h3>
                <p class="text-xs text-blue-300 font-serif italic">Strafrecht</p>
                <div class="h-0.5 w-10 bg-amber-400 rounded-full mx-auto my-1"></div>
                <p class="text-[10px] text-white/80">概念圖示・清晰易懂<br>重點彙整・深入淺出<br>例題研究・必勝關鍵</p>
              </div>
              <div class="flex items-center justify-between text-[11px] text-white/80 pt-3 border-t border-white/15">
                <span class="font-bold text-white">陳奕廷(易律師) 編著</span>
                <span class="text-[10px] text-amber-300 font-bold">高點文化</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側：書籍詳細規格與資訊 -->
      <div class="md:col-span-7 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-200 dark:border-blue-800/50">
          <span>📚 高點法學圖說系列</span>
          <span class="w-1 h-1 rounded-full bg-blue-500"></span>
          <span>國考權威用書</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          刑法總則【圖說系列】
        </h1>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          本書專為法律國考與學術深造打造，以清晰的概念圖示化繁為簡，貫穿「不法推定罪責」與三階層論罪體系。緊扣重要學說爭點與司法實務見解，協助考生奠定最堅實的刑法總則思維。
        </p>

        <!-- 書籍規格清單 -->
        <div class="grid grid-cols-2 gap-2.5 pt-1 text-xs">
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span class="text-slate-400 block text-[10px] font-semibold">作者 / 編著</span>
            <span class="font-bold text-slate-800 dark:text-slate-200">陳奕廷 (易律師) 編著</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span class="text-slate-400 block text-[10px] font-semibold">出版社 / 體系</span>
            <span class="font-bold text-slate-800 dark:text-slate-200">高點 (高點法學系列)</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span class="text-slate-400 block text-[10px] font-semibold">出版日期 / 書號代碼</span>
            <span class="font-bold text-slate-800 dark:text-slate-200">2022／10／31 (L602210)</span>
          </div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span class="text-slate-400 block text-[10px] font-semibold">國際標準書號 (ISBN)</span>
            <span class="font-mono font-bold text-slate-800 dark:text-slate-200">9786263342880</span>
          </div>
        </div>

        <!-- 快速行動 CTA 按鈕 -->
        <div class="flex flex-wrap gap-3 pt-2">
          <button onclick="switchView('chapter-1')" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg shadow-blue-500/20 transition-all">
            🚀 開始閱讀第一章
          </button>
          <button onclick="switchView('intro')" class="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold transition-all">
            📖 閱讀本篇導論
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 3. 本篇導讀 (Conducted Read) 視圖標準範本 (HTML Template)

```html
<!-- 中央主閱讀區內：母篇章本篇導讀視圖 (View Conducted Read) -->
<div id="viewPart0" class="fade-enter hidden space-y-6">
  
  <!-- 頂部精緻英文識別徽章與大標題 -->
  <div class="space-y-1.5">
    <span class="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
      PREFACE • CONDUCTED READ
    </span>
    <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
      第零篇 刑法的運作、操作原理與法律效果
    </h2>
  </div>

  <!-- 本篇導讀卡片 (教材原文卡片) -->
  <div class="p-6 sm:p-8 rounded-3xl border-2 border-blue-500/30 bg-white dark:bg-[#101623] shadow-sm space-y-4">
    <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-3">
      <div class="flex items-center gap-2">
        <span class="text-xl">📖</span>
        <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">本篇導讀 (Conducted Read)</h3>
      </div>
      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold">
        第 0-1 頁
      </span>
    </div>

    <!-- 忠實引述課本原文 -->
    <blockquote class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-4 border-blue-500 pl-4 py-1">
      「本篇是正式踏入刑法學習前的暖身，介紹影響刑法運作的四大支柱，以及刑法操作的前理解（諸如刑法的適用效力、解釋方法）。至於刑法的法律效果，這個通常被教科書或參考書放在最尾巴說明的刑罰理論，筆者挪移到本篇提前整理，旨在提醒大家「謹思慎刑」的核心理念，也與刑法最後手段性原則接軌。」
    </blockquote>
  </div>

</div>
```

### 4. 多篇章視圖切換 (switchView) 與 Hash 路由規範

```javascript
function switchView(viewName, shouldScrollTop = true) {
  clearNavStyles();

  // 1. 隱藏所有視圖（確保各容器互斥）
  if (viewHome) viewHome.classList.add('hidden');
  if (viewIntro) viewIntro.classList.add('hidden');
  if (viewChapter1) viewChapter1.classList.add('hidden');
  if (viewChapter2) viewChapter2.classList.add('hidden');
  if (viewPart0) viewPart0.classList.add('hidden');

  // 2. 依據視圖名稱精確呈現，並控制右側 TOC 之顯隱
  if (viewName === 'home') {
    if (viewHome) viewHome.classList.remove('hidden');
    if (rightTocAside) rightTocAside.style.setProperty('display', 'none', 'important');
    currentChapterBadge.textContent = '書籍主頁';
  } else if (viewName === 'part-0') {
    if (viewPart0) viewPart0.classList.remove('hidden');
    // 導讀狀態嚴格隱藏右側 TOC
    if (rightTocAside) rightTocAside.style.setProperty('display', 'none', 'important');
    if (navBtnPart0) navBtnPart0.classList.add('text-blue-600', 'dark:text-blue-400');
    if (navBtnPart0Intro) navBtnPart0Intro.classList.add(...ACTIVE_CLASS);
    currentChapterBadge.textContent = '第零篇';
  } else if (viewName === 'chapter-1' || viewName === 'chapter-2') {
    const targetChapter = viewName === 'chapter-1' ? viewChapter1 : viewChapter2;
    if (targetChapter) targetChapter.classList.remove('hidden');
    // 進入實質章節，顯現右側吸頂 TOC
    document.body.classList.add('in-chapter');
    if (rightTocAside) rightTocAside.style.setProperty('display', 'block', 'important');
    renderToc(viewName);
  }
}
```

### 5. 概念焦點框 (Focus Box) CSS 與 HTML 標準範本

```css
/* 概念焦點框核心樣式 (明亮天藍實體色塊 / 暗夜夜幕晶體藍) */
.box-legal-navy {
  background: linear-gradient(135deg, #BAE6FD 0%, #7DD3FC 100%) !important;
  border: 2px solid #38BDF8 !important;
  border-left: 6px solid #0284C7 !important;
  box-shadow: 0 4px 18px -2px rgba(2, 132, 199, 0.18) !important;
}
.box-legal-navy p {
  color: #0c4a6e !important; /* 深海軍藍：高對比極致舒適易讀 */
}
.box-legal-navy strong {
  color: #032034 !important; /* 墨黑深藍強調 */
}

/* 框內純白襯底彩色膠囊標籤 */
.box-legal-navy .legal-tag-blue {
  background: #ffffff !important;
  color: #0369a1 !important;
  border: 1.5px solid #0284c7 !important;
  font-weight: 800 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
}
.box-legal-navy .legal-tag-amber {
  background: #ffffff !important;
  color: #b45309 !important;
  border: 1.5px solid #d97706 !important;
  font-weight: 800 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
}
.box-legal-navy .legal-tag-rose {
  background: #ffffff !important;
  color: #be123c !important;
  border: 1.5px solid #e11d48 !important;
  font-weight: 800 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08) !important;
}

/* 暗夜模式對應 */
.dark .box-legal-navy {
  background: linear-gradient(135deg, rgba(8, 47, 73, 0.88) 0%, rgba(12, 74, 110, 0.78) 100%) !important;
  border: 2px solid rgba(56, 189, 248, 0.55) !important;
  border-left: 6px solid #38BDF8 !important;
  box-shadow: 0 4px 18px -2px rgba(0, 0, 0, 0.35) !important;
}
.dark .box-legal-navy p {
  color: #e0f2fe !important;
}
.dark .box-legal-navy strong {
  color: #ffffff !important;
}
.dark .box-legal-navy .legal-tag-blue {
  background: rgba(3, 105, 161, 0.45) !important;
  color: #7dd3fc !important;
  border: 1.5px solid #38bdf8 !important;
  font-weight: 800 !important;
}
.dark .box-legal-navy .legal-tag-amber {
  background: rgba(180, 83, 9, 0.4) !important;
  color: #fde047 !important;
  border: 1.5px solid #f59e0b !important;
  font-weight: 800 !important;
}
.dark .box-legal-navy .legal-tag-rose {
  background: rgba(190, 18, 60, 0.4) !important;
  color: #fda4af !important;
  border: 1.5px solid #f43f5e !important;
  font-weight: 800 !important;
}
```

```html
<!-- HTML 範例結構 -->
<div class="box-legal-navy p-6 sm:p-7 rounded-2xl space-y-4 text-sm sm:text-base leading-relaxed">
  <p>
    刑法是一部處理犯罪的法律，至於如何謂犯罪？簡單說，<span class="legal-tag-blue">「一個壞人」</span>做了<span class="legal-tag-amber">「一件壞事」</span>就是犯罪。
  </p>
  <p>
    ...這就是<span class="legal-tag-blue">「壞事推定壞人」</span>原則，而推翻罪責推定的理由稱為<span class="legal-tag-rose">「阻卻罪責事由」</span>。
  </p>
</div>
```

### 6. 法條懸浮卡片雙層標頭與響應式抽屜面板範本 (Statute Popover Template)

```html
<!-- 法條原地指引懸浮卡片 (桌面絕對定位 / 行動端底部滑出面板) -->
<div id="statutePopover" class="hidden fixed z-50 transition-all duration-200" style="display: none;">
  <!-- 行動端毛玻璃背景遮罩 (Backdrop) -->
  <div id="statutePopoverBackdrop" class="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>

  <!-- 卡片主體容器 (桌面寬度 max-w-[27rem]，行動端 bottom sheet) -->
  <div class="w-full md:max-w-[27rem] rounded-t-3xl md:rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-md shadow-2xl p-5 space-y-3.5">
    
    <!-- 雙層標頭 - 第 1 層：分類圖示、階層徽章與顯眼關閉按鈕 -->
    <div class="flex items-center justify-between gap-2">
      <div class="flex items-center gap-2 min-w-0">
        <span class="text-base shrink-0">📜</span>
        <span id="statuteStageBadge" class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50">
          罪責階段審查
        </span>
      </div>
      <button onclick="hideStatutePopover()" class="w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-base font-bold" title="關閉">
        ✕
      </button>
    </div>

    <!-- 雙層標頭 - 第 2 層：完整法定標題 (break-words，絕無 truncate 裁切！) -->
    <div class="w-full">
      <h4 id="statuteTitle" class="text-sm sm:text-base font-black text-slate-900 dark:text-white break-words leading-snug">
        刑法第 16 條【禁止錯誤／違法性錯誤】
      </h4>
    </div>

    <!-- 條文內文摘錄 -->
    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
      <p id="statuteBody" class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-sans"></p>
    </div>

    <!-- 教科書審查要點 -->
    <div class="space-y-1">
      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">💡 國考審查要點</span>
      <p id="statuteNote" class="text-xs text-blue-700 dark:text-blue-300 leading-relaxed bg-blue-50/60 dark:bg-blue-950/40 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40"></p>
    </div>
  </div>
</div>
```

```javascript
// 桌面端 260ms 防誤觸延遲邏輯範本
let statuteHoverTimer = null;

function bindStatuteBadge(element, statuteKey) {
  element.addEventListener('mouseenter', (e) => {
    clearTimeout(statuteHoverTimer);
    statuteHoverTimer = setTimeout(() => {
      showStatutePopover(statuteKey, element);
    }, 260); // 260ms 防劃過誤觸
  });
  element.addEventListener('mouseleave', () => {
    clearTimeout(statuteHoverTimer);
  });
}
```

### 7. 環形滾動進度回到頂部按鈕 (Circular Progress FAB) 範本

```html
<!-- 48x48px 懸浮環形按鈕 (周長 125.66 = 2 * PI * 20) -->
<button id="btnScrollTop" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" 
        class="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200 dark:border-slate-700 shadow-xl flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none group">
  <!-- SVG 圓弧進度軌道 -->
  <svg class="w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 48 48">
    <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2.5" class="text-slate-200 dark:text-slate-800 fill-none" />
    <circle id="scrollTopProgressCircle" cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" 
            class="text-blue-600 dark:text-blue-400 fill-none transition-all duration-75" 
            stroke-dasharray="125.66" stroke-dashoffset="125.66" />
  </svg>
  <!-- 中心箭頭 (懸停時轉為百分比數字) -->
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
    <span id="scrollTopIcon" class="text-slate-700 dark:text-slate-200 text-sm font-bold group-hover:opacity-0 transition-opacity">↑</span>
    <span id="scrollTopPercent" class="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">0%</span>
  </div>
</button>
```

```javascript
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
  
  // 更新周長 offset
  const circumference = 125.66;
  const offset = circumference - (progress * circumference);
  const circle = document.getElementById('scrollTopProgressCircle');
  if (circle) circle.style.strokeDashoffset = offset;

  // 浮現控制 (>300px)
  const btn = document.getElementById('btnScrollTop');
  if (btn) {
    if (scrollTop > 300) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none');
      btn.classList.remove('opacity-100');
    }
  }
  const percentText = document.getElementById('scrollTopPercent');
  if (percentText) percentText.textContent = `${Math.round(progress * 100)}%`;
});
```

### 8. 全域搜尋目標脈衝光暈動畫 (Search Target Pulse Glow)

```css
/* 搜尋導航跳轉目標呼吸脈衝高亮 */
@keyframes searchTargetPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(56, 189, 248, 0.25);
    transform: scale(1.01);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(56, 189, 248, 0);
    transform: scale(1);
  }
}
.search-target-highlight {
  animation: searchTargetPulse 1.25s ease-in-out 2 !important;
  border-color: #0284c7 !important;
}
```

### 9. 案例筆記 Markdown 雙鏈結構格式化器 (Case Note Formatter)

```javascript
function formatCaseNoteMarkdown(caseData) {
  return `# ⚖️ 【${caseData.id}】${caseData.title}
> 📖 出處：陳奕廷《刑法總則【圖說系列】》第 ${caseData.page} 頁

## 📌 案件事實
${caseData.facts}

## 🔍 階層審查與核心爭點
- **構成要件**：${caseData.tbReview || '該當'}
- **違法性**：${caseData.rwReview || '不具阻卻違法事由'}
- **罪責階層**：${caseData.guiltReview}

## 💡 考點速記口訣
${caseData.keyTips}

## 📜 關聯法條
${caseData.relatedStatutes.map(s => `[[${s}]]`).join(' ')}
`;
}
```

---

## 驗收檢查清單 (Quality Checklist)

- [ ] **書籍主頁展示**：點擊「🏠 書籍主頁」時，是否正確顯示書籍資訊看板、規格清單（書名、作者、出版社、出版日期、ISBN）與特色摘要？
- [ ] **書本圖片與 Fallback**：封面展示區是否正確載入書本封面圖片？在未提供圖片時，優雅的立體漸層書封 Fallback 是否正常呈現？
- [ ] **精選圖解藝廊**：主頁下方是否設有書籍核心圖解卡片預覽區？
- [ ] **三態與多篇章視圖切換**：`home`（主頁）、`intro`（導論）、各篇導讀（如 `part-0`）與章節（`chapter-1`, `chapter-2`）切換是否完全互斥且無任何黑底白畫面？
- [ ] **本篇導讀標準卡片**：各篇導讀視圖是否具備 `PREFACE • CONDUCTED READ` 徽章、篇章大標題、頁碼徽章與帶左邊框之 `blockquote` 原文？
- [ ] **右側 TOC 顯隱**：在「書籍主頁」與「各篇本篇導讀」狀態下，右側章節清單是否**嚴格完全隱藏**？進入第一章或第二章時是否**立即顯現並固定吸頂於右上角**？
- [ ] **吸頂防落檢驗**：滾動至頁面最底端時，右側清單是否**絕無掉落至頁面下方或左下角滿版**？
- [ ] **概念焦點框底色辨識度**：核心直觀引言與焦點框框是否採用專屬天藍實體漸層色塊（`#BAE6FD ~ #7DD3FC`），邊界清晰醒目，絕非融入背景的死白淡漸層？
- [ ] **框內字體與純白膠囊標籤**：天藍框內正文是否採用深海軍藍（`#0C4A6E` / `#032034`）AAA 級易讀色彩？「一個壞人」、「壞事推定壞人」等標籤是否採用純白底色彩色粗體邊線立體襯托？
- [ ] **檔案編碼純 UTF-8 完整性**：頁面標題、左側選單與中央內文繁體中文字元是否 100% 正確呈現，絕無任何菱形問號編碼損壞？
- [ ] **母本安全同步方向**：自動構建或推送批次檔（如 `copy_cover_and_push.bat`）是否嚴格鎖定由乾淨母本（`visual.html`）覆蓋目標檔（`index.html`），避免暫存檔案逆向破壞母本？
- [ ] **Section 標籤深度配對閉合**：每個 `<section>` 內部之所有卡片與格線 `<div>` 是否於 `</section>` 之前全數閉合？`<section>` 與 `</section>` 數量是否精確 1:1 相等？
- [ ] **視圖容器平級獨立性**：`<main>` 內各主視圖（`#viewHome`, `#viewIntro`, `#viewChapter1`, `#viewChapter2`, `#viewPart0` 等）是否各自完全閉合且為兄弟節點，絕無相互巢狀包覆導致切換章節時黑底空白（「內文沒東西」）？
- [ ] **左側目錄子章節樣式**：子章節字級是否小於父層（`text-[13px]`），是否具備左側縱向分支線（`border-l-2`）、微邊距與子項目指示圓點？
- [ ] **錨點點擊防跳退**：點擊右側各小節 TOC 錨點時，是否平滑跳轉至該段落，且絕不會誤觸跳回主頁或導論？
- [ ] **法條原地卡片純淨度**：正文與標題是否 100% 杜絕正則貪婪掃描與虛線底線？是否僅精準綁定案例卡片標頭徽章與法規按鈕？
- [ ] **法條卡片雙層標頭防截斷**：法條彈窗標頭是否拆為兩層（第一層放置階層徽章與關閉鈕，第二層放置完整法條標題）？是否使用 `break-words` 且**絕無 `truncate` 裁切**？
- [ ] **行動端抽屜式面板**：在螢幕寬度 < 768px 時，法條懸浮卡片是否自動轉為自底端滑出的標準面板（Bottom Sheet），並配置全螢幕毛玻璃遮罩與顯眼的 `✕` 關閉按鈕？
- [ ] **全域智慧搜尋 (Ctrl+K)**：按下 `Ctrl+K` 或點擊導航搜尋鈕是否順利呼出全螢幕搜尋浮層？四象限分類過濾（全部/案例/法條/學說）與鍵盤箭頭選擇是否靈活？跳轉後目標卡片是否居中並觸發 2.5 秒脈衝光暈高亮？
- [ ] **案例爭點一鍵導出筆記**：點擊「📋 複製筆記」後是否生成規範的 Anki/Notion 雙鏈 Markdown 內容？按鈕是否暫態切換為「✓ 已複製」並於右下角彈出微型 Toast 通知？
- [ ] **環形進度回到頂部按鈕**：頁面滾動超過 300px 時是否平滑浮現？SVG 環形軌道動態周長（125.66px）與懸停百分比是否正確反映研讀進度？點擊是否平滑回頂？



