/**
 * view-part0-ch1-sec2.js
 * 第零篇 第一章 第二節 罪刑法定原則——付出代價的根據何在？ (教材第 2-5 ~ 2-7 頁)
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch1Sec2'] = window.APP_VIEWS['part0Ch1Sec2'] = `
        <!-- VIEW 7: 第零篇 第一章・第二節 罪刑法定原則——付出代價的根據何在？ (教材第 2-5 ~ 2-7 頁) -->
        <div id="viewPart0Ch1Sec2" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400 flex-wrap">
              <button onclick="switchView('part-0')" class="hover:text-indigo-500 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-1')" class="hover:text-indigo-500 transition-colors">第一章 刑法的運作原理</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第二節 罪刑法定原則</span>
            </nav>
            <button onclick="switchView('part0-chapter-1')" class="text-xs text-slate-400 hover:text-indigo-500 flex items-center gap-1 transition-colors shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回第一章總覽</span>
            </button>
          </div>

          <!-- Section Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-mono text-xs font-bold">
              <span>第零篇・第一章・第二節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50">教材第 2-5 ～ 2-7 頁 原文體系</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二節 罪刑法定原則——付出代價的根據何在？
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              行為之處罰，以行為時之法律有明文規定者為限（付出代價之根據）。深入剖析習慣法禁止、類推適用禁止、罪刑明確性與溯及既往禁止四大面向、成文法主義、文義極限與憲法法治國對照
            </p>
          </div>

          <!-- 一、罪刑法定原則核心定義與法源依據 -->
          <section id="sec-p0ch1-sec2-def" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、罪刑法定原則之核心法定定義與憲法法源（教材第 2-5 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <!-- 核心法定定義與釋字 384 金句卡片 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-indigo-50/40 dark:from-blue-950/40 dark:via-sky-950/20 dark:to-indigo-950/20 border-2 border-blue-500/30 space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">📜</span>
                    <span class="font-bold text-xs text-blue-800 dark:text-blue-300 uppercase tracking-wider font-mono">
                      罪刑法定原則（Nullum crimen, nulla poena sine lege）
                    </span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="1" class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold border border-blue-500/20 cursor-pointer">
                      刑法 § 1
                    </span>
                    <span data-statute="384" class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20 cursor-pointer">
                      釋字第 384 號
                    </span>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-blue-200 dark:border-blue-900/60 shadow-sm space-y-2">
                  <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    <span>刑法第 1 條前段明文</span>
                    <span>法律保留之最高體現</span>
                  </div>
                  <p class="text-sm sm:text-base font-black text-blue-900 dark:text-blue-200 leading-relaxed font-serif">
                    「行為之處罰，以行為時之法律有明文規定者為限。」
                  </p>
                </div>

                <!-- 釋字 384 號理由書摘錄 -->
                <div class="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <div class="flex items-center justify-between font-bold text-amber-800 dark:text-amber-300">
                    <span class="flex items-center gap-1.5">
                      <span>⚖️</span>
                      <span>司法院釋字第 384 號解釋理由書（憲法法源依據）</span>
                    </span>
                    <span class="font-mono text-[10px]">憲法第 8 條 正當法律程序</span>
                  </div>
                  <blockquote class="italic text-slate-700 dark:text-slate-200 leading-relaxed pl-2 border-l-2 border-amber-500 font-serif">
                    「實質正當之法律程序，包括罪刑法定主義之要求。非經立法院通過、總統公布之法律明文規定，不得以習慣法創設罪刑，亦不得超越法條文義而類推適用，始符憲法保障人身自由之本旨。」
                  </blockquote>
                </div>

                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  罪刑法定原則被譽為<strong>「刑法的大憲章」</strong>。其核心價值在於<strong>節制國家權力任意發動、保障人民行為自由與預測可能性</strong>。國家欲使人民付出代價（發動刑罰制裁），必須以事前制定且明確的法律為唯一根據。
                </p>
              </div>

              <!-- 原文圖解還原：四大面向架構圖 -->
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="text-blue-500">🗺️</span>
                    <span>罪刑法定原則之四大面向派生子原則（教材第 2-5 頁 原文圖解）</span>
                  </h4>
                  <span class="text-[11px] font-mono text-slate-400">四大派生面向</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <!-- 面向 1 -->
                  <div class="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/40 space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs">1</span>
                        <span>習慣法之禁止</span>
                      </span>
                      <span class="text-[10px] text-blue-500 font-mono font-bold">成文法主義</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      刑罰法律必須由立法院通過、總統公布之<strong>形式法律</strong>定之，不得逕以社會習慣或倫理直接作為論罪科刑之法源。
                    </p>
                  </div>

                  <!-- 面向 2 -->
                  <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-xs">2</span>
                        <span>類推適用之禁止</span>
                      </span>
                      <span class="text-[10px] text-indigo-500 font-mono font-bold">文義最大射程</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      法無明文不為罪。條文可能文義為刑罰射程極限，絕對嚴禁超出文義而類推適用不利於行為人之處罰。
                    </p>
                  </div>

                  <!-- 面向 3 -->
                  <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center font-mono font-bold text-xs">3</span>
                        <span>罪刑明確性原則</span>
                      </span>
                      <span class="text-[10px] text-amber-600 font-mono font-bold">可預見性</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      犯罪要件與法律效果均須清楚具體，一般理性人民得有預見可能性（構成要件明確性＋法律效果明確性）。
                    </p>
                  </div>

                  <!-- 面向 4 -->
                  <div class="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-xs">4</span>
                        <span>溯及既往之禁止</span>
                      </span>
                      <span class="text-[10px] text-rose-500 font-mono font-bold">法安定性</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      行為時法律無明文者不罰。國家制定新法時，不得將效力溯及於制定前已發生之行為，以保障人民信賴利益。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 二、面向一：習慣法之禁止（案例 1-4） -->
          <section id="sec-p0ch1-sec2-sub1-custom" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、面向一：習慣法之禁止（教材第 2-5 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                刑罰制裁剝奪人民之自由、財產甚至生命，其成立與法律效果<strong>必須由形式意義之成文法律（立法院三讀通過、總統公布）明文規定</strong>。任何民間習慣、不成文法規或未明文化的法理，均不得直接作為論罪科刑的根據。
              </p>

              <!-- 案例 1-4 卡片 -->
              <div id="case-card-0-1-4" data-case="0-1-4" class="case-card p-5 sm:p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-50/20 dark:bg-blue-950/20 space-y-4 transition-all">
                <div class="flex items-center justify-between border-b border-blue-200/60 dark:border-blue-800/40 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold shadow-xs">案例 1-4</span>
                    <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      原因自由行為與習慣法禁止之檢驗（教材第 2-5 頁）
                    </h4>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="19-3" class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-700/50 cursor-pointer">
                      § 19 Ⅲ 明文化
                    </span>
                    <button type="button" onclick="copyCaseNote('0-1-4')" class="copy-case-btn text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 font-semibold shadow-2xs transition-all flex items-center gap-1 cursor-pointer">
                      <span>📋</span><span>複製爭點筆記</span>
                    </button>
                  </div>
                </div>

                <!-- 案件事實 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-blue-100 dark:border-blue-900/40 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed space-y-1">
                  <div class="font-bold text-blue-900 dark:text-blue-300">📌 案件事實背景</div>
                  <p>
                    甲在動手行兇殺人前，自知若保持清醒可能會膽怯心軟，於是故意狂飲烈酒以壯膽，使其於行兇實行階段陷入精神障礙心智缺陷狀態（不能辨識違法或欠缺依辨識而行為之能力）。甲於法庭抗辯：刑法在早期並未明文處罰「原因自由行為」，司法機關不能依習慣法或刑法法理直接定罪！
                  </p>
                </div>

                <!-- 深度爭點與解析 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div class="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-1.5">
                    <span class="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1">
                      <span>⚠️</span><span>修法前爭議：習慣法之疑慮</span>
                    </span>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                      早期刑法第 19 條僅規定精神障礙者不罰或減刑，並無明文排除自陷精神障礙之情形。實務逕引「原因自由行為」之法理予以論罪，屢遭學界批評牴觸習慣法之禁止與法律保留原則。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-1.5">
                    <span class="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                      <span>✓</span><span>修法後解法：成文法明文化</span>
                    </span>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                      立法院於民國 94 年修正刑法，正式增訂<strong>第 19 條第 3 項</strong>：「前二項規定，於因故意或過失自行招致者，不適用之。」將法理明文化為成文法律，徹底完足罪刑法定原則之形式依據。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 三、面向二：類推適用之禁止（案例 1-5） -->
          <section id="sec-p0ch1-sec2-sub2-analogy" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、面向二：類推適用之禁止（教材第 2-5 ～ 2-6 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                <div class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-2">
                  <span>⚖️</span>
                  <span>條文可能文義：刑罰擴張的最遠射程</span>
                </div>
                <p>
                  所謂類推適用，指法律對於系爭案件未有明文規定，而比附援引性質相似案件之法律條文予以適用。在民事法領域為填補法律漏洞所許，但在<strong>刑法領域絕對嚴格禁止不利於行為人之類推適用</strong>！法官解釋刑法時，<strong>「條文可能之字面文義」是刑法擴張解釋的最大極限</strong>，一旦超越文字文義範疇，即屬違法之類推適用。
                </p>
              </div>

              <!-- 案例 1-5 卡片 -->
              <div id="case-card-0-1-5" data-case="0-1-5" class="case-card p-5 sm:p-6 rounded-2xl border-2 border-indigo-500/30 bg-indigo-50/20 dark:bg-indigo-950/20 space-y-4 transition-all">
                <div class="flex items-center justify-between border-b border-indigo-200/60 dark:border-indigo-800/40 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold shadow-xs">案例 1-5</span>
                    <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      竊電擬制 vs 偷接第四台影音訊號禁止類推適用（教材第 2-5 ～ 2-6 頁）
                    </h4>
                  </div>
                  <div class="flex items-center gap-2">
                    <span data-statute="323" class="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-700/50 cursor-pointer">
                      § 323 能量擬制
                    </span>
                    <button type="button" onclick="copyCaseNote('0-1-5')" class="copy-case-btn text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-indigo-600 font-semibold shadow-2xs transition-all flex items-center gap-1 cursor-pointer">
                      <span>📋</span><span>複製爭點筆記</span>
                    </button>
                  </div>
                </div>

                <!-- 案件事實 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-indigo-100 dark:border-indigo-900/40 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed space-y-1">
                  <div class="font-bold text-indigo-900 dark:text-indigo-300">📌 案件事實</div>
                  <p>
                    甲為了免費收看電視節目，未經第四台有線電視業者同意，擅自爬上電線桿以同軸電纜線私接業者的傳輸線路，將第四台之影像與聲音訊號引導至自家電視機免費觀賞。檢察官依刑法第 320 條竊盜罪及第 323 條準動產起訴。
                  </p>
                </div>

                <!-- 深度法理分析與裁判對照 -->
                <div class="space-y-3 text-xs">
                  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between font-bold text-slate-800 dark:text-slate-200">
                      <span>🏛️ 臺灣高等法院 97 年度上易字第 648 號刑事判決要旨</span>
                      <span class="text-indigo-600 dark:text-indigo-400 font-mono">類推禁止標竿判決</span>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      <div class="p-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 space-y-1">
                        <div class="font-bold text-blue-700 dark:text-blue-300">① 刑法 § 323 之「能量」定義</div>
                        <p class="text-slate-600 dark:text-slate-300 text-[11.5px] leading-relaxed">
                          刑法 § 323 規定「電能、熱能及其他能量，關於本章之罪，以動產論。」此處之能量，係指具備<strong>獨立物理效用與經濟價值之物質能量</strong>（如電力、瓦斯、熱能）。
                        </p>
                      </div>
                      <div class="p-3 rounded-lg bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 space-y-1">
                        <div class="font-bold text-rose-700 dark:text-rose-300">② 有線電視「訊號」非能量</div>
                        <p class="text-slate-600 dark:text-slate-300 text-[11.5px] leading-relaxed">
                          有線電視傳輸之光電訊號，僅係<strong>聲音與影像資訊之載體</strong>，並非獨立物理能量。若將影音訊號解釋為刑法 § 323 之能量，已超越文義最大射程，屬於<strong>違法的不利類推適用</strong>！
                        </p>
                      </div>
                    </div>
                    <div class="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 text-emerald-900 dark:text-emerald-300 font-bold text-[11.5px]">
                      判決結論：甲之行為於刑法竊盜罪不成立犯罪（判決無罪）！立法院事後乃於《有線廣播電視法》第 74 條另行制定民事損害賠償與特定處罰規範以填補漏洞。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 四、面向三：罪刑明確性原則（案例 1-6） -->
          <section id="sec-p0ch1-sec2-sub3-clarity" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、面向三：罪刑明確性原則（教材第 2-6 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                法律不能含混曖昧。罪刑明確性原則要求國家在制定刑罰時，無論是<strong>「犯罪之構成要件」</strong>或是<strong>「相應之法律效果（刑罰種類與刑度）」</strong>，均必須具備足夠的明確性，使受規範之人民得有預見可能性，並受司法機關嚴謹審查。
              </p>

              <!-- 雙軌明確性對照網格 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
                  <div class="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200">
                    <span>① 構成要件之明確性</span>
                    <span class="text-[10px] font-mono text-amber-600">可預見性</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    禁止使用過度空泛或曖昧不明之文字（如「行為不檢者處刑」）。法律條文之規定必須使一般理性人民能夠理解其行為界限，並能知悉何者為法律所禁止。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 space-y-2">
                  <div class="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200">
                    <span>② 法律效果之明確性</span>
                    <span class="text-[10px] font-mono text-amber-600">刑度界限</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    禁止規定絕對不定期刑。立法者必須清楚規定刑罰種類（死刑、無期徒刑、有期徒刑、罰金）以及具體的法定刑幅度，使人民明確知悉犯罪之代價。
                  </p>
                </div>
              </div>

              <!-- 案例 1-6 卡片 -->
              <div id="case-card-0-1-6" data-case="0-1-6" class="case-card p-5 sm:p-6 rounded-2xl border-2 border-amber-500/30 bg-amber-50/20 dark:bg-amber-950/20 space-y-4 transition-all">
                <div class="flex items-center justify-between border-b border-amber-200/60 dark:border-amber-800/40 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-lg bg-amber-600 text-white font-mono text-xs font-bold shadow-xs">案例 1-6</span>
                    <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      法律效果明確性：絕對不定期刑違憲 vs 相對不定期刑合憲（教材第 2-6 頁）
                    </h4>
                  </div>
                  <button type="button" onclick="copyCaseNote('0-1-6')" class="copy-case-btn text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-amber-600 font-semibold shadow-2xs transition-all flex items-center gap-1 cursor-pointer">
                    <span>📋</span><span>複製爭點筆記</span>
                  </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div class="p-3.5 rounded-xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-1.5">
                    <span class="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1">
                      <span>✕</span><span>絕對不定期刑（違憲・嚴格禁止！）</span>
                    </span>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      例如法律條文若規定：「犯本罪者，處有期徒刑，<strong>直到改過自新為止</strong>。」行為人完全無法預見自身將被剝奪人身自由多久，刑罰效果全由行政或行刑機關恣意決定，<strong>嚴重違反法律效果明確性原則，違憲無效！</strong>
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 space-y-1.5">
                    <span class="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                      <span>✓</span><span>相對不定期刑（合憲・常態裁量）</span>
                    </span>
                    <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      例如刑法各分則條文規定：「處<strong>五年以上十二年以下</strong>有期徒刑。」此種訂出明確法定刑上限與下限，賦予法官依個案情狀（§ 57）裁量之空間，兼具<strong>明確性與個案正義</strong>，完全合憲。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 五、面向四：溯及既往之禁止（案例 1-7） -->
          <section id="sec-p0ch1-sec2-sub4-retroactive" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、面向四：溯及既往之禁止（教材第 2-6 ～ 2-7 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                刑法第 1 條揭櫫「行為之處罰，以<strong>行為時</strong>之法律有明文規定者為限」。此即<strong>法不溯及既往原則</strong>。國家所制定之刑處新規範，絕對不得溯及處罰公布施行前人民已從事之合法或不具刑事處罰之行為。否則人民將無從根據現有法律安排生活，法安定性與信賴保護將蕩然無存。
              </p>

              <!-- 案例 1-7 卡片 -->
              <div id="case-card-0-1-7" data-case="0-1-7" class="case-card p-5 sm:p-6 rounded-2xl border-2 border-rose-500/30 bg-rose-50/20 dark:bg-rose-950/20 space-y-4 transition-all">
                <div class="flex items-center justify-between border-b border-rose-200/60 dark:border-rose-800/40 pb-3 flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-lg bg-rose-600 text-white font-mono text-xs font-bold shadow-xs">案例 1-7</span>
                    <h4 class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      小三條款溯及生效之違法檢驗（教材第 2-6 ～ 2-7 頁）
                    </h4>
                  </div>
                  <button type="button" onclick="copyCaseNote('0-1-7')" class="copy-case-btn text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-rose-600 font-semibold shadow-2xs transition-all flex items-center gap-1 cursor-pointer">
                    <span>📋</span><span>複製爭點筆記</span>
                  </button>
                </div>

                <!-- 案件事實 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-rose-100 dark:border-rose-900/40 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed space-y-1">
                  <div class="font-bold text-rose-900 dark:text-rose-300">📌 案件事實背景</div>
                  <p>
                    公務員甲長期在婚外包養小三。政府為了端正公務紀律，於某年 1 月 1 日經立法院修法增訂「公務員婚外情重懲條例」，明定公務員婚外情處三年有期徒刑；且法案條文末竟附帶規定<strong>「本法自前一年 7 月 1 日起溯及生效」</strong>。檢察官乃依該法追訴甲前一年下半年的包養行為。
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                  <div class="font-bold text-rose-700 dark:text-rose-300">⚖️ 爭點深度審查：溯及條款之效力</div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    甲於前一年 7 月至 12 月從事包養行為時，國家法律並無刑事處罰之明文規定。甲基於行為時之法律秩序安排其行為，享有憲法所保障之信賴利益。新法於 1 月 1 日立法時將刑罰溯及既往發動，公然牴觸憲法罪刑法定原則與法不溯及既往原則，該「溯及生效條款」<strong>違法違憲，對甲之過去行為絕對不生效力！</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 六、作者叮嚀：罪刑法定原則與公法概念對照卡 -->
          <section id="sec-p0ch1-sec2-author-memo" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、作者叮嚀：罪刑法定原則與公法（憲法）概念深度對照（教材第 2-7 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-amber-50/50 via-white to-orange-50/30 dark:from-amber-950/30 dark:via-slate-900 dark:to-orange-950/20 shadow-md space-y-4">
              <div class="flex items-center justify-between border-b border-amber-200/70 dark:border-amber-900/50 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">💡</span>
                  <h4 class="font-extrabold text-sm sm:text-base text-amber-950 dark:text-amber-200">
                    陳奕廷（易律師）考前叮嚀：刑法與公法法治國原則的完全映射
                  </h4>
                </div>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold">
                  教材第 2-7 頁 作者叮嚀
                </span>
              </div>

              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                罪刑法定原則並非刑法所獨創之孤立概念，其背後本質即為<strong>憲法法治國原則（Rechtsstaatsprinzip）</strong>在刑法領域的具體投射。考生若能同時掌握其在公法上的對應概念，對於申論題之論述縱深極有裨益：
              </p>

              <!-- 公法刑法四大對照卡片 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-850 border border-amber-200 dark:border-amber-900/50 space-y-1.5 shadow-2xs">
                  <div class="flex items-center justify-between font-bold">
                    <span class="text-blue-700 dark:text-blue-300">① 習慣法之禁止</span>
                    <span class="text-slate-400 font-mono text-[10px]">對應公法 ➔</span>
                  </div>
                  <div class="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-semibold text-[11.5px]">
                    🏛️ 憲法之「絕對法律保留原則」
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-[11px]">
                    剝奪人身自由之最嚴重干預，必須由國會制定之形式法律直接明定，不得授權行政命令，更不可由習慣法補充。
                  </p>
                </div>

                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-850 border border-amber-200 dark:border-amber-900/50 space-y-1.5 shadow-2xs">
                  <div class="flex items-center justify-between font-bold">
                    <span class="text-indigo-700 dark:text-indigo-300">② 類推適用之禁止</span>
                    <span class="text-slate-400 font-mono text-[10px]">對應公法 ➔</span>
                  </div>
                  <div class="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-semibold text-[11.5px]">
                    ⚖️ 憲法第 80 條「法官依據法律獨立審判」
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-[11px]">
                    司法權不得逾越立法權之文字界限擅自創設刑處，確保權力分立與司法謙抑。
                  </p>
                </div>

                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-850 border border-amber-200 dark:border-amber-900/50 space-y-1.5 shadow-2xs">
                  <div class="flex items-center justify-between font-bold">
                    <span class="text-amber-700 dark:text-amber-300">③ 罪刑明確性原則</span>
                    <span class="text-slate-400 font-mono text-[10px]">對應公法 ➔</span>
                  </div>
                  <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold text-[11.5px]">
                    📜 憲法之「法律明確性原則」
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-[11px]">
                    法治國之基本要求：受規範者可預見、可理解，且得由司法審查機關確認解釋（釋字第 432、521 號）。
                  </p>
                </div>

                <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-850 border border-amber-200 dark:border-amber-900/50 space-y-1.5 shadow-2xs">
                  <div class="flex items-center justify-between font-bold">
                    <span class="text-rose-700 dark:text-rose-300">④ 溯及既往之禁止</span>
                    <span class="text-slate-400 font-mono text-[10px]">對應公法 ➔</span>
                  </div>
                  <div class="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-semibold text-[11.5px]">
                    🛡️ 憲法之「法安定性與信賴保護原則」
                  </div>
                  <p class="text-slate-500 dark:text-slate-400 text-[11px]">
                    人民對國家既有法秩序之合法信賴受憲法保護，國家不得恣意制定真正溯及既往法規損害人民利益（釋字第 574、717 號）。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- Section Bottom Pagination: 第二節底部 -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch1-sec1')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-1 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                  第一節 法益保護原則——何謂法益？
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch1-sec3')" class="group p-4 rounded-2xl border border-purple-500/40 hover:border-purple-500 bg-gradient-to-br from-purple-50/50 to-indigo-50/30 dark:from-purple-950/30 dark:to-indigo-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-purple-700 dark:text-purple-400 font-mono block font-bold">下一單元 (第 2-7 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors truncate block">
                  第三節 罪責原則——付出代價的極限何在？ →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-purple-500/30">
                ⚖️
              </div>
            </button>
          </div>

        </div>
`;
