/**
 * view-part0-ch2-sec1.js
 * 第零篇 第二章 第一節 刑法的適用效力 (教材第 2-9 ～ 2-10 頁)
 * 涵蓋適用效力三大先天限制、從舊從輕原則（§ 2）、案例 2-1 繼續犯之行為時審查、
 * 案例 2-2 限時法之追溯效力爭議（76年第12次刑庭決議）、保安處分之時間效力，
 * 以及地的適用效力開篇：屬地原則（§ 3 + § 4）
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch2Sec1'] = window.APP_VIEWS['part0Ch2Sec1'] = window.APP_VIEWS['part0-ch2-sec1'] = `
        <!-- VIEW 10: 第零篇 第二章 第一節 刑法的適用效力 (教材第 2-9 ～ 2-10 頁) -->
        <div id="viewPart0Ch2Sec1" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('part-0')" class="hover:text-blue-500 transition-colors">第零篇 刑法的運作、操作原理與法律效果</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-2')" class="hover:text-indigo-500 transition-colors">第二章 刑法的操作原理</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第一節 刑法的適用效力</span>
            </nav>
            <button onclick="switchView('part0-chapter-2')" class="text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1 transition-colors shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第二章總覽</span>
            </button>
          </div>

          <!-- Section Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
              <span>第零篇 第二章・第一節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50">
                教材第 2-9 ～ 2-10 頁 原文精確收錄
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第一節 刑法的適用效力
            </h2>
            <p class="text-xs sm:text-sm text-slate-500">
              探討刑法適用效力之三大先天限制（時、地、人）、從舊從輕原則（§ 2）、繼續犯行為時認定、限時法追溯力（76年決議）、保安處分時間效力與屬地原則（§ 3+§ 4）
            </p>
          </div>

          <!-- 一、刑法適用效力之三大先天限制（教材第 2-9 頁原文前言） -->
          <section id="sec-p0ch2-sec1-three-dimensions" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、刑法適用效力之三大先天限制（教材第 2-9 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 font-mono">
                  <span>📖</span>
                  <span>教材第 2-9 頁 原文引言</span>
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">
                  原文忠實收錄
                </span>
              </div>

              <blockquote class="p-4 rounded-2xl border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                「我國刑法並非無遠弗屆地適用，而是有時間範圍、空間範圍與人別範圍的先天限制。以下就區分『時的適用效力』、『地的適用效力』與『人的適用效力』三個面向論述之。」
              </blockquote>

              <!-- 三大面向架構卡片網格 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">DIMENSION 1</span>
                    <span class="text-base">⏳</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">時的適用效力</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    時間範圍限制。以行為時為基準，原則禁止溯及既往，例外容許從舊從輕原則（刑法 § 2）。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">DIMENSION 2</span>
                    <span class="text-base">🌐</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">地的適用效力</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    空間範圍限制。國民主權之空間界限，包含屬地原則、隔地犯、屬人原則、保護原則與世界原則（刑法 § 3～§ 8）。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">DIMENSION 3</span>
                    <span class="text-base">👤</span>
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white">人的適用效力</h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    人別範圍限制。原則平等適用於所有人，例外基於憲法或國際法享有豁免特權（如總統刑事豁免權、立委言論免責權、外交代表豁免）。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 二、時的適用效力：從舊從輕原則（§ 2） -->
          <section id="sec-p0ch2-sec1-retroactive-principle" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、時的適用效力：從舊從輕原則（§ 2）
              </h3>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-8 rounded-3xl space-y-5">
              <div class="flex items-center justify-between border-b border-sky-300/40 dark:border-sky-700/40 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">⚖️</span>
                  <h4 class="text-base sm:text-lg font-black text-[#032034] dark:text-white">
                    從舊從輕原則之雙重架構（刑法第 2 條第 1 項）
                  </h4>
                </div>
                <button type="button" class="statute-popover-trigger px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs cursor-pointer hover:scale-105 transition-all" data-statute="2">
                  刑法 § 2 條文快顯 ↗
                </button>
              </div>

              <!-- 教材原文解析 -->
              <div class="space-y-4 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed">
                <p>
                  依據<span class="font-bold underline decoration-sky-400">法不溯及既往原則</span>，刑事處罰必須<span class="font-bold bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 px-2 py-0.5 rounded border border-sky-300 shadow-2xs">「行為時」</span>有所規定，因此原則上應適用行為時之法律，就算嗣後法律發生變動亦同。
                </p>
                <p>
                  此外，罪刑法定原則容許對人民有利的溯及，倘若行為後之法律變更<span class="font-bold underline decoration-emerald-400">有利於行為人者</span>，例外適用有利於行為人之法律。
                </p>
              </div>

              <!-- 原則 vs 例外 對比結構卡片 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <!-- 原則：從舊原則 -->
                <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border-2 border-blue-400/50 shadow-sm space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-300">
                      原則：從舊（適用行為時法）
                    </span>
                    <span class="text-[11px] font-mono font-bold text-slate-500">§ 2 Ⅰ 本文</span>
                  </div>
                  <blockquote class="text-xs font-semibold text-slate-800 dark:text-slate-200 border-l-3 border-blue-500 pl-2.5 py-0.5">
                    「行為後法律有變更者，適用行為時之法律。」
                  </blockquote>
                  <p class="text-[11.5px] text-slate-500 dark:text-slate-400">
                    貫徹法安定性與信賴保護，人民僅能依行為當下已知之法律安措手足。
                  </p>
                </div>

                <!-- 例外：從輕原則 -->
                <div class="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/90 border-2 border-emerald-400/50 shadow-sm space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-300">
                      例外：從輕（最有利於行為人）
                    </span>
                    <span class="text-[11px] font-mono font-bold text-slate-500">§ 2 Ⅰ 但書</span>
                  </div>
                  <blockquote class="text-xs font-semibold text-slate-800 dark:text-slate-200 border-l-3 border-emerald-500 pl-2.5 py-0.5">
                    「但行為後之法律有利於行為人者，適用最有利於行為人之法律。」
                  </blockquote>
                  <p class="text-[11.5px] text-slate-500 dark:text-slate-400">
                    刑法目的在防衛人權，有利人民之回溯完全合法容許，小罪不予過度苛責。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 三、案例 2-1：拘禁跨越修法案（教材第 2-9 ～ 2-10 頁） -->
          <section id="sec-p0ch2-sec1-case-2-1" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、案例 2-1：拘禁跨越修法案與「行為時」之精準認定（教材第 2-9 ～ 2-10 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-1 -->
            <div id="case-card-2-1" data-case="2-1" class="rounded-3xl border-2 border-indigo-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-indigo-50/80 via-blue-50/50 to-transparent dark:from-indigo-950/40 dark:via-blue-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-indigo-600/30">
                    2-1
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">CASE 2-1 • 經典國考爭點</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">教材第 2-9 ~ 2-10 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      拘禁跨越新舊法案——繼續犯之「行為時」認定
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-indigo-600 transition-colors cursor-pointer" data-statute="302">
                    📜 刑法 § 302 私行拘禁
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-1', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-9 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-indigo-400 pl-3">
                    甲在民國 99 年 1 月 1 日將乙拘禁在其別墅，剝奪其行動自由，僅給予少量的食物和水。警察於民國 100 年 2 月 1 日破案，救出驚恐未定的乙。這中間立法院於民國 100 年 1 月 10 日修正刑法 § 302 私行拘禁罪，將其法定刑從 5 年以下有期徒刑變更為 10 年以下有期徒刑。法院依照新法判處甲 9 年有期徒刑，甲抗辯法院適用新法違反法律不溯及既往原則、刑法 § 2 Ⅰ 從舊從輕原則，是否有理由？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-10 頁 原文金句) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">教材第 2-10 頁 原文分析</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-blue-500 pl-3">
                    「請注意，§ 2 限於『行為後』法律變更者，方有從舊從輕原則之適用，若是『行為時』法律有變更者，則與 § 2 無關。雖然一般犯罪鮮少在行為時發生法律變更，但甲所犯的私行拘禁罪即屬特例，該罪是行為具有持續性的繼續犯，自 99 年 1 月 1 日起至 100 年 2 月 1 日止，均為私行拘禁行為。故 100 年 1 月 10 日的法律變更是行為當中的法律變更，從而無 § 2 適用的餘地，甲的抗辯無理由。」
                  </blockquote>
                </div>

                <!-- 時間軸視覺化推導 (Timeline Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 space-y-3">
                  <span class="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider block">
                    ⏱️ 行為進行與法律變更時間軸：
                  </span>
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span class="text-[10px] font-mono text-slate-400 block">99.01.01（著手拘禁）</span>
                      <span class="font-bold text-slate-800 dark:text-slate-200 block">舊法施行中</span>
                      <span class="text-[11px] text-slate-500">法定刑：5 年以下</span>
                    </div>
                    <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-1">
                      <span class="text-[10px] font-mono text-amber-600 dark:text-amber-400 block font-bold">100.01.10（立法院修法）</span>
                      <span class="font-bold text-amber-800 dark:text-amber-300 block">新法施行（刑度加重）</span>
                      <span class="text-[11px] text-amber-700 dark:text-amber-400 font-bold">法定刑變更為：10 年以下</span>
                    </div>
                    <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-300 dark:border-indigo-800 space-y-1">
                      <span class="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 block font-bold">100.02.01（警方破案救出）</span>
                      <span class="font-bold text-indigo-800 dark:text-indigo-300 block">犯罪行為終了日 ⭐</span>
                      <span class="text-[11px] text-indigo-600 dark:text-indigo-300 font-bold">行為終了時已屬新法時代！</span>
                    </div>
                  </div>
                </div>

                <!-- 階層審查與核心爭點透視 (Legal Analysis) -->
                <div class="space-y-4">
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-indigo-600 rounded-full"></span>
                    <span>法理精析：繼續犯（Dauerdelikt）之行為時認定</span>
                  </h5>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    <!-- 爭點 1 -->
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                      <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 block">
                        1. 繼續犯 vs 狀態犯之區別
                      </span>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        刑法第 302 條私行拘禁罪為典型之<span class="font-bold text-indigo-600 dark:text-indigo-400">「繼續犯」</span>。行為人剝奪被害人行動自由之違法狀態與構成要件行為，從 99.01.01 起至 100.02.01 破案止，始終處於不間斷之實行狀態中。
                      </p>
                    </div>

                    <!-- 爭點 2 -->
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                      <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 block">
                        2. 犯罪行為終了時點之確定
                      </span>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        繼續犯之犯罪行為，並非在「著手之初」即告結束，而是在<span class="font-bold text-indigo-600 dark:text-indigo-400">「違法狀態終止時（破案之日）」</span>始告完成！因此甲的犯罪行為是在民國 100 年 2 月 1 日才實行終了。
                      </p>
                    </div>
                  </div>

                  <!-- 最終審查結論卡片 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-2">
                    <div class="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      <span>⚖️ 審查結論：甲之抗辯為【無理由】</span>
                    </div>
                    <p class="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
                      本案法律修正發生在甲犯罪行為繼續進行中，甲的行為終了時法律已經完成修正施行。因此，法院適用新法處罰甲，乃是適用甲<span class="font-bold underline decoration-emerald-500">「行為終了時之法律（即行為時法）」</span>，並非「行為後法律有變更」！既係適用行為時法，自無適用刑法第 2 條第 1 項從舊從輕原則比較新舊法之餘地，亦未違反法不溯及既往原則，法院判處甲 9 年有期徒刑合法無訛。
                    </p>
                  </div>
                </div>

                <!-- 2026 現行法規查核區塊 (Statutory Currency Box) -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 現行法規查核狀態】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[10px]">
                      現行法一致核對
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">刑法第 2 條第 1 項（從舊從輕原則）</strong>：自 94 年 2 月 2 日修正公布、95 年 7 月 1 日施行至今文字維持現行法，確立「從舊為原則、從輕為例外」之體系。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">刑法第 302 條（私行拘禁罪）</strong>：民國 108 年 5 月 29 日修正公布調高罰金刑；民國 112 年 5 月 31 日增訂第 302 條之 1（加重剝奪行動自由罪，如三人以上共同犯之、拘禁七日以上等，處一年以上七年以下有期徒刑；因而致人於死者處無期徒刑或十年以上有期徒刑），嚴懲求職詐騙拘禁犯罪。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">實務判例要旨</strong>：最高法院 89 年台上字第 5235 號判決：「繼續犯在行為繼續進行中，法律有變更者，因其行為終了在新法施行之後，應逕行適用新法，無刑法第二條第一項但書之適用。」
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：全國法規資料庫、司法院裁判書系統</span>
                    <span class="font-mono">P. 2-9 ~ 2-10 核對完畢</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 四、案例 2-2：限時法之追溯效力案（教材第 2-10 頁 原文案例） -->
          <section id="sec-p0ch2-sec1-case-2-2" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、案例 2-2：限時法之追溯效力案（教材第 2-10 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-2 -->
            <div id="case-card-2-2" data-case="2-2" class="rounded-3xl border-2 border-purple-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-purple-50/80 via-indigo-50/50 to-transparent dark:from-purple-950/40 dark:via-indigo-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-purple-600/30">
                    2-2
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">CASE 2-2 • 國考爭點里程碑</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">教材第 2-10 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      限時法之追溯效力——非常時期法律失效後之審判
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-purple-600 transition-colors cursor-pointer" data-statute="2">
                    📜 刑法 § 2 從舊從輕
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-2', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-md shadow-purple-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-10 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-purple-500 pl-3">
                    甲在動員戡亂時期觸犯「動員戡亂時期國家安全法」之規定，而於動員戡亂時期結束後始受審判，試問法官可否適用動員戡亂時期國家安全法論罪科刑？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-10 頁 原文引述) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-purple-800 dark:text-purple-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">教材第 2-10 頁 原文定義</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-purple-500 pl-3">
                    「所謂限時法指基於一定之需要，自始規定僅於特定期間內生效之法律，如題述之動員戡亂時期國家安全法，便只適用於動員戡亂時期，超過適用期間，該法自動失效。限時法是否適用 § 2，否定說認為限時法之變更並非刑事政策在評價上有所轉變，而是基於立法理由的消失而來，故不宜依從舊從輕原則解除處罰。肯定說（76年第12次刑庭總會決議）認為否定說將造成刑罰權的擴張，在未就限時法設有一般性規定之前，仍應適用從舊從輕原則，以免違反罪刑法定原則。」
                  </blockquote>
                </div>

                <!-- 兩大學說深度對照矩陣 -->
                <div class="space-y-3">
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-purple-600 rounded-full"></span>
                    <span>限時法是否適用刑法第 2 條從舊從輕原則？學說與實務大對抗</span>
                  </h5>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- ① 否定說 -->
                    <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 space-y-3">
                      <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300">
                          ① 否定說（限時法追溯力肯定說）
                        </span>
                        <span class="text-[11px] font-mono text-slate-400">學者少數說</span>
                      </div>
                      <div class="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <div>
                          • <strong class="text-slate-800 dark:text-slate-200">法理基礎</strong>：限時法之失效，並非立法者在實質刑事政策評價上「不再認為該行為可罰」，純粹是因特定非常情勢或立法理由之消失。
                        </div>
                        <div>
                          • <strong class="text-slate-800 dark:text-slate-200">弊端防範</strong>：若適用從舊從輕原則免罰，可能誘使人民在限時法屆滿前肆意犯法，或於案發後惡意拖延訴訟直至法律失效以求脫罪，嚴重削弱限時法預防犯罪之嚴肅威嚇功能。
                        </div>
                        <div>
                          • <strong class="text-slate-800 dark:text-slate-200">結論</strong>：即使法律失效，仍應依行為時之限時法追溯處罰。
                        </div>
                      </div>
                    </div>

                    <!-- ② 肯定說 (實務通說 ⭐) -->
                    <div class="p-5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border-2 border-purple-400/80 shadow-sm space-y-3">
                      <div class="flex items-center justify-between">
                        <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-purple-600 text-white shadow-xs">
                          ② 肯定說（最高法院 76 年決議 ⭐）
                        </span>
                        <span class="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400">司法實務通說</span>
                      </div>
                      <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                        <div>
                          • <strong class="text-purple-900 dark:text-purple-300">嚴守罪刑法定</strong>：否定說在欠缺形式法律明文除外規定的情況下逕行剝奪人民從舊從輕保障，實質上將造成國家刑罰權的非法擴張。
                        </div>
                        <div>
                          • <strong class="text-purple-900 dark:text-purple-300">立法權未設除外前不可造法</strong>：外國立法例（如德、日）多於總則明定限時法之追溯效力，我國刑法總則既無一般性除外明文，法院即應嚴格恪守刑法第 2 條第 1 項！
                        </div>
                        <div>
                          • <strong class="text-purple-900 dark:text-purple-300">本案結論</strong>：限時法失效後，行為後法律既已廢止刑罰，依從輕原則（§ 2 Ⅰ 但書）應諭知**免訴判決**，法官**不得**再適用該法論罪科刑！
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 2026 現行法規查核區塊 (Statutory Currency Box) -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 權威判例與特別法發展查核】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-mono font-bold text-[10px]">
                      實務核心見解
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">最高法院 76 年度第 12 次刑事庭會議決議</strong>：我國刑法對限時法並無特別規定，限時法滿期失效，該法之刑罰規定既已廢止，自屬法律變更，應依刑法第 2 條第 1 項但書適用最有利於行為人之法律（諭知免訴）。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">現代特別條例對照（嚴重特殊傳染性肺炎防治特別條例）</strong>：該條例施行期間至民國 112 年 6 月 30 日止，期滿後自動失效。實務上凡於期間內犯罪而於失效後始起訴或裁判者，因該法無明文排除刑法第 2 條，同依肯定說意旨處理。
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：司法院刑事庭會議決議彙編、立法院法律系統</span>
                    <span class="font-mono">P. 2-10 核對完畢</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 五、(二) 保安處分之時間效力（教材第 2-10 頁 原文規範） -->
          <section id="sec-p0ch2-sec1-security-measures" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、保安處分之時間效力（教材第 2-10 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-mono">
                  <span>📖</span>
                  <span>教材第 2-10 頁 (二) 保安處分原文</span>
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                  雙軌區分原則
                </span>
              </div>

              <blockquote class="p-4 rounded-2xl border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                「保安處分可以區分為『拘束人身自由（如監護、強制治療）』與『非拘束人身自由（如保護管束、驅逐出境）』兩種類型，由於拘束人身自由之保安處分已經與刑罰相去不遠，亦有從舊從輕原則之適用。至於非拘束人身自由之保安處分，則依據 § 2 Ⅱ 適用裁判時之法律。」
              </blockquote>

              <!-- 保安處分雙軌對比卡片 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <!-- 類型 A：拘束人身自由 -->
                <div class="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border-2 border-amber-300 dark:border-amber-800 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-amber-500 text-white">
                      類型 A：拘束人身自由之保安處分
                    </span>
                    <span class="text-xs font-mono font-bold text-amber-700 dark:text-amber-400">適用 § 2 Ⅰ</span>
                  </div>
                  <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <div>
                      • <strong class="text-slate-900 dark:text-white">典型樣態</strong>：刑法 § 87 監護處分、§ 91-1 強制治療等。
                    </div>
                    <div>
                      • <strong class="text-slate-900 dark:text-white">適用法則</strong>：<strong class="text-amber-700 dark:text-amber-400">從舊從輕原則</strong>（行為時法為原則，最有利於行為人為例外）。
                    </div>
                    <div>
                      • <strong class="text-slate-900 dark:text-white">憲法理由</strong>：司法院釋字第 471 號、第 799 號解釋強調，人身自由為一切基本權之基石，拘束自由之保安處分實質嚴苛度等同刑罰，受罪刑法定嚴格防線拘束。
                    </div>
                  </div>
                </div>

                <!-- 類型 B：非拘束人身自由 -->
                <div class="p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border-2 border-blue-300 dark:border-blue-800 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-blue-600 text-white">
                      類型 B：非拘束人身自由之保安處分
                    </span>
                    <span class="text-xs font-mono font-bold text-blue-700 dark:text-blue-400">適用 § 2 Ⅱ</span>
                  </div>
                  <div class="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <div>
                      • <strong class="text-slate-900 dark:text-white">典型樣態</strong>：保護管束（§ 92）、驅逐出境（§ 95）、付保護管束之宣告等。
                    </div>
                    <div>
                      • <strong class="text-slate-900 dark:text-white">適用法則</strong>：<strong class="text-blue-700 dark:text-blue-400">裁判時法（從新原則）</strong>。
                    </div>
                    <div>
                      • <strong class="text-slate-900 dark:text-white">立法意旨</strong>：刑法第 2 條第 2 項明定：「非拘束人身自由之保安處分適用裁判時之法律。」著眼於改善預防之教育矯治目的，採取最新之社會防衛處遇手段。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 六、地的適用效力：屬地原則三大支柱（教材第 2-10 ～ 2-11 頁） -->
          <section id="sec-p0ch2-sec1-spatial-scope" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-purple-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、地的適用效力：四大原則與屬地基準三大支柱（教材第 2-10 ～ 2-11 頁）
              </h3>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-8 rounded-3xl space-y-6">
              <div class="flex items-center justify-between border-b border-sky-300/40 dark:border-sky-700/40 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">🌐</span>
                  <h4 class="text-base sm:text-lg font-black text-[#032034] dark:text-white">
                    (一) 主要基準 ➔ 屬地原則（刑法 § 3 ＋ § 4）
                  </h4>
                </div>
                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs cursor-pointer hover:scale-105 transition-all" data-statute="3">
                    刑法 § 3 條文快顯 ↗
                  </button>
                  <button type="button" class="statute-popover-trigger px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs cursor-pointer hover:scale-105 transition-all" data-statute="4">
                    刑法 § 4 條文快顯 ↗
                  </button>
                </div>
              </div>

              <!-- 空間效力四大支柱橫向預覽 -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                <div class="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-sky-300 dark:border-sky-700 text-center space-y-1 shadow-xs">
                  <span class="font-bold text-[#0369a1] dark:text-sky-300 block">① 屬地原則 ⭐</span>
                  <span class="text-[11px] text-slate-500">刑法 § 3、§ 4</span>
                  <span class="text-[10px] text-sky-600 dark:text-sky-400 font-bold block">主要核心基準</span>
                </div>
                <div class="p-3 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <span class="font-bold text-slate-800 dark:text-slate-200 block">② 屬人原則</span>
                  <span class="text-[11px] text-slate-500">刑法 § 6、§ 7</span>
                  <span class="text-[10px] text-slate-400 block">國籍連結補充</span>
                </div>
                <div class="p-3 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <span class="font-bold text-slate-800 dark:text-slate-200 block">③ 保護原則</span>
                  <span class="text-[11px] text-slate-500">刑法 § 5、§ 8</span>
                  <span class="text-[10px] text-slate-400 block">國家法益維護</span>
                </div>
                <div class="p-3 rounded-xl bg-white/60 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <span class="font-bold text-slate-800 dark:text-slate-200 block">④ 世界原則</span>
                  <span class="text-[11px] text-slate-500">刑法 § 5 各款</span>
                  <span class="text-[10px] text-slate-400 block">國際犯罪共懲</span>
                </div>
              </div>

              <!-- 教材第 2-11 頁 原文規範展開：屬地原則三大支柱 -->
              <div class="space-y-3 pt-1">
                <span class="text-xs font-mono font-bold text-[#0369a1] dark:text-sky-300 uppercase tracking-wider block">
                  📖 教材第 2-11 頁 原文規範：屬地原則之三大審查層次
                </span>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <!-- 1. 核心 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-sky-300/80 dark:border-sky-700/80 space-y-2 shadow-xs">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-100 dark:bg-sky-950 text-[#0369a1] dark:text-sky-300 border border-sky-300">
                        1. 核心：天然領域
                      </span>
                      <span class="text-[11px] font-mono font-bold text-slate-400">§ 3 前段</span>
                    </div>
                    <blockquote class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-3 border-[#0369a1] pl-2.5">
                      「國家刑罰權及於任何發生於該國領域內的犯罪行為，包括領土、領海以及領空。」
                    </blockquote>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400">
                      主權天然管轄範圍。不問行為人或被害人之國籍，凡在中華民國領土、領海（12浬）及領空內犯罪者一律適用。
                    </p>
                  </div>

                  <!-- 2. 擴張 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-indigo-300/80 dark:border-indigo-700/80 space-y-2 shadow-xs">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-300">
                        2. 擴張：浮動領土
                      </span>
                      <span class="text-[11px] font-mono font-bold text-slate-400">§ 3 但書</span>
                    </div>
                    <blockquote class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-3 border-indigo-500 pl-2.5">
                      「領域外的船艦或航空器屬於浮動領土。」
                    </blockquote>
                    <p class="text-[11.5px] text-slate-500 dark:text-slate-400">
                      航行於我國領域外公海或外國上空之本國籍船艦與民用/軍用航空器，法律擬制為我國領域，保護我國載具內部之法律秩序。
                    </p>
                  </div>

                  <!-- 3. 隔地 -->
                  <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border-2 border-purple-300/80 dark:border-purple-700/80 space-y-2 shadow-xs">
                    <div class="flex items-center justify-between">
                      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-300">
                        3. 隔地：隔地犯
                      </span>
                      <span class="text-[11px] font-mono font-bold text-slate-400">§ 4 擇一原則</span>
                    </div>
                    <blockquote class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed italic border-l-3 border-purple-500 pl-2.5">
                      「只要犯罪之行為或結果，其中之一在我國領域內，即適用我國刑法。」
                    </blockquote>
                    <div class="text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                      <div>• <strong class="text-slate-700 dark:text-slate-300">未遂犯</strong>：指預期結果發生地。</div>
                      <div>• <strong class="text-slate-700 dark:text-slate-300">共同正犯</strong>：包含其他共同正犯行為地。</div>
                      <div>• <strong class="text-slate-700 dark:text-slate-300">共犯（教唆/幫助）</strong>：指正犯行為地。</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 七、案例 2-3：跨境電信詐騙案（教材第 2-11 頁 原文案例） -->
          <section id="sec-p0ch2-sec1-case-2-3" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                七、案例 2-3：跨境電信詐騙案與隔地犯之管轄（教材第 2-11 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-3 -->
            <div id="case-card-2-3" data-case="2-3" class="rounded-3xl border-2 border-blue-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-transparent dark:from-blue-950/40 dark:via-sky-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-600/30">
                    2-3
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">CASE 2-3 • 現代高頻國考熱點</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">教材第 2-11 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      跨境電信詐騙案——隔地犯結果地之管轄認定
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-blue-600 transition-colors cursor-pointer" data-statute="4">
                    📜 刑法 § 4 隔地犯
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-3', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-11 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-blue-500 pl-3">
                    詐騙集團總部設在菲律賓，利用電話騙在台灣的受害人匯款，是否適用我國刑法？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-11 頁 原文解析) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-blue-800 dark:text-blue-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">教材第 2-11 頁 原文定性</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-blue-500 pl-3">
                    「此為典型的『隔地犯』，按 § 4 之規定，結果地在台灣而適用我國刑法。」
                  </blockquote>
                </div>

                <!-- 跨境隔地犯結構推導卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-slate-800 dark:text-slate-200">行為地（菲律賓機房）</span>
                      <span class="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono">國外</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      詐騙集團首腦及話務機房位於菲律賓，透過境外電信網路向台灣發送詐騙話術。行為實行地雖在境外，但構成要件行為之效力直接射向我國。
                    </p>
                  </div>

                  <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-emerald-800 dark:text-emerald-300">結果地（台灣受害人匯款）</span>
                      <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 text-[10px] font-mono font-bold">境內 ⭐</span>
                    </div>
                    <p class="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed">
                      被害人在台灣接聽電話、陷於錯誤並操作 ATM 或網路銀行匯出款項，財產法益損害結果發生於台灣。按 § 4「結果在國內」，直接成立我國管轄！
                    </p>
                  </div>
                </div>

                <!-- 2026 現行法規查核區塊 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 現行法規查核狀態】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-mono font-bold text-[10px]">
                      實務防詐重罪
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">刑法第 4 條（隔地犯）</strong>：採行為地與結果地擇一主義，凡犯罪之實行行為或構成要件結果之一部在國內，我國即享有完整刑事管轄權。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">刑法第 339 條之 4（加重詐欺罪）</strong>：犯詐欺罪而有「三人以上共同犯之」、「冒用政府機關或公務員名義」、「以廣播電視、電子通訊、網際網路等傳播工具」者，處一年以上七年以下有期徒刑，得併科一百萬元以下罰金。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">打詐專法配套</strong>：配合《詐欺犯罪危害防制條例》，境外機房成員跨境犯加重詐欺，我國檢警得透過國際司法互助追訴並依我國刑法論罪科刑。
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：全國法規資料庫、刑事警察局防詐法制彙編</span>
                    <span class="font-mono">P. 2-11 案例 2-3 核對完畢</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 八、案例 2-4：我國人駐外使領館內犯罪案（教材第 2-11 頁 原文案例） -->
          <section id="sec-p0ch2-sec1-case-2-4" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                八、案例 2-4：我國人駐外使領館內犯罪案（教材第 2-11 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-4 -->
            <div id="case-card-2-4" data-case="2-4" class="rounded-3xl border-2 border-amber-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-amber-50/80 via-orange-50/50 to-transparent dark:from-amber-950/40 dark:via-orange-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-amber-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-amber-600/30">
                    2-4
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">CASE 2-4 • 國際法與刑法交錯</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">教材第 2-11 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      我國人駐外使領館內犯罪——領域擬制與管轄權放棄慣例
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-amber-600 transition-colors cursor-pointer" data-statute="3">
                    📜 刑法 § 3 屬地原則
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-4', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-md shadow-amber-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-11 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-amber-500 pl-3">
                    我國人甲在我國駐外國之使領館內犯罪，是否為在我國領域內犯罪？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-11 頁 原文引述) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">教材第 2-11 頁 國際法慣例認定</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-amber-500 pl-3">
                    「此時借助國際法上的慣例，以駐在國是否同意放棄其管轄權為斷。若有明顯事證足認該駐在國已同意放棄其管轄權，自得以在我國領域內犯罪論。」
                  </blockquote>
                </div>

                <!-- 深入解讀：使領館之法律地位辨析 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <span class="text-xs font-bold text-amber-700 dark:text-amber-400 block">
                      ⚠️ 直覺誤區：使領館是浮動領土嗎？
                    </span>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      **不是！** 使領館所在之土地依然屬於駐在國領土。在國際法上，使領館享有的「館舍不可侵犯權」屬於外交豁免特權，並非使領館成為派遣國之天然領土，亦非刑法第 3 條但書之「浮動領土（僅限船艦航空器）」。
                    </p>
                  </div>

                  <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-2">
                    <span class="text-xs font-bold text-amber-800 dark:text-amber-300 block">
                      💡 核心審查標準：駐在國是否放棄管轄權
                    </span>
                    <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      依國際法慣例，若駐在國基於兩國外交約定、司法互助或默示表明不予行使刑事管轄權（放棄管轄權），我國法院始能將其擬制為**「在我國領域內犯罪論」**，依屬地原則適用我國刑法。
                    </p>
                  </div>
                </div>

                <!-- 2026 現行法規查核區塊 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 國際法與條約查核狀態】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 font-mono font-bold text-[10px]">
                      國際法慣例
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">維也納外交關係公約（VCDR）第 22 條</strong>：使館館舍不可侵犯，但館舍不可侵犯並不等同於「領土主權轉移」。若館內發生刑事犯罪，駐在國原則上仍保有屬地管轄權，僅因外交豁免難以強制進入。
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">後續補充依據（屬人原則 § 7）</strong>：若駐在國未放棄管轄權因而無法以「領域內」論處，檢察官仍可依刑法第 7 條（國民在領域外犯最輕本刑三年以上有期徒刑之重罪）行使追訴權。
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：外交部條約法律司、國際公法判例選輯</span>
                    <span class="font-mono">P. 2-11 案例 2-4 核對完畢</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 九、案例 2-5：大陸地區犯罪之刑法適用案（教材第 2-11 頁 原文案例） -->
          <section id="sec-p0ch2-sec1-case-2-5" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                九、案例 2-5：大陸地區犯罪之刑法適用案（教材第 2-11 頁）
              </h3>
            </div>

            <!-- 案例卡片 2-5 -->
            <div id="case-card-2-5" data-case="2-5" class="rounded-3xl border-2 border-emerald-500/40 bg-white dark:bg-[#111726] shadow-md overflow-hidden transition-all duration-300">
              
              <!-- 案例標頭 -->
              <div class="p-5 sm:p-6 bg-gradient-to-r from-emerald-50/80 via-teal-50/50 to-transparent dark:from-emerald-950/40 dark:via-teal-950/20 border-b border-slate-100 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-emerald-600/30">
                    2-5
                  </span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">CASE 2-5 • 最高法院權威判決</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">教材第 2-11 頁</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      大陸地區犯罪——特殊之國內關係與屬地管轄
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-700 shadow-2xs hover:text-emerald-600 transition-colors cursor-pointer" data-statute="3">
                    📜 刑法 § 3 屬地原則
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-5', this)" class="case-copy-btn px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5 cursor-pointer">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 案例內容主體 -->
              <div class="p-6 sm:p-8 space-y-6">
                
                <!-- 案件事實 (Fact Box) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <div class="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200">
                    <span class="text-base">📌</span>
                    <span>教材原文案件事實（第 2-11 頁）：</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic border-l-3 border-emerald-500 pl-3">
                    大陸地區犯罪是否亦有我國刑法的適用？
                  </blockquote>
                </div>

                <!-- 作者權威問題導引 (教材第 2-11 頁 原文解析) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                    <span>◀ 問題導引 ▶</span>
                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">最高法院 90 年台上字第 4247 號判決</span>
                  </div>
                  <blockquote class="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic border-l-3 border-emerald-500 pl-3">
                    「實務見解（90台上4247）採取『特殊之國內關係』。認為臺灣地區與大陸地區人民關係條例 § 2 規定：『大陸地區：指臺灣地區以外之中華民國領土。』已明示大陸地區仍屬我中華民國之領土，從而在大陸地區犯罪，仍屬在中華民國領域內犯罪。」
                  </blockquote>
                </div>

                <!-- 權威法理拆解架構 -->
                <div class="space-y-3">
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="w-1.5 h-4 bg-emerald-600 rounded-full"></span>
                    <span>司法實務「特殊之國內關係」三段論推導</span>
                  </h5>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs sm:text-sm">
                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                      <span class="text-xs font-bold text-slate-800 dark:text-slate-200 block">第一步：大前提</span>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        兩岸人民關係條例第 2 條明文定義：大陸地區指臺灣地區以外之「中華民國領土」。
                      </p>
                    </div>

                    <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5">
                      <span class="text-xs font-bold text-slate-800 dark:text-slate-200 block">第二步：小前提</span>
                      <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        行為人無論係本國人或外國人，在大陸地區所犯之犯罪行為，客觀上均發生於我國領土範圍內。
                      </p>
                    </div>

                    <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 space-y-1.5">
                      <span class="text-xs font-bold text-emerald-800 dark:text-emerald-300 block">第三步：結論 ⭐</span>
                      <p class="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed font-bold">
                        在大陸地區犯罪，直接依刑法第 3 條「屬地原則（領域內犯罪）」適用我國刑法論處！
                      </p>
                    </div>
                  </div>
                </div>

                <!-- 2026 現行法規查核區塊 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs">
                  <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-1.5">
                    <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span>📌</span>
                      <span>【2026 現行法規查核與救濟制度】</span>
                    </span>
                    <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[10px]">
                      兩岸條例配套
                    </span>
                  </div>
                  <div class="space-y-1.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">最高法院 90 年度台上字第 4247 號判決</strong>：「臺灣地區與大陸地區人民關係條例第二條第二款所稱之大陸地區，亦為我中華民國之領土，在該地區犯罪，應受我國法律之處罰。」
                    </div>
                    <div>
                      • <strong class="text-slate-800 dark:text-slate-200">兩岸條例第 75 條（免除或折抵刑期）</strong>：「在臺灣地區以外之中華民國領土（即大陸地區）或大陸船舶、航空器內，犯一個罪，並在該地區已受裁判執行者，在臺灣地區得免其刑之全部或一部之執行。」此項特別規定可化解「在大陸已被判刑關押，回台又被依刑法重複處罰」之雙重處罰不人道爭議。
                    </div>
                  </div>
                  <div class="pt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>資料來源：司法院裁判書系統、臺灣地區與大陸地區人民關係條例</span>
                    <span class="font-mono">P. 2-11 案例 2-5 核對完畢</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 十、篇章進度待續提示卡 (Progress Callout) -->
          <div class="p-6 rounded-3xl border-2 border-dashed border-indigo-400/40 bg-indigo-50/20 dark:bg-indigo-950/10 space-y-3 text-center sm:text-left">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div class="space-y-1">
                <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                  PAGE 2-11 COMPLETED • AWAITING PAGE 2-12
                </span>
                <h4 class="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                  🎉 教材第 2-9 ～ 2-11 頁已完整收錄！後續頁碼（第 2-12 頁起）待續
                </h4>
              </div>
              <span class="px-3 py-1 rounded-xl bg-indigo-600 text-white text-xs font-bold shrink-0 shadow-sm">
                進度：第 2-11 頁完畢
              </span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              已收錄第一節核心體系：三大先天限制、從舊從輕原則（§ 2）、案例 2-1（繼續犯）、案例 2-2（限時法 76 年決議）、保安處分雙軌制、屬地原則三大支柱（天然領域、浮動領土、隔地犯）、案例 2-3（跨境電信詐騙 § 4）、案例 2-4（使領館管轄慣例）、案例 2-5（大陸地區犯罪與特殊之國內關係 90台上4247）。
              待您後續提供第 2-12 頁課文或截圖後，將即刻為您無縫接續增補擴充！
            </p>
          </div>

          <!-- Chapter Bottom Pagination: 第一節底部 -->
          <div class="pt-6 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-chapter-2')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二章 刑法的操作原理 (章節總覽)
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
