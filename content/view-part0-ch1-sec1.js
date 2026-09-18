/**
 * view-part0-ch1-sec1.js
 * 第零篇 第一章 第一節 法益保護原則——何謂法益？ (教材第 2-1 ~ 2-4 頁)
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch1Sec1'] = window.APP_VIEWS['part0Ch1Sec1'] = `
        <!-- VIEW 6: 第零篇 第一章・第一節 法益保護原則——何謂法益？ (教材第 2-1 ~ 2-4 頁) -->
        <div id="viewPart0Ch1Sec1" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400 flex-wrap">
              <button onclick="switchView('part-0')" class="hover:text-indigo-500 transition-colors">第零篇</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-1')" class="hover:text-indigo-500 transition-colors">第一章 刑法的運作原理</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第一節 法益保護原則</span>
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
              <span>第零篇・第一章・第一節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50">教材第 2-1 ~ 2-4 頁 原文體系</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第一節 法益保護原則——何謂法益？
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              凡是以法律手段而加以保護之重要生活利益，即稱為法益。本節深入剖析法益之實質先在性與保護界限
            </p>
          </div>

          <!-- 一、法益核心法定定義 -->
          <section id="sec-p0ch1-sec1-def" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、法益之核心法定定義（教材第 2-1 頁 原文定義）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <!-- 核心法學定義金句卡片 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-blue-50/50 to-purple-50/40 dark:from-indigo-950/40 dark:via-blue-950/20 dark:to-purple-950/20 border-2 border-indigo-500/30 space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">💎</span>
                    <span class="font-bold text-xs text-indigo-700 dark:text-indigo-300 uppercase tracking-wider font-mono">
                      法益核心法定定義（Legal Interest）
                    </span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">
                    教材第 2-1 頁 原文定義
                  </span>
                </div>

                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/60 shadow-sm">
                  <p class="text-sm sm:text-base font-black text-indigo-700 dark:text-indigo-300 leading-relaxed font-serif">
                    「凡是以法律手段而加以保護之重要生活利益，即稱為法益。」
                  </p>
                </div>

                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  法益是整個刑法理論的大基石。刑法之所以具有處罰之正當性，正在於行為人實質侵害或威脅了這項「重要生活利益」。
                </p>
              </div>
            </div>
          </section>

          <!-- 二、法益之三大本質與源起特徵 -->
          <section id="sec-p0ch1-sec1-nature" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、法益之三大本質與源起特徵（教材第 2-1 頁 原文分析）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span class="text-blue-500">🔍</span>
                    <span>法益之三大本質與源起特徵</span>
                  </h4>
                  <span class="text-[11px] font-mono text-slate-400">實質法益概念</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                  <!-- 特徵 1 -->
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-mono font-bold">①</span>
                        <span>社會倫理價值觀念</span>
                      </span>
                      <span class="text-[10px] text-slate-400 font-mono">源起之母體</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      法益並非立法者閉門造車或憑空捏造，而是植根於整體社會社群長期凝聚形成的<strong>倫理價值觀念</strong>與文明生活秩序。
                    </p>
                  </div>

                  <!-- 特徵 2 -->
                  <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-mono font-bold">②</span>
                        <span>先於法律規範而存在</span>
                      </span>
                      <span class="text-[10px] text-indigo-500 font-mono font-bold">實質先在性</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      人類的生命、身體、自由、財產等基本法益，在刑法條文制定之前即已實質客觀存在。法律規範係因應保護需求而生，<strong>而非先有法律才有法益</strong>。
                    </p>
                  </div>

                  <!-- 特徵 3 -->
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <span class="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-mono font-bold">③</span>
                        <span>法律制度發展後確認保護</span>
                      </span>
                      <span class="text-[10px] text-slate-400 font-mono">實證化擔保</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      隨著現代法治國制度之演進，國家以成文刑法形式將這些重要生活利益明文化確認，並賦予最強力的法律效果予以實質保護。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 三、法益之雙重機能與界限 -->
          <section id="sec-p0ch1-sec1-func" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-purple-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、法益之雙重機能與界限（保護機能 vs 界限機能）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                      <span>🛡️</span>
                      <span>積極保護機能（Schutzfunktion）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-bold">正當性源頭</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                    刑法設立刑罰規範，旨在藉由威嚇與制裁，確立人民行為規範，達成保全人類共同生活必不可缺的重要利益。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                      <span>🚧</span>
                      <span>消極界限機能（Begrenzungsfunktion）</span>
                    </span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 font-bold">批判立法依歸</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                    凡不具備實質法益侵害或危險之行為（如單純道德、宗教禁忌），國家不得任意動用刑罰處罰，此乃除罪化思潮之根本指引。
                  </p>
                </div>
              </div>

            </div>
          </section>

          <!-- 四、法益之二元區分與體系關聯（個人法益 vs 超個人法益） -->
          <section id="sec-p0ch1-sec1-classification" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、法益之二元區分與體系關聯（個人法益 vs 超個人法益）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <!-- 核心命題焦點卡片 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 via-blue-50/40 to-slate-50/50 dark:from-indigo-950/40 dark:via-blue-950/20 dark:to-slate-900/40 border border-indigo-200 dark:border-indigo-900/50 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-xs text-indigo-700 dark:text-indigo-300 uppercase tracking-wider font-mono flex items-center gap-2">
                    <span>⚖️</span>
                    <span>通說立場：法益二元論之「量相異說」</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">
                    教材第 2-2 頁 原文通說
                  </span>
                </div>
                <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  法益最初區分為<strong>「個人法益」</strong>（如生命、身體、自由、財產）與<strong>「超個人法益」</strong>（如公共安全、公共信用、國家存立）。
                </p>
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/40 shadow-xs">
                  <p class="text-xs sm:text-[13px] text-indigo-950 dark:text-indigo-200 leading-relaxed font-serif">
                    兩者之間的關係，通說採取<strong>「法益二元論之量相異說」</strong>，認為超個人法益與個人法益<strong>並非本質不同，而是只有數量上的差別</strong>。超個人法益乃<strong>個人法益的集合體</strong>，兩者的保護方向應屬一致，而非相互對立（例如維護公共安全，等於同時保護個人生命）。
                  </p>
                </div>
              </div>

              <!-- 二元對照網格 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <!-- 個人法益卡片 -->
                <div class="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-900/40 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                      <span class="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-mono font-bold">👤</span>
                      <span>侵害個人法益（刑法第 271 條以下）</span>
                    </span>
                    <span class="text-[10px] text-blue-500 font-mono font-bold">微觀核心</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    以個人作為直接權利主體的生活利益。可再細分為：<strong>專屬性法益</strong>（人格法益，如生命、身體、自由、名譽、秘密）與<strong>非專屬性法益</strong>（財產法益，如個別財產、整體財產）。
                  </p>
                </div>

                <!-- 超個人法益卡片 -->
                <div class="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/70 dark:border-purple-900/40 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                      <span class="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-mono font-bold">🏛️</span>
                      <span>侵害超個人法益（社會與國家法益）</span>
                    </span>
                    <span class="text-[10px] text-purple-500 font-mono font-bold">集合保全</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    個人法益之制度性集合體。包含<strong>社會法益</strong>（刑法第 173 條以下：公共安全、公共信用、善良風俗）與<strong>國家法益</strong>（刑法第 100 條以下：存立安全、職務公正、權力作用、司法權）。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 五、刑法分則體系架構圖解 -->
          <section id="sec-p0ch1-sec1-framework" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、刑法分則體系架構圖解（個人・社會・國家法益之法定體系）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="text-xs font-bold text-slate-500 dark:text-slate-400">原書體系架構圖（教材第 2-2 頁）</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">刑法分則體系架構</span>
              </div>

              <!-- 體系架構視覺化卡片 (zoomable-diagram) -->
              <div class="zoomable-diagram p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/90 dark:to-[#111728] border border-slate-200 dark:border-slate-800 space-y-6">
                <div class="text-center pb-3 border-b border-slate-200 dark:border-slate-800">
                  <span class="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">刑法分則體系架構（法定保護法益分類）</span>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <!-- 個人法益分組 -->
                  <div class="p-4 rounded-xl bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-xs text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                        <span>👤</span>
                        <span>侵害個人法益</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold statute-link cursor-pointer" data-statute="271">§ 271 以下</span>
                    </div>

                    <div class="space-y-2.5 text-xs">
                      <!-- 專屬性法益 -->
                      <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/40">
                        <div class="font-bold text-slate-800 dark:text-slate-200 text-xs mb-1 flex items-center gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                          <span>專屬性法益（人格法益）</span>
                        </div>
                        <p class="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                          生命（<span class="statute-link" data-statute="271">§ 271</span>）、身體健康（<span class="statute-link" data-statute="277">§ 277</span>）、自由（§ 296 以下）、名譽、個人秘密。不得任意拋棄或由他人任意處分。
                        </p>
                      </div>

                      <!-- 非專屬性法益 -->
                      <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/40">
                        <div class="font-bold text-slate-800 dark:text-slate-200 text-xs mb-1 flex items-center gap-1.5">
                          <span class="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                          <span>非專屬性法益（財產法益）</span>
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                          <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/50">
                            <span class="font-semibold text-slate-700 dark:text-slate-300 block">個別財產法益</span>
                            <span class="text-[10px] text-slate-500">竊盜（<span class="statute-link" data-statute="320">§ 320</span>）、侵占、毀損</span>
                          </div>
                          <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/50">
                            <span class="font-semibold text-slate-700 dark:text-slate-300 block">整體財產法益</span>
                            <span class="text-[10px] text-slate-500">詐欺、恐嚇取財、背信</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 超個人法益分組 -->
                  <div class="p-4 rounded-xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-900/50 space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                        <span>🏛️</span>
                        <span>侵害超個人法益</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">社會＋國家</span>
                    </div>

                    <div class="space-y-2.5 text-xs">
                      <!-- 社會法益 -->
                      <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/40">
                        <div class="flex items-center justify-between mb-1">
                          <span class="font-bold text-slate-800 dark:text-slate-200 text-xs flex items-center gap-1.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                            <span>社會法益</span>
                          </span>
                          <span class="text-[10px] font-mono text-purple-600 dark:text-purple-400 font-bold">§ 173 以下</span>
                        </div>
                        <ul class="text-[11px] text-slate-600 dark:text-slate-400 space-y-1 pl-2 border-l border-purple-200 dark:border-purple-900">
                          <li>• <strong>公共安全法益</strong>：放火、妨害交通（<span class="statute-link" data-statute="185-4">§ 185-4</span>）</li>
                          <li>• <strong>公共信用法益</strong>：偽造貨幣、偽造文書印文</li>
                          <li>• <strong>善良風俗法益</strong>：妨害性自主、賭博、妨害風化</li>
                        </ul>
                      </div>

                      <!-- 國家法益 -->
                      <div class="p-3 rounded-lg bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/40">
                        <div class="flex items-center justify-between mb-1">
                          <span class="font-bold text-slate-800 dark:text-slate-200 text-xs flex items-center gap-1.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                            <span>國家法益</span>
                          </span>
                          <span class="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">§ 100 以下</span>
                        </div>
                        <ul class="text-[11px] text-slate-600 dark:text-slate-400 space-y-1 pl-2 border-l border-indigo-200 dark:border-indigo-900">
                          <li>• <strong>存立安全法益</strong>：內亂罪、外患罪</li>
                          <li>• <strong>職務公正法益</strong>：瀆職罪（貪污收賄、洩密）</li>
                          <li>• <strong>權力作用法益</strong>：妨害公務罪、妨害秩序罪</li>
                          <li>• <strong>司法權法益</strong>：脫逃罪、藏匿人犯、湮滅證據、偽證誣告</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 六、法益三大功能與構成要件之解釋指導原則 -->
          <section id="sec-p0ch1-sec1-functions-three" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、法益三大功能與構成要件之解釋指導原則
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                在刑法中，法益大體上可展現出<strong>三大功能</strong>：首先可以作為刑法分則犯罪成立要件設立之基礎，也可作為競合類型的判準，以及最重要的構成要件解釋指導原則。
              </p>

              <!-- 三大功能卡片 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                <!-- 功能 1 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <span class="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-mono font-bold">①</span>
                      <span>犯罪要件設立基礎</span>
                    </span>
                    <span class="text-[10px] text-slate-400 font-mono">立法原點</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    作為刑法分則各條文犯罪成立要件設立與體系化的基礎。立法者唯有具備確定的法益保護目的，始能客觀勾勒刑法各罪之構成要件。
                  </p>
                </div>

                <!-- 功能 2 -->
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <span class="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-mono font-bold">②</span>
                      <span>競合類型之判準</span>
                    </span>
                    <span class="text-[10px] text-slate-400 font-mono">罪數衡平</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    作為競合類型的判準（競合論部分將深入介紹）。判斷一行為侵害單一或數個法益、專屬或非專屬法益，為想像競合或實質競合之核心依歸。
                  </p>
                </div>

                <!-- 功能 3 (最主要功能！) -->
                <div class="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 dark:from-amber-950/30 dark:to-orange-950/20 border-2 border-amber-300 dark:border-amber-800/60 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                      <span class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center font-mono font-bold">③</span>
                      <span>構成要件解釋指導原則</span>
                    </span>
                    <span class="text-[10px] text-amber-700 dark:text-amber-300 font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/10">最主要功能！</span>
                  </div>
                  <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    法益<strong>最主要的功能</strong>在於作為解釋刑法構成要件之最高指導原則。構成要件之解釋必須緊扣所保護的法益，不能本末倒置。
                  </p>
                </div>
              </div>

              <!-- 解釋指導原則核心警語卡片 -->
              <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/40 space-y-2">
                <div class="flex items-center gap-2">
                  <span class="text-base">📌</span>
                  <span class="font-bold text-xs text-indigo-900 dark:text-indigo-200">
                    教材第 2-2 頁 原文結論
                  </span>
                </div>
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/40">
                  <p class="text-xs sm:text-[13px] text-indigo-950 dark:text-indigo-200 font-serif leading-relaxed">
                    「由於構成要件該當性是在表彰法益侵害，因此法益最主要的功能是：<strong>作為構成要件解釋的指導原則</strong>。職是之故，構成要件的解釋必須緊扣所保護的法益，不能本末倒置，否則將失卻立法的真正意旨。」
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 七、實例演練【案例 1-1】：剪髮報復案——身體法益保護範疇爭議 -->
          <section id="sec-p0ch1-sec1-case-1-1" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                七、實例演練【案例 1-1】：剪髮報復案——身體法益保護範疇爭議
              </h3>
            </div>

            <!-- 案例卡片 0-1-1 -->
            <div id="case-card-0-1-1" data-case="0-1-1" class="case-card p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-5">
              <!-- 卡片標頭 -->
              <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center font-black text-sm">
                    ✂️
                  </span>
                  <div>
                    <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                      案例 1-1 剪髮報復案（身體法益保護範疇）
                    </h4>
                    <div class="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span>教材第 2-2 ～ 2-3 頁</span>
                      <span>•</span>
                      <span>關聯法條：<span class="statute-link" data-statute="277">刑法第 277 條第 1 項</span>（普通傷害罪）</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 案件事實 -->
              <div class="p-4 rounded-2xl bg-rose-50/40 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 space-y-1.5">
                <div class="text-xs font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                  <span>📌</span>
                  <span>案件事實（教材第 2-2 頁）</span>
                </div>
                <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed font-serif">
                  「甲為了報復乙女移情別戀，於是趁乙熟睡時將乙飄逸的長髮剪掉。」
                </p>
              </div>

              <!-- 問題導引與學說分歧 -->
              <div class="space-y-3">
                <div class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span>◀</span>
                  <span>問題導引：長髮遭剪斷，是否該當刑法第 277 條第 1 項之「傷害人之身體或健康」？</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <!-- 實務見解：生理機能障礙說 -->
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono">說一</span>
                        <span>生理機能障礙說</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">實務見解</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      對身體法益侵害的理解採取「生理機能障礙說」，<strong>那度只有使人身之生理機能發生障礙，或使健康狀態導致不良變更者，方屬傷害</strong>。
                    </p>
                    <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400">
                      ⚖️ <strong>案件涵攝</strong>：頭髮為角質蛋白質，剪斷後頭皮生理運作無礙，頭髮日後仍會自然生長，故<strong>不成立普通傷害罪</strong>（或僅成立民事侵權）。
                    </div>
                  </div>

                  <!-- 學說通說：身體完整性侵害說 -->
                  <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-900/50 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-indigo-200 dark:bg-indigo-900 text-[10px] font-mono">說二</span>
                        <span>身體完整性侵害說</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">學說通說 ⭐</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      對身體法益侵害的理解採取「身體完整性侵害說」，<strong>則處於外觀物理變更之角度，認為凡有客觀侵害人身體之完整性者，即為傷害行為</strong>。
                    </p>
                    <div class="p-2.5 rounded-xl bg-indigo-100/60 dark:bg-indigo-950/60 text-[11px] text-indigo-900 dark:text-indigo-300 font-medium">
                      ⚖️ <strong>案件涵攝</strong>：人身毛髮外觀係身體完整性之一環，趁人熟睡未得承諾恣意剪斷，已實質侵害身體完整性，<strong>成立刑法第 277 條第 1 項傷害罪</strong>。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 八、實例演練【案例 1-2】：黑吃黑皮夾案——竊盜罪保護法益爭議 -->
          <section id="sec-p0ch1-sec1-case-1-2" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                八、實例演練【案例 1-2】：黑吃黑皮夾案——竊盜罪保護法益爭議
              </h3>
            </div>

            <!-- 案例卡片 0-1-2 -->
            <div id="case-card-0-1-2" data-case="0-1-2" class="case-card p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-5">
              <!-- 卡片標頭 -->
              <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black text-sm">
                    👛
                  </span>
                  <div>
                    <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                      案例 1-2 黑吃黑皮夾案（竊盜罪保護法益）
                    </h4>
                    <div class="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span>教材第 2-3 頁</span>
                      <span>•</span>
                      <span>關聯法條：<span class="statute-link" data-statute="320">刑法第 320 條第 1 項</span>（普通竊盜罪）</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 案件事實 -->
              <div class="p-4 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 space-y-1.5">
                <div class="text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-1.5">
                  <span>📌</span>
                  <span>案件事實（教材第 2-3 頁）</span>
                </div>
                <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed font-serif">
                  「甲自他人口袋中偷走皮夾一個，正當返家途中沾沾自喜之際，皮夾又被另一名竊賊乙偷走。」
                </p>
              </div>

              <!-- 問題導引與三說鼎立比較 -->
              <div class="space-y-3">
                <div class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span>◀</span>
                  <span>問題導引：乙偷走甲所竊得之皮夾（黑吃黑），乙對甲是否成立竊盜罪？</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                  <!-- 說一：所有權說 -->
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono">說一</span>
                        <span>所有權說</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold">黃榮堅說</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      認為竊盜罪不保護單純的持有，而是保護所有人基於民法規範而在事實上所享有的利益，否則將造成持有人地位凌駕於所有人之上之怪象。此外，持有本身無法視為一種利益，相對而言僅是一種負擔。
                    </p>
                    <div class="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400">
                      ⚖️ <strong>本案涵攝</strong>：本案乙僅侵害甲之持有，甲並非所有人，<strong>乙不構成竊盜罪</strong>。
                    </div>
                  </div>

                  <!-- 說二：持有說 -->
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono">說二</span>
                        <span>持有說</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">甘添貴說</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      認為竊盜罪保護的是財物持有利益本身，並非所有權。現代社會利用形態多樣化（如租車不買車），且財物何故被持有（買來？租來？偷來？）一般人難以窺探，最好全面性保護持有以免掛一漏萬。
                    </p>
                    <div class="p-2.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 text-[11px] text-blue-900 dark:text-blue-300">
                      ⚖️ <strong>本案涵攝</strong>：本案乙侵害甲之持有，<strong>構成竊盜罪</strong>。
                    </div>
                  </div>

                  <!-- 說三：所有權及持有說 -->
                  <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-900/50 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-indigo-200 dark:bg-indigo-900 text-[10px] font-mono">說三</span>
                        <span>所有權及持有說</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">通說 ⭐</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      認為竊盜罪所保護之法益包涵物之所有人對於物的所有權關係，以及<strong>事實上持有人對於物之支配關係</strong>。所以違法的持有亦受到法律之保護（禁止私力侵奪）。
                    </p>
                    <div class="p-2.5 rounded-xl bg-indigo-100/60 dark:bg-indigo-950/60 text-[11px] text-indigo-900 dark:text-indigo-300 font-medium">
                      ⚖️ <strong>本案涵攝</strong>：本案乙侵害甲的持有，<strong>構成竊盜罪</strong>。
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 九、實例演練【案例 1-3】：肇事逃逸罪要件爭議（致人死傷、肇事與逃逸） -->
          <section id="sec-p0ch1-sec1-case-1-3" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-cyan-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                九、實例演練【案例 1-3】：肇事逃逸罪要件解釋爭議（致人死傷、肇事與逃逸）
              </h3>
            </div>

            <!-- 案例卡片 0-1-3 -->
            <div id="case-card-0-1-3" data-case="0-1-3" class="case-card p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-5">
              <!-- 卡片標頭 -->
              <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 flex-wrap gap-2">
                <div class="flex items-center gap-2.5">
                  <span class="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-black text-sm">
                    🚗
                  </span>
                  <div>
                    <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                      案例 1-3 肇事逃逸罪要件解釋爭議（致人死傷、肇事與逃逸）
                    </h4>
                    <div class="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span>教材第 2-3 ～ 2-4 頁</span>
                      <span>•</span>
                      <span>關聯法條：<span class="statute-link" data-statute="185-4">刑法第 185-4 條</span>（肇事致人死傷逃逸罪）</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 三大子題事實與問題導引網格 -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                <!-- 子題 (一)：致人死傷要件 -->
                <div class="p-4 rounded-2xl bg-cyan-50/40 dark:bg-cyan-950/20 border border-cyan-200/70 dark:border-cyan-900/40 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-cyan-900 dark:text-cyan-200 flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-mono font-bold text-[11px]">㈠</span>
                      <span>僅車損未傷人逃逸</span>
                    </span>
                    <span class="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono font-bold">致人死傷要件</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-cyan-100 dark:border-cyan-900/40">
                    <p class="text-[11.5px] text-slate-700 dark:text-slate-200 font-serif leading-relaxed">
                      「甲駕駛汽車不當與對向來車乙發生擦撞，甲隨即加速逃逸，惟乙車僅車身烤漆掉落，並無人員傷亡。」
                    </p>
                  </div>
                  <p class="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                    ❓ <strong>爭點</strong>：如何理解肇事逃逸罪（§ 185-4）內「致人死傷」之要件？
                  </p>
                </div>

                <!-- 子題 (二)：肇事要件與過失責任 -->
                <div class="p-4 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/70 dark:border-indigo-900/40 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-mono font-bold text-[11px]">㈡</span>
                      <span>無過失遭撞逕行離去</span>
                    </span>
                    <span class="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono font-bold">肇事要件解讀</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900/40">
                    <p class="text-[11.5px] text-slate-700 dark:text-slate-200 font-serif leading-relaxed">
                      「甲駕駛汽車在無過失的狀態下遭乙過失追撞，乙倒地血流如注，甲自認錯不在己，逕直接離去。」
                    </p>
                  </div>
                  <p class="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                    ❓ <strong>爭點</strong>：如何理解肇事逃逸罪內「肇事」之要件？是否包含無過失？
                  </p>
                </div>

                <!-- 子題 (三)：逃逸要件與救助未留名 -->
                <div class="p-4 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-amber-950 dark:text-amber-200 flex items-center gap-1.5">
                      <span class="w-5 h-5 rounded bg-amber-500/10 text-amber-600 flex items-center justify-center font-mono font-bold text-[11px]">㈢</span>
                      <span>移置叫車未留名離去</span>
                    </span>
                    <span class="text-[10px] text-amber-700 dark:text-amber-300 font-mono font-bold">逃逸要件解讀</span>
                  </div>
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-100 dark:border-amber-900/40">
                    <p class="text-[11.5px] text-slate-700 dark:text-slate-200 font-serif leading-relaxed">
                      「甲不慎撞傷路人乙，乙倒在路中央碎片狼藉，甲將其移置人行道並電召救護車，待抵達後未留個資離去。」
                    </p>
                  </div>
                  <p class="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                    ❓ <strong>爭點</strong>：如何理解肇事逃逸罪內「逃逸」之要件？已救助但隱匿身分是否該當？
                  </p>
                </div>
              </div>

              <!-- 問題導引與三大理論交鋒 (教材第 2-4 頁 原文分析) -->
              <div class="space-y-3 pt-1">
                <div class="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <span>◀</span>
                  <span>問題導引：三大保護法益學說之對立與要件詮釋</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold ml-1">
                    教材第 2-4 頁 原文分析
                  </span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                  <!-- 說一：生命身體安全保障說 -->
                  <div class="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/50 space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-blue-950 dark:text-blue-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-blue-200 dark:bg-blue-900 text-[10px] font-mono">說一</span>
                        <span>生命身體安全保障說</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">早期實務</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      本罪為遺棄罪之特別規定，以<strong>減少被害人死傷</strong>為目的。
                    </p>
                    <ul class="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 pl-2 border-l-2 border-blue-300 dark:border-blue-800">
                      <li>• <strong>「致人死傷」</strong>：與法益侵害有關之構成要件要素。</li>
                      <li>• <strong>「肇事」</strong>：限於前行為過失致他人生命身體安全受到威脅，行為人因而負有<strong>救助義務</strong>。</li>
                      <li>• <strong>「逃逸」</strong>：指對於生命身體之危險狀態<strong>不為救助</strong>。</li>
                    </ul>
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-blue-100 dark:border-blue-900/40 text-[11px] text-blue-950 dark:text-blue-300">
                      ⚖️ <strong>本案涵攝</strong>：問題(一)無傷不成立；問題(二)無過失不成立；問題(三)已救助排除危險<strong>不成立本罪</strong>。
                    </div>
                  </div>

                  <!-- 說二：公共安全保障說 -->
                  <div class="p-4 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-900/50 space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-purple-950 dark:text-purple-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-purple-200 dark:bg-purple-900 text-[10px] font-mono">說二</span>
                        <span>公共安全保障說</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">少數說 / 體例</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      由立法章節體例來看（公共危險罪章），乃是保護<strong>不特定多數人的公共安全</strong>。事故現場殘骸混亂，會引發後續公共危險。
                    </p>
                    <ul class="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 pl-2 border-l-2 border-purple-300 dark:border-purple-800">
                      <li>• <strong>「致人死傷」</strong>：與保護法益無關，<strong>屬立法錯誤應加以刪除</strong>。</li>
                      <li>• <strong>「肇事」</strong>：限於前行為過失致生後續公共危險，因而負有<strong>控管義務</strong>。</li>
                      <li>• <strong>「逃逸」</strong>：指對<strong>公共危險不為控管</strong>。</li>
                    </ul>
                    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/40 text-[11px] text-purple-950 dark:text-purple-300">
                      ⚖️ <strong>本案涵攝</strong>：問題(一)若未控管危險可能成立；問題(二)無過失不成立；問題(三)碎片未清<strong>可能成立本罪</strong>。
                    </div>
                  </div>

                  <!-- 說三：確認利益保障說 -->
                  <div class="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border-2 border-emerald-300 dark:border-emerald-800/60 space-y-2.5">
                    <div class="flex items-center justify-between">
                      <span class="font-bold text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5">
                        <span class="px-1.5 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-[10px] font-mono">說三</span>
                        <span>確認利益保障說</span>
                      </span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">學說有力說 ⭐</span>
                    </div>
                    <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                      本罪乃為解決<strong>肇事責任之釐清問題</strong>。基於社會連帶思想，事故參與者無論有無過失均負有<strong>協助確認責任歸屬義務</strong>。
                    </p>
                    <ul class="text-[11px] text-slate-600 dark:text-slate-300 space-y-1 pl-2 border-l-2 border-emerald-300 dark:border-emerald-800">
                      <li>• <strong>「致人死傷」</strong>：限縮刑罰權發動的<strong>客觀處罰條件</strong>。</li>
                      <li>• <strong>「肇事」</strong>：<strong>不限故意、過失或無過失</strong>之前行為。</li>
                      <li>• <strong>「逃逸」</strong>：指<strong>逃避責任歸屬義務之隱匿行為</strong>。</li>
                    </ul>
                    <div class="p-2.5 rounded-xl bg-emerald-100/60 dark:bg-emerald-950/60 text-[11px] text-emerald-950 dark:text-emerald-200 font-medium">
                      ⚖️ <strong>本案涵攝</strong>：問題(一)欠處罰條件不成立；問題(二)未停留釐清<strong>成立</strong>；問題(三)隱匿身分<strong>成立本罪</strong>！
                    </div>
                  </div>
                </div>
              </div>

              <!-- 深度對照矩陣表格 -->
              <div class="space-y-2 pt-2">
                <div class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span>📊</span>
                  <span>案例 1-3 三大理論全面對照矩陣</span>
                </div>
                <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                  <table class="w-full text-left text-xs border-collapse min-w-[620px]">
                    <thead>
                      <tr class="bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                        <th class="py-2.5 px-3 font-bold w-1/5">比較項目</th>
                        <th class="py-2.5 px-3 font-bold w-4/15 text-blue-700 dark:text-blue-300">① 生命身體安全保障說（早期實務）</th>
                        <th class="py-2.5 px-3 font-bold w-4/15 text-purple-700 dark:text-purple-300">② 公共安全保障說（少數說）</th>
                        <th class="py-2.5 px-3 font-bold w-4/15 text-emerald-700 dark:text-emerald-300 bg-emerald-500/5">③ 確認利益保障說（有力說 ⭐）</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 text-[11.5px] text-slate-600 dark:text-slate-300">
                      <tr>
                        <td class="py-2 px-3 font-bold bg-slate-50/50 dark:bg-slate-900/50">保護法益</td>
                        <td class="py-2 px-3">被害人生命、身體安全</td>
                        <td class="py-2 px-3">不特定多數人交通公共安全</td>
                        <td class="py-2 px-3 font-semibold text-emerald-900 dark:text-emerald-300 bg-emerald-500/5">事故責任釐清之確認利益</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3 font-bold bg-slate-50/50 dark:bg-slate-900/50">致人死傷定位</td>
                        <td class="py-2 px-3">構成要件要素（實質法益損害）</td>
                        <td class="py-2 px-3">立法贅文／立法錯誤應刪除</td>
                        <td class="py-2 px-3 font-semibold text-emerald-900 dark:text-emerald-300 bg-emerald-500/5">客觀處罰條件（限縮刑罰門檻）</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3 font-bold bg-slate-50/50 dark:bg-slate-900/50">肇事之理解</td>
                        <td class="py-2 px-3">限過失致人死傷（負救助義務）</td>
                        <td class="py-2 px-3">限過失致現場危險（負控管義務）</td>
                        <td class="py-2 px-3 font-semibold text-emerald-900 dark:text-emerald-300 bg-emerald-500/5">不限過失（故意、過失、無過失均屬之）</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3 font-bold bg-slate-50/50 dark:bg-slate-900/50">逃逸之理解</td>
                        <td class="py-2 px-3">對生命危險不為救助即離去</td>
                        <td class="py-2 px-3">對現場公共危險不為控管</td>
                        <td class="py-2 px-3 font-semibold text-emerald-900 dark:text-emerald-300 bg-emerald-500/5">逃避責任歸屬義務之隱匿身分</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3 font-bold bg-slate-50/50 dark:bg-slate-900/50">問題(一)純車損</td>
                        <td class="py-2 px-3 text-rose-600 font-semibold">❌ 不成立（欠缺死傷要件）</td>
                        <td class="py-2 px-3 text-amber-600 font-semibold">⚠️ 碎片未控管可能成立</td>
                        <td class="py-2 px-3 text-rose-600 font-semibold bg-emerald-500/5">❌ 不成立（欠缺客觀處罰條件）</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3 font-bold bg-slate-50/50 dark:bg-slate-900/50">問題(二)無過失遭撞</td>
                        <td class="py-2 px-3 text-rose-600 font-semibold">❌ 不成立（無過失非肇事）</td>
                        <td class="py-2 px-3 text-rose-600 font-semibold">❌ 不成立（無過失不負控管義務）</td>
                        <td class="py-2 px-3 text-emerald-700 dark:text-emerald-400 font-black bg-emerald-500/5">⭕ 成立（發生事故即有確認義務）</td>
                      </tr>
                      <tr>
                        <td class="py-2 px-3 font-bold bg-slate-50/50 dark:bg-slate-900/50">問題(三)救助未留名</td>
                        <td class="py-2 px-3 text-rose-600 font-semibold">❌ 不成立（危險已獲救助排除）</td>
                        <td class="py-2 px-3 text-amber-600 font-semibold">⚠️ 碎片未清理可能成立</td>
                        <td class="py-2 px-3 text-emerald-700 dark:text-emerald-400 font-black bg-emerald-500/5">⭕ 成立（未留個資逃避責任歸屬）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- 2026 最新法規查核與修法背景說明 -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-xs text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <span>💡</span>
                    <span>現行法規範延伸（釋字第 777 號與 110 年修法總結）</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">法規查核通過</span>
                </div>
                <p class="text-[11.5px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  司法院釋字第 777 號宣告舊刑法第 185-4 條違憲後，立法院於 110 年修正現行法條：將抽象「肇事」修正為<strong>「發生交通事故」</strong>，並區分<strong>致人傷害</strong>（處六月以上五年以下）與<strong>致人重傷或死亡</strong>（處一年以上七年以下）；第 2 項更明定<strong>「犯前項之罪，無過失者，減輕或免除其刑」</strong>。立法實質融合救助人身法益與責任確認利益之衡平考量。
                </p>
              </div>
            </div>
          </section>

          <!-- 十、解題提示：法益確認乃構成要件解釋與分則學習之先決基石 -->
          <section id="sec-p0ch1-sec1-tips-methodology" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                十、解題提示：法益確認乃構成要件解釋與分則學習之先決基石
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-6">
              <!-- 原文金句精華焦點框 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-indigo-500/10 border-2 border-amber-400/40 dark:border-amber-500/30 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-xs text-amber-900 dark:text-amber-300 uppercase tracking-wider font-mono flex items-center gap-2">
                    <span>📖</span>
                    <span>教材第 2-4 頁 原文精華【解題提示】</span>
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300 font-bold">
                    方法論核心
                  </span>
                </div>

                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-amber-900/50 shadow-xs">
                  <p class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-100 font-serif leading-relaxed">
                    「前述幾個案例只是要告訴大家<strong>『保護法益的確認』將直接影響刑法分則構成要件要素的解釋與定位</strong>。至於各個犯罪的細部要件爭執及立場抉擇，待分則處再逐一分析說明。因此刑法分則的學習上，<strong>確認保護法益是絕對必要的前置工作</strong>，只有清楚掌握該罪的保護法益，才能在紛雜的要素中正確歸類、整理，在案例解析上也十分重要，如果對所討論的犯罪可以先有一個既定保護法益存在，那檢討構成要件就會相對單純且<strong>事半功倍</strong>。」
                  </p>
                </div>
              </div>

              <!-- 分則研讀與案例審查四步模型卡片 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span class="w-6 h-6 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center font-mono font-bold">1</span>
                      <span>確認保護法益</span>
                    </span>
                    <span class="text-[10px] text-indigo-500 font-mono font-bold">前置基石</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    研讀任何條文，先自問「本罪保護何種利益？」區分專屬人格、財產利益或超個人秩序。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span class="w-6 h-6 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center font-mono font-bold">2</span>
                      <span>指導要件解釋</span>
                    </span>
                    <span class="text-[10px] text-blue-500 font-mono font-bold">目的導引</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    構成要件之解釋緊扣法益保護目的，避免望文生義或本末倒置，防止過度限縮或不當擴張。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span class="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-mono font-bold">3</span>
                      <span>定位要素屬性</span>
                    </span>
                    <span class="text-[10px] text-emerald-500 font-mono font-bold">體系歸位</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    分辨要素屬於客觀行為、結果、不法要素、身分要件抑或客觀處罰條件，條理井然。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span class="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center font-mono font-bold">4</span>
                      <span>案例精準涵攝</span>
                    </span>
                    <span class="text-[10px] text-purple-500 font-mono font-bold">事半功倍</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    各說對立之根源在於保護法益之認定。掌握法益主軸，任何紛雜案例均能提綱挈領破題。
                  </p>
                </div>
              </div>

              <!-- 第一節完整完結進度提示卡 -->
              <div class="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-indigo-950/30 border border-emerald-300 dark:border-emerald-800/60 flex items-center justify-between flex-wrap gap-3">
                <div class="flex items-center gap-3">
                  <span class="text-3xl">🎉</span>
                  <div>
                    <div class="text-sm font-black text-emerald-950 dark:text-emerald-200">
                      教材第 2-1 ～ 2-4 頁 第一節【法益保護原則——何謂法益？】全節收錄完畢！
                    </div>
                    <div class="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      完整涵蓋法益定義、三大本質、雙重機能、二元區分量相異說、分則架構、三大功能、三大實例演練（剪髮案、黑吃黑案、肇逃案）與解題提示方法論。後續單元待第二節教材提供。
                    </div>
                  </div>
                </div>
                <span class="px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-mono text-xs font-black shadow-sm">
                  第一節 完畢 (P. 2-1 ~ 2-4)
                </span>
              </div>
            </div>
          </section>

          <!-- Section Bottom Pagination: 第一節底部 -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-chapter-1')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第一章 篇章前言與四大支柱 (第 2-1 頁)
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-ch1-sec2')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">下一單元 (第 2-5 ～ 2-7 頁)</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二節 罪刑法定原則——付出代價的根據何在？ →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                📜
              </div>
            </button>
          </div>

        </div>
`;
