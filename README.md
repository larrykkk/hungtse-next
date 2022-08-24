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

(開啟終端機: 點擊開始以後輸入 cmd + enter)
(
下載 nvm 18.6.0
nvm install 18.6.0

切換使用 node 18.6.0
nvm use 18.6.0

檢查是否成功
nvm ls

這時候應該會顯示 
 * 18.6.0 (Currently using 64-bit executable)
)

安裝 pm2
npm install pm2 -g

(確認成功: pm2 -v)

安裝 pm2-windows-startup
npm install pm2-windows-startup -g

(cmd 輸入 'cd  \Users\user\Desktop\hungtse-next-main' 切換目錄到網站程式碼資料夾下)

安裝網站需要的模組
npm i

設置環境變數，參考 .env.local.example 新增 .env.local
(https://www.google.com/recaptcha/about/)

npm run build

pm2 start (如果是重新安裝的話用 pm2 restart all)

打開 localhost:3000 確認畫面正常

pm2-startup install

pm2 save

重啟後 pm2 ls 確認是否進程還在
```

### Check pm2 process 
```
pm2 ls
```
