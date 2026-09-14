# ⚖️ 【導論】第一章 犯罪的概念・全圖解思維指南
*(教材第 1-1 ～ 1-5 頁 / 導論第一章)*

> **體系定位**：【導論】犯罪概念與論罪結構 ➔ **第一章 犯罪的概念**  
> **核心金句 1（阻卻罪責）**：**「因而雖做壞事，但卻不是壞人。」**（案例 1-1 ～ 1-6）  
> **核心金句 2（阻卻違法）**：**「縱使造成法益侵害，但因有正當理由而並非壞事。」**（案例 1-7 ～ 1-8）

---

## 🧭 【圖解 1-1】不法推定罪責與反證推翻總覽圖
*(教材第 1-1 ～ 1-3 頁)*

```mermaid
flowchart TD
    classDef titleBox fill:#2563EB,stroke:#1D4ED8,stroke-width:2px,color:#fff,font-weight:bold;
    classDef stepBox fill:#F8FAFC,stroke:#64748B,stroke-width:1.5px,color:#0F172A;
    classDef coreBox fill:#EFF6FF,stroke:#2563EB,stroke-width:2px,color:#1E40AF,font-weight:bold;
    classDef legalBox fill:#ECFDF5,stroke:#059669,stroke-width:1.5px,color:#065F46;
    classDef extraBox fill:#FEF3C7,stroke:#D97706,stroke-width:1.5px,color:#92400E;

    Crime["犯罪<br>一個壞人做了一件壞事"]:::titleBox

    subgraph Evaluation ["雙軌評價體系"]
        BadAct["壞事<br>（評價行為）"]:::stepBox --> Unlawful["【不法】"]:::coreBox
        BadPerson["壞人<br>（評價行為人）"]:::stepBox --> Culpable["【罪責】"]:::coreBox
    end

    Crime --> BadAct
    Crime --> BadPerson

    Unlawful -- "【推定】壞事推定壞人" --> Presume(("推定"))
    Presume --> Culpable

    Culpable -. "【反證推翻】阻卻罪責事由" .-> DefenseTree

    subgraph DefenseTree ["反證推翻兩大途徑（依循期待可能性）"]
        direction TB
        L1["⚖️ 法定阻卻罪責事由<br>• § 16 欠缺不法意識 (案例 1-1)<br>• § 18 責任能力-年齡 (案例 1-2)<br>• § 19 責任能力-精神 (案例 1-3)<br>• § 20 責任能力-生理 (案例 1-4)<br>• § 23/24 但 過當防衛/避難 (案例 1-5)"]:::legalBox
        
        L2["💡 超法定阻卻罪責事由<br>• 無期待可能性 / 低度期待可能性 (案例 1-6)<br>• 核心指標：行為人有無不做壞事的期待可能性？"]:::extraBox
    end
```

---

## 🧭 【圖解 1-2】阻卻罪責事由之體系展開樹狀圖
*(教材第 1-4 頁)*

```mermaid
graph TD
    classDef main fill:#2563EB,stroke:#1D4ED8,stroke-width:2px,color:#fff;
    classDef core fill:#EFF6FF,stroke:#2563EB,stroke-width:2px,color:#1E40AF;
    classDef branch fill:#F8FAFC,stroke:#64748B,stroke-width:1.5px,color:#0F172A;
    classDef leaf fill:#ECFDF5,stroke:#059669,stroke-width:1.5px,color:#065F46;

    Root["阻卻罪責事由"]:::main --> Core["【核心】期待可能性"]:::core
    
    Core --> Legal["法定的"]:::branch
    Core --> Extra["超法定的"]:::branch

    Legal --> NoConscious["欠缺不法意識"]:::branch
    NoConscious --> NC1["排除：不可避免 (§ 16 本)"]:::leaf
    NoConscious --> NC2["減免：可以避免 (§ 16 但)"]:::leaf

    Legal --> NoCapacity["欠缺責任能力"]:::branch
    NoCapacity --> Age["年齡"]:::branch
    Age --> Age1["1. 排除：14 未滿 (§ 18 Ⅰ)"]:::leaf
    Age --> Age2["2. 減免：14~18 未滿 (§ 18 Ⅱ)<br>80 以上 (§ 18 Ⅲ)"]:::leaf

    NoCapacity --> Mental["精神"]:::branch
    Mental --> Men1["1. 排除：無能力 (§ 19 Ⅰ)"]:::leaf
    Mental --> Men2["2. 減免：能力顯著降低 (§ 19 Ⅱ)"]:::leaf

    NoCapacity --> Physio["生理 ➔ 減免：瘖啞人 (§ 20)"]:::leaf

    Extra --> Excuse["寬恕罪責事由"]:::branch
    Excuse --> Ex1["減免：正當防衛過當 (§ 23 但)"]:::leaf
    Excuse --> Ex2["減免：緊急避難過當 (§ 24 但)"]:::leaf
```

---

## 🧭 【圖解 1-3】壞事（不法）直觀拆解與巴掌感受認知流程
*(教材第 1-4 頁)*

```mermaid
flowchart LR
    classDef step1 fill:#FEE2E2,stroke:#EF4444,stroke-width:2px,color:#991B1B;
    classDef step2 fill:#FEF3C7,stroke:#F59E0B,stroke-width:2px,color:#92400E;
    classDef lawBox fill:#EFF6FF,stroke:#2563EB,stroke-width:2px,color:#1E40AF;

    subgraph Sensory ["生活直觀直覺（突遭陌生人掌摑巴掌）"]
        direction TB
        Feel1["第一感受：臉龐紅腫刺痛<br>生活重要利益遭受破壞"]:::step1
        Feel2["第二感受：接踵而來的疑惑與氣憤<br>對方莫名其妙、毫無道理"]:::step2
        Feel1 --> Feel2
    end

    subgraph LegalConcept ["刑法評價指標（感受順序：先侵害後正當）"]
        direction TB
        Dim1["指標一：法益侵害<br>（刑法分則典型罪名殺人/傷害/竊盜）"]:::lawBox
        Dim2["指標二：無正當理由<br>（有違整體法律秩序）"]:::lawBox
        Dim1 --> Dim2
    end

    subgraph SystemTerms ["法律專門術語轉換"]
        direction TB
        Term1["【構成要件該當性】<br>（形式不法）"]:::lawBox
        Term2["【違法性】<br>（實質不法）"]:::lawBox
        Term1 --> Term2
    end

    Feel1 ==> Dim1 ==> Term1
    Feel2 ==> Dim2 ==> Term2
```

---

## 🧭 【圖解 1-4】構成要件該當性推定違法性原則
*(教材第 1-5 頁)*

```mermaid
graph TD
    classDef titleBox fill:#2563EB,stroke:#1D4ED8,stroke-width:2px,color:#fff;
    classDef conceptBox fill:#F8FAFC,stroke:#94A3B8,stroke-width:1.5px,color:#0F172A;
    classDef lawBox fill:#EFF6FF,stroke:#2563EB,stroke-width:2px,color:#1E40AF;
    classDef defenseBox fill:#ECFDF5,stroke:#059669,stroke-width:2px,color:#065F46;

    Unlawful["不法（壞事）"]:::titleBox

    subgraph FormalUnlawful ["形式不法層面"]
        Formal["形式不法<br>（典型法益侵害）"]:::conceptBox --> TB["【構成要件該當性】"]:::lawBox
    end

    subgraph MaterialUnlawful ["實質不法層面"]
        Material["實質不法<br>（無正當理由）"]:::conceptBox --> RW["【違法性】"]:::lawBox
    end

    Unlawful --> Formal
    Unlawful --> Material

    TB -- "【推定】多數不舒服行為均無正當理由" --> Presume(("推定"))
    Presume --> RW

    RW -. "【反證推翻】阻卻違法事由" .-> DefenseList

    subgraph DefenseList ["反證推翻理由（阻卻違法事由）"]
        Case17["⚖️ § 21 Ⅰ 依法令之行為 (案例 1-7 優生保健墮胎)<br>⚖️ § 21 Ⅱ 依命令之行為 (案例 1-8 依上級命令)<br>⚖️ § 22 業務上正當行為<br>⚖️ § 23 本 正當防衛 / § 24 本 緊急避難"]:::defenseBox
    end
```

---

## 📊 【案例對照矩陣】教材 8 大案例、抗辯事由與 2026 現行法規查核

| 案例編號 | 階層階段 | 被告關鍵主張 | 法律性質 | 具體抗辯事由與法條 | 核心論證結論 | 2026 現行法規查核狀態與資料來源 |
| :---: | :---: | :--- | :---: | :--- | :--- | :--- |
| **案例 1-1** | 阻卻罪責 | 「這是一件壞事嗎？我以為這是ok的耶，對不起嘛」 | **法定** | **欠缺不法意識**（刑法 § 16） | 不知法律禁止，**因而雖做壞事，但卻不是壞人**。 | **條文無更動（維持現行法）**。<br>採責任理論，非有正當理由無法避免不免責。<br>*來源：[全國法規資料庫 § 16](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=16)* |
| **案例 1-2** | 阻卻罪責 | 「我年紀小而不懂事，原諒我好不好」 | **法定** | **欠缺責任能力：年齡**（刑法 § 18） | 會做壞事是由於不懂事，**因而雖做壞事，但卻不是壞人**。 | **條文無更動（維持現行法）**。<br>連動備註：民法成年年齡於 112 年下修至 18 歲，與刑法第 18 條責任界限接軌。<br>*來源：[全國法規資料庫 § 18](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=18)* |
| **案例 1-3** | 阻卻罪責 | 「吾乃伏虎羅漢降世，奉殺九世惡人乃替天行道」 | **法定** | **欠缺責任能力：精神**（刑法 § 19） | 不知或無法控制自己行為，**因而雖做壞事，但卻不是壞人**。 | **條文文字無更動，但受重大憲法裁判拘束**：<br>1. **113年憲判字第8號**：辨識控制能力顯著減低者**不得科處或執行死刑**。<br>2. **§ 87 監護處分修正（111年）**：延長處分期間與分級監護。<br>*來源：[全國法規資料庫 § 19](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=19)、[憲法法庭判決](https://cons.judicial.gov.tw/)* |
| **案例 1-4** | 阻卻罪責 | 「（比手畫腳）既聾且啞，知識水平較差，愚行實屬情有可原」 | **法定** | **欠缺責任能力：生理**（刑法 § 20） | 瘖啞人較一般人不知事，**因而雖做壞事，但卻不是壞人**。 | **條文無更動（維持現行法）**。<br>檢討備註：聯合國 CRPD 委員會建議檢討刪除本條避免標籤化，現行條文仍有效。<br>*來源：[全國法規資料庫 § 20](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=20)* |
| **案例 1-5** | 阻卻罪責 | 「對方先追著我打，情急下手槍斃了他」 | **法定** | **防衛過當／避難過當**（§ 23但、§ 24 1但） | 緊急情況難以控制反擊力道，**因而雖做壞事，但卻不是壞人**。 | **條文無更動（維持現行法）**。<br>過當仍具違法性，法官得裁量減輕或免除其刑。<br>*來源：[全國法規資料庫 § 23](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=23)、[§ 24](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=24)* |
| **案例 1-6** | 阻卻罪責 | 「幼兒墜床血流不止急救，忘拔熨斗插頭」 | **超法定** | **無期待可能性（或低度期待可能性）** | 處境極度艱難，難以期待冷靜拔插頭，**因而雖做壞事，但卻不是壞人**。 | **維持超法定事由**。<br>刑法總則未明文增列，實務由法官依罪責實質非難核心直接適用。<br>*來源：最高法院判決要旨* |
| **案例 1-7** | **阻卻違法** | 「我的確有為他人墮胎，但符合優生保健法 § 9」 | **法定** | **依法令之行為**（刑法 § 21 Ⅰ） | 依據法規所允許之行為，縱使侵害法益，**但有正當理由而並非壞事**。 | **條文無更動（維持現行法）**。<br>優生保健法第 9 條合於法令阻卻違法；現正推動《生育保健法》草案維護婦女身體自主決定權。<br>*來源：[全國法規資料庫 § 21](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=21)、[優生保健法 § 9](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=L0070001&flno=9)* |
| **案例 1-8** | **阻卻違法** | 「我有拿別人的東西，但卻是因為上級的命令」 | **法定** | **依命令之行為**（刑法 § 21 Ⅱ） | 有合法上級公務員命令存在，縱侵害財產法益，**但有正當理由而並非壞事**。 | **條文無更動（維持現行法）**。<br>採相對服從說；明知命令違法者不在此限（仍具違法性）。<br>*來源：[全國法規資料庫 § 21](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=21)* |
