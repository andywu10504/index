const aboutProfile = {
  name: "吳宇樺",
  englishName: "Andy Wu",
  nickname: "雷夢",
  birthYear: 1989,
  currentEndYear: new Date().getFullYear(),
  heroImage: "./about/image/個人照_吳宇樺.jpg",

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
    { key: "club", label: "學生自治/社團", color: "#6610f2" },
    { key: "military", label: "服役", color: "#495057" },
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
      rowOrder: 2,
      category: "education",
      start: 1992,
      end: 1993,
      desc: "幼兒階段曾就讀懷幼幼稚園。實際起訖年份可再依資料調整。"
    },
    {
      title: "私立和諧托兒所",
      groupLabel: "求學",
      rowOrder: 2,
      category: "education",
      start: 1993,
      end: 1994,
      desc: "幼兒階段曾就讀私立和諧托兒所。實際起訖年份可再依資料調整。"
    },
    {
      title: "私立康澤幼兒園",
      groupLabel: "求學",
      rowOrder: 2,
      category: "education",
      start: 1994,
      end: 1995,
      desc: "幼兒階段曾就讀私立康澤幼兒園。實際起訖年份可再依資料調整。"
    },
    {
      title: "高雄市前鎮區復興國民小學",
      groupLabel: "求學",
      rowOrder: 2,
      category: "education",
      start: 1995,
      end: 2001,
      desc: "求學歷程的開始。"
    },
    {
      title: "高雄市立英明國民中學",
      groupLabel: "求學",
      rowOrder: 2,
      category: "education",
      start: 2001,
      end: 2004,
      desc: "持續累積學習基礎。"
    },
    {
      title: "高雄市私立大榮高級中學",
      groupLabel: "求學",
      rowOrder: 2,
      category: "education",
      start: 2004,
      end: 2007,
      desc: "綜合高中資訊技術學程。"
    },
    {
      title: "國立金門技術學院",
      groupLabel: "求學",
      rowOrder: 2,
      category: "education",
      start: 2007,
      end: 2010,
      desc: "電子工程系。"
    },
    {
      title: "國立金門大學（改制）",
      groupLabel: "求學",
      rowOrder: 2,
      category: "education",
      start: 2010,
      end: 2012,
      desc: "電子工程學系。學校由國立金門技術學院改制為國立金門大學。"
    },
    {
      title: "國立高雄師範大學",
      groupLabel: "求學",
      rowOrder: 2,
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
      rowOrder: 3,
      category: "club",
      start: 2008,
      end: 2009,
      desc: "負責學生會新聞採訪、活動紀錄、校園資訊宣傳與媒體製作。"
    },
    {
      title: "學生會總務部長",
      groupLabel: "學生自治/社團",
      rowOrder: 3,
      category: "club",
      start: 2009,
      end: 2010,
      desc: "負責學生會經費、物資管理及活動行政支援。"
    },
    {
      title: "學生議會議員",
      groupLabel: "學生自治/社團",
      rowOrder: 3,
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
      groupLabel: "工作",
      rowOrder: 5,
      category: "work",
      start: 2013,
      end: 2024,
      company: "日月光半導體製造股份有限公司",
      desc: "於日月光半導體製造股份有限公司保養組，負責設備維護、PM 保養、異常處理與現場改善。"
    },
    {
      title: "工程師",
      groupLabel: "工作",
      rowOrder: 5,
      category: "work",
      start: 2024,
      end: "now",
      company: "日月光半導體製造股份有限公司",
      desc: "於日月光半導體製造股份有限公司擔任工程師，持續投入設備工程、Dashboard、自動化與 AI Agent，將現場經驗轉成可追蹤、可分析、可改善的工具。"
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
      title: "浯風羅浮群群長",
      groupLabel: "童軍",
      rowOrder: 6,
      category: "scout",
      start: 2009,
      end: 2011,
      desc: "帶領浯風羅浮群規劃訓練、服務活動與團隊運作。"
    },
    {
      title: "授銜羅浮",
      groupLabel: "童軍",
      rowOrder: 6,
      category: "scout",
      start: 2011,
      end: 2011,
      desc: "民國100年完成授銜，正式成為羅浮童軍。"
    },
    {
      title: "服務羅浮",
      groupLabel: "童軍",
      rowOrder: 6,
      category: "scout",
      start: 2013,
      end: 2013,
      desc: "民國102年完成服務羅浮訓練，持續投入童軍服務與活動。"
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
    },
    {
      title: "幹事",
      groupLabel: "救護義消",
      rowOrder: 8,
      category: "emt",
      start: 2023,
      end: "now",
      desc: "擔任高雄市政府救護義消幹事，協助救護義消相關行政、勤務與訓練事務。",
      highlights: [
        "高雄市政府救護義消幹事",
        "協助勤務與訓練事務",
        "參與救護義消服務"
      ]
    }
  ],

  lifeMosaic: [
    { title: "設備工程", ratio: 36, icon: "fa-solid fa-microchip", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80", desc: "把現場問題整理成可以追蹤的資料與工具。" },
    { title: "童軍", ratio: 24, icon: "fa-solid fa-campground", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80", desc: "團隊、服務、活動帶領與現場應變。" },
    { title: "佛堂", ratio: 14, icon: "fa-solid fa-hands-praying", image: "./about/image/佛堂.jpg", desc: "沉澱、感恩、修身與正向待人。" },
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
      date: "2017/08",
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
      title: "銀狼獎章",
      date: "106 年",
      type: "童軍紀錄",
      image: "./image/106銀狼獎章.png",
      icon: "fa-solid fa-trophy"
    },
    {
      title: "銀羊獎章",
      date: "108 年",
      type: "童軍紀錄",
      image: "./image/108銀羊獎章.png",
      icon: "fa-solid fa-trophy"
    },
    {
      title: "銅質青松獎章",
      date: "108 年",
      type: "童軍紀錄",
      image: "./image/108銅質青松.png",
      icon: "fa-solid fa-trophy"
    },
    {
      title: "銀狼獎章",
      date: "113 年",
      type: "童軍紀錄",
      image: "./image/113銀狼獎章.png",
      icon: "fa-solid fa-trophy"
    },
    {
      title: "銀牛獎章",
      date: "114 年",
      type: "童軍紀錄",
      image: "./image/114銀狼獎章.png",
      icon: "fa-solid fa-award"
    }
  ],
lifeJourney: [
    { date: "1989/09/26", title: "出生", score: 0, desc: "1989年09月26日於高雄出生。", category: "life" },
    { date: "1990/04/10", title: "求道", score: 2, desc: "1990年04月10日於林氏佛堂求道。", category: "faith" },
    { date: "2004", title: "就讀大榮中學電子科", score: 1, desc: "不知道要讀什麼就選擇大榮高中電子科，至少不是這麼討厭。", category: "education" },
    { date: "2005", title: "立愿", score: 1, desc: "立下「戒除菸酒賭」、「辦事員」、「逢期必至」、「花齋」等愿力。", category: "faith" },
    { date: "2005", title: "首次辦理少年營", score: 3, desc: "高雄地區兒童營停辦多年，幾個同修聚集，首次辦理兒童營。", category: "faith" },
    { date: "2005", title: "擔任大隊長", score: 3, desc: "", category: "scout" },
    { date: "2007", title: "意外考上金門技術學院", score: 3, desc: "當時有陸軍專科學校、高雄正修科技大學與國立金門技術學院可以選擇，最終選擇了國立金門技術學院，就開啟了長達4年的大學生活。", category: "education" },
    { date: "2007", title: "受南極仙翁點化", score: 2, desc: "當時候受朋友邀請，參加了別支組線的法會，南極仙翁臨壇，跟我說：「要吃素喔」，我也搞不懂為什麼。", category: "faith" },
    { date: "2009", title: "擔任羅浮群群長", score: 3, desc: "因為社團大四學長要準備畢業，必須找人交接，當時的我只有參加過幾次社團活動，對童軍運動並沒有經驗，只能硬著頭皮接下。", category: "scout" },
    { date: "2009", title: "辦理幾次活動開始有新生加入", score: 2, desc: "接下群長的我，剛好一個同班同學，一個有經驗，就成為浮木，從他身上先學習一些童軍知能，因為不怕生的關係，也從系上找到幾個學弟，願意加入，並且協助辦理幾次活動。", category: "scout" },
    { date: "2010/10", title: "初戀", score: 3, desc: "在一次偶然的活動機會下，認識當時的女朋友，就開始了第一次戀愛。", category: "life" },
    { date: "2010/12", title: "信任危機", score: -2, desc: "因為脾氣不好又焦慮，容易對女朋友發脾氣，更在那時候經歷了身邊的一些重大事件。", category: "life" },
    { date: "2011/01", title: "第一次失戀", score: -3, desc: "", category: "life" },
    { date: "2011", title: "獲金門縣好人好事代表", score: 2, desc: "", category: "scout" },
    { date: "2011", title: "學習吃素", score: 1, desc: "一個吃素可以改變運氣的念頭，讓我從那年就開始吃素。", category: "faith" },
    { date: "2012", title: "延畢", score: -2, desc: "因為學分不足而延畢。", category: "education" },
    { date: "2013", title: "大學畢業", score: 2, desc: "終於在多重方式下，完成大學學業。", category: "education" },
    { date: "2013/09", title: "服役於海軍陸戰隊", score: 1, desc: "抽中海軍陸戰隊，為期一年的兵役。", category: "military" },
    { date: "2013", title: "初次瞭解吃素的難度", score: 2, desc: "隊上有一個吃素的同袍，家裡只有他一個人吃素，在家吃得非常辛苦。", category: "faith" },
    { date: "2013/12", title: "第二次失戀", score: -2, desc: "當兵期間，跟第二任女朋友分手。", category: "life" },
    { date: "2014", title: "日月光任職", score: 2, desc: "退伍後第一個工作在華碩旗下的外包維修廠商擔任工程師，同時間也投履歷至日月光半導體，工作一個月後，旋即至日月光任職。", category: "work" },
    { date: "2014", title: "輪班轉正常班", score: 3, desc: "因為某些因素，從輪班轉往正常班，雖然錢領得比較少，但有更多的時間可以配合幫辦。", category: "work" },
    { date: "2014", title: "擔任高雄青年班活動組長", score: 3, desc: "在大學期間有許多活動經驗，在點傳師慈悲，接下高雄青年班活動組長的任務。", category: "faith" },
    { date: "2015", title: "首次擔任國學營活動組長", score: 3, desc: "首次擔任國學營活動組長工作，並於活動中設計實境解謎與搶答活動，獲得熱烈好評。", category: "faith" },
    { date: "2015", title: "十年一刻", score: 2, desc: "少年營籌辦滿10年。", category: "faith" },
    { date: "2016", title: "受總統接見優秀童軍", score: 3, desc: "", category: "scout" },
    { date: "2016", title: "考上高師大碩士學程", score: 3, desc: "對當老師有憧憬，因此選擇國立高雄師範大學軟體工程學系。", category: "education" },
    { date: "2017", title: "考上師培學程沒有去讀", score: -1, desc: "考上碩士後隔年考上師培學程，但因為多方考量即作罷。", category: "education" },
    { date: "2018", title: "諾羅病毒", score: -2, desc: "", category: "life" },
    { date: "2019/04", title: "發現唾液腺腫瘤", score: -1, desc: "四月份發現左臉頰下方有硬塊。", category: "life" },
    { date: "2019/05", title: "移除唾液腺腫瘤", score: -1, desc: "五月份醫生建議割除唾液腺腫瘤。", category: "life" },
    { date: "2019", title: "第二次擔任國學營活動組長", score: 3, desc: "因為有前一次的完美經驗，也給自己特別大的壓力，完成了用一連串的故事主軸與Line@完成的實境解謎。", category: "faith" },
    { date: "2019", title: "高雄車禍", score: -2, desc: "開車被酒駕車禍撞上，了解生命無常。", category: "life" },
    { date: "2019", title: "立愿清口茹素", score: 2, desc: "", category: "faith" },
    { date: "2021", title: "碩士畢業", score: 3, desc: "", category: "education" }
  ]
};
