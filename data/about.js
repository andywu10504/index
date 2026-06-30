const aboutProfile = {
  name: "吳宇樺",
  englishName: "Andy Wu",
  nickname: "雷夢",
  birthYear: 1989,
  currentEndYear: new Date().getFullYear(),
  heroImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",

  heroTitle: "哈囉，我是<br><span>吳宇樺</span>",
  heroIntro: "1989 年出生，高雄人，也可以叫我 Andy。<br>平常是半導體設備工程師，工作之外，我也投入童軍、佛堂與救護義消 EMT 服務。",

  storyTitle: "我喜歡把事情整理得更簡單、更清楚。",
  storyText: "我喜歡把生活中、工作中反覆出現的問題整理出來，再用網頁、程式或小工具，把事情變得更簡單、更清楚。對我來說，做工具不是為了炫技，而是為了讓每天的工作與生活少一點重複、多一點效率。",

  belief: "當你堅持你所堅持的，別人就會開始懷疑他所懷疑的。",
  beliefDesc: "這句話提醒我，很多事情一開始不一定會被理解。但只要方向是對的，方法是踏實的，成果會慢慢讓人看見。",

  stats: [
    {
      value: "設備 × 程式",
      label: "我把半導體現場經驗，整理成 Dashboard、自動化與網頁小工具。",
      icon: "fa-solid fa-microchip"
    },
    {
      value: "童軍 × 服務",
      label: "從活動、訓練到服務角色，學會團隊、帶領與現場應變。",
      icon: "fa-solid fa-campground"
    },
    {
      value: "佛堂 × 修身",
      label: "學習沉澱、感恩與正向待人，也讓生活多一份安定。",
      icon: "fa-solid fa-hands-praying"
    },
    {
      value: "救護義消 EMT",
      label: "透過救護訓練與勤務，學習即時判斷、責任與服務。",
      icon: "fa-solid fa-truck-medical"
    },
    {
      value: "電子 → 軟體",
      label: "從電子工程到軟體工程與管理，把硬體、設備、資料與系統串在一起。",
      icon: "fa-solid fa-code"
    },
    {
      value: "3 張 C 級資格",
      label: "定向越野教練、棒球裁判、攀樹教練，都是不同階段的學習痕跡。",
      icon: "fa-solid fa-certificate"
    },
    {
      value: "3 項木章紀錄",
      label: "童軍木章、行義童軍木章、稚齡童軍木章。",
      icon: "fa-solid fa-award"
    },
    {
      value: "2 項童軍獎章",
      label: "113 年銀狼獎章、114 年銀牛獎章。",
      icon: "fa-solid fa-trophy"
    }
  ],

  timelineCategories: [
    { key: "life", label: "生活", color: "#20c997" },
    { key: "education", label: "求學", color: "#0d6efd" },
    { key: "military", label: "服役", color: "#495057" },
    { key: "work", label: "工作", color: "#198754" },
    { key: "scout", label: "童軍", color: "#fd7e14" },
    { key: "faith", label: "佛堂", color: "#6f42c1" },
    { key: "emt", label: "救護義消 EMT", color: "#dc3545" },
    { key: "hobby", label: "興趣生活", color: "#0dcaf0" }
  ],

  timeline: [
    {
      title: "出生",
      category: "life",
      start: 1989,
      end: 1989,
      desc: "高雄人，故事從這裡開始。"
    },
    {
      title: "高雄市前鎮區復興國民小學",
      category: "education",
      start: 1995,
      end: 2001,
      desc: "求學歷程的開始。"
    },
    {
      title: "高雄市立英明國民中學",
      category: "education",
      start: 2001,
      end: 2004,
      desc: "持續累積學習基礎。"
    },
    {
      title: "高雄市私立大榮高級中學",
      category: "education",
      start: 2004,
      end: 2007,
      desc: "綜合高中資訊技術學程，開始更系統地接觸資訊與技術。"
    },
    {
      title: "國立金門技術學院／國立金門大學",
      category: "education",
      start: 2007,
      end: 2012,
      desc: "電子工程系／電子工程學系。這是同一段求學歷程，因學校由國立金門技術學院改制為國立金門大學，所以名稱前後不同。"
    },
    {
      title: "中華民國海軍陸戰隊",
      category: "military",
      start: 2012,
      end: 2013,
      desc: "服役期間學會紀律、責任、抗壓與團隊合作。"
    },
    {
      title: "日月光半導體",
      category: "work",
      start: 2013,
      end: "now",
      desc: "設備工程師。從設備維護、異常處理，到 Dashboard、自動化與 AI Agent，把工程現場經驗轉成可追蹤、可分析、可改善的工具。"
    },
    {
      title: "國立高雄師範大學",
      category: "education",
      start: 2015,
      end: 2021,
      desc: "軟體工程與管理學系。論文：以 SWI-Prolog 為基礎之專家系統應用於金門旅遊景點推薦。",
      link: "https://hdl.handle.net/11296/984c5n"
    },
    {
      title: "童軍服務",
      category: "scout",
      start: 2010,
      end: "now",
      desc: "從參與服務、基本訓練，到擔任副團長、教練、助理事務等角色，在不同訓練與活動中學習團隊合作、帶領、服務精神與現場應變。"
    },
    {
      title: "佛堂",
      category: "faith",
      start: 2013,
      end: "now",
      desc: "學習沉澱、感恩、修身與正向待人。"
    },
    {
      title: "救護義消 EMT",
      category: "emt",
      start: 2015,
      end: "now",
      desc: "救護訓練、救護勤務與緊急應變服務。"
    },
    {
      title: "攝影、旅遊、爬山",
      category: "hobby",
      start: 2013,
      end: "now",
      desc: "用照片記錄生活，也用腳步累積故事。"
    }
  ],

  training: [
    "2010｜C級定向越野教練合格",
    "2011｜C級棒球裁判合格",
    "2012｜C級攀樹教練合格",
    "童軍木章：103/09/10",
    "行義童軍木章：107/01/15",
    "稚齡童軍木章：109/09/17",
    "救護義消 EMT 相關訓練",
    "設備與工程專業訓練"
  ],

  awards: [
    "113 年｜童軍銀狼獎章",
    "114 年｜童軍銀牛獎章"
  ],

  faq: [
    {
      question: "為什麼要吃素？",
      answer: "對我來說，吃素是一種選擇，也是一種提醒。提醒自己對生命多一份尊重，對生活多一點節制，也讓自己在日常裡保留一份善意。"
    },
    {
      question: "為什麼要叫雷夢？",
      answer: "雷夢是朋友之間比較熟悉的稱呼。這個名字有一點輕鬆、有一點好記，也慢慢變成朋友認識我的方式之一。"
    },
    {
      question: "為什麼一直做小工具？",
      answer: "因為我不喜歡重複做同樣的事情。如果一個工具可以讓未來少按很多次滑鼠、少花很多時間整理資料，我覺得就值得。"
    }
  ]
};
