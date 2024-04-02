<h2 align="center">CSS 綜合練習題庫 第一回</h2>

試題參酌及改寫來源：
- [網頁設計考題彙編](https://dmaa.nkut.edu.tw/files/archive/104_601a3208.pdf)
- [20 道 CSS 基礎測試題](https://ppfocus.com/0/edc708893.html)
- [CSS 基礎試題](https://www.itread01.com/content/1545750563.html)<hr>

一、基礎題 (每題 3 分，共 30 分)

1. 在網頁原始碼中常見 <!DOCTYPE> 的宣告，以下相關說明無誤的是：<br>
`A. 可用來定義網頁的編碼`<br>
`B. 可做為網頁版權的浮水印`<br>
`C. 缺乏宣告將會導致執行報錯`<br>
`D. 常定義在 <html> 標籤之內`<br>

2. 下列有關 CSS 樣式表的撰寫格式，符合規範者是：<br>
`A. 屬性和值成對定義，兩者以等號連接`<br>
`B. 若定義多個屬性，要用頓號彼此區隔`<br>
`C. 屬性定義前一律需加上 style 標示`<br>
`D. 若屬性有多個值，要用空格彼此區隔`<br>

3. 從 display 觀點而言，下列何者的層級與其他三者不同？<br>
`A. <a>`<br>
`B. <ul>`<br>
`C. <h1>`<br>
`D. <hr>`<br>

4. 外部樣式表無法由以下哪個方法匯入：<br>
`A. link`<br>
`B. style`<br>
`C. import`<br>
`D. 附加樣式表`<br>

```
5. 閱讀以下程式碼，這段程式的作用是：

<table border=>

A. 設置表格內容與邊框間的空間大小
B. 設置表格格子之間的空間大小
C. 設置表格邊框的寬度
D. 設置表格的寬度
```

```
6. 閱讀以下程式碼，這段程式的作用是：

<a href='#NAME'></a>

A. 產生一個來自於 NAME 的連結
B. 產生一個導引至 #NAME 頁面的連結
C. 產生一個寄信給 NAME 的連結
D. 產生一個導引至 NAME 段落的連結
```

7. 我們常使用皮膚、骨架和動作來比喻 Javascript, HTML 與 CSS 的關聯，這三者代表的依序是：<br>
`A. 皮膚、骨架、動作`<br>
`B. 動作、皮膚、骨架`<br>
`C. 骨架、動作、皮膚`<br>
`D. 動作、骨架、皮膚`<br>

8. 下列哪一組並非有效的文字尺寸設定值？<br>
`A. 95%`<br>
`B. 22pt`<br>
`C. 1.8cm`<br>
`D. medium`<br>

9. 要如何修改元素的左側邊框寬度呢？<br>
`A. border-left`<br>
`B. this.left.width`<br>
`C. 無法修改單一邊框寬度`<br>
`D. padding-left-width`<br>

10. 如果想設定網頁文句以大寫字母開頭，以下操作正確者為：<br>
`A. 使用 text-decoration 屬性`<br>
`B. 使用 font-style 屬性`<br>
`C. 設定值為 capitalize`<br>
`D. 設定值為 top`<br><hr>


二、進階題 (每題 5 分，共 70 分)

11. 如果想要修改某個超連結的顏色，應使用以下何段程式碼？<br>
`A. a {font-color: #FFFF00}`<br>
`B. <a style='color: #FFFF00'>`<br>
`C. a {style='color: #FFFF00'}`<br>
`D. <a style='text-color: #FFFF00'>`<br>

12. 下列關於 span 元素的說明，內容完全正確的是：<br>
`A. span 是類似於一行一列表格的虛線框`<br>
`B. 可以透過 style 屬性直接定義 span 的高度及寬度`<br>
`C. span 可以被包覆於其他容器 (又稱為盒子模型) 中`<br>
`D. 一般來說，兩個相鄰的 span 元素不會發生並列顯示`<br>

```
13. 閱讀以下程式碼，請問 Rainy Day 最終顯示的顏色會是：

<style type='text/css'>
body {color: #C4C400}
#text {color: #F500F5}
.content {color: #00FFBB}
.gray {color: #FFFF00}
</style>

<p id='text' class='content gray'>Rainy Day</p>

A. #FFFF00
B. #C4C400
C. #F500F5
D. #00FFBB
```

14. 相對定位方式 (relative) 的執行是相對區塊本身的位置而言。設某區塊為 relative 定位，若想將之往下移動 10px，屬性應如何調整？<br>
`A. top: 10px`<br>
`B. bottom: 10px`<br>
`C. margin: -10px`<br>
`D. padding-top: 10px`<br>

```
15. 閱讀以下程式碼，我們通常會將這類選擇器稱為：

a:active {text-align: center}

A. 屬性選擇器
B. 狀態選擇器
C. 類型選擇器
D. 後裔選擇器
```

16. 以下哪一個 CSS 屬性適用於所有物件：<br>
`A. style`<br>
`B. font-size`<br>
`C. background`<br>
`D. vertical-align`<br>

```
17. 閱讀以下程式碼，試問：圖片距離最外層 div 的邊距為何？

<style type='text/css'>
#outer {width: 250px; border: 15px solid #FF0000}
#inner {border: 25px solid #CCFFFF; margin: 20px; padding: 10px}
</style>

<div id='outer'>
<div id='inner'><img src='flower.jpeg' /></div>
</div>

A. 250px
B. 140px
C. 110px
D. 70px"
```

18. 在取消文字底線時，需要加入的屬性值為：<br>
`A. none`<br>
`B. auto`<br>
`C. no underline`<br>
`D. no borderline`<br>

19. 以下有關 CSS 樣式表的說明，何者內容完全正確？<br>
`A. 樣式表可以精確控制網頁中文字大小、字體、顏色、間距等風格，且能與腳本語言相結合`<br>
`B. 外部樣式表具有簡潔統一等特點，通常以 css 為檔名，內容則定義於 style 標籤之中`<br>
`C. 內部樣式表具有細部客製的優勢，直接撰寫於文件中，唯衝突時易被瀏覽器常規設定覆蓋`<br>
`D. 一份樣式表雖可被多個網頁引用，但考量衝突疑慮，單一網頁只能 import 一份樣式表`<br>

20. 倘若需要加大區塊之間的距離，可以採用哪個屬性？<br>
`A. line-height`<br>
`B. font-weight`<br>
`C. padding`<br>
`D. margin`<br>

21. 以下哪一個 CSS 屬性是真實存在的：<br>
`A. font`<br>
`B. bgcolor`<br>
`C. text-style`<br>
`D. background`<br>

22. 現有一份樣式表 goodstyle.css，請選出正確引用這份資料的方法：<br>
`A. <link rel='stylesheet' type='text/css' href='goodstyle.css'>`<br>
`B. <stylesheet type='text/css'>goodstyle.css</stylesheet>`<br>
`C. <style type='text/css' link='goodstyle.css'></style>`<br>
`D. <stylesheet src='goodstyle.css'></stylesheet>`<br>

```
23. 閱讀以下程式碼，若要設定 ul 內容的樣式，在不影響其他相同標籤之下，應如何設定選擇器？

<banner id='first'>
<ul>...</ul>
</banner>

A. banner ul
B. #first ul
C. first > ul
D. banner > #first
```

24. 除了使用 b 標籤外，以下哪一段 CSS 參數也可設定文字的粗體效果？<br>
`A. text: bold`<br>
`B. font-style: b`<br>
`C. font-weight: bold`<br>
`D. text-decoration: strong`<br><hr>


參考答案與解析：
1. C。DOCTYPE 代表文件型別，必須先於所有程式碼宣告；網頁編碼則由 meta charset 定義。
2. D。範例：p {border: 1px solid #FF00FF; font-size: 1em}。補充：內聯樣式才需搭配 style 屬性。
3. A
4. B。@import url('abc.css') 也可匯用樣式表。
5. C。A: cellpadding；B: cellspacing；D: width (可使用絕對或相對單位)。
6. D。以 # 開頭代表非換頁，而是導至頁面中的某段落；連結寄信採用 mailto 屬性。
7. D
8. B
9. A
10. C。text-transform: capitalize。
11. B。特定元素需使用內聯樣式，標籤選擇器會影響其他超連結的色彩。
12. C。span 屬於行內元素 (display: inline)，不可定義長寬尺寸；單行格虛線框所描述的是 div。
13. A
14. A。相對於原訂的頂端位置距離 10px，即將區塊向下移。
15. B。A: a\[target='_blank']；C: 即標籤選擇器。
16. C。style 並非 CSS 的屬性；font-size 對非文字元素無效；inline 物件無法設定垂直對齊。
17. D。250px 是代表整個內層元素 #inner 的實際寬度 (不包括 #outer border)，故圖片的實際寬度為 140px。
18. A。text-decoration: none。
19. A。style 標籤定義的是內部樣式表；網頁可引用多份樣式，惟衝突時以後執行者為優先：內聯樣式 > 內部樣式 > 外部樣式 >瀏覽器 default 值。
20. D。A: 加大行間的距離；B: 文字加粗；C: 加大內容與區塊之間距。
21. D。bgcolor 標籤即 CSS 的 background-color 屬性，而 background 則為各背景參數的集合寫法；字型及斜體分別以 font-family, font-style 設定。
22. A
23. B。此即後裔選擇器用法；banner ul 會使得同結構的列表都受影響，宜設定 id 選擇器。
24. C。b, strong 標籤均可產生粗體；font-style 可設定斜體 (italic)。
