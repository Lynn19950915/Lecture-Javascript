<h2 align="center">HTML 綜合練習題庫 第一回</h2>

試題參酌及改寫來源：
- [網頁設計考題彙編](https://dmaa.nkut.edu.tw/files/archive/104_601a3208.pdf)
- [很酷！HTML 經典試題](https://designrockin.wordpress.com/2014/12/03/%E5%BE%88%E9%85%B7%EF%BC%81html%E7%B6%93%E5%85%B8%E8%A9%A6%E9%A1%8C)<hr>

一、基礎題 (每題 4 分，共 40 分)

1. 若連結的目標尚未建立，可將其建立成空連結，這時需要於欄位中輸入：<br>
`A. /`<br>
`B. *`<br>
`C. .`<br>
`D. #`<br>

2. 下列何者能顯示表格的分隔線？<br>
`A. <table lines>`<br>
`B. <table rules>`<br>
`C. <table rule>`<br>
`D. <table line>`<br>

3. 如何於頁面中產生一條水平線？<br>
`A. <hr>`<br>
`B. <tr>`<br>
`C. <br>`<br>
`D. <tt>`<br>

4. 一般來說，網站的首頁通常會以什麼命名：<br>
`A. home`<br>
`B. main`<br>
`C. index`<br>
`D. homepage`<br>

5. 框架頁標記的基本語法為：<br>
`A. <frameset></frameset>`<br>
`B. <frames></frames>`<br>
`C. <framed></framed>`<br>
`D. <frame></frame>`<br>

6. 在 HTML 中，用來嵌入背景音樂的代碼是：<br>
`A. <bgsound src=>`<br>
`B. <bgsound url=>`<br>
`C. <backsound url=>`<br>
`D. <backsound src=>`<br>

7. 若要定義有序列表的數字標號，應該使用：<br>
`A. alt`<br>
`B. min`<br>
`C. start`<br>
`D. begin`<br>

8. 若想防止網頁的內容出現自動斷行，可以使用：<br>
`A. nowrap`<br>
`B. rowspan`<br>
`C. padding`<br>
`D. noresize`<br>

```
9. 以下這段程式碼的功能是表示：

<body leftmargin=?>

A. 頁面左邊表格大小
B. 頁面左邊的空白大小
C. 頁面左邊的可用區域大小
D. 頁面左邊的可編輯區域大小
```

```
10. 閱讀以下程式碼，請問 ltr 代表的作用是：

<marquee dir=ltr>

A. 水平鏡像移動
B. 垂直鏡像移動
C. 由右至左移動
D. 由左至右移動
```
<br>

二、進階題 (每題 6 分，共 60 分)

11. 下列何者能產生一個跳轉到 hello.html 頁面中 bn 段落的連接？<br>
`A. <a href='hello.html&bn'></a>`<br>
`B. <a href='bn@hello.html'></a>`<br>
`C. <a href='hello.html.bn'></a>`<br>
`D. <a href='hello.html#bn'></a>`<br>

12. 若想要以開啟新視窗的方式呈現連結，應採用下列何者？<br>
`A. target=_top`<br>
`B. target=_self`<br>
`C. target=_blank`<br>
`D. target=_parent`<br>

13. 框架設定時必用的兩個屬性為 cols 及 rows，它們分別代表：<br>
`A. 框架的行高、框架的列寬`<br>
`B. 框架的列數、框架的行數`<br>
`C. 框架的行寬、框架的列高`<br>
`D. 框架的列寬、框架的行高`<br>

```
14. 閱讀以下程式碼，這段程式將使得標題字串出現在：

<title>網站標題</title>

A. 狀態列
B. 網頁標題
C. 網頁第一行
D. 瀏覽器標題列
```

15. 以下哪個標籤可產生文字的上標效果？<br>
`A. <top>`<br>
`B. <sub>`<br>
`C. <sup>`<br>
`D. <cite>`<br>

16. 在 HTML 中，用來定義表格背景圖像的代碼是：<br>
`A. <tr background=>`<br>
`B. <th background=>`<br>
`C. <th src=>`<br>
`D. <tr src=>`<br>

17. 若想設定移動文字的循環次數，應該使用：<br>
`A. loop`<br>
`B. time`<br>
`C. scroll`<br>
`D. scrollamount`<br>

```
18. 以下這段程式碼的功能是表示：

<table rules=col>

A. 只顯示列跟列之間的分隔線
B. 將表格內容分行顯示
C. 將表格內容分色顯示
D. 只顯示組跟組之間的分隔線
```

19. 如何於頁面中產生一個無序列表？<br>
`A. <li><ul>...</li>`<br>
`B. <ul><li>...</ul>`<br>
`C. <ol><li>...</ol>`<br>
`D. <li><ol>...</li>`<br>

```
20. 孫老師正在編輯以下命題程式，他最可能正在出一道：

<input name='test' size=20>

A. 複選題
B. 申論題
C. 單選題
D. 簡答題
```
<br>

參考答案與解析：
1. D
2. B
3. A。br 是呈現空行效果。注意：hr, br 都可不加閉標籤。
4. C
5. A
6. A。bgsound 主要適用於 IE 瀏覽器，建議使用 audio。
7. C
8. A。rowspan 功能相反，處理表格的跨行需求；noresize 常用於控制框架大小不變。
9. B
10. D
11. D
12. C。_top 將於原視窗呈現全螢幕畫面；_parent 在無巢狀階層的結構下效果等同 _self。
13. D。寬度由列 cols 決定，常用單位為 px/%。例：cols='25%, 50%, 25%'。
14. D。通常會寫在 head，與網頁標題或內容並無關聯 (應使用 h1~h6)。
15. C。cite 是文字引用的效果；top 並不存在。
16. B
17. A。scrollamount 可控制循環的速度；無 scroll 屬性。
18. A
19. B。li 以列表項為單位，被包覆於 ul/ol 中產生。
20. D
