# Twitch_echo_bot

## 環境設定
[Windows版本](https://nodejs.org/dist/v16.14.0/node-v16.14.0-x64.msi)

[Nodejs安裝教學](https://www.runoob.com/nodejs/nodejs-install-setup.html)

[線上版VScode](https://vscode.dev/)

## 安裝套件

下載資料夾內的壓縮檔並且解壓縮至桌面
打開cmd
輸入 : 
```DOS
cd C:\Users\USER\Desktop\echoBot\
```
![image](https://user-images.githubusercontent.com/55253641/153766964-ba9ec827-6d93-460f-897a-f18f15166f62.png)

輸入 : 
```DOS
npm install
```

![image](https://user-images.githubusercontent.com/55253641/153766362-cf9d0d19-679e-46b2-8af9-64494ddc5f15.png)

[cmd cd用法教學](https://dotblogs.com.tw/CYLcode/2018/09/13/102159)

## 線上版VScode
點選open folder

![image](https://user-images.githubusercontent.com/55253641/153766901-e1724db9-dbb0-478c-9276-ee41cc4e246a.png)

## 程式碼更改內容

[獲取帳號聊天室token](https://twitchapps.com/tmi/)

每隻帳號都要獲取聊天室token

![image](https://user-images.githubusercontent.com/55253641/153767144-e9eb1f0c-a3e7-49ea-8b10-a7cc66c2afb8.png)

將你的Twitch_ID貼到user name的單引號內，password就是去網頁獲取token

![image](https://user-images.githubusercontent.com/55253641/153767161-c5b2db4b-30e0-4a09-9cd8-cb09f211a6d3.png)

這邊是機器人的設定一樣Twitch_ID貼到user name的單引號內，password就是去網頁獲取token


## 執行程式

打開cmd，輸入 : 
```DOS
cd C:\Users\USER\Desktop\echoBot\
```

![image](https://user-images.githubusercontent.com/55253641/153766330-9b70099a-1e74-40ce-a4fd-8077b14ee4c1.png)

然後輸入 : 
```DOS
node .\bot-twitch-echo.js
```

![image](https://user-images.githubusercontent.com/55253641/153766404-1dc98be0-abfe-4778-b83e-48d4be840d24.png)


## 結果

前端顯示 : 

![image](https://user-images.githubusercontent.com/55253641/153766424-b1cd9cd9-d0ca-44bc-84fa-1bb763c3d2b9.png)

後端顯示 : 

![image](https://user-images.githubusercontent.com/55253641/153766449-c6a13939-bdfe-4cde-969a-746832130218.png)

