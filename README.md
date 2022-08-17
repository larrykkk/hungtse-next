# 竑澤實業股份有限公司 形象官網

使用 Nextjs / Gitbhu Actions 打造的形象官網  
網頁內容包含 輪播 / 圖片庫燈箱 / Email 聯絡表單

![image](https://user-images.githubusercontent.com/25131952/181602885-d64903f7-b80f-4cc9-9e8e-36d7d988d033.png)

## Link
[DEMO](https://larrykkk.github.io/hungtse-next/)

## Project status
已完成

## Tech stack

- React
- Next.js
- Github Actions
- Sass

## Setup

### Development

```
npm i
npm run dev
```

### Deployment

```
下載程式碼
https://github.com/larrykkk/hungtse-next

安裝 Nodejs 18.6.0
https://github.com/coreybutler/nvm-windows/releases

(開啟終端機)

安裝 pm2
npm install pm2 -g

安裝 pm2-windows-startup
npm install pm2-windows-startup -g

(cd hungtse-next-main)

安裝網站需要的模組
npm i

設置環境變數，參考 .env.local.example 新增 .env.local

npm run build

pm2 start

打開 localhost:3000 確認畫面正常

pm2-startup install

pm2 save

重啟後 pm2 ls 確認是否進程還在
```

### Check pm2 process 
```
pm2 ls
```
