/**
 * 刑法總則【圖說系列】研讀筆記 - TOC 設定資料模組
 * 依據多欄位Note Skill 規範，管理各章節右側動態 TOC 清單與跳轉錨點
 */
window.TOC_CONFIG = {
  'home': {
    badge: '書籍首頁',
    title: '📌 書籍快速導航',
    items: [
      { action: "switchView('home')", label: '🏠 書籍主頁 (首頁看板)' },
      { action: "switchView('intro')", label: '📖 本篇導讀 (第 XVIII-1 頁)' },
      { action: "switchView('chapter-1')", label: '📑 第一章 犯罪的概念 (1-1 ~ 1-11)' },
      { action: "switchView('chapter-2')", label: '📄 第二章 刑法的論罪結構 (1-13 ~ 1-15 頁)' },
      { action: "switchView('part-0')", label: '⚖️ 第零篇 刑法的運作、操作原理與法律效果' },
      { action: "switchView('part0-chapter-1')", label: '📑 第零篇 第一章 刑法的運作原理 (第 2-1 頁)' },
      { action: "switchView('part0-ch1-sec1')", label: '💎 第一節 法益保護原則 (第 2-1 ~ 2-4 頁)' },
      { action: "switchView('part0-ch1-sec2')", label: '📜 第二節 罪刑法定原則 (第 2-5 ~ 2-7 頁)' },
      { action: "switchView('part0-ch1-sec3')", label: '⚖️ 第三節 罪責原則 (第 2-7 ~ 2-8 頁)' },
      { action: "switchView('part0-chapter-2')", label: '📑 第零篇 第二章 刑法的操作原理 (插槽)' }
    ]
  },
  'intro': {
    badge: '全書導讀',
    title: '📌 導論 章節導航',
    items: [
      { action: "switchView('home')", label: '🏠 書籍主頁 (首頁看板)' },
      { action: "switchView('intro')", label: '📖 本篇導讀 (第 XVIII-1 頁)' },
      { action: "switchView('chapter-1')", label: '📑 第一章 犯罪的概念 (1-1 ~ 1-11)' },
      { action: "switchView('chapter-2')", label: '📄 第二章 刑法的論罪結構 (1-13 ~ 1-15 頁)' },
      { action: "switchView('part-0')", label: '⚖️ 第零篇 刑法的運作、操作原理與法律效果' },
      { action: "switchView('part0-chapter-1')", label: '📑 第零篇 第一章 刑法的運作原理 (第 2-1 頁)' },
      { action: "switchView('part0-ch1-sec1')", label: '💎 第一節 法益保護原則 (第 2-1 ~ 2-4 頁)' },
      { action: "switchView('part0-ch1-sec2')", label: '📜 第二節 罪刑法定原則 (第 2-5 ~ 2-7 頁)' },
      { action: "switchView('part0-ch1-sec3')", label: '⚖️ 第三節 罪責原則 (第 2-7 ~ 2-8 頁)' },
      { action: "switchView('part0-chapter-2')", label: '📑 第零篇 第二章 刑法的操作原理 (插槽)' }
    ]
  },
  'part-0': {
    badge: '第零篇導讀',
    title: '📌 第零篇 導航清單',
    items: [
      { action: "switchView('home')", label: '🏠 書籍主頁 (首頁看板)' },
      { action: "switchView('part-0')", label: '📖 本篇導讀 (第 0-1 頁)' },
      { action: "switchView('part0-chapter-1')", label: '📑 第一章 刑法的運作原理 (第 2-1 頁)' },
      { action: "switchView('part0-ch1-sec1')", label: '💎 第一節 法益保護原則 (第 2-1 ~ 2-4 頁)' },
      { action: "switchView('part0-ch1-sec2')", label: '📜 第二節 罪刑法定原則 (第 2-5 ~ 2-7 頁)' },
      { action: "switchView('part0-ch1-sec3')", label: '⚖️ 第三節 罪責原則 (第 2-7 ~ 2-8 頁)' },
      { action: "switchView('part0-chapter-2')", label: '📑 第二章 刑法的操作原理 (待填入插槽)' },
      { action: "switchView('intro')", label: '📖 導論 犯罪概念與論罪結構' },
      { action: "switchView('chapter-1')", label: '📑 第一章 犯罪的概念' },
      { action: "switchView('chapter-2')", label: '📄 第二章 刑法的論罪結構' }
    ]
  },
  'part0-chapter-1': {
    badge: '教材第 2-1 頁',
    title: '📌 第零篇 第一章 章節清單',
    items: [
      { id: 'sec-p0ch1-four-pillars', label: '一、篇章前言：刑法目的與四大支柱' },
      { id: 'sec-p0ch1-sub-sections-nav', label: '二、第一章 子單元導航 (三小節全備)' },
      { action: "switchView('part0-ch1-sec1')", label: '💎 第一節 法益保護原則 (P. 2-1~2-4)' },
      { action: "switchView('part0-ch1-sec2')", label: '📜 第二節 罪刑法定原則 (P. 2-5~2-7)' },
      { action: "switchView('part0-ch1-sec3')", label: '⚖️ 第三節 罪責原則 (P. 2-7~2-8)' },
      { action: "switchView('part0-chapter-2')", label: '📑 下一章：第二章 刑法的操作原理 →' }
    ]
  },
  'part0-ch1-sec1': {
    badge: '教材第 2-1 ~ 2-4 頁',
    title: '📌 第一節 法益保護原則 清單',
    items: [
      { id: 'sec-p0ch1-sec1-def', label: '一、法益核心法定定義' },
      { id: 'sec-p0ch1-sec1-nature', label: '二、法益三大本質與源起特徵' },
      { id: 'sec-p0ch1-sec1-func', label: '三、法益之雙重機能與界限' },
      { id: 'sec-p0ch1-sec1-classification', label: '四、法益二元區分與量相異說' },
      { id: 'sec-p0ch1-sec1-framework', label: '五、刑法分則體系架構圖解' },
      { id: 'sec-p0ch1-sec1-functions-three', label: '六、法益三大功能與解釋原則' },
      { id: 'sec-p0ch1-sec1-case-1-1', label: '七、案例 1-1：剪髮報復案（身體法益）' },
      { id: 'sec-p0ch1-sec1-case-1-2', label: '八、案例 1-2：黑吃黑竊皮夾案（竊盜法益）' },
      { id: 'sec-p0ch1-sec1-case-1-3', label: '九、案例 1-3：肇事逃逸罪要件爭議' },
      { id: 'sec-p0ch1-sec1-tips-methodology', label: '十、解題提示：法益確認與分則學習' }
    ]
  },
  'part0-ch1-sec2': {
    badge: '教材第 2-5 ~ 2-7 頁',
    title: '📌 第二節 罪刑法定原則 清單',
    items: [
      { id: 'sec-p0ch1-sec2-def', label: '一、罪刑法定核心定義與釋字384' },
      { id: 'sec-p0ch1-sec2-sub1-custom', label: '二、面向一：習慣法之禁止（案例 1-4）' },
      { id: 'sec-p0ch1-sec2-sub2-analogy', label: '三、面向二：類推適用之禁止（案例 1-5）' },
      { id: 'sec-p0ch1-sec2-sub3-clarity', label: '四、面向三：罪刑明確性原則（案例 1-6）' },
      { id: 'sec-p0ch1-sec2-sub4-retroactive', label: '五、面向四：溯及既往之禁止（案例 1-7）' },
      { id: 'sec-p0ch1-sec2-author-memo', label: '六、作者叮嚀：公法憲法概念對照' }
    ]
  },
  'part0-ch1-sec3': {
    badge: '教材第 2-7 ~ 2-8 頁',
    title: '📌 第三節 罪責原則 清單',
    items: [
      { id: 'sec-p0ch1-sec3-def', label: '一、罪責原則核心定義與釋字630' },
      { id: 'sec-p0ch1-sec3-dual-aspects', label: '二、罪責原則之雙重核心內涵' },
      { id: 'sec-p0ch1-sec3-case-1-8', label: '三、案例 1-8 準強盜罪與合憲限縮' },
      { id: 'sec-p0ch1-sec3-tips-favor', label: '四、解題提示：有利人民容許例外' },
      { id: 'sec-p0ch1-sec3-chapter1-summary', label: '五、四大支柱全景整合與全章完結' },
      { action: "switchView('part0-chapter-2')", label: '📑 前往第二章 刑法的操作原理 (插槽) →' }
    ]
  },
  'part0-chapter-2': {
    badge: '第零篇 第二章',
    title: '📌 第二章 章節導航',
    items: [
      { id: 'sec-p0ch2-overview', label: '一、篇章總覽與插槽說明' },
      { id: 'sec-p0ch2-upcoming-sections', label: '二、子單元導航 (第一節已就緒)' },
      { action: "switchView('part0-ch2-sec1')", label: '🚀 第一節 刑法的適用效力 (第 2-9 頁) →' },
      { action: "switchView('part0-ch1-sec3')", label: '← 返回第一章第三節 (罪責原則)' },
      { action: "switchView('part-0')", label: '📖 返回第零篇導讀' },
      { action: "switchView('home')", label: '🏠 回到書籍主頁' }
    ]
  },
  'part0-ch2-sec1': {
    badge: '教材第 2-9 ～ 2-11 頁',
    title: '📌 第一節 適用效力 清單',
    items: [
      { id: 'sec-p0ch2-sec1-three-dimensions', label: '一、適用效力三大先天限制（時、地、人）' },
      { id: 'sec-p0ch2-sec1-retroactive-principle', label: '二、時的適用效力：從舊從輕原則（§ 2）' },
      { id: 'sec-p0ch2-sec1-case-2-1', label: '三、案例 2-1 拘禁跨越修法案（繼續犯）' },
      { id: 'sec-p0ch2-sec1-case-2-2', label: '四、案例 2-2 限時法之追溯效力案（76年決議）' },
      { id: 'sec-p0ch2-sec1-security-measures', label: '五、保安處分之時間效力（雙軌區分原則）' },
      { id: 'sec-p0ch2-sec1-spatial-scope', label: '六、地的適用效力：三大支柱（核心、擴張、隔地）' },
      { id: 'sec-p0ch2-sec1-case-2-3', label: '七、案例 2-3 跨境電信詐騙案（隔地犯 § 4）' },
      { id: 'sec-p0ch2-sec1-case-2-4', label: '八、案例 2-4 駐外使領館犯罪案（國際法管轄慣例）' },
      { id: 'sec-p0ch2-sec1-case-2-5', label: '九、案例 2-5 大陸地區犯罪案（特殊國內關係）' },
      { action: "switchView('part0-chapter-2')", label: '← 返回第二章總覽' },
      { action: "switchView('home')", label: '🏠 回到書籍主頁' }
    ]
  },
  'chapter-1': {
    badge: '1-1 ～ 1-11 頁',
    title: '📌 第一章 章節清單',
    items: [
      { id: 'sec-intro-concept', label: '一、犯罪的核心直觀' },
      { id: 'sec-presume-rule', label: '二、不法推定罪責原則（教材第 1-1 頁 原文圖解）' },
      { id: 'sec-legal-cases', label: '三、反證推翻的機會與法定例示（案例 1-1 ～ 1-5）' },
      { id: 'sec-extra-cases', label: '四、超法定阻卻罪責事由與期待可能性（案例 1-6）' },
      { id: 'sec-culpability-system', label: '五、阻卻罪責事由體系展開（教材第 1-3 頁 原文圖解）' },
      { id: 'sec-unlawful-concept', label: '六、壞事（不法）之進一步拆解：打人巴掌比喻' },
      { id: 'sec-presume-unlawful', label: '七、構成要件推定違法性（教材第 1-5 頁 原文圖解）' },
      { id: 'sec-justification-cases', label: '八、阻卻違法事由之法定例示（案例 1-7 ～ 1-11）' },
      { id: 'sec-extra-unlawful', label: '九、超法定阻卻違法與利益衡量（案例 1-12 ～ 1-15）' },
      { id: 'sec-justification-system', label: '十、阻卻違法事由體系展開（教材第 1-8 頁 原文圖解）' },
      { id: 'sec-three-stages-summary', label: '十一、犯罪三階層體系論之統整（教材第 1-8 頁）' },
      { id: 'sec-three-stages-framework', label: '十二、犯罪三階層體系雛形架構圖（教材第 1-9 頁 原文圖解）' },
      { id: 'sec-teleological-system', label: '十三、目的犯罪體系與客觀／主觀要件之開展（教材第 1-9 頁）' },
      { id: 'sec-complete-three-stages', label: '十四、犯罪三階層體系（完整）與推翻檢驗（案例 1-16、1-17）' },
      { id: 'sec-two-stage-system', label: '十五、犯罪二階層體系論與四塊拼圖說（教材第 1-11 頁）' },
      { id: 'sec-mega-comparison-matrix', label: '十六、刑法核心爭點超級對照矩陣（Mega Matrix）' }
    ]
  },
  'chapter-2': {
    badge: '1-13 ～ 1-16 頁',
    title: '📌 第二章 章節清單',
    items: [
      { id: 'sec-ch2-essence', label: '一、構成要件本質與處罰原則（故意＋既遂）' },
      { id: 'sec-ch2-expansion', label: '二、例外擴張處罰門檻與觀念辨正' },
      { id: 'sec-ch2-case-2-1', label: '三、案例 2-1 西瓜刀砍人案與殺人未遂審查' },
      { id: 'sec-ch2-case-2-2', label: '四、案例 2-2 西瓜刀練刀致死案與過失犯審查' },
      { id: 'sec-ch2-tips-formula', label: '五、【解題提示】直覺誤區辨正與 § 12 邏輯證明' },
      { id: 'sec-ch2-case-2-3', label: '六、案例 2-3 挑唆防衛與阻卻違法之例外排除' },
      { id: 'sec-ch2-case-2-4', label: '七、案例 2-4 原因自由行為與阻卻罪責之例外排除' },
      { id: 'sec-ch2-punishment-spectrum', label: '八、刑法處罰光譜總整理與其他刑罰要件' },
      { id: 'sec-ch2-basic-review-process', label: '九、犯罪基本審查流程（教材第 1-16 頁）' }
    ]
  }
};
