const aboutProfile = {
  name: "吳宇樺",
  englishName: "Andy Wu",
  nickname: "雷夢",
  birthYear: 1989,
  currentEndYear: new Date().getFullYear(),
  heroImage: "./image/個人照_吳宇樺.jpg",

  heroTitle: "哈囉，我是<br><span>吳宇樺</span>",
  heroIntro: "1989 年出生，高雄人，也可以叫我 Andy。<br>平常是半導體設備工程師，工作之外，我也投入童軍、佛堂與救護義消服務。",

  storyTitle: "不用很厲害才開始，要先開始才會很厲害。",
  storyText: "我喜歡把生活中、工作中反覆出現的問題整理出來，再用網頁、程式或小工具，把事情變得更簡單、更清楚。對我來說，做工具不是為了炫技，而是為了讓每天的工作與生活少一點重複、多一點效率。",

  belief: "當你堅持你所堅持的，別人就會開始懷疑他所懷疑的。",
  beliefDesc: "這句話提醒我，很多事情一開始不一定會被理解。但只要方向是對的，方法是踏實的，成果會慢慢讓人看見。Learning never stops.",

  stats: [
    { number: 1989, suffix: "", label: "出生", note: "故事從高雄開始", icon: "fa-solid fa-location-dot" },
    { number: 13, suffix: "+", label: "設備工程", note: "2013 起投入半導體設備現場", icon: "fa-solid fa-microchip" },
    { number: 19, suffix: "+", label: "童軍", note: "服務、訓練、帶領與活動經驗", icon: "fa-solid fa-campground" },
    { number: 3, suffix: "+", label: "救護義消", note: "救護訓練、救護勤務與緊急應變", icon: "fa-solid fa-truck-medical" },
    { number: 5, suffix: "", label: "身份", note: "設備工程師、童軍服務員、救護義消、開發者、佛堂壇主", icon: "fa-solid fa-user-gear" },
    { number: 2, suffix: "", label: "專長", note: "程式設計、活動企劃", icon: "fa-solid fa-layer-group" },
    { number: 7, suffix: "", label: "興趣", note: "攝影、旅遊、爬山、棒球、電腦、音樂、閱讀", icon: "fa-solid fa-heart" },
    { number: 3, suffix: "", label: "木章", note: "童軍、行義童軍、稚齡童軍木章", icon: "fa-solid fa-award" },
    { number: 2, suffix: "", label: "獎章", note: "銀狼獎章、銀牛獎章", icon: "fa-solid fa-trophy" },
    { number: 3, suffix: "", label: "證照", note: "定向越野、棒球裁判、攀樹教練", icon: "fa-solid fa-certificate" },
    { number: "∞", suffix: "", label: "持續學習", note: "Learning never stops", icon: "fa-solid fa-infinity" }
  ],

  timelineCategories: [
    { key: "life", label: "生活", color: "#20c997" },
    { key: "education", label: "求學", color: "#0d6efd" },
    { key: "military", label: "服役", color: "#495057" },
    { key: "club", label: "社團", color: "#6610f2" },
    { key: "work", label: "工作", color: "#198754" },
    { key: "scout", label: "童軍", color: "#fd7e14" },
    { key: "faith", label: "佛堂", color: "#6f42c1" },
    { key: "emt", label: "救護義消", color: "#dc3545" }
  ],

  timeline: [
    {
      title: "出生",
      groupLabel: "生活",
      rowOrder: 1,
      category: "life",
      start: 1989,
      end: 1989,
      startDate: "1989/09/26",
      endDate: "1989/09/26",
      desc: "高雄人，故事從這裡開始。"
    },
    {
      title: "私立懷幼幼稚園",
      groupLabel: "求學",
      rowOrder: 3,
      category: "education",
      start: 1992,
      end: 1993,
      desc: "幼兒階段曾就讀懷幼幼稚園。實際起訖年份可再依資料調整。"
    },
    {
      title: "私立和諧托兒所",
      groupLabel: "求學",
      rowOrder: 3,
      category: "education",
      start: 1993,
      end: 1994,
      desc: "幼兒階段曾就讀私立和諧托兒所。實際起訖年份可再依資料調整。"
    },
    {
      title: "私立康澤幼兒園",
      groupLabel: "求學",
      rowOrder: 3,
      category: "education",
      start: 1994,
      end: 1995,
      desc: "幼兒階段曾就讀私立康澤幼兒園。實際起訖年份可再依資料調整。"
    },
    {
      title: "高雄市前鎮區復興國民小學",
      groupLabel: "求學",
      rowOrder: 3,
      category: "education",
      start: 1995,
      end: 2001,
      desc: "求學歷程的開始。"
    },
    {
      title: "高雄市立英明國民中學",
      groupLabel: "求學",
      rowOrder: 3,
      category: "education",
      start: 2001,
      end: 2004,
      desc: "持續累積學習基礎。"
    },
    {
      title: "高雄市私立大榮高級中學",
      groupLabel: "求學",
      rowOrder: 3,
      category: "education",
      start: 2004,
      end: 2007,
      desc: "綜合高中資訊技術學程。"
    },
    {
      title: "國立金門技術學院",
      groupLabel: "求學",
      rowOrder: 3,
      category: "education",
      start: 2007,
      end: 2010,
      desc: "電子工程系。"
    },
    {
      title: "國立金門大學（改制）",
      groupLabel: "求學",
      rowOrder: 3,
      category: "education",
      start: 2010,
      end: 2012,
      desc: "電子工程學系。學校由國立金門技術學院改制為國立金門大學。"
    },
    {
      title: "國立高雄師範大學",
      groupLabel: "求學",
      rowOrder: 3,
      category: "education",
      start: 2017,
      end: 2021,
      desc: "軟體工程與管理學系。",
      thesisTitle: "以 SWI-Prolog 為基礎之專家系統應用於金門旅遊景點推薦",
      thesisUrl: "https://hdl.handle.net/11296/984c5n"
    },

    {
      title: "學生會新聞部長",
      groupLabel: "學生自治/社團",
      rowOrder: 5,
      category: "club",
      start: 2008,
      end: 2009,
      desc: "負責學生會新聞採訪、活動紀錄、校園資訊宣傳與媒體製作。"
    },
    {
      title: "浯風羅浮群群長",
      groupLabel: "學生自治/社團",
      rowOrder: 5,
      category: "club",
      start: 2009,
      end: 2011,
      desc: "帶領羅浮童軍規劃訓練、服務活動與團隊運作。"
    },
    {
      title: "學生會總務部長",
      groupLabel: "學生自治/社團",
      rowOrder: 5,
      category: "club",
      start: 2009,
      end: 2010,
      desc: "負責學生會經費、物資管理及活動行政支援。"
    },
    {
      title: "學生議會議員",
      groupLabel: "學生自治/社團",
      rowOrder: 5,
      category: "club",
      start: 2010,
      end: 2011,
      desc: "參與學生自治事務，審議學生會提案並反映學生意見。"
    },

    {
      title: "中華民國海軍陸戰隊",
      groupLabel: "服役",
      rowOrder: 4,
      category: "military",
      start: 2012,
      end: 2013,
      desc: "服役期間學會紀律、責任、抗壓與團隊合作。"
    },

    {
      title: "保養組",
      groupLabel: "日月光半導體製造股份有限公司",
      rowOrder: 5,
      category: "work",
      start: 2013,
      end: 2024,
      desc: "保養組。負責設備維護、PM 保養、異常處理與現場改善。"
    },
    {
      title: "工程師",
      groupLabel: "日月光半導體製造股份有限公司",
      rowOrder: 5,
      category: "work",
      start: 2024,
      end: "now",
      desc: "工程師。持續投入設備工程、Dashboard、自動化與 AI Agent，將現場經驗轉成可追蹤、可分析、可改善的工具。"
    },

    {
      title: "童軍運動",
      groupLabel: "童軍",
      rowOrder: 6,
      category: "scout",
      start: 2007,
      end: "now",
      desc: "從參與服務、基本訓練，到擔任副團長、教練、助理事務等角色，在不同訓練與活動中學習團隊合作、帶領、服務精神與現場應變。"
    },
    {
      title: "求道",
      groupLabel: "佛堂",
      rowOrder: 7,
      category: "faith",
      start: 1990,
      end: "now",
      startDate: "1990/04/10",
      desc: "因為認同道的理念，作為踏入修道路程與信仰生活的開始。"
    },
    {
      title: "清口愿",
      groupLabel: "佛堂",
      rowOrder: 7,
      category: "faith",
      start: 2018,
      end: "now",
      startDate: "2018/11/18",
      desc: "提醒自己持續實踐慈悲與尊重生命，轉化為長期的生活習慣，立下終身吃素的承諾。"
    },
    {
      title: "壇主愿",
      groupLabel: "佛堂",
      rowOrder: 7,
      category: "faith",
      start: 2024,
      end: "now",
      startDate: "2024/01/14",
      desc: "承諾長期守護佛堂、服務眾人，並持續承擔壇主的責任。"
    },
    {
      title: "高雄市政府救護義消",
      groupLabel: "救護義消",
      rowOrder: 8,
      category: "emt",
      start: 2023,
      end: "now",
      desc: "投入救護義消服務，參與救護訓練、救護勤務與緊急應變服務。",
      images: [
        {
          src: "images/about/emt-01.jpg",
          alt: "救護義消勤務照片",
          caption: "救護義消勤務與訓練紀錄"
        }
      ],
      highlights: [
        "EMT-1 緊急救護技術員",
        "參與救護訓練與勤務",
        "高雄市政府救護義消服務"
      ]
    }
  ],

  lifeMosaic: [
    { title: "設備工程", ratio: 36, icon: "fa-solid fa-microchip", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80", desc: "把現場問題整理成可以追蹤的資料與工具。" },
    { title: "童軍", ratio: 24, icon: "fa-solid fa-campground", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80", desc: "團隊、服務、活動帶領與現場應變。" },
    { title: "佛堂", ratio: 14, icon: "fa-solid fa-hands-praying", image: "https://images.unsplash.com/photo-1604608678051-64d46d7ec860?auto=format&fit=crop&w=1000&q=80", desc: "沉澱、感恩、修身與正向待人。" },
    { title: "救護義消", ratio: 12, icon: "fa-solid fa-truck-medical", image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80", desc: "救護訓練、勤務與緊急應變。" }
  ],

  works: [
    { title: "BINGO", icon: "fa-solid fa-table-cells-large", desc: "活動、遊戲、互動用的小工具。", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=1000&q=80" },
    { title: "Dashboard", icon: "fa-solid fa-chart-line", desc: "把資料變成一眼看懂的畫面。", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80" },
    { title: "AI Agent", icon: "fa-solid fa-robot", desc: "讓系統主動分析與提醒。", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80" },
    { title: "設備工具", icon: "fa-solid fa-screwdriver-wrench", desc: "把現場經驗變成可維護的工具。", image: "https://images.unsplash.com/photo-1581091215367-59ab6b35f5a1?auto=format&fit=crop&w=1000&q=80" }
  ],

  faq: [
    { question: "為什麼要吃素？", answer: "對我來說，吃素是一種選擇，也是一種提醒。提醒自己對生命多一份尊重，對生活多一點節制，也讓自己在日常裡保留一份善意。" },
    { question: "為什麼要叫雷夢？", answer: "雷夢是朋友之間比較熟悉的稱呼。這個名字有一點輕鬆、有一點好記，也慢慢變成朋友認識我的方式之一。" },
    { question: "為什麼一直做小工具？", answer: "因為我不喜歡重複做同樣的事情。如果一個工具可以讓未來少按很多次滑鼠、少花很多時間整理資料，我覺得就值得。" },
    { question: "為什麼會同時做這麼多事情？", answer: "工作、童軍、佛堂、救護義消，看起來很多，但其實都是同一件事：讓自己持續學習，也讓自己有能力幫上一點忙。" }
  ],

  certificates: [
    {
      title: "EMT-1 緊急救護技術員",
      date: "2017",
      type: "救護證照",
      image: "images/about/cert-emt1.jpg",
      icon: "fa-solid fa-truck-medical"
    }
  ],

  training: [
    {
      title: "C級定向越野教練合格",
      date: "2010",
      type: "訓練資格",
      image: "images/about/cert-orienteering.jpg",
      icon: "fa-solid fa-map-location-dot"
    },
    {
      title: "C級棒球裁判合格",
      date: "2011",
      type: "訓練資格",
      image: "images/about/cert-baseball.jpg",
      icon: "fa-solid fa-baseball"
    },
    {
      title: "C級攀樹教練合格",
      date: "2012",
      type: "訓練資格",
      image: "images/about/cert-tree-climbing.jpg",
      icon: "fa-solid fa-tree"
    },
    {
      title: "童軍木章",
      date: "103/09/10",
      type: "童軍訓練",
      image: "images/about/cert-scout-woodbadge.jpg",
      icon: "fa-solid fa-campground"
    },
    {
      title: "行義童軍木章",
      date: "107/01/15",
      type: "童軍訓練",
      image: "images/about/cert-rover-woodbadge.jpg",
      icon: "fa-solid fa-campground"
    },
    {
      title: "稚齡童軍木章",
      date: "109/09/17",
      type: "童軍訓練",
      image: "images/about/cert-cub-woodbadge.jpg",
      icon: "fa-solid fa-campground"
    }
  ],

  awards: [
    {
      title: "金門縣好人好事",
      date: "100 年",
      type: "獲獎紀錄",
      image: "images/about/award-silver-wolf.jpg",
      icon: "fa-solid fa-trophy"
    },
    {
      title: "童軍銀狼獎章",
      date: "113 年",
      type: "獲獎紀錄",
      image: "images/about/award-silver-wolf.jpg",
      icon: "fa-solid fa-trophy"
    },
    {
      title: "童軍銀牛獎章",
      date: "114 年",
      type: "獲獎紀錄",
      image: "images/about/award-silver-bull.jpg",
      icon: "fa-solid fa-award"
    }
  ]
};
