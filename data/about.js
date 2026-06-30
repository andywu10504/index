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
  beliefDesc: "這句話提醒我，很多事情一開始不一定會被理解。但只要方向是對的，方法是踏實的，成果會慢慢讓人看見。Learning never stops.",

  stats: [
    { number: 1989, suffix: "", label: "出生", note: "故事從高雄開始", icon: "fa-solid fa-location-dot" },
    { number: 13, suffix: "+", label: "設備工程", note: "2013 起投入半導體設備現場", icon: "fa-solid fa-microchip" },
    { number: 15, suffix: "+", label: "童軍", note: "服務、訓練、帶領與活動經驗", icon: "fa-solid fa-campground" },
    { number: 10, suffix: "+", label: "EMT", note: "救護義消、救護訓練與勤務", icon: "fa-solid fa-truck-medical" },
    { number: 3, suffix: "", label: "木章", note: "童軍、行義童軍、稚齡童軍木章", icon: "fa-solid fa-award" },
    { number: 2, suffix: "", label: "獎章", note: "銀狼獎章、銀牛獎章", icon: "fa-solid fa-trophy" },
    { number: 3, suffix: "", label: "證照", note: "定向越野、棒球裁判、攀樹教練", icon: "fa-solid fa-certificate" },
    { number: "∞", suffix: "", label: "持續學習", note: "Learning never stops", icon: "fa-solid fa-infinity" },
    { number: 5, suffix: "", label: "身份", note: "設備工程師、童軍、佛堂、救護義消、開發者", icon: "fa-solid fa-user-gear" },
    { number: 4, suffix: "", label: "專長", note: "設備、程式、AI、自動化", icon: "fa-solid fa-layer-group" }
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
    { title: "出生", category: "life", start: 1989, end: 1989, desc: "高雄人，故事從這裡開始。" },
    { title: "高雄市前鎮區復興國民小學", category: "education", start: 1995, end: 2001, desc: "求學歷程的開始。" },
    { title: "高雄市立英明國民中學", category: "education", start: 2001, end: 2004, desc: "持續累積學習基礎。" },
    { title: "高雄市私立大榮高級中學", category: "education", start: 2004, end: 2007, desc: "綜合高中資訊技術學程，開始更系統地接觸資訊與技術。" },
    { title: "國立金門技術學院／國立金門大學", category: "education", start: 2007, end: 2012, desc: "電子工程系／電子工程學系。這是同一段求學歷程，因學校由國立金門技術學院改制為國立金門大學，所以名稱前後不同。" },
    { title: "中華民國海軍陸戰隊", category: "military", start: 2012, end: 2013, desc: "服役期間學會紀律、責任、抗壓與團隊合作。" },
    { title: "日月光半導體", category: "work", start: 2013, end: "now", desc: "設備工程師。從設備維護、異常處理，到 Dashboard、自動化與 AI Agent，把工程現場經驗轉成可追蹤、可分析、可改善的工具。" },
    { title: "國立高雄師範大學", category: "education", start: 2015, end: 2021, desc: "軟體工程與管理學系。論文：以 SWI-Prolog 為基礎之專家系統應用於金門旅遊景點推薦。", link: "https://hdl.handle.net/11296/984c5n" },
    { title: "童軍服務", category: "scout", start: 2010, end: "now", desc: "從參與服務、基本訓練，到擔任副團長、教練、助理事務等角色，在不同訓練與活動中學習團隊合作、帶領、服務精神與現場應變。" },
    { title: "佛堂", category: "faith", start: 2013, end: "now", desc: "學習沉澱、感恩、修身與正向待人。" },
    { title: "救護義消 EMT", category: "emt", start: 2015, end: "now", desc: "救護訓練、救護勤務與緊急應變服務。" },
    { title: "攝影、旅遊、爬山", category: "hobby", start: 2013, end: "now", desc: "用照片記錄生活，也用腳步累積故事。" }
  ],

  lifeMosaic: [
    { title: "設備工程", ratio: 33, icon: "fa-solid fa-microchip", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=80", desc: "把現場問題整理成可以追蹤的資料與工具。" },
    { title: "佛堂", ratio: 12, icon: "fa-solid fa-hands-praying", image: "https://images.unsplash.com/photo-1604608678051-64d46d7ec860?auto=format&fit=crop&w=1000&q=80", desc: "沉澱、感恩、修身與正向待人。" },
    { title: "童軍", ratio: 12, icon: "fa-solid fa-campground", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80", desc: "團隊、服務、活動帶領與現場應變。" },
    { title: "救護義消 EMT", ratio: 8, icon: "fa-solid fa-truck-medical", image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1000&q=80", desc: "救護訓練、勤務與緊急應變。" },
    { title: "攝影與旅遊", ratio: 8, icon: "fa-solid fa-camera-retro", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=80", desc: "用照片記錄生活。" },
    { title: "爬山", ratio: 6, icon: "fa-solid fa-mountain-sun", image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=80", desc: "用腳步累積故事。" }
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
    { question: "為什麼會同時做這麼多事情？", answer: "工作、童軍、佛堂、救護義消、攝影、旅遊，看起來很多，但其實都是同一件事：讓自己持續學習，也讓自己有能力幫上一點忙。" }
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
  ]
};
