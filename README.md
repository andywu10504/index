# 個人網站

## 網站結構
- `index.html`：首頁
- `about.html`：關於我、生活比重、歷程等
- `tools.html`：工具頁
- `common/`：共用導覽列、樣式與程式
- `pages/{home,about,tools}/`：各頁 CSS、JS、圖片及 JSON 資料

## 我的生活比重
編輯 `pages/about/data/about.json` 的 `lifeMosaic` 陣列。
- `title`：類別名稱
- `hours`：每月時數（百分比由 JavaScript 自動以 `lifeMosaicMonthHours` 計算）
- `subtitle`：角色核心精神
- `desc`：點擊卡片顯示的介紹
- `breakdown`：時數計算依據
- `image`：圖片網址或本機相對路徑
- `icon`：Font Awesome 圖示

目前採每月 30 天共 720 小時，六類分別為 198、85、109、25、15、288 小時。
活動與上班用餐重疊時數仍以既有估算為準，非逐日精確紀錄。
生活比重桌面版採兩列比例拼貼，手機版改為易讀的直式卡片；點擊可看完整內容。

## 使用
請透過本機 HTTP 伺服器或網站主機開啟，避免 `file://` 造成 JSON 載入失敗。

## 數字卡片導覽
`pages/about/data/about.json` 的 `stats[].href` 可設定點擊後導覽至同頁指定區塊（例如 `#lifeTimeline`）。

## 修正：生活比重拼貼
以「個人網站完整更新版」為基礎，保留「用幾個數字認識我」卡片點擊導覽，並修正生活比重：每張照片固定可閱讀寬度，桌面三欄、平板兩欄、手機一欄，類別與百分比不會因時數過小而被裁切。百分比仍根據 JSON 時數計算，拼貼面積不代表時間比例。未設定照片的項目顯示漸層底色。
