/**
 * view-part0.js
 * 第零篇 刑法的運作、操作原理與法律效果 (本篇導讀)
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0'] = window.APP_VIEWS['part0'] = `
        <!-- VIEW 4: 第零篇 刑法的運作、操作原理與法律效果 (本篇導讀) -->
        <div id="viewPart0" class="fade-enter hidden space-y-6">
          
          <div class="space-y-1.5">
            <span class="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">PREFACE • CONDUCTED READ</span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第零篇 刑法的運作、操作原理與法律效果
            </h2>
          </div>

          <!-- 本篇導讀卡片 (教材第 0-1 頁原文) -->
          <div class="p-6 sm:p-8 rounded-3xl border-2 border-blue-500/30 bg-white dark:bg-[#101623] shadow-sm space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-3">
              <div class="flex items-center gap-2">
                <span class="text-xl">📖</span>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">本篇導讀 (Conducted Read)</h3>
              </div>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold">第 0-1 頁</span>
            </div>

            <blockquote class="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-4 border-blue-500 pl-4 py-1">
              「本篇是正式踏入刑法學習前的暖身，介紹影響刑法運作的四大支柱，以及刑法操作的前理解（諸如刑法的適用效力、解釋方法）。至於刑法的法律效果，這個通常被教科書或參考書放在最尾巴說明的刑罰理論，筆者挪移到本篇提前整理，旨在提醒大家「謹思慎刑」的核心理念，也與刑法最後手段性原則接軌。」
            </blockquote>
          </div>

          <!-- Chapter Bottom Pagination: 第零篇導讀底部 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('chapter-2')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                  導論 第二章 刑法的論罪結構
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-chapter-1')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-600 dark:text-indigo-400 font-mono block font-bold">下一章・進入內文</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第零篇 第一章 刑法的運作原理 (第 2-1 頁) →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-600/30">
                →
              </div>
            </button>
          </div>

        </div>
`;
