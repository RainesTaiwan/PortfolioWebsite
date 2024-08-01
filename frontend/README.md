# frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

App.vue
功能：作為應用程序的主要組件，包含其他所有組件。
主要職責：
導入並組織其他組件
提供全局樣式

PageHeader.vue
功能：顯示網站的頁面頭部，包括導航菜單。
主要職責：
顯示網站 logo
提供導航菜單
實現響應式設計，在移動設備上顯示漢堡菜單
處理平滑滾動到指定部分

MainContent.vue
功能：顯示網站的主要內容，包括個人介紹、技能、項目和聯繫表單。
主要職責：
顯示個人資料圖片
展示個人介紹、技能和項目
提供聯繫表單
處理表單提交

SocialIcons.vue
功能：顯示社交媒體圖標。
主要職責：
顯示社交媒體圖標
提供社交媒體鏈接

main.js
功能：作為應用程序的入口點。
主要職責：
創建 Vue 應用實例
添加全局樣式