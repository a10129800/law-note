/**
 * view-part0-ch2.js
 * 第零篇 第二章 刑法的操作原理 (待填入插槽)
 * 依據多欄位Note Skill 原則 1（嚴格書本依據原則與插槽保留機制）
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Chapter2'] = window.APP_VIEWS['viewPart0Ch2'] = window.APP_VIEWS['part0Ch2'] = window.APP_VIEWS['part0Chapter2'] = window.APP_VIEWS['part0-chapter-2'] = `
        <!-- VIEW 9: 第零篇 第二章 刑法的操作原理 (待填入插槽) -->
        <div id="viewPart0Chapter2" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇 刑法的運作、操作原理與法律效果</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第二章 刑法的操作原理</span>
            </nav>
            <button onclick="switchView('part-0')" class="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第零篇導讀</span>
            </button>
          </div>

          <!-- Chapter Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>第零篇・第二章</span>
              <span class="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-[11px] border border-amber-200 dark:border-amber-900/50 text-amber-700 dark:text-amber-400">
                ⏳ 待提供教材課文・插槽保留中
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二章 刑法的操作原理
            </h2>
            <p class="text-xs sm:text-sm text-slate-500">
              涵蓋刑法操作的前理解：刑法的適用效力（時之效力、地之效力）、外國裁判之效力與刑法之解釋方法
            </p>
          </div>

          <!-- 一、篇章總覽與插槽說明 (Slot Callout) -->
          <section id="sec-p0ch2-overview" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、篇章總覽與插槽保留說明
              </h3>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-8 rounded-3xl space-y-5">
              <div class="flex items-center justify-between border-b border-sky-300/40 dark:border-sky-700/40 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">📂</span>
                  <h4 class="text-base sm:text-lg font-black text-[#032034] dark:text-white">
                    教材依據型插槽保留機制 (Textbook Fidelity Slot)
                  </h4>
                </div>
                <span class="px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs">
                  STRICT FIDELITY
                </span>
              </div>

              <blockquote class="border-l-4 border-[#0284c7] pl-4 py-1 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed italic space-y-2">
                <p>
                  「本篇是正式踏入刑法學習前的暖身，介紹影響刑法運作的四大支柱，以及刑法操作的前理解（諸如刑法的適用效力、解釋方法）。」—— 陳奕廷《刑法總則【圖說系列】》第 0-1 頁導讀
                </p>
              </blockquote>

              <div class="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-sky-200 dark:border-sky-800 space-y-3">
                <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                  <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  <span>章節就緒提示與內容新增方式：</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  本章節架構、側邊欄三層導航樹（Sidebar Tree）、右側目錄（TOC）與全域快速搜尋（Ctrl+K）均已配置就緒。遵循《多欄位Note Skill》嚴格書本依據原則，本系統絕不自行預填外部學說或虛構資料。
                </p>
                <div class="flex flex-wrap gap-2 pt-1 text-xs">
                  <span class="px-2.5 py-1 rounded-lg bg-sky-100 dark:bg-sky-950/60 text-[#0369a1] dark:text-sky-300 font-semibold border border-sky-200 dark:border-sky-800">
                    📸 支援提供課本照片／截圖
                  </span>
                  <span class="px-2.5 py-1 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200 dark:border-indigo-800">
                    ✍️ 支援貼上教材文字原文
                  </span>
                  <span class="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
                    ⚖️ 依據頁碼逐字核對入庫
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- 二、預計收錄子單元架構 (Upcoming Sub-Sections) -->
          <section id="sec-p0ch2-upcoming-sections" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、預計收錄子單元導航 (Sub-Sections Roadmap)
              </h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- 已就緒單元卡片 1 -->
              <div class="p-5 rounded-2xl border-2 border-indigo-500/50 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/40 dark:to-blue-950/20 shadow-sm space-y-3 relative overflow-hidden group">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>SECTION 1 • READY TO READ</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                    教材第 2-9 頁
                  </span>
                </div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  第一節 刑法的適用效力
                </h4>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  探討刑法適用效力之三大先天限制（時、地、人）、從舊從輕原則（§ 2），以及案例 2-1 拘禁跨越新舊法（繼續犯之行為時）精確審查。
                </p>
                <div class="pt-2 flex items-center justify-between">
                  <span class="text-xs font-mono text-slate-400">關聯：刑法 § 2、§ 302</span>
                  <button onclick="switchView('part0-ch2-sec1')" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/25 transition-all flex items-center gap-1 hover:-translate-y-0.5 cursor-pointer">
                    <span>🚀 開始研讀</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              <!-- 預備單元卡片 2 -->
              <div class="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111726] shadow-sm space-y-3 relative overflow-hidden group">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">
                    SECTION 2 • COMING SOON
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold">
                    待填入
                  </span>
                </div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  第二節 刑法之解釋方法
                </h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  探討文義解釋、體系解釋、歷史解釋、目的解釋，以及擴張解釋與禁止不利類推之邊界劃定。
                </p>
                <div class="pt-2 text-xs font-mono text-slate-400">
                  條文關聯：刑法 § 10 定義規範與解釋法則
                </div>
              </div>
            </div>
          </section>

          <!-- Chapter Bottom Pagination: 第二章底部 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch1-sec3')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-7 ~ 2-8 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                  第一章 第三節 罪責原則
                </span>
              </div>
            </button>

            <button onclick="switchView('home')" class="group p-4 rounded-2xl border border-amber-500/40 hover:border-amber-500 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/30 dark:to-orange-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-amber-700 dark:text-amber-400 font-mono block font-bold">快速導覽</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors truncate block">
                  🏠 回到書籍主頁 (首頁看板)
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-amber-500/30">
                🏠
              </div>
            </button>
          </div>

        </div>
`;
