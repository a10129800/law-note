// ==============================================================================
// VIEW: 第二章 刑法的論罪結構 (Chapter 2 View)
// 包含構成要件本質、例外擴張處罰、案例 2-1 至 2-4、其他刑罰要件及犯罪基本審查流程
// ==============================================================================
window.APP_VIEWS = window.APP_VIEWS || {};
window.APP_VIEWS['viewChapter2'] = `
        <!-- VIEW C: 第二章 刑法的論罪結構 (點擊第二章後顯示) -->
        <div id="viewChapter2" class="fade-enter hidden space-y-8">
          
          <!-- Breadcrumb & Back -->
          <div class="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-white/[0.06] pb-3">
            <nav class="flex items-center gap-2 text-xs font-medium text-slate-400">
              <button onclick="switchView('intro')" class="hover:text-blue-500 transition-colors">導論 犯罪概念與論罪結構</button>
              <span>/</span>
              <span class="text-blue-600 dark:text-blue-400 font-bold">第二章 刑法的論罪結構</span>
            </nav>
            <button onclick="switchView('intro')" class="text-xs text-slate-400 hover:text-blue-500 flex items-center gap-1 transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>返回導讀</span>
            </button>
          </div>

          <!-- Chapter Header -->
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
              <span>導論・第二章</span>
              <span class="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[11px] border border-blue-200 dark:border-blue-900/50">教材第 1-13 ～ 1-15 頁 (第 1-12 頁為空白頁)</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              第二章 刑法的論罪結構
            </h2>
            <p class="text-xs sm:text-sm text-slate-500">
              探討構成要件本質、處罰原則（故意既遂）、例外擴張處罰門檻（未遂犯與過失犯）、阻卻事由之例外排除（挑唆防衛、原因自由行為）及其他刑罰要件
            </p>
          </div>

          <!-- 一、構成要件的本質與「故意＋既遂」處罰原則 -->
          <section id="sec-ch2-essence" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-blue-600"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                一、構成要件的本質與「故意＋既遂」處罰原則
              </h3>
            </div>

            <div class="box-legal-navy p-6 rounded-3xl space-y-5">
              <div class="space-y-3">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono text-xs">經驗累積</span>
                  <span>構成要件：人類無法忍受的最典型非法</span>
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  構成要件是經驗累積的產物，能夠被編寫成犯罪構成要件之所作所為，必然都是最典型的非法，也可以說只要是身為人類都無法忍受的犯行。
                </p>
              </div>

              <!-- 英美法重罪（Felony）例示卡片 -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <span>🏛️</span>
                    <span>英美法中所謂的「重罪」（Felony）處罰典型</span>
                  </span>
                  <span class="text-[11px] font-mono text-slate-400">毫無疑問的處罰典型</span>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center font-medium text-slate-800 dark:text-slate-200">
                    <span class="block text-red-500 font-bold mb-0.5">謀殺</span>
                    <span class="text-[10px] text-slate-400">最無爭議的典型</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center font-medium text-slate-800 dark:text-slate-200">
                    <span class="block text-slate-700 dark:text-slate-300 font-bold mb-0.5">強制性交</span>
                    <span class="text-[10px] text-slate-400">重大身體自主侵害</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center font-medium text-slate-800 dark:text-slate-200">
                    <span class="block text-slate-700 dark:text-slate-300 font-bold mb-0.5">強盜</span>
                    <span class="text-[10px] text-slate-400">強暴脅迫結合財產</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center font-medium text-slate-800 dark:text-slate-200">
                    <span class="block text-slate-700 dark:text-slate-300 font-bold mb-0.5">夜間侵入住宅</span>
                    <span class="text-[10px] text-slate-400">嚴重危及居住安寧</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center font-medium text-slate-800 dark:text-slate-200">
                    <span class="block text-slate-700 dark:text-slate-300 font-bold mb-0.5">惡意傷害</span>
                    <span class="text-[10px] text-slate-400">殘害他人身體健康</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-center font-medium text-slate-800 dark:text-slate-200">
                    <span class="block text-slate-700 dark:text-slate-300 font-bold mb-0.5">放火</span>
                    <span class="text-[10px] text-slate-400">公共危險重大災難</span>
                  </div>
                </div>
              </div>

              <!-- 客觀與主觀該當分野 -->
              <div class="space-y-3">
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  構成要件該當性有客觀與主觀之別。以殺人罪為例，立法者經驗上所設想的係<strong class="text-blue-600 dark:text-blue-400">「出於殺人故意而殺死他人之行為」</strong>，亦即客觀與主觀完全該當之情形：
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div class="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 space-y-1">
                    <div class="text-xs font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                      <span>🔵</span>
                      <span>客觀該當性</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      學理上將客觀該當稱為<span class="font-bold text-blue-600 dark:text-blue-400 text-sm px-1.5 py-0.5 bg-white dark:bg-slate-800 rounded-md shadow-xs ml-1">「既遂」</span>
                    </p>
                  </div>
                  <div class="p-3.5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 space-y-1">
                    <div class="text-xs font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                      <span>🟣</span>
                      <span>主觀該當性</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      學理上將主觀該當稱為<span class="font-bold text-indigo-600 dark:text-indigo-400 text-sm px-1.5 py-0.5 bg-white dark:bg-slate-800 rounded-md shadow-xs ml-1">「故意」</span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- 處罰原則高亮 -->
              <div class="p-4 rounded-2xl bg-gradient-to-r from-red-500/10 via-amber-500/10 to-blue-500/10 border border-red-500/30 dark:border-red-500/40 flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-red-500 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-md shadow-red-500/20">
                  ⚖️
                </div>
                <div>
                  <div class="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                    核心立法處罰原則
                  </div>
                  <div class="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                    「故意 ＋ 既遂」是立法者最想掌握的處罰原則。
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 二、例外擴張處罰之雙重門檻與觀念辨正 -->
          <section id="sec-ch2-expansion" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-amber-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                二、例外擴張處罰之雙重門檻與觀念辨正
              </h3>
            </div>

            <div class="box-legal-gold p-6 rounded-3xl space-y-5">
              
              <!-- 重要公式對比 -->
              <div class="space-y-3">
                <div class="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  ⚠️ 關鍵法律公式・觀念釐清（教材第 1-13 頁）
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-slate-700 dark:text-slate-300">客觀要件未該當</span>
                      <span class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">客觀面</span>
                    </div>
                    <div class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <span>非既遂</span>
                      <span class="text-red-500 font-black">≠</span>
                      <span class="text-slate-700 dark:text-slate-300 font-bold">未遂</span>
                    </div>
                    <p class="text-xs text-slate-500 leading-relaxed">
                      客觀構成要件不具備僅是「非既遂」，絕非當然等同於法律上的「未遂犯」！
                    </p>
                  </div>

                  <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-slate-700 dark:text-slate-300">主觀要件未該當</span>
                      <span class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">主觀面</span>
                    </div>
                    <div class="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                      <span>非故意</span>
                      <span class="text-red-500 font-black">≠</span>
                      <span class="text-slate-700 dark:text-slate-300 font-bold">過失</span>
                    </div>
                    <p class="text-xs text-slate-500 leading-relaxed">
                      主觀構成要件不具備僅是「非故意」，絕非當然等同於法律上的「過失犯」！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 原則不罰與例外要件 -->
              <div class="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 space-y-3">
                <div class="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                  <span>🚨</span>
                  <span>可罰性建構原則：非既遂與非故意原則上均不足以建構處罰</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  若要想例外地擴張處罰，除要有<strong>法律的明示處罰規定外（罪刑法定原則）</strong>，還必須<strong>滿足其他犯罪成立要件</strong>。
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 space-y-1">
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                      <span>🔒</span>
                      <span>第一重門檻：法律明示規定</span>
                    </span>
                    <p class="text-xs text-slate-500 leading-relaxed">
                      刑法分則或總則必須明文規定處罰（如未遂犯依 § 25 Ⅱ 須有特別規定、過失犯依 § 12 Ⅱ 須有特別規定）。
                    </p>
                  </div>

                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200 dark:border-slate-800 space-y-1">
                    <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                      <span>🔑</span>
                      <span>第二重門檻：滿足其他成立要件</span>
                    </span>
                    <p class="text-xs text-slate-500 leading-relaxed">
                      必須滿足該特別犯罪型態之實質要件（例如未遂犯須滿足「客觀著手 ＋ 主觀故意」）。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 三、案例 2-1 西瓜刀砍人案與殺人未遂之審查 -->
          <section id="sec-ch2-case-2-1" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                三、案例 2-1 西瓜刀砍人案與殺人未遂之審查（教材第 1-13 頁）
              </h3>
            </div>

            <!-- Case Card -->
            <div class="box-legal-emerald p-6 rounded-3xl space-y-5">
              
              <!-- 案情標籤 -->
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                    案例 2-1
                  </span>
                  <span class="text-xs font-bold text-slate-700 dark:text-slate-300">
                    西瓜刀砍人案・例外擴張處罰檢驗
                  </span>
                </div>
                <span class="text-xs text-slate-400 font-mono">教材第 1-13 頁 原文案例</span>
              </div>

              <!-- 案情事實 -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                <div class="text-[11px] font-bold text-slate-400">【案例事實】</div>
                <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  甲手持西瓜刀，耍了一套西瓜刀法想要砍死乙，不料乙施展凌波微步閃過。
                </p>
              </div>

              <!-- 問題導引與階梯檢驗流程 -->
              <div class="space-y-3">
                <div class="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                  <span>💡</span>
                  <span>【問題導引】論罪邏輯拆解</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <!-- Step 1 -->
                  <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span>步驟 1：客觀結果</span>
                      <span class="text-red-500 font-mono text-[11px]">未該當</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      甲客觀上並未殺死乙，客觀構成要件未該當，<strong class="text-slate-700 dark:text-slate-200">並非處罰原則（原則不罰）</strong>。
                    </p>
                  </div>

                  <!-- Step 2 -->
                  <div class="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 space-y-1">
                    <div class="flex items-center justify-between text-xs font-bold text-amber-800 dark:text-amber-300">
                      <span>步驟 2：明示法條依據</span>
                      <span class="text-amber-600 font-mono text-[11px]">罪刑法定</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      依<strong class="text-amber-700 dark:text-amber-400">刑法 § 25 Ⅱ ➔ § 271 Ⅱ</strong>，法律明文規定殺人未遂犯罰之。
                    </p>
                  </div>

                  <!-- Step 3 -->
                  <div class="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50 space-y-1">
                    <div class="flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
                      <span>步驟 3：實質要件審查</span>
                      <span class="text-emerald-600 font-mono text-[11px]">成立未遂</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      滿足其他犯罪成立要件：<strong class="text-emerald-700 dark:text-emerald-400">客觀上有著手 ＋ 主觀上有故意</strong>，論以殺人未遂犯。
                    </p>
                  </div>
                </div>
              </div>

              <!-- 2026 現行法規查核區塊 (多欄位Note Skill 規範) -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <span>⚖️</span>
                    <span>2026 現行法規查核與裁判拘束狀態</span>
                  </span>
                  <span class="text-[11px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                    條文無更動・受憲判字第 8 號拘束
                  </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                    <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>刑法第 25 條 (未遂犯)</span>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=25" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline text-[11px]">全國法規 ↗</a>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      第 1 項明定「已著手於犯罪行為之實行而不遂者，為未遂犯」；第 2 項明定「未遂犯之處罰，以有特別規定者為限，並得按既遂犯之刑減輕之」。
                    </p>
                  </div>

                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                    <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>刑法第 271 條 (殺人罪)</span>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=271" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline text-[11px]">全國法規 ↗</a>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      第 2 項明定「前項之未遂犯罰之」。依憲法法庭 113 年憲判字第 8 號判決，死刑限情節最嚴重之既遂犯罪；未遂犯依 § 25 Ⅱ 得減輕其刑。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 四、案例 2-2 西瓜刀練刀致死案與過失犯之審查 -->
          <section id="sec-ch2-case-2-2" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-cyan-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                四、案例 2-2 西瓜刀練刀致死案與過失犯之審查（教材第 1-14 頁）
              </h3>
            </div>

            <div class="box-legal-navy p-6 rounded-3xl space-y-5">
              
              <!-- 案情標籤 -->
              <div class="flex items-center justify-between flex-wrap gap-2">
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-1 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold">
                    案例 2-2
                  </span>
                  <span class="text-xs font-bold text-slate-700 dark:text-slate-300">
                    西瓜刀練刀致死案・過失犯例外擴張處罰檢驗
                  </span>
                </div>
                <span class="text-xs text-slate-400 font-mono">教材第 1-14 頁 原文案例</span>
              </div>

              <!-- 案情事實 -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                <div class="text-[11px] font-bold text-slate-400">【案例事實】</div>
                <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                  甲手持西瓜刀，在空地上認真練習西瓜刀法，乙施展凌波微步自一旁走過，不慎中刀身亡。
                </p>
              </div>

              <!-- 論罪邏輯拆解：四階審查流程 -->
              <div class="space-y-3">
                <div class="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                  <span>💡</span>
                  <span>【問題導引】過失犯之論罪邏輯拆解</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <!-- Step 1 -->
                  <div class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div class="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                      <span>步驟 1：客觀結果</span>
                      <span class="text-emerald-500 font-mono text-[11px]">該當既遂</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      乙中刀死亡，客觀上發生死亡結果，客觀構成要件業已該當（達既遂狀態）。
                    </p>
                  </div>

                  <!-- Step 2 -->
                  <div class="p-3.5 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 space-y-1">
                    <div class="flex items-center justify-between text-xs font-bold text-red-700 dark:text-red-300">
                      <span>步驟 2：主觀故意</span>
                      <span class="text-red-500 font-mono text-[11px]">欠缺不該當</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      甲僅認真練刀，無殺害乙之故意。主觀要件不該當，<strong class="text-red-600 dark:text-red-400">並非處罰原則（原則不罰）</strong>。
                    </p>
                  </div>

                  <!-- Step 3 -->
                  <div class="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 space-y-1">
                    <div class="flex items-center justify-between text-xs font-bold text-amber-800 dark:text-amber-300">
                      <span>步驟 3：明示法條</span>
                      <span class="text-amber-600 font-mono text-[11px]">罪刑法定</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      依<strong class="text-amber-700 dark:text-amber-400">刑法 § 12 Ⅱ ➔ § 276 Ⅰ</strong>，法律明文規定過失致死罪罰之。
                    </p>
                  </div>

                  <!-- Step 4 -->
                  <div class="p-3.5 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-200/80 dark:border-cyan-900/50 space-y-1">
                    <div class="flex items-center justify-between text-xs font-bold text-cyan-800 dark:text-cyan-300">
                      <span>步驟 4：實質審查</span>
                      <span class="text-cyan-600 font-mono text-[11px]">成立過失</span>
                    </div>
                    <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      滿足要件：<strong class="text-cyan-700 dark:text-cyan-400">客觀達既遂 ＋ 主觀具預見可能性</strong>，論以過失致死罪！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 2026 現行法規查核區塊 -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <span>⚖️</span>
                    <span>2026 現行法規查核與法定刑狀態</span>
                  </span>
                  <span class="text-[11px] px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold border border-cyan-500/20">
                    108 年廢除業務過失・全面適用第 1 項
                  </span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                    <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>刑法第 12 條 (故意與過失)</span>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=12" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline text-[11px]">全國法規 ↗</a>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      第 1 項：「行為非出於故意或過失者，不罰。」<br>
                      第 2 項：「過失行為之處罰，以有特別規定者為限。」明定過失處罰之例外擴張原則。
                    </p>
                  </div>

                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1.5">
                    <div class="font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      <span>刑法第 276 條 (過失致死罪)</span>
                      <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=276" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline text-[11px]">全國法規 ↗</a>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      第 1 項：「因過失致人於死者，處五年以下有期徒刑、拘役或五十萬元以下罰金。」（民國 108 年刪除第 2 項業務過失致死，回歸第 1 項統一評價）。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 五、【解題提示】直覺誤區辨正與 § 12 之法條邏輯證明 -->
          <section id="sec-ch2-tips-formula" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-indigo-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                五、【解題提示】直覺誤區辨正與 § 12 之法條邏輯證明（教材第 1-14 頁）
              </h3>
            </div>

            <div class="box-legal-navy p-6 rounded-3xl space-y-6">
              
              <!-- 核心警告提示 -->
              <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/50 space-y-2">
                <div class="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
                  <span>⚠️</span>
                  <span>【解題提示】不可不慎的兩大直覺嚴重錯誤</span>
                </div>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  在初學刑法時，初學者常依生活直覺作出「非黑即白」的草率論斷，誤將客觀不該當等同於未遂、主觀不該當等同於過失。這兩大盲點是國考解題與案例審查中最致命的失分陷阱！
                </p>
              </div>

              <!-- 兩大誤區對照矩陣 -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- 誤區 1 -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                      <span>❌</span>
                      <span>誤區一：客觀未該當 ＝ 未遂？</span>
                    </span>
                    <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-500 font-bold">嚴重錯誤</span>
                  </div>
                  <div class="text-sm font-black text-slate-900 dark:text-white">
                    非既遂 <span class="text-red-500 font-bold">≠</span> 未遂犯
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>辨正：</strong>客觀構成要件不具備僅是「非既遂」。要成立未遂犯，除分則<strong>明文處罰未遂（§ 25 Ⅱ）</strong>外，更必須滿足實質要件：<strong class="text-indigo-600 dark:text-indigo-400">「客觀上有著手 ＋ 主觀上有故意」</strong>。若連著手都未達到（例如僅止於陰謀或預備階段），根本不成立未遂犯！
                  </p>
                </div>

                <!-- 誤區 2 -->
                <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                      <span>❌</span>
                      <span>誤區二：主觀未該當 ＝ 過失？</span>
                    </span>
                    <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-500 font-bold">嚴重錯誤</span>
                  </div>
                  <div class="text-sm font-black text-slate-900 dark:text-white">
                    非故意 <span class="text-red-500 font-bold">≠</span> 過失犯
                  </div>
                  <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    <strong>辨正：</strong>主觀構成要件不具備僅是「非故意」。要成立過失犯，除法律<strong>明文處罰過失（§ 12 Ⅱ）</strong>外，更必須滿足實質要件：<strong class="text-indigo-600 dark:text-indigo-400">「客觀達既遂 ＋ 主觀具預見可能性」</strong>。若根本欠缺預見可能性（不可抗力或意外事件），屬於「無過失」，依法絕對不罰！
                  </p>
                </div>
              </div>

              <!-- 法條邏輯鐵證卡片 -->
              <div class="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/80 to-blue-50/50 dark:from-indigo-950/30 dark:to-blue-950/20 border border-indigo-200 dark:border-indigo-900/60 space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                    <span>🔬</span>
                    <span>法條邏輯鐵證：刑法第 12 條第 1 項之反面解釋證明</span>
                  </span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">教材核心精義</span>
                </div>

                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
                  <span class="font-bold text-slate-900 dark:text-white">《刑法第 12 條第 1 項》原文：</span>
                  <p class="font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                    「行為非出於故意或過失者，不罰。」
                  </p>
                </div>

                <div class="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    <strong>【嚴密反證邏輯推導】：</strong>
                  </p>
                  <ul class="list-disc pl-5 space-y-1.5 text-xs">
                    <li>
                      <strong>假定反面命題成立：</strong>如果「非故意 ＝ 過失」，那麼世界上人類行為的主觀心理狀態就只有「故意」與「過失」兩種，非此即彼，絕無第三種可能。
                    </li>
                    <li>
                      <strong>推導出邏輯荒謬：</strong>若非故意即過失，則任何一個行為若「非出於故意」，就必然「出於過失」；世上根本不可能存在「非出於故意，且非出於過失」的狀態。
                    </li>
                    <li>
                      <strong>法條文字化為廢話：</strong>如此一來，刑法 § 12 Ⅰ 後半段「<strong>...或過失者，不罰</strong>」在現實中將永遠無適用的可能，整段立法將徹底淪為無意義的贅語！
                    </li>
                    <li>
                      <strong>邏輯結論：</strong>既然立法者特地明文寫下「非出於故意<strong>或過失</strong>者，不罰」，即鐵證證明世界上必定存在第三種心理狀態——<strong class="text-indigo-600 dark:text-indigo-400">【非故意 且 非過失】＝【無過失（意外事件）】</strong>！
                    </li>
                  </ul>
                </div>

                <!-- 心理三態視覺化標籤 -->
                <div class="grid grid-cols-3 gap-2 pt-1 text-center font-mono text-xs">
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span class="block text-red-500 font-bold">① 故意</span>
                    <span class="text-[11px] text-slate-400">處罰原則（分則藍本）</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span class="block text-amber-500 font-bold">② 過失</span>
                    <span class="text-[11px] text-slate-400">處罰例外（§ 12 Ⅱ 明文）</span>
                  </div>
                  <div class="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span class="block text-emerald-500 font-bold">③ 無過失</span>
                    <span class="text-[11px] text-slate-400">絕對不罰（§ 12 Ⅰ 意外）</span>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 六、阻卻違法之例外排除與案例 2-3（意圖式挑唆防衛） -->
          <section id="sec-ch2-case-2-3" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-violet-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                六、阻卻違法之例外排除與案例 2-3（意圖式挑唆防衛，教材第 1-14 ～ 1-15 頁）
              </h3>
            </div>

            <div class="box-legal-gold p-6 rounded-3xl space-y-6">
              
              <!-- 階層原則與例外對比導引 -->
              <div class="space-y-2">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-400 font-mono text-xs">階層邏輯</span>
                  <span>違法性階層之原則與「例外排除」</span>
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  該當構成要件之行為，原則上受違法性之推定；行為人若能主張正當防衛（§ 23）、緊急避難（§ 24）等法定或超法定事由，原則上阻卻違法。然而，<strong>法律秩序不容許權利之濫用</strong>——若行為人客觀上看似符合防衛情狀，但實質上具有侵害意圖在先或嚴重權利濫用者，<strong>例外排除阻卻違法事由之適用，回歸違法並成立犯罪！</strong>
                </p>
              </div>

              <!-- 案例 2-3 卡片 -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 font-mono text-xs font-bold">
                      案例 2-3
                    </span>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">
                      意圖式挑唆防衛（法律系甲設局挑釁情敵案）
                    </span>
                  </div>
                  <span class="text-xs text-slate-400 font-mono">教材第 1-14 ～ 1-15 頁 原文案例</span>
                </div>

                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <div class="text-[11px] font-bold text-slate-400">【案例事實】</div>
                  <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    甲是法律系學生，知道刑法第 23 條正當防衛不罰。甲想痛扁情敵乙，故意設局在路上對乙瘋狂挑釁辱罵其祖宗十八代，激怒乙出手朝甲揮拳。甲算準時機，抄起預藏的鋼骨雨傘猛擊乙，導致乙受有多處挫傷瘀血。
                  </p>
                </div>

                <!-- 審查結構拆解 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span class="text-slate-400 font-bold block">① 表面防衛情狀</span>
                    <p class="text-slate-600 dark:text-slate-300">
                      乙先出手揮拳，客觀上看似存在「現在不法之侵害」；甲持傘反擊看似為排除侵害之防衛行為。
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-1">
                    <span class="text-amber-700 dark:text-amber-300 font-bold block">② 實質侵害意圖在先</span>
                    <p class="text-slate-600 dark:text-slate-300">
                      甲自始具備傷害故意，設局辱罵誘敵出拳，將正當防衛作為傷害他人之掩護工具，構成「意圖式挑唆防衛」。
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-red-50/60 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 space-y-1">
                    <span class="text-red-700 dark:text-red-300 font-bold block">③ 例外排除阻卻違法</span>
                    <p class="text-slate-600 dark:text-slate-300">
                      權利濫用不受法秩序保護！例外不得主張 § 23 正當防衛，甲仍成立<strong>刑法 § 277 條第 1 項普通傷害罪</strong>！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 阻卻違法之相關例外盤點 (教材體系延伸) -->
              <div class="space-y-3">
                <div class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                  <span>📚</span>
                  <span>【體系盤點】教材中提及之阻卻違法「例外排除」情狀</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span class="font-bold text-violet-600 dark:text-violet-400 block">🍒 利益絕對失衡（櫻桃案）</span>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      防衛手段所保全之法益與所侵害之法益顯失均衡（如為保護幾顆櫻桃而開槍擊斃偷摘少年），構成權利濫用，不阻卻違法。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span class="font-bold text-violet-600 dark:text-violet-400 block">💉 違反人性尊嚴（輸血案）</span>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      避難手段不得踐踏人格尊嚴。即便是為救他人性命，亦絕對不得強行抽取非自願路人之血液，無緊急避難之適用。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span class="font-bold text-violet-600 dark:text-violet-400 block">📜 明知命令違法（§ 21 Ⅱ）</span>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      公務員依所屬上級公務員命令之職務行為原則阻卻違法；但但書明定若「明知命令違法者」，例外排除，不阻卻違法。
                    </p>
                  </div>

                  <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span class="font-bold text-violet-600 dark:text-violet-400 block">🚒 特別義務關係（§ 24 Ⅱ）</span>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      依公務或業務負有特別義務者（如消防員滅火、軍警執行任務），不得主張緊急避難以圖逃避本身應負之法定救助義務。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 七、阻卻罪責之例外排除與案例 2-4（原因自由行為） -->
          <section id="sec-ch2-case-2-4" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-rose-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                七、阻卻罪責之例外排除與案例 2-4（原因自由行為，教材第 1-15 頁）
              </h3>
            </div>

            <div class="box-legal-navy p-6 rounded-3xl space-y-6">
              
              <!-- 階層原則與例外對比導引 -->
              <div class="space-y-2">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs">階層邏輯</span>
                  <span>罪責階層之「同時性原則」與例外排除</span>
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  刑法基本原則要求<strong>「行為與責任能力同時存在」（責任同時性原則）</strong>。若行為人在著手行為之時，因精神障礙或心智缺陷致不能辨識行為違法或欠缺控制能力，依刑法 § 19 Ⅰ 原則上不罰（阻卻罪責）。然而，若行為人係<strong>「故意或過失自陷無責任能力狀態以實施犯罪」</strong>，法律將例外排除阻卻罪責之適用，此即<strong class="text-rose-600 dark:text-rose-400">「原因自由行為」（Actio libera in causa）</strong>！
                </p>
              </div>

              <!-- 案例 2-4 卡片 -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <div class="flex items-center gap-2">
                    <span class="px-2.5 py-1 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold">
                      案例 2-4
                    </span>
                    <span class="text-xs font-bold text-slate-700 dark:text-slate-300">
                      原因自由行為（生吞蛇膽灌烈酒壯膽殺情敵案）
                    </span>
                  </div>
                  <span class="text-xs text-slate-400 font-mono">教材第 1-15 頁 原文案例</span>
                </div>

                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-1">
                  <div class="text-[11px] font-bold text-slate-400">【案例事實】</div>
                  <p class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                    甲想殺死情敵乙，但平日生性怯懦不敢下手。甲心生一計，生吞蛇膽並狂灌高粱酒壯膽，讓自己陷入爛醉如泥、完全喪失辨識與控制能力的泥醉狀態。隨後甲在意識不清的爛醉狀態下，持刀衝入乙家將乙亂刀刺死。
                  </p>
                </div>

                <!-- 審查結構拆解 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                    <span class="text-slate-400 font-bold block">① 實行行為時狀態</span>
                    <p class="text-slate-600 dark:text-slate-300">
                      甲刺殺乙時，已陷入泥醉狀態，客觀上確實符合刑法 § 19 Ⅰ 不能辨識或控制之無責任能力外觀。
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-1">
                    <span class="text-amber-700 dark:text-amber-300 font-bold block">② 原因設定階段可責</span>
                    <p class="text-slate-600 dark:text-slate-300">
                      甲自陷泥醉前具有完全責任能力，且係基於殺害乙之故意而蓄意飲酒，後續殺人行為乃其意思決定之延伸。
                    </p>
                  </div>
                  <div class="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-1">
                    <span class="text-rose-700 dark:text-rose-300 font-bold block">③ 依 § 19 Ⅲ 例外排除</span>
                    <p class="text-slate-600 dark:text-slate-300">
                      依刑法第 19 條第 3 項明文排除責任減免，甲<strong>不得主張阻卻罪責</strong>，仍成立<strong>刑法 § 271 Ⅰ 殺人既遂罪</strong>！
                    </p>
                  </div>
                </div>
              </div>

              <!-- 2026 現行法規查核區塊 -->
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between flex-wrap gap-2">
                  <span class="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <span>⚖️</span>
                    <span>2026 現行法規查核：刑法第 19 條立法沿革與適用</span>
                  </span>
                  <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=19" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline text-xs">全國法規資料庫 ↗</a>
                </div>

                <div class="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
                    <span class="font-bold text-slate-800 dark:text-slate-200">《刑法第 19 條第 3 項》明文規範：</span>
                    <p class="font-mono text-rose-600 dark:text-rose-400">
                      「前二項規定，於因故意或過失自陷精神障礙或其他心智缺陷之狀態，致有第一項或第二項之情形者，不適用之。」
                    </p>
                    <p class="text-slate-500 dark:text-slate-400 pt-1">
                      我國刑法自民國 94 年修法時，正式將德國與日本刑法學理上之「原因自由行為」法文化，明定為第 19 條第 3 項。凡行為人故意或過失自招心神喪失狀態者，徹底封死其主張無責任能力不罰之退路！
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <!-- 八、刑法處罰光譜總整理與「其他刑罰要件」補充 -->
          <section id="sec-ch2-punishment-spectrum" class="space-y-6 pt-2">
            <div class="flex items-center gap-3">
              <span class="w-2 h-6 rounded-full bg-emerald-500"></span>
              <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
                八、刑法處罰光譜總整理與「其他刑罰要件」補充（教材第 1-15 頁）
              </h3>
            </div>

            <div class="box-legal-emerald p-6 rounded-3xl space-y-6">
              
              <!-- 處罰光譜總結導言 -->
              <div class="space-y-3">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span class="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs">綜上所述</span>
                  <span>刑法分則之立法藍本與處罰光譜</span>
                </h4>
                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  綜上所述，刑法分則之條文編寫，均係以<strong>「故意 ＋ 既遂」作為設計藍本與原則處罰型態</strong>。任何逾越此原則之處罰，均屬例外擴張，必須嚴格遵守罪刑法定原則，具備法律之明文規定：
                </p>
              </div>

              <!-- 原則與例外對照表 -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50 space-y-1.5">
                  <span class="font-bold text-emerald-700 dark:text-emerald-300 text-sm block">👑 處罰原則</span>
                  <div class="font-bold text-slate-800 dark:text-slate-200">故意既遂犯</div>
                  <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                    分則所有條文之基本型態。分則未特別註明者，一律僅罰故意既遂。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 space-y-1.5">
                  <span class="font-bold text-blue-700 dark:text-blue-300 text-sm block">⚡ 例外擴張一</span>
                  <div class="font-bold text-slate-800 dark:text-slate-200">未遂犯（§ 25 Ⅱ）</div>
                  <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                    必須分則條文明文宣示「前項之未遂犯罰之」，始例外予以處罰。
                  </p>
                </div>

                <div class="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 space-y-1.5">
                  <span class="font-bold text-amber-700 dark:text-amber-300 text-sm block">🌀 例外擴張二</span>
                  <div class="font-bold text-slate-800 dark:text-slate-200">過失犯（§ 12 Ⅱ）</div>
                  <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                    必須法律有特別明文規定（如 § 276 Ⅰ、§ 284 Ⅰ），始例外予以處罰。
                  </p>
                </div>
              </div>

              <!-- 經典罪名處罰光譜矩陣表 -->
              <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                <table class="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr class="bg-slate-100/70 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                      <th class="p-3 font-bold">罪名條文</th>
                      <th class="p-3 font-bold text-center">故意既遂（原則）</th>
                      <th class="p-3 font-bold text-center">故意未遂（§ 25 Ⅱ）</th>
                      <th class="p-3 font-bold text-center">過失既遂（§ 12 Ⅱ）</th>
                      <th class="p-3 font-bold text-center">過失未遂</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono">
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
                      <td class="p-3 font-sans font-bold text-slate-900 dark:text-white">殺人罪（§ 271）</td>
                      <td class="p-3 text-center text-emerald-600 font-bold">✅ 罰（§ 271 Ⅰ）</td>
                      <td class="p-3 text-center text-emerald-600 font-bold">✅ 罰（§ 271 Ⅱ）</td>
                      <td class="p-3 text-center text-emerald-600 font-bold">✅ 罰（§ 276 Ⅰ）</td>
                      <td class="p-3 text-center text-slate-400">❌ 絕不罰</td>
                    </tr>
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
                      <td class="p-3 font-sans font-bold text-slate-900 dark:text-white">傷害罪（§ 277）</td>
                      <td class="p-3 text-center text-emerald-600 font-bold">✅ 罰（§ 277 Ⅰ）</td>
                      <td class="p-3 text-center text-red-500 font-bold">❌ 不罰（未明文）</td>
                      <td class="p-3 text-center text-emerald-600 font-bold">✅ 罰（§ 284 Ⅰ）</td>
                      <td class="p-3 text-center text-slate-400">❌ 絕不罰</td>
                    </tr>
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
                      <td class="p-3 font-sans font-bold text-slate-900 dark:text-white">竊盜罪（§ 320）</td>
                      <td class="p-3 text-center text-emerald-600 font-bold">✅ 罰（§ 320 Ⅰ）</td>
                      <td class="p-3 text-center text-emerald-600 font-bold">✅ 罰（§ 320 Ⅲ）</td>
                      <td class="p-3 text-center text-red-500 font-bold">❌ 不罰（無過失犯）</td>
                      <td class="p-3 text-center text-slate-400">❌ 絕不罰</td>
                    </tr>
                    <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-900/40">
                      <td class="p-3 font-sans font-bold text-slate-900 dark:text-white">毀損罪（§ 354）</td>
                      <td class="p-3 text-center text-emerald-600 font-bold">✅ 罰（§ 354）</td>
                      <td class="p-3 text-center text-red-500 font-bold">❌ 不罰（無未遂犯）</td>
                      <td class="p-3 text-center text-red-500 font-bold">❌ 不罰（無過失犯）</td>
                      <td class="p-3 text-center text-slate-400">❌ 絕不罰</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- 最後補充：其他刑罰要件體系卡片 -->
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>💎</span>
                    <span>【最後補充】犯罪成立後之「其他刑罰要件」</span>
                  </span>
                  <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">教材第 1-15 頁 終結篇章</span>
                </div>

                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  在刑法體系中，行為人只要同時具備<strong>「構成要件該當性 ＋ 違法性 ＋ 罪責」</strong>，其<strong>犯罪即告成立</strong>！然而，「犯罪成立」與「發動刑罰」是兩個不同層次的概念。立法者基於刑事政策、司法資源、人倫和諧或鼓勵悔改之考量，在特定犯罪中另外附加了「其他刑罰要件」：
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <!-- 1. 客觀處罰條件 -->
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-indigo-600 dark:text-indigo-400 block">① 客觀處罰條件</span>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      非屬犯罪構成要件，不要求行為人主觀上有認識，但客觀上必須該當特定外在事實，國家之刑罰權始能發動（如破產犯罪中宣告破產之事實）。
                    </p>
                  </div>

                  <!-- 2. 自始性個人排除刑罰事由 -->
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-emerald-600 dark:text-emerald-400 block">② 自始性排除刑罰事由</span>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      行為時即因特定個人身分關係存在，使國家刑罰權自始即不得發動。例如刑法 <strong>§ 324 Ⅰ 親屬竊盜得免除其刑</strong>，或國際公法之外交豁免特權。
                    </p>
                  </div>

                  <!-- 3. 嗣後性個人解除刑罰事由 -->
                  <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <span class="font-bold text-amber-600 dark:text-amber-400 block">③ 嗣後性解除刑罰事由</span>
                    <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
                      犯罪成立之後，因行為人後續發生特定法益防衛或自新行為，使既已成立之刑罰權因而解消。例如刑法 <strong>§ 27 中止未遂</strong>、刑法 <strong>§ 62 自首得減輕或免除其刑</strong>。
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          <!-- ==================== 九、犯罪基本審查流程（教材第 1-16 頁 原文體系圖解） ==================== -->
          <section id="sec-ch2-basic-review-process" class="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/[0.08] bg-white/80 dark:bg-slate-900/50 backdrop-blur-md shadow-sm space-y-8">
            
            <!-- Section Header -->
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-white/[0.06] pb-3">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 font-mono">第 1-16 頁</span>
                <span class="text-xs text-slate-400">第二章 終篇統整體系</span>
              </div>
              <span class="text-xs font-bold text-amber-500 flex items-center gap-1">
                <span>🌟</span>
                <span>犯罪基本審查流程</span>
              </span>
            </div>

            <!-- Title & Quote -->
            <div class="space-y-3">
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>九、犯罪基本審查流程</span>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400">教材第 1-16 頁</span>
              </h3>
              
              <blockquote class="p-3.5 sm:p-4 rounded-2xl border-l-4 border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed shadow-sm">
                「<strong class="text-blue-600 dark:text-blue-400 font-bold">免刑事由、（嗣後性的）個人解除或減免刑罰事由均屬之。我們可以用下圖表達犯罪的基本審查流程。</strong>」
              </blockquote>
            </div>

            <!-- 視覺化階梯審查流程圖 (Visual Step-by-Step Interactive Flowchart) -->
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>🧭</span>
                  <span>五階審查與結論動態流程卡</span>
                </h4>
                <span class="text-[11px] font-mono text-slate-400">由上至下依序過濾審查</span>
              </div>

              <!-- 流程容器 -->
              <div class="space-y-3">

                <!-- 1. 行為 -->
                <div class="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/70 space-y-3 relative">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center shadow-sm">行</span>
                      <div>
                        <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">階層 ① 行為 (Handlung)</span>
                        <h5 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">刑法意義之行為？</h5>
                      </div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">入門門檻</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs pt-1">
                    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
                      <div class="font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                        <span>🔍</span>
                        <span>確認功能</span>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 leading-relaxed">確認所欲討論的具體人類行為。</p>
                    </div>

                    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
                      <div class="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1">
                        <span>🛡️</span>
                        <span>過濾功能</span>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 leading-relaxed">排除非刑法意義之行為（如反射動作、沉睡中動作、不可抗力、單純思想）。</p>
                    </div>

                    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 space-y-1">
                      <div class="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                        <span>🗂️</span>
                        <span>分類功能</span>
                      </div>
                      <p class="text-slate-600 dark:text-slate-300 leading-relaxed">作為、純正不作為、不純正不作為（§ 15 防止義務）。</p>
                    </div>
                  </div>
                </div>

                <!-- 箭頭向下 -->
                <div class="flex justify-center text-slate-400 font-bold text-lg -my-1">
                  <span class="animate-bounce">⬇️</span>
                </div>

                <!-- 2. TB (構成要件) -->
                <div class="p-4 sm:p-5 rounded-2xl border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-sm">TB</span>
                      <div>
                        <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">階層 ② 構成要件該當性 (Tatbestand)</span>
                        <h5 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">法益侵害形式為何？</h5>
                      </div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold">不法類型化</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-12 gap-2.5 text-xs pt-1">
                    <!-- 原則 -->
                    <div class="sm:col-span-6 p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border-2 border-indigo-500/30 dark:border-indigo-500/20 space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">【原則】</span>
                        <span class="font-mono text-indigo-600 dark:text-indigo-400 font-bold">§ 13</span>
                      </div>
                      <div class="text-sm font-bold text-slate-900 dark:text-white">故意既遂犯</div>
                      <p class="text-slate-500 dark:text-slate-400 text-[11px]">刑法分則條文設計之標準藍本，具備知與欲。</p>
                    </div>

                    <!-- 例外：未遂 -->
                    <div class="sm:col-span-3 p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-[11px]">【例外】未遂</span>
                        <span class="font-mono text-amber-700 dark:text-amber-300 font-bold">§ 25</span>
                      </div>
                      <div class="text-sm font-bold text-slate-900 dark:text-white">未遂犯</div>
                      <p class="text-slate-500 dark:text-slate-400 text-[11px]">已著手未既遂，須法律明文有處罰。</p>
                    </div>

                    <!-- 例外：過失 -->
                    <div class="sm:col-span-3 p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-[11px]">【例外】過失</span>
                        <span class="font-mono text-amber-700 dark:text-amber-300 font-bold">§ 12、§ 14、§ 17</span>
                      </div>
                      <div class="text-sm font-bold text-slate-900 dark:text-white">過失</div>
                      <p class="text-slate-500 dark:text-slate-400 text-[11px]">欠缺故意但具注意義務違反，亦須明文。</p>
                    </div>
                  </div>
                </div>

                <!-- 箭頭向下 -->
                <div class="flex justify-center text-slate-400 font-bold text-lg -my-1">
                  <span class="animate-bounce">⬇️</span>
                </div>

                <!-- 3. R (違法性) -->
                <div class="p-4 sm:p-5 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white font-black text-xs flex items-center justify-center shadow-sm">R</span>
                      <div>
                        <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">階層 ③ 違法性 (Rechtswidrigkeit)</span>
                        <h5 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">有無阻卻違法事由？</h5>
                      </div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">實質正當化</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                    <!-- 可以阻卻違法 -->
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-emerald-300 dark:border-emerald-800/80 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold text-[11px]">✅ 可以阻卻違法</span>
                        <span class="font-mono text-emerald-600 dark:text-emerald-400 font-bold">§ 21 ～ § 24</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-200 font-medium">依法令行為、業務正當行為、正當防衛、緊急避難及超法定阻卻違法事由。</p>
                    </div>

                    <!-- 不能阻卻違法 -->
                    <div class="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-rose-500/15 text-rose-700 dark:text-rose-300 font-bold text-[11px]">❌ 不能阻卻違法（例外排除）</span>
                        <span class="font-mono text-rose-600 dark:text-rose-400 font-bold">§ 21 Ⅱ、§ 24 Ⅱ</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-200 font-medium">明知命令違法、特別職務避難排除、挑唆防衛、櫻桃案利益失衡、輸血案人性尊嚴。</p>
                    </div>
                  </div>
                </div>

                <!-- 箭頭向下 -->
                <div class="flex justify-center text-slate-400 font-bold text-lg -my-1">
                  <span class="animate-bounce">⬇️</span>
                </div>

                <!-- 4. S (罪責) -->
                <div class="p-4 sm:p-5 rounded-2xl border border-purple-200 dark:border-purple-900/50 bg-purple-50/40 dark:bg-purple-950/20 space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-purple-600 text-white font-black text-xs flex items-center justify-center shadow-sm">S</span>
                      <div>
                        <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block">階層 ④ 罪責 (Schuld)</span>
                        <h5 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">有無阻卻罪責事由？</h5>
                      </div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">個人可非難性</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                    <!-- 可以阻卻罪責 -->
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-purple-300 dark:border-purple-800/80 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-purple-500/15 text-purple-700 dark:text-purple-300 font-bold text-[11px]">✅ 可以阻卻罪責</span>
                        <span class="font-mono text-purple-600 dark:text-purple-400 font-bold">§ 16、§ 18~20、§ 23但、§ 24Ⅰ但</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-200 font-medium">未成年、精神障礙、瘖啞人、不可避免禁止錯誤、防衛過當／避難過當免刑。</p>
                    </div>

                    <!-- 不能阻卻罪責 -->
                    <div class="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-rose-500/15 text-rose-700 dark:text-rose-300 font-bold text-[11px]">❌ 不能阻卻罪責（例外排除）</span>
                        <span class="font-mono text-rose-600 dark:text-rose-400 font-bold">§ 16、§ 19 Ⅲ</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-200 font-medium">可避免禁止錯誤仍有罪責（僅得減輕）、原因自由行為（故意或過失自陷無能力狀態）。</p>
                    </div>
                  </div>
                </div>

                <!-- 箭頭向下 -->
                <div class="flex justify-center text-slate-400 font-bold text-lg -my-1">
                  <span class="animate-bounce">⬇️</span>
                </div>

                <!-- 5. 其他 (刑罰要件) -->
                <div class="p-4 sm:p-5 rounded-2xl border border-sky-200 dark:border-sky-900/50 bg-sky-50/40 dark:bg-sky-950/20 space-y-3">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2.5">
                      <span class="w-8 h-8 rounded-xl bg-sky-600 text-white font-black text-xs flex items-center justify-center shadow-sm">其</span>
                      <div>
                        <span class="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 block">階層 ⑤ 其他刑罰要件</span>
                        <h5 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">有無其他刑罰要件？</h5>
                      </div>
                    </div>
                    <span class="text-xs px-2.5 py-1 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold">刑事政策考量</span>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs pt-1">
                    <!-- 可以阻卻刑罰 -->
                    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-sky-300 dark:border-sky-800/80 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-sky-500/15 text-sky-700 dark:text-sky-300 font-bold text-[11px]">✅ 可以阻卻刑罰</span>
                        <span class="font-mono text-sky-600 dark:text-sky-400 font-bold">§ 26、§ 27、客觀處罰條件</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-200 font-medium">不能未遂不罰、中止犯必減免、客觀可罰性條件未具備、親屬竊盜免除其刑。</p>
                    </div>

                    <!-- 不能阻卻刑罰 -->
                    <div class="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-1.5">
                      <div class="flex items-center justify-between">
                        <span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold text-[11px]">⚖️ 不能阻卻刑罰</span>
                        <span class="font-mono text-emerald-600 dark:text-emerald-400 font-bold">刑罰發動</span>
                      </div>
                      <p class="text-slate-700 dark:text-slate-200 font-medium">無阻卻刑罰事由，國家刑罰權合法正當發動，依法科處刑罰或宣告保安處分。</p>
                    </div>
                  </div>
                </div>

                <!-- 箭頭向下 -->
                <div class="flex justify-center text-slate-400 font-bold text-lg -my-1">
                  <span class="animate-bounce">⬇️</span>
                </div>

                <!-- 6. 結論 -->
                <div class="p-5 rounded-2xl border-2 border-rose-500/40 bg-gradient-to-br from-rose-500/10 via-amber-500/10 to-blue-500/10 dark:from-rose-950/30 dark:via-slate-900/40 dark:to-blue-950/30 space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-black uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                      <span>🎯</span>
                      <span>審查結論 (Urteil)</span>
                    </span>
                    <span class="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400">最終定罪型態</span>
                  </div>

                  <div class="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-rose-200/80 dark:border-rose-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      成立 <span class="underline decoration-rose-500 decoration-2 underline-offset-4 text-rose-600 dark:text-rose-400">○○犯罪</span> 的：
                    </div>
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 font-black text-xs sm:text-sm">
                        ① 故意既遂犯
                      </span>
                      <span class="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-black text-xs sm:text-sm">
                        ② 未遂犯
                      </span>
                      <span class="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-400 font-black text-xs sm:text-sm">
                        ③ 過失犯
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <!-- 教材第 1-16 頁 原文對齊精準對照表 (Verbatim Matrix Table) -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>📊</span>
                  <span>教材第 1-16 頁 原文對照表格</span>
                </h4>
                <span class="text-[11px] text-slate-400 font-mono">完整條文代碼標註</span>
              </div>

              <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm">
                <table class="w-full text-left text-xs border-collapse">
                  <tbody>
                    <!-- 行為 -->
                    <tr class="border-b border-slate-200 dark:border-slate-800">
                      <td class="p-3.5 bg-slate-100/70 dark:bg-slate-800/80 font-black text-slate-900 dark:text-white text-center w-20 align-middle border-r border-slate-200 dark:border-slate-800">
                        行為
                      </td>
                      <td class="p-3.5 space-y-1">
                        <div class="font-bold text-slate-900 dark:text-white">刑法意義之行為？</div>
                        <div class="text-slate-600 dark:text-slate-300">確認功能：確認所欲討論的行為</div>
                        <div class="text-slate-600 dark:text-slate-300">過濾功能：排除非刑法意義之行為</div>
                        <div class="text-slate-600 dark:text-slate-300">分類功能：作為、純正不作為、不純正不作為（§ 15）</div>
                      </td>
                    </tr>

                    <!-- TB -->
                    <tr class="border-b border-slate-200 dark:border-slate-800">
                      <td class="p-3.5 bg-slate-100/70 dark:bg-slate-800/80 font-black text-slate-900 dark:text-white text-center w-20 align-middle border-r border-slate-200 dark:border-slate-800">
                        TB
                      </td>
                      <td class="p-3.5 space-y-2">
                        <div class="font-bold text-slate-900 dark:text-white">法益侵害形式為何？</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                            <span class="font-bold text-blue-600 dark:text-blue-400">原則：</span>
                            <span>故意既遂犯（§ 13）</span>
                          </div>
                          <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex flex-wrap gap-2">
                            <div><span class="font-bold text-amber-600 dark:text-amber-400">例外：</span>未遂犯（§ 25）</div>
                            <div>過失（§ 12、§ 14、§ 17）</div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <!-- R -->
                    <tr class="border-b border-slate-200 dark:border-slate-800">
                      <td class="p-3.5 bg-slate-100/70 dark:bg-slate-800/80 font-black text-slate-900 dark:text-white text-center w-20 align-middle border-r border-slate-200 dark:border-slate-800">
                        R
                      </td>
                      <td class="p-3.5 space-y-2">
                        <div class="font-bold text-slate-900 dark:text-white">有無阻卻違法事由？</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                            <span class="font-bold text-emerald-600 dark:text-emerald-400">可以阻卻違法</span>（§ 21 ～ § 24）
                          </div>
                          <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                            <span class="font-bold text-rose-600 dark:text-rose-400">不能阻卻違法</span>（§ 21 Ⅱ、§ 24 Ⅱ、其他法理）
                          </div>
                        </div>
                      </td>
                    </tr>

                    <!-- S -->
                    <tr class="border-b border-slate-200 dark:border-slate-800">
                      <td class="p-3.5 bg-slate-100/70 dark:bg-slate-800/80 font-black text-slate-900 dark:text-white text-center w-20 align-middle border-r border-slate-200 dark:border-slate-800">
                        S
                      </td>
                      <td class="p-3.5 space-y-2">
                        <div class="font-bold text-slate-900 dark:text-white">有無阻卻罪責事由？</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                            <span class="font-bold text-purple-600 dark:text-purple-400">可以阻卻罪責</span>（§ 16、§ 18 ～ § 20、§ 23 但、§ 24 Ⅰ 但）
                          </div>
                          <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                            <span class="font-bold text-rose-600 dark:text-rose-400">不能阻卻罪責</span>（§ 16、§ 19 Ⅲ、其他法理）
                          </div>
                        </div>
                      </td>
                    </tr>

                    <!-- 其他 -->
                    <tr class="border-b border-slate-200 dark:border-slate-800">
                      <td class="p-3.5 bg-slate-100/70 dark:bg-slate-800/80 font-black text-slate-900 dark:text-white text-center w-20 align-middle border-r border-slate-200 dark:border-slate-800">
                        其他
                      </td>
                      <td class="p-3.5 space-y-2">
                        <div class="font-bold text-slate-900 dark:text-white">有無其他刑罰要件？</div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                            <span class="font-bold text-sky-600 dark:text-sky-400">可以阻卻刑罰</span>（§ 26、§ 27、客觀處罰條件）
                          </div>
                          <div class="p-2 rounded bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                            <span class="font-bold text-slate-600 dark:text-slate-300">不能阻卻刑罰</span>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <!-- 結論 -->
                    <tr>
                      <td class="p-3.5 bg-slate-100/70 dark:bg-slate-800/80 font-black text-slate-900 dark:text-white text-center w-20 align-middle border-r border-slate-200 dark:border-slate-800">
                        結論
                      </td>
                      <td class="p-3.5">
                        <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                          <span class="font-bold text-slate-900 dark:text-white">成立○○犯罪的：</span>
                          <span class="px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">故意既遂犯</span>
                          <span class="px-2.5 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold">未遂犯</span>
                          <span class="px-2.5 py-1 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold">過失犯</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- 2026 現行法規狀態實質查核專區 (Statutory Currency Check) -->
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>⚖️</span>
                  <span>2026 現行法規狀態實質查核</span>
                </span>
                <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                  全國法規資料庫即時核驗
                </span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                
                <!-- § 15 不真正不作為 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-800 dark:text-slate-200">刑法第 15 條（不作為犯與防止義務）</span>
                    <span class="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">維持現行法</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    對一定結果發生法律上有防止義務能防止而不防止者，與積極行為同；因自己行為致有發生一定結果之危險者，負防止義務。
                  </p>
                  <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=15" target="_blank" rel="noopener" class="text-blue-500 hover:underline text-[10.5px] inline-flex items-center gap-1 font-mono">
                    法規出處：全國法規資料庫 刑法第 15 條 ↗
                  </a>
                </div>

                <!-- § 17 加重結果犯 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-800 dark:text-slate-200">刑法第 17 條（加重結果犯預見可能）</span>
                    <span class="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">維持現行法</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    因犯罪致發生一定之結果而有加重其刑之規定者，如行為人不能預見其發生時，不適用之。以客觀具備預見可能性為限。
                  </p>
                  <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=17" target="_blank" rel="noopener" class="text-blue-500 hover:underline text-[10.5px] inline-flex items-center gap-1 font-mono">
                    法規出處：全國法規資料庫 刑法第 17 條 ↗
                  </a>
                </div>

                <!-- § 26 不能未遂 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-800 dark:text-slate-200">刑法第 26 條（不能未遂絕對不罰）</span>
                    <span class="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">維持現行法</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    行為不能發生犯罪之結果，又無危險者，不罰。自 94 年修法後徹底改採不罰主義，排除刑罰發動。
                  </p>
                  <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=26" target="_blank" rel="noopener" class="text-blue-500 hover:underline text-[10.5px] inline-flex items-center gap-1 font-mono">
                    法規出處：全國法規資料庫 刑法第 26 條 ↗
                  </a>
                </div>

                <!-- § 27 中止犯 -->
                <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-800 dark:text-slate-200">刑法第 27 條（中止未遂必減免）</span>
                    <span class="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">維持現行法</span>
                  </div>
                  <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-[11.5px]">
                    著手於犯罪行為之實行，因己意中止或防止結果發生者，減輕或免除其刑。享有嗣後解除刑罰事由之必減免寬典。
                  </p>
                  <a href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=27" target="_blank" rel="noopener" class="text-blue-500 hover:underline text-[10.5px] inline-flex items-center gap-1 font-mono">
                    法規出處：全國法規資料庫 刑法第 27 條 ↗
                  </a>
                </div>

              </div>
            </div>

            <!-- 導論完成祝福結語 (置於終章底部) -->
            <div class="p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-amber-500/10 border-2 border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span class="text-3xl">🎉</span>
              <div class="space-y-1">
                <h4 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">
                  恭喜完整研讀【導論】全書篇章（教材第 XVIII-1 ～ 1-16 頁）！
                </h4>
                <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  您已融會貫通<strong>第一章「犯罪的概念」</strong>（不法推定罪責、阻卻罪責、阻卻違法與二階／三階論體系）與<strong>第二章「刑法的論罪結構」</strong>（原則與例外擴張、阻卻事由之例外排除、其他刑罰要件及五階基本審查流程），建立起最扎實堅固的刑法總則解題邏輯地基！
                </p>
              </div>
            </div>

            <!-- Chapter Bottom Pagination: 第二章底部 -->
            <div class="pt-8 border-t border-slate-200 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onclick="switchView('chapter-1')" class="group p-4 rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-blue-500/40 bg-white dark:bg-[#111726] text-left transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0 transition-colors">
                  ←
                </div>
                <div class="min-w-0">
                  <span class="text-[11px] text-slate-400 font-mono block">上一篇</span>
                  <span class="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate block">
                    第一章 犯罪的概念 (第 1-1 頁)
                  </span>
                </div>
              </button>

              <button onclick="switchView('part-0')" class="group p-4 rounded-2xl border border-indigo-500/40 hover:border-indigo-500 bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/30 dark:to-blue-950/20 text-right transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md flex items-center justify-between gap-3">
                <div class="min-w-0 text-left">
                  <span class="text-[11px] text-indigo-600 dark:text-indigo-400 font-mono block font-bold">下一大單元</span>
                  <span class="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate block">
                    第零篇 刑法的運作原理與法律效果 →
                  </span>
                </div>
                <div class="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-indigo-600/30">
                  →
                </div>
              </button>
            </div>

          </section>

        </div>
`;
