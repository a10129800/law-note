/**
 * view-part0-ch1-sec3.js
 * 第零篇 第一章 第三節 罪責原則——付出代價的極限何在？ (教材第 2-7 ~ 2-8 頁)
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch1Sec3'] = window.APP_VIEWS['part0Ch1Sec3'] = `
        <!-- VIEW 8: 第零篇 第一章・第三節 罪責原則——付出代價的極限何在？ (教材第 2-7 ~ 2-8 頁) -->
        <div id="viewPart0Ch1Sec3" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400 flex-wrap">
              <button onclick="switchView('part-0')" class="hover:text-purple-500 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-1')" class="hover:text-purple-500 transition-colors">第一章 刑法的運作原理</button>
              <span>/</span>
              <span class="text-purple-600 dark:text-purple-400 font-bold">第三節 罪責原則</span>
            </nav>
            <button onclick="switchView('part0-chapter-1')" class="text-xs text-slate-400 hover:text-purple-500 flex items-center gap-1 transition-colors shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第一章總覽</span>
            </button>
          </div>

          <!-- Section Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-mono text-xs font-bold">
              <span>第零篇・第一章・第三節</span>
              <span class="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-[11px] border border-purple-200 dark:border-purple-900/50">教材第 2-7 ～ 2-8 頁 原文體系</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第三節 罪責原則——付出代價的極限何在？
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              刑罰以個人責任為前提。深入解析無罪責即無刑罰原則、罪刑相當原則、準強盜罪難以抗拒合憲限縮（釋字第 630 號），以及節制刑罰本質下有利人民之容許例外
            </p>
          </div>

          <!-- 一、罪責原則核心定義與雙重內涵 -->
          <section id="sec-p0ch1-sec3-def" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-purple-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、罪責原則之核心法定定義與憲法基石（教材第 2-7 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <!-- 釋字 630 號核心卡片 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-50/80 via-fuchsia-50/50 to-indigo-50/40 dark:from-purple-950/40 dark:via-fuchsia-950/20 dark:to-indigo-950/20 border-2 border-purple-500/30 space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">⚖️</span>
                    <span class="font-bold text-xs text-purple-800 dark:text-purple-300 uppercase tracking-wider font-mono">
                      罪責原則（Schuldprinzip）核心憲法位階
                    </span>
                  </div>
                  <span data-statute="630" class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold border border-purple-500/20 cursor-pointer">
                    司法院釋字第 630 號
                  </span>
                </div>

                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/60 shadow-sm space-y-2">
                  <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    <span>司法院釋字第 630 號解釋理由書權威揭櫫</span>
                    <span>憲法法治國與人身自由</span>
                  </div>
                  <blockquote class="text-sm sm:text-base font-black text-purple-900 dark:text-purple-200 leading-relaxed font-serif">
                    「刑罰以個人責任為前提，無責任即無刑罰；且刑罰之嚴苛程度，應與行為人責任之程度相當。」
                  </blockquote>
                </div>

                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  罪責原則由<strong>應報思想</strong>導出，並與憲法法治國原則、第 8 條人身自由保障及第 23 條比例原則緊密相連。其揭示了國家刑罰權行使的<strong>絕對道德底線與代價極限</strong>——不能讓人民承擔超過其責任的過苛刑罰。
                </p>
              </div>

              <!-- 二、罪責原則之雙重核心內涵 -->
              <div id="sec-p0ch1-sec3-dual-aspects" class="space-y-3 pt-2">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="text-purple-500">🎯</span>
                    <span>罪責原則之雙重核心內涵（教材第 2-7 頁 原文圖解）</span>
                  </h4>
                  <span class="text-[11px] font-mono text-slate-400">雙重內涵</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <!-- 內涵 1 -->
                  <div class="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-900/40 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center font-mono font-bold text-xs">①</span>
                        <span>無罪責即無刑罰原則</span>
                      </span>
                      <span class="text-[10px] text-purple-500 font-mono font-bold">Nulla poena sine culpa</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      刑罰之成立必須以個人具備非難責任為前提。若行為人欠缺期待可能性（超法定阻卻罪責）、具阻卻罪責事由（§ 18 未滿14歲、§ 19 精神障礙、§ 16 不可避免禁止錯誤），<strong>國家絕對不得予以科處任何刑罰</strong>。
                    </p>
                  </div>

                  <!-- 內涵 2 -->
                  <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-xs">②</span>
                        <span>罪刑相當原則</span>
                      </span>
                      <span class="text-[10px] text-indigo-500 font-mono font-bold">罪責相符</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      刑罰之嚴苛程度必須與行為人的不法內涵及可責性相稱。易律師口訣：<strong>「小罪不能大罰，重罪不能輕罰」</strong>。刑度必須合乎比例原則，禁止過苛處罰。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 三、案例 1-8：準強盜罪與罪刑相當性 -->
          <section id="sec-p0ch1-sec3-case-1-8" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、案例 1-8：準強盜罪與罪刑相當性（教材第 2-7 ～ 2-8 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <!-- 案例 1-8 卡片 -->
              <div id="case-card-0-1-8" data-case="0-1-8" class="case-card p-5 sm:p-6 rounded-2xl border-2 border-indigo-500/30 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-4 transition-all">
                <div class="flex items-center justify-between border-b border-indigo-200/60 dark:border-indigo-800/40 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold shadow-xs">案例 1-8</span>
                    <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      準強盜罪強暴脅迫之合憲性限縮——釋字第 630 號（教材第 2-7 ～ 2-8 頁）
                    </h4>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="329" class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-700/50 cursor-pointer">
                      § 329 準強盜罪
                    </span>
                    <span data-statute="630" class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold border border-purple-200 dark:border-purple-700/50 cursor-pointer">
                      釋字 630 號
                    </span>
                    <button type="button" onclick="copyCaseNote('0-1-8')" class="copy-case-btn text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 font-semibold shadow-2xs transition-all flex items-center gap-1 cursor-pointer">
                      <span>📋</span><span>複製爭點筆記</span>
                    </button>
                  </div>
                </div>

                <!-- 案件事實 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-indigo-100 dark:border-indigo-900/40 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed space-y-1">
                  <div class="font-bold text-indigo-900 dark:text-indigo-300">📌 案件事實</div>
                  <p>
                    竊賊甲在路邊行竊乙的腳踏車得手，牽車欲離去時被失主乙發現。乙衝上前伸手抓住甲的衣領大喊抓賊。甲為了掙脫脫身，隨手「輕推」了乙一下，乙腳步踉蹌但未跌倒亦未受傷，甲趁隙騎車離去。檢察官依刑法第 329 條準強盜罪起訴（以強盜論，法定刑為五年以上有期徒刑）。
                  </p>
                </div>

                <!-- 深度爭點與違憲疑慮 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                    <span>⚠️ 核心爭點：條文字面過寬 vs 罪刑相當原則之衝突</span>
                    <span class="text-rose-600 font-mono font-bold">小罪大罰疑慮</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    刑法第 329 條規定：「竊盜或搶奪，因防護贓物、脫免逮捕或湮滅罪證，而<strong>當場施以強暴脅迫</strong>者，以強盜論。」<br>
                    普通強盜罪（§ 328）明定強暴脅迫必須<strong>「至使不能抗拒」</strong>；但 § 329 字面上卻只寫「當場施以強暴脅迫」。若竊賊僅輕推一下、甩開手，即被直接「以強盜論」論處<strong>五年以上有期徒刑之重罪</strong>，顯然輕重失衡，嚴重違反「罪刑相當原則」！
                  </p>
                </div>

                <!-- 釋字 630 號合憲限縮關鍵解方 -->
                <div class="p-4 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800/60 space-y-2 text-xs">
                  <div class="flex items-center justify-between font-bold text-emerald-900 dark:text-emerald-200">
                    <span class="flex items-center gap-1.5">
                      <span>✓</span>
                      <span>司法院釋字第 630 號解釋：合憲性限縮（合憲之關鍵門檻）</span>
                    </span>
                    <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-600 text-white">難以抗拒之程度</span>
                  </div>
                  <p class="text-slate-700 dark:text-slate-200 leading-relaxed text-[11.5px]">
                    大法官宣告刑法 § 329 並非當然違憲，但<strong>必須為合憲性限縮解釋</strong>：<br>
                    準強盜罪之強暴、脅迫手段，在客觀上必須<strong>「達於使人難以抗拒之程度」</strong>，使其不法內涵與非難可責性實質上等同於強盜罪，始得「以強盜論」！如此方能符合憲法第 23 條之比例原則與罪刑相當原則。
                  </p>
                  <div class="pt-1.5 border-t border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 font-bold text-[11.5px]">
                    🎯 案例結論：甲隨手輕推乙一下，客觀上顯未達「使人難以抗拒之程度」，故不該當刑法第 329 條準強盜罪！僅能成立刑法第 320 條普通竊盜罪與可能的妨害名譽/強制未遂等罪。
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 四、解題提示：節制刑罰發動之本質——有利人民者皆容許 -->
          <section id="sec-p0ch1-sec3-tips-favor" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、解題提示：節制刑罰發動之本質——有利於人民者皆容許！（教材第 2-8 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 dark:from-amber-950/30 dark:via-slate-900 dark:to-orange-950/20 shadow-md space-y-5">
              <div class="flex items-center justify-between border-b border-amber-200/70 dark:border-amber-900/50 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">💡</span>
                  <h4 class="font-extrabold text-sm sm:text-base text-amber-950 dark:text-amber-200">
                    陳奕廷（易律師）解題提示：刑法法理的終極心法
                  </h4>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold">
                  教材第 2-8 頁 解題提示
                </span>
              </div>

              <div class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                <p>
                  許多初學者常困惑：刑法不是明定「罪刑法定」、「禁止習慣法」、「禁止類推適用」嗎？那為什麼刑法上還會承認<strong>「超法定阻卻違法事由（如得被害人承諾、推定的承諾）」</strong>與<strong>「超法定阻卻罪責事由（如期待可能性欠缺）」</strong>呢？這難道沒有違反罪刑法定原則嗎？
                </p>
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/60 shadow-sm space-y-2">
                  <div class="font-black text-amber-800 dark:text-amber-300 text-sm font-serif">
                    🔑 核心破題關鍵：刑法規範的本質在於「節制國家刑罰權」！
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                    罪刑法定原則與罪責原則的立法目的，全在於<strong>「防止國家濫用刑罰權，節制國家對人民的侵害」</strong>。如果個案處理的結果是<strong>對人民有利（出罪、阻卻不法、阻卻罪責、免除刑罰）</strong>，那麼根本就不存在任何「防範國家侵害人民」的理由！
                  </p>
                </div>
              </div>

              <!-- 有利 vs 不利 絕對雙向對照矩陣 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <!-- 不利於人民 -->
                <div class="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border-2 border-rose-400/60 dark:border-rose-900/60 space-y-2">
                  <div class="flex items-center justify-between font-bold text-rose-900 dark:text-rose-200">
                    <span class="flex items-center gap-1.5 text-sm">
                      <span>🚫</span><span>若個案結果「不利於人民」</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-600 text-white font-bold">絕對嚴格禁止</span>
                  </div>
                  <ul class="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11.5px] leading-relaxed list-disc list-inside">
                    <li>禁止以習慣法創設罪名或加重刑罰</li>
                    <li>禁止不利於行為人之類推適用</li>
                    <li>禁止不具明確性之模糊規定</li>
                    <li>禁止不利於行為人之溯及既往</li>
                  </ul>
                  <div class="text-[11px] text-rose-700 dark:text-rose-400 font-bold pt-1 border-t border-rose-200 dark:border-rose-900/50">
                    ➔ 恪遵罪刑法定，全面封堵國家濫權可能！
                  </div>
                </div>

                <!-- 有利於人民 -->
                <div class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border-2 border-emerald-400/60 dark:border-emerald-900/60 space-y-2">
                  <div class="flex items-center justify-between font-bold text-emerald-900 dark:text-emerald-200">
                    <span class="flex items-center gap-1.5 text-sm">
                      <span>✓</span><span>若個案結果「有利於人民」</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-600 text-white font-bold">全面容許肯定</span>
                  </div>
                  <ul class="space-y-1.5 text-slate-700 dark:text-slate-300 text-[11.5px] leading-relaxed list-disc list-inside">
                    <li><strong>容許有利之法理與習慣法</strong>：創設超法定阻卻違法與超法定阻卻罪責</li>
                    <li><strong>容許有利之類推適用</strong>：如類推正當防衛、緊急避難規定出罪</li>
                    <li><strong>容許有利之溯及既往</strong>：刑法 § 2 Ⅰ 但書「從舊從輕原則」</li>
                    <li><strong>容許有利之合憲限縮</strong>：如釋字 630 號限縮強暴脅迫要件</li>
                  </ul>
                  <div class="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold pt-1 border-t border-emerald-200 dark:border-emerald-900/50">
                    ➔ 人權保障至上，無節制國家刑罰發動之必要！
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 五、第一章 四大支柱全景整合對照與全章完結慶祝 -->
          <section id="sec-p0ch1-sec3-chapter1-summary" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、第一章 刑法運作四大支柱全景整合對照與全章完結（教材第 2-1 ～ 2-8 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <div class="space-y-2">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🏛️</span>
                  <span>刑法四大支柱體系總覽（易律師精闢歸納）</span>
                </h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  至此，教材第零篇第一章【刑法的運作原理】三大節四大支柱全數完備！掌握這四根大柱子，就掌握了整個刑法哲學的骨架：
                </p>
              </div>

              <!-- 四大支柱全景表格 -->
              <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101623] shadow-xs">
                <table class="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr class="bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-bold">
                      <th class="p-3">支柱名稱</th>
                      <th class="p-3 border-l border-slate-200 dark:border-slate-700">核心提問</th>
                      <th class="p-3 border-l border-slate-200 dark:border-slate-700">思想淵源</th>
                      <th class="p-3 border-l border-slate-200 dark:border-slate-700">核心法律要求與規範功能</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                        ① 法益保護原則
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800 font-semibold text-slate-900 dark:text-white">
                        刑法的目的何在？
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800">
                        生活利益保全
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800 leading-relaxed">
                        保護重要生活利益（生命、身體、自由、財產、社會、國家）；具積極保護與消極界限機能；為構成要件解釋指導原則。
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-bold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                        ② 最後手段性原則
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800 font-semibold text-slate-900 dark:text-white">
                        刑法在何種情況下發動？
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800">
                        刑罰謙抑思想
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800 leading-relaxed">
                        刑罰為最嚴厲制裁手段，動用成本極高。非民事、行政手段不能達成目的時，始得以刑罰作為最後防線（Ultima Ratio）。
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-bold text-amber-600 dark:text-amber-400 whitespace-nowrap">
                        ③ 罪刑法定原則
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800 font-semibold text-slate-900 dark:text-white">
                        付出代價的根據何在？
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800">
                        預防思想（人民安措手足）
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800 leading-relaxed">
                        刑法 § 1・釋字 384。習慣法禁止、類推適用禁止、明確性原則、溯及既往禁止。保障人民預見性與人權。
                      </td>
                    </tr>
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-850/50">
                      <td class="p-3 font-bold text-purple-600 dark:text-purple-400 whitespace-nowrap">
                        ④ 罪責原則
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800 font-semibold text-slate-900 dark:text-white">
                        付出代價的極限何在？
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800">
                        應報思想（小罪不能大罰）
                      </td>
                      <td class="p-3 border-l border-slate-100 dark:border-slate-800 leading-relaxed">
                        釋字 630。無罪責即無刑罰；罪刑相當原則。準強盜罪合憲限縮。有利人民之類推、溯及與法理全面容許。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- 全章完結里程碑慶祝卡片 -->
              <div class="p-6 rounded-3xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-indigo-500/15 border-2 border-emerald-500/40 dark:border-emerald-500/30 flex items-center justify-between flex-wrap gap-4">
                <div class="flex items-center gap-3.5">
                  <span class="text-4xl">🎉</span>
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-2xs">MILESTONE ACHIEVED</span>
                      <span class="text-xs text-emerald-700 dark:text-emerald-300 font-bold">教材第 2-1 ～ 2-8 頁 全章完結</span>
                    </div>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-1">
                      恭喜！第零篇 第一章【刑法的運作原理】全數研讀完畢！
                    </h4>
                    <p class="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      涵蓋第一節法益保護原則（P. 2-1~2-4）、第二節罪刑法定原則（P. 2-5~2-7）、第三節罪責原則（P. 2-7~2-8），共 8 大經典案例深度解構、公法對照、釋字 630 合憲限縮與解題心法全部收錄。
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <button onclick="switchView('home')" class="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold shadow-sm transition-all">
                    🏠 回書籍主頁
                  </button>
                  <button onclick="switchView('part0-chapter-1')" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-500/25 transition-all">
                    📑 第一章總覽
                  </button>
                </div>
              </div>
            </div>
          </section>

          <!-- Section Bottom Pagination: 第三節底部 (第一章全章完結) -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch1-sec2')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-5 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                  第二節 罪刑法定原則——付出代價的根據何在？
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-chapter-2')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-600 dark:text-indigo-400 font-mono block font-bold">下一單元・進入第二章</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二章 刑法的操作原理 (插槽) →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-600/30">
                →
              </div>
            </button>
          </div>

        </div>
`;
