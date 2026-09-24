/**
 * view-part0-ch2-sec2.js
 * 第零篇 第二章 第二節 刑法的解釋方法 (教材第 2-14 ～ 2-15 頁)
 * 涵蓋法律解釋二分法（司法解釋 vs 立法解釋 § 10）、四大司法解釋方法（文義、歷史、目的、體系）、
 * 罪刑法定與法益保護之拉扯架構圖，以及案例 2-7（肇事後留現場抽煙冒充目擊者案）
 */
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewPart0Ch2Sec2'] = window.APP_VIEWS['part0Ch2Sec2'] = window.APP_VIEWS['part0-ch2-sec2'] = `
        <!-- VIEW: 第零篇 第二章 第二節 刑法的解釋方法 (教材第 2-14 ～ 2-15 頁) -->
        <div id="viewPart0Ch2Sec2" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400 flex-wrap">
              <button onclick="switchView('part-0')" class="hover:text-indigo-500 transition-colors">第零篇 刑法的運作、操作原理與法律效果</button>
              <span>/</span>
              <button onclick="switchView('part0-chapter-2')" class="hover:text-indigo-500 transition-colors">第二章 刑法的操作原理</button>
              <span>/</span>
              <span class="text-indigo-600 dark:text-indigo-400 font-bold">第二節 刑法的解釋方法</span>
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
              <span>第零篇 第二章・第二節</span>
              <span class="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-[11px] border border-indigo-200 dark:border-indigo-900/50">
                教材第 2-14 ～ 2-15 頁 原文精確收錄
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二節 刑法的解釋方法
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              探討法律解釋之二元分類（司法解釋 vs. 立法解釋 § 10）、四大司法解釋方法（文義、歷史、目的、體系）、罪刑法定與法益保護之拉扯體系圖，以及案例 2-7 撞人留現場冒充目擊者之肇逃爭議
            </p>
          </div>

          <!-- 一、法律解釋之二分法：司法解釋 vs. 立法解釋（教材第 2-14 頁 原文前言） -->
          <section id="sec-p0ch2-sec2-classification" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、法律解釋之二元體系：司法解釋 vs. 立法解釋（教材第 2-14 頁）
              </h3>
            </div>

            <!-- 天藍色概念焦點框 (Focus Box) -->
            <div class="box-legal-navy p-6 sm:p-8 rounded-3xl space-y-5">
              <div class="flex items-center justify-between border-b border-sky-300/40 dark:border-sky-700/40 pb-3">
                <div class="flex items-center gap-2">
                  <span class="text-xl">⚖️</span>
                  <h4 class="text-base sm:text-lg font-black text-[#032034] dark:text-white">
                    法律解釋的兩大途徑（教材第 2-14 頁 原文精華）
                  </h4>
                </div>
                <span class="px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-[#0369a1] dark:text-sky-300 text-xs font-mono font-bold border border-sky-300 dark:border-sky-600 shadow-xs">
                  教材第 2-14 頁
                </span>
              </div>

              <blockquote class="border-l-4 border-[#0284c7] pl-4 py-1 text-xs sm:text-sm text-[#0c4a6e] dark:text-sky-100 leading-relaxed italic space-y-1">
                <p>
                  「法律的解釋方法有二：其一為針對既存條文適用上的司法解釋，另一為預先以條文方式加以定義的立法解釋。就刑法而言，前者涉及一般法律的法學解釋方法，後者則在 § 10 加以規範。」—— 陳奕廷《刑法總則【圖說系列】》第 2-14 頁
                </p>
              </blockquote>

              <!-- 兩大解釋途徑對比網格 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                
                <!-- 途徑 1: 司法解釋 -->
                <div class="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-mono font-bold text-[11px] border border-blue-200 dark:border-blue-800">
                      既存條文適用
                    </span>
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400">法學方法論</span>
                  </div>
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🏛️</span>
                    <span>1. 司法解釋（Judicial Interpretation）</span>
                  </h5>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    法官或司法實務在具體個案中，針對現行既存法律條文之文義與規範意旨所進行之法律適用闡釋。
                  </p>
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    <div>• <strong>本質</strong>：涉及一般法律的法學解釋方法。</div>
                    <div>• <strong>四大工具</strong>：文義解釋、歷史解釋、目的解釋、體系解釋。</div>
                  </div>
                </div>

                <!-- 途徑 2: 立法解釋 -->
                <div class="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/90 border border-sky-200 dark:border-sky-800 space-y-3 shadow-xs">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-mono font-bold text-[11px] border border-purple-200 dark:border-purple-800">
                      刑法 § 10 明文規範
                    </span>
                    <span class="text-xs font-bold text-purple-600 dark:text-purple-400">法定名詞定義</span>
                  </div>
                  <h5 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>📜</span>
                    <span>2. 立法解釋（Legislative Interpretation）</span>
                  </h5>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    立法者在法典中，預先以明文條文方式對特定法律概念進行抽象界定與定義之規範。
                  </p>
                  <div class="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                    <div>• <strong>法源依據</strong>：刑法第 10 條【定義章】。</div>
                    <div>• <strong>具體內容</strong>：公務員、公文書、重傷、性交、電磁紀錄等法定標準。</div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <!-- 二、四大司法解釋方法與刑法核心拉扯（教材第 2-14 ～ 2-15 頁） -->
          <section id="sec-p0ch2-sec2-methods" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、四大司法解釋方法與刑法特有之「拉扯」關係（教材第 2-14 ～ 2-15 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-5">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 font-mono">
                  <span>📖</span>
                  <span>教材第 2-14 ～ 2-15 頁 原文論述</span>
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">
                  原文忠實收錄
                </span>
              </div>

              <blockquote class="p-4 rounded-2xl border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic space-y-2">
                <p>
                  「一般的法律解釋方法，比如說『文義解釋（一切解釋的起點並構成解釋的最外延）』、『歷史解釋（探求立法者的意思）』、『目的解釋（確認規範的當代目的）』、『體系解釋（作為選定解釋的佐證或條文意涵的調整）』等，在刑法中皆完全可以適用。」
                </p>
                <p class="font-bold text-slate-800 dark:text-slate-100">
                  「但因為『罪刑法定原則』之故，刑法更加重視『文義解釋』，且由於法益保護為刑法的終極目的，故相對地也重視『目的解釋』，所以刑法的解釋常在『文義解釋』與『目的解釋』間來回拉扯。」
                </p>
              </blockquote>

              <!-- 四大解釋方法四象限網格卡片 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                
                <!-- 1. 文義解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-blue-500/40 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-mono font-bold text-[10px]">
                      起點與最外延
                    </span>
                    <span class="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">METHOD 1</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🔤</span>
                    <span>文義解釋（Grammatical）</span>
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>一切解釋的起點，並構成法律解釋的最外延！</strong> 基於罪刑法定原則，任何法律解釋絕對不得超越法條字面的可能文義範圍，否則即構成禁止之不利類推適用。
                  </p>
                </div>

                <!-- 2. 目的解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border-2 border-emerald-500/40 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[10px]">
                      確認當代目的
                    </span>
                    <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">METHOD 2</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🎯</span>
                    <span>目的解釋（Teleological）</span>
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>確認規範的當代目的！</strong> 由於法益保護為刑法的終極目的，探求條文旨在保護何種法益、防範何種實質危險，確保刑法發揮實質機能。
                  </p>
                </div>

                <!-- 3. 歷史解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-bold text-[10px]">
                      立法者原意
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-400">METHOD 3</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>📜</span>
                    <span>歷史解釋（Historical）</span>
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>探求立法者的意思！</strong> 參酌法條立法草案理由書、審查會紀錄與沿革背景，與文義解釋關係最為相近。
                  </p>
                </div>

                <!-- 4. 體系解釋 -->
                <div class="p-4.5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-bold text-[10px]">
                      佐證與調整
                    </span>
                    <span class="text-xs font-mono font-bold text-slate-400">METHOD 4</span>
                  </div>
                  <h4 class="text-sm font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>🧩</span>
                    <span>體系解釋（Systematic）</span>
                  </h4>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>作為選定解釋的佐證或條文意涵的調整！</strong> 綜觀法律整體條文結構，避免體系評價矛盾，居於輔助地位。
                  </p>
                </div>

              </div>
            </div>
          </section>

          <!-- 三、原書架構圖：司法解釋的相互關係（教材第 2-15 頁 原文圖解） -->
          <section id="sec-p0ch2-sec2-diagram" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、原書架構圖：司法解釋的相互關係（教材第 2-15 頁）
              </h3>
            </div>

            <div class="p-6 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#101623] shadow-sm space-y-5">
              <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 font-mono">
                  <span>📊</span>
                  <span>【原書圖說】司法解釋的相互關係與拉扯模型</span>
                </span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold">
                  教材第 2-15 頁 原圖重現
                </span>
              </div>

              <!-- 互動拉扯架構畫布 -->
              <div class="p-5 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/30 border border-slate-200/90 dark:border-slate-800 space-y-6">
                
                <!-- 上方兩大支柱：罪刑法定 vs 法益保護 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                  
                  <!-- 左翼：罪刑法定原則 (重視文義解釋與歷史解釋) -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-500 shadow-sm space-y-4">
                    <div class="flex items-center justify-between border-b border-blue-100 dark:border-blue-900 pb-2">
                      <span class="text-xs font-black text-blue-700 dark:text-blue-300 uppercase tracking-wider font-mono">
                        🏛️ 罪刑法定原則
                      </span>
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">起原 / 基礎</span>
                    </div>

                    <div class="grid grid-cols-2 gap-3 items-center">
                      <!-- 歷史解釋 -->
                      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-1">
                        <span class="text-[11px] font-mono text-slate-400 block font-bold">探求立法原意</span>
                        <span class="text-xs font-bold text-slate-800 dark:text-slate-200">歷史解釋</span>
                      </div>

                      <!-- 相近雙向箭頭 -->
                      <div class="flex items-center justify-center text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                        <span>← 相近 →</span>
                      </div>
                    </div>

                    <!-- 文義解釋 (中心樞紐) -->
                    <div class="p-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center shadow-md shadow-blue-500/20 space-y-0.5">
                      <span class="text-[10px] uppercase font-mono tracking-wider opacity-90 block">起點與最外延</span>
                      <h5 class="text-sm font-black">文義解釋（起原）</h5>
                    </div>
                  </div>

                  <!-- 右翼：法益保護原則 (重視目的解釋) -->
                  <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-emerald-500 shadow-sm space-y-4 flex flex-col justify-between">
                    <div class="flex items-center justify-between border-b border-emerald-100 dark:border-emerald-900 pb-2">
                      <span class="text-xs font-black text-emerald-700 dark:text-emerald-300 uppercase tracking-wider font-mono">
                        🛡️ 法益保護原則
                      </span>
                      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">終極目的</span>
                    </div>

                    <!-- 目的解釋 -->
                    <div class="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-center space-y-1">
                      <span class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold block">確認當代目的</span>
                      <h5 class="text-sm font-black text-emerald-900 dark:text-emerald-200">目的解釋</h5>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 text-center">
                      法益保護乃刑法終極目的，探求實質保護範圍
                    </div>
                  </div>

                </div>

                <!-- 中間核心拉扯指示條 (文義解釋 vs 目的解釋) -->
                <div class="p-3 rounded-xl bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-center text-xs font-bold text-amber-900 dark:text-amber-200 flex items-center justify-center gap-2">
                  <span>⚡</span>
                  <span><strong>核心拉扯：</strong>文義解釋（罪刑法定起點） ⟷【相互拉扯・左右抗衡】⟷ 目的解釋（法益保護終極目的）</span>
                  <span>⚡</span>
                </div>

                <!-- 下方基石：體系解釋 (輔助地位) -->
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-center space-y-2">
                  <div class="flex items-center justify-center gap-2 text-xs font-mono font-bold text-slate-500">
                    <span>↑ 幫助</span>
                    <span>•</span>
                    <span>體系解釋（輔助）</span>
                    <span>•</span>
                    <span>輔助 ↑</span>
                  </div>
                  <h5 class="text-xs sm:text-sm font-black text-slate-900 dark:text-white">
                    體系解釋（調整條文意涵，兼顧歷史解釋與目的解釋之輔助佐證）
                  </h5>
                </div>

              </div>
            </div>
          </section>

          <!-- 四、實例演練：案例 2-7（撞人後留現場抽煙案，教材第 2-15 頁 原文案例） -->
          <section id="sec-p0ch2-sec2-case-2-7" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、實例演練：案例 2-7——文義與目的解釋之拉扯碰撞（教材第 2-15 頁）
              </h3>
            </div>

            <!-- 案例卡片容器 -->
            <div class="p-6 rounded-3xl border-2 border-amber-500/40 bg-white dark:bg-[#101623] shadow-sm space-y-5">
              
              <!-- 案例標頭 -->
              <div class="flex items-center justify-between flex-wrap gap-2 border-b border-slate-100 dark:border-white/[0.06] pb-3">
                <div class="flex items-center gap-2.5">
                  <span class="text-xl">⚖️</span>
                  <div>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold">
                      教材第 2-15 頁
                    </span>
                    <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      案例 2-7：撞人後留現場抽煙冒充目擊者案（肇事逃逸罪 § 185-4）
                    </h4>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button type="button" class="statute-popover-trigger px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-slate-200 dark:border-slate-700 cursor-pointer" data-statute="185-4">
                    📜 刑法 § 185-4
                  </button>
                  <button type="button" onclick="copyCaseNote('case-2-7', this)" class="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/60 hover:bg-amber-200 dark:hover:bg-amber-800 text-amber-800 dark:text-amber-200 text-xs font-bold transition-all shadow-xs flex items-center gap-1 cursor-pointer" title="複製 Anki/Notion 格式案例筆記">
                    <span>📋</span>
                    <span>複製筆記</span>
                  </button>
                </div>
              </div>

              <!-- 教材原文案件事實 -->
              <div class="space-y-2">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono flex items-center gap-1">
                  <span>📌</span>
                  <span>案件事實（教材第 2-15 頁 原文）</span>
                </span>
                <blockquote class="p-4 rounded-2xl border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic">
                  「甲駕駛汽車不當撞傷路人乙，乙倒在路中央，地上碎片狼藉，甲將汽車駛並於一旁暗處後，便在蹲在肇事現場旁的人行道上抽煙。待一小時後警察才經民眾通報而來到現場，並對一旁的甲詢問犯人去處，甲答稱自己是車禍目擊者，目睹肇事者已駕車往東方加速逃離。試問甲是否構成肇事逃逸罪？」
                </blockquote>
              </div>

              <!-- 教材原文問題導引 -->
              <div class="space-y-2">
                <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-mono flex items-center gap-1">
                  <span>◀</span>
                  <span>問題導引（教材第 2-15 頁 原文分析）</span>
                </span>
                <div class="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  <p>
                    「『逃逸』按文義解釋應是積極的逃跑動作，甲既未逃跑，無法吻合文義解釋。但探求本罪之目的，無論對保護法益採取何種見解，甲均放任法益侵害發生，其行為應屬於本罪所要掌握的態樣。此時便發生文義解釋與目的解釋的來回拉扯。」
                  </p>
                </div>
              </div>

              <!-- 深度對照拆解：文義 vs 目的解釋在案例 2-7 的拉扯角力 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                
                <!-- 角度 1: 文義解釋角度 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400 font-mono">文義解釋立場</span>
                    <span class="px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-mono font-bold text-[10px]">罪刑法定</span>
                  </div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    甲並未離開現場，不合「逃逸」客觀文義
                  </h5>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    「逃逸」在一般社會通念與字面文義上，指「積極逃離、離開現場以逃避責任」。甲全程蹲在人行道上抽煙並未移動離開，若將留在現場也解釋為「逃逸」，將超越字面可能文義的最外延，有違罪刑法定原則。
                  </p>
                </div>

                <!-- 角度 2: 目的解釋角度 -->
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">目的解釋立場</span>
                    <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[10px]">法益保護</span>
                  </div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    放任法益危險，實質該當本罪掌握態樣
                  </h5>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    本罪規範目的在於促使肇事者履行救護義務、確保被害人生命身體法益，並便於確認責任。甲藏匿車輛、偽裝目擊者誤導警察，形同徹底隱匿身分並放任乙陷於無助，實質具備本罪可罰之違法內涵。
                  </p>
                </div>

              </div>

              <!-- 2026 現行法規與實務發展查核 -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs">
                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1">
                  <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 text-[11.5px]">
                    <span>📌</span>
                    <span>【2026 現行法規與司法實務追蹤：刑法 § 185-4】</span>
                  </span>
                  <span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-[10px]">
                    釋字第 777 號後新法
                  </span>
                </div>
                <div class="space-y-1 text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                  <div>• <strong>法條最新狀態</strong>：刑法 § 185-4 於 110 年 5 月 28 日修正施行，明訂「發生交通事故，致人傷害而逃逸者處六月以上五年以下有期徒刑；致重傷或死亡者處一年以上七年以下」。</div>
                  <div>• <strong>最高法院目前實務</strong>：實務裁判多數認為行為人縱使未離開現場，若故意隱瞞肇事身分、冒充路人甚至誤導員警偵查，仍屬逃避責任之實質脫逃，可能認定成立肇事逃逸；惟學說嚴格本於罪刑法定，主張應透過修法或論以遺棄罪（§ 294）評價，不可逾越文義邊界。</div>
                </div>
              </div>

            </div>
          </section>

          <!-- Chapter Bottom Pagination: 第二節底部 -->
          <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onclick="switchView('part0-ch2-sec1')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                ←
              </div>
              <div class="min-w-0">
                <span class="text-[11px] text-slate-400 font-mono block">上一單元 (第 2-9 ～ 2-14 頁)</span>
                <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第一節 刑法的適用效力
                </span>
              </div>
            </button>

            <button onclick="switchView('part0-chapter-2')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
              <div class="min-w-0 text-left">
                <span class="text-[11px] text-indigo-700 dark:text-indigo-400 font-mono block font-bold">章節總覽</span>
                <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors truncate block">
                  第二章 刑法的操作原理 (章節總覽) →
                </span>
              </div>
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-500/30">
                📑
              </div>
            </button>
          </div>

        </div>
`;
