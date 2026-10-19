# 圖片目錄

- `common/images/`：共用 Logo、圖示
- `pages/home/images/`：首頁圖片
- `pages/tools/images/`：工具箱封面、圖示
- `pages/about/images/profile/`：個人照片
- `pages/about/images/timeline/`：時間軸圖片
- `pages/about/images/awards/`：獎項照片
- `pages/about/images/works/`：作品圖片
- `pages/about/images/journey/`：人生歷程圖片

目前僅建立目錄，沒有擅自變更原本 JSON 的圖片路徑或 UI 渲染邏輯。既有 `heroImage` 仍指向 `./about/image/個人照_吳宇樺.jpg`，原 ZIP 未附該照片。若要將圖片路徑全面遷移並在所有區塊加入顯示功能，需要另行修改 JSON 與各渲染模組。
