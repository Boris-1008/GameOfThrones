# 權力遊戲世界觀導覽

《權力遊戲》互動式世界觀導覽網站，使用 React 建立，重點是讓使用者快速理解主要角色、家族、地區與基本關係。

## 使用技術

- React
- React Router
- Vite
- JavaScript 本地資料檔
- CSS

## 安裝方式

請先安裝 Node.js。進入本資料夾後執行：

```bash
npm install
```

## 啟動方式

```bash
npm run dev
```

啟動後依照終端機顯示的網址開啟網站，通常會是：

```txt
http://localhost:5173/
```

## 頁面介紹

- 首頁：網站主視覺與三個主要入口。
- 人物：角色列表、搜尋、家族篩選、角色詳細視窗。
- 家族：家族卡片與家族詳細資訊。
- 地圖地區：簡化互動地圖，點選地區標記可切換資訊。
- 關於：專案目的、主題選擇、使用技術與展示功能。

## 資料結構

主要資料放在：

- `src/data/characters.js`
- `src/data/houses.js`
- `src/data/regions.js`

元件放在 `src/components`，頁面放在 `src/pages`，樣式放在 `src/styles/global.css`。

## 圖片與素材

網站中的簡化地圖使用本專案自行建立的 SVG 風格素材：`src/assets/westeros-map.svg`。

人物頭像、家族旗幟與首頁龍母 / 龍主視覺使用 Wiki of Westeros / Fandom 的公開圖片連結，作為課堂期末專題展示用途。

## 背景音樂

網站已加入右下角 BGM 播放按鈕。請將音樂檔放在：

```txt
public/audio/got-theme.mp3
```

瀏覽器會阻擋自動播放，因此展示時需要手動點擊「播放 BGM」。
