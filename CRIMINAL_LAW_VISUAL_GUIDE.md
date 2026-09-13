# ⚖️ 【導論】第一章 犯罪的概念・全圖解思維指南
*(教材第 1-1 ～ 1-3 頁 / 導論第一章)*

> **體系定位**：【導論】犯罪概念與論罪結構 ➔ **第一章 犯罪的概念**  
> **核心金句**：**「因而雖做壞事，但卻不是壞人。」**

---

## 🧭 【圖解 1-1】不法推定罪責與反證推翻總覽圖

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

## 📊 【案例對照矩陣】教材 6 大案例、抗辯事由與 2026 現行法規查核

| 案例編號 | 被告關鍵主張 | 法律性質 | 具體抗辯事由與法條 | 核心論證結論 | 2026 現行法規查核狀態與資料來源 |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **案例 1-1** | 「這是一件壞事嗎？我以為這是ok的耶，對不起嘛」 | **法定** | **欠缺不法意識**（刑法 § 16） | 不知法律禁止，**因而雖做壞事，但卻不是壞人**。 | **條文無更動（維持現行法）**。<br>採責任理論，非有正當理由無法避免不免責。<br>*來源：[全國法規資料庫 § 16](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=16)* |
| **案例 1-2** | 「我年紀小而不懂事，原諒我好不好」 | **法定** | **欠缺責任能力：年齡**（刑法 § 18） | 會做壞事是由於不懂事，**因而雖做壞事，但卻不是壞人**。 | **條文無更動（維持現行法）**。<br>連動備註：民法成年年齡於 112 年下修至 18 歲，與刑法第 18 條責任界限接軌。<br>*來源：[全國法規資料庫 § 18](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=18)* |
| **案例 1-3** | 「吾乃伏虎羅漢降世，奉殺九世惡人乃替天行道」 | **法定** | **欠缺責任能力：精神**（刑法 § 19） | 不知或無法控制自己行為，**因而雖做壞事，但卻不是壞人**。 | **條文文字無更動，但受重大憲法裁判拘束**：<br>1. **113年憲判字第8號**：辨識控制能力顯著減低者**不得科處或執行死刑**。<br>2. **§ 87 監護處分修正（111年）**：延長處分期間與分級監護。<br>*來源：[全國法規資料庫 § 19](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=19)、[憲法法庭判決](https://cons.judicial.gov.tw/)* |
| **案例 1-4** | 「（比手畫腳）既聾且啞，知識水平較差，愚行實屬情有可原」 | **法定** | **欠缺責任能力：生理**（刑法 § 20） | 瘖啞人較一般人不知事，**因而雖做壞事，但卻不是壞人**。 | **條文無更動（維持現行法）**。<br>檢討備註：聯合國 CRPD 委員會建議檢討刪除本條避免標籤化，現行條文仍有效。<br>*來源：[全國法規資料庫 § 20](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=20)* |
| **案例 1-5** | 「對方先追著我打，情急下手槍斃了他」 | **法定** | **防衛過當／避難過當**（§ 23但、§ 24 1但） | 緊急情況難以控制反擊力道，**因而雖做壞事，但卻不是壞人**。 | **條文無更動（維持現行法）**。<br>過當仍具違法性，法官得裁量減輕或免除其刑。<br>*來源：[全國法規資料庫 § 23](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=23)、[§ 24](https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=C0000001&flno=24)* |
| **案例 1-6** | 「幼兒墜床血流不止急救，忘拔熨斗插頭」 | **超法定** | **無期待可能性（或低度期待可能性）** | 處境極度艱難，難以期待冷靜拔插頭，**因而雖做壞事，但卻不是壞人**。 | **維持超法定事由**。<br>刑法總則未明文增列，實務由法官依罪責實質非難核心直接適用。<br>*來源：最高法院判決要旨* |
