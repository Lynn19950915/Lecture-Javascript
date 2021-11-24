<h2 align="center">CSS 綜合練習題庫 第二回</h2>

試題參酌及改寫來源：
- [網頁設計考題彙編](https://dmaa.nkut.edu.tw/files/archive/104_601a3208.pdf)
- [20 道 CSS 基礎測試題](https://ppfocus.com/0/edc708893.html)
- [CSS 基礎試題](https://www.itread01.com/content/1545750563.html)<hr>

一、基礎題 (每題 3 分，共 30 分)

1. 使用 CSS 樣式表帶來的好處並不包含以下何項？<br>
`A. 提升下載網頁的效率`<br>
`B. 提升網頁刷新的速度`<br>
`C. 減少網頁撰寫的程式碼`<br>
`D. 增強對於元素的控制力`<br>

2. 若想要設定某段落的垂直對齊，應該使用：<br>
`A. float`<br>
`B. padding-top`<br>
`C. letter-spacing`<br>
`D. vertical-align`<br>

3. 以習慣而言，引用外部樣式表的位置會在：<br>
`A. <meta> 標籤中`<br>
`B. <head> 標籤中`<br>
`C. <html> 標籤以外的任意位置`<br>
`D. <body> 標籤中標題的下一行`<br>

4. W3C 規範主要分為結構、表現及行為三方面，以下配對正確的是：<br>
`A. DOM: 行為`<br>
`B. XML: 表現`<br>
`C. CSS: 結構`<br>
`D. HTML: 結構`<br>

5. 盒模型 (box-model) 是排版設計常見的要素，以下選項中不屬於盒模型的是：<br>
`A. margin`<br>
`B. border`<br>
`C. spacing`<br>
`D. element`<br>

6. 在 CSS 語言中，下列哪一項是背景顏色屬性的允許值？<br>
`A. justify`<br>
`B. baseline`<br>
`C. capitalize`<br>
`D. transparent`<br> 

7. 透過哪一個屬性可以調整元素的文字尺寸？<br>
`A. text-style`<br>
`B. font-style`<br>
`C. font-size`<br>
`D. text-size`<br> 

8. 如何於 CSS 文件中插入一行註解呢？<br>
`A. <!--My Comment-->`<br>
`B. /* My Comment */`<br>
`C. || My Comment`<br>
`D. # My Comment`<br> 

9. 閱讀以下程式碼，下列選項中與該程式碼效果相等的是：<br><br>
`.box {margin: 10px 5px; margin-right: 10px; margin-top: 5px}`<br><br>
`A. .box {margin: 5px 10px 0px 0px}`<br>
`B. .box {margin: 10px 5px 10px 5px}`<br>
`C. .box {margin: 10px 5px 0px 0px}`<br>
`D. .box {margin: 5px 10px 10px 5px}`<br> 

10. 在定義內部樣式表時，習慣上會將內容寫在哪一個標籤中？<br>
`A. <script>`<br>
`B. <style>`<br>
`C. <link>`<br>
`D. <css>`<br><hr>


二、進階題 (每題 5 分，共 70 分)

11. 閱讀以下程式碼，請問 div 容器的實際寬度為：<br><br>
`div {padding: 15px 0; border: 5px; width: 340px}`<br><br>
`A. 380px`<br>
`B. 370px`<br>
`C. 360px`<br>
`D. 350px`<br>

12. 類別 (class) 選擇器及 ID 選擇器為樣式定義的要角，這兩者的差別並不包含：<br>
`A. 單一元素不可設定多個 class`<br>
`B. 單一元素不可設定多個 id`<br>
`C. 多個元素可設定同一個 class`<br>
`D. 多個元素不可設定同個 id`<br>

13. 下列有關 \<hr> 標籤屬性的說明，內容正確的是：<br>
`A. hr 標籤必成對出現`<br>
`B. 可以透過 align 屬性，控制 hr 的對齊`<br>
`C. 可以透過 shade 屬性，控制 hr 的邊框`<br>
`D. 可以透過 space 屬性，控制 hr 的大小`<br>

14. 當一處網頁元素受到多次定義時，可能出現什麼情況？<br>
`A. 若定義相衝突，伺服器將報錯中止`<br>
`B. 外部樣式取代內聯樣式的定義內容`<br>
`C. 內聯樣式取代內部樣式的定義內容`<br>
`D. 先執行者取代後執行者的定義內容`<br>

15. 閱讀以下程式碼，請選出說明完全正確的選項：<br><br>
`div {margin: 5px; letter-spacing: 0.1em}`<br><br>
`A. div 屬於區塊元素，即本身已經內建 display:inline 設定`<br>
`B. 此類別選擇器包含兩個屬性，且同時使用了絕對及相對單位書寫`<br>
`C. 這兩項屬性都允許負值輸入，margin 還可以輸入多值分別定義`<br>
`D. 若於程式碼下加寫一行 div 樣式定義，這行內容將被略過執行`<br>

16. 美編團隊建議網頁中各種標題的顏色要一致，哪一項工具將有助於提升修改的效率？<br>
`A. ID 選擇器`<br>
`B. 類別選擇器`<br>
`C. 標籤選擇器`<br>
`D. 外部樣式表`<br>

```
17. 閱讀以下程式碼，試問兩個 div 之間的空白距離為：

<style type='text/css'>
.header {margin-bottom: 10px; border: 1px solid #FF5500}
.container {margin-top: 15px; border: 1px solid #0055FF}
</style>

<div class='header'></div>
<div class='container'></div>

A. 25px
B. 15px
C. 10px
D. 5px
```

18. 若想對所有 h4 標題設定樣式屬性，應該採用的語法是：<br>
`A. all.h4 {}`<br>
`B. @h4 {}`<br>
`C. .h4 {}`<br>
`D. h4 {}`<br>

19. 從 box-model 的觀點而言，width 屬性設定的值實際上等於：<br>
`A. content 區域寬度`<br>
`B. content 區域寬度加上 padding`<br>
`C. content 區域寬度減去 padding`<br>
`D. content 區域寬度加上 padding, border 和 margin`<br>

20. 請選出合規的類別選擇器命名：<br>
`A. #PROTOTYPEA`<br>
`B. .0001version`<br>
`C. .JustPlay4Fun`<br>
`D. #stylesheet003`<br>

21. 在 CSS 語言中，下列哪一種盒模型的設定是符合規範的？(多值：如 1px 2px 3px 4px)<br>
`A. 以多值設定 width 屬性`<br>
`B. 以多值設定 border 屬性`<br>
`C. 以負值設定 padding 屬性`<br>
`D. 以百分比設定 margin 屬性`<br>

22. 許多文字的屬性設定常以 font/text 為名，請選出配對正確的組合：<br>
`A. 文字的底線：font`<br>
`B. 文字的字型：text`<br>
`C. 文字的對齊：text`<br>
`D. 文字的顏色：font`<br>

23. 在 CSS 書寫時，有些屬性具有集合簡寫的特性，像是 background 含括了 color, image, size 等設定，無獨有偶，border 也是數個參數合併下的屬性。下列有關 border 的敘述，何者完全正確？<br>
`A. 邊框的顏色可由 border-style 定義`<br>
`B. 邊框的寬度可由 border-width 定義`<br>
`C. 若想設定四個邊框寬度，可寫為 border-width: 1px 2px 3px 4px`<br>
`D. 若想設定數個邊框屬性，可寫為 border: 0.1em; solid; #FFFF00`<br>

24. 下列何項屬性與元素的定位關係最遠？<br>
`A. float`<br>
`B. border`<br>
`C. z-index`<br>
`D. position`<br><hr>


參考答案與解析：
1. A。樣式表可減少內聯樣式的重複制訂，藉此提升網頁運行效率。
2. D
3. B
4. A。結構、表現、行為分別代表網頁的骨架、皮膚及動作。W3C 發布 XML, XHTML 等結構表現語言取代 HTML。
5. C
6. D
7. C。font-style 可設定斜體 (italic)。
8. A
9. D。衝突時後設定者會取代先設定者 (如上例中 margin-top 及 margin-right)。
10. B
11. D
12. A。class 可視開發需求制訂多個，但 id 有強烈的一對一關係 (故設定多個 id 無意義)。
13. B。控制線條粗細的是 size 屬性，可設定 noshade 除去陰影。
14. C。後執行者取代先執行者，優先順位：內聯樣式 > 內部樣式 > 外部樣式。
15. C。div 為標籤選擇器，內建 display:block；字距設定為負代表文字緊縮；倘若未產生衝突，則兩行的 div 樣式都會被執行。
16. B。多種標籤共用樣式時，可另創一個類別統一設定。
17. B。邊界重疊 (margin collapsing)：同層相鄰元素之距離，只會保留設定較大者。
18. D
19. A
20. C。類別選擇器以 . 為首，大小寫可混合，但不接受數字開頭。
21. D。盒模型中僅 margin 可為負值，且只有 padding, margin 接受多值設定 (各側寬度需由 border top/bottom/left/right 分別定義)。
22. C。A: text-decoration；B: font-family；C: text-align；D: color。
23. B。border style 定義邊框樣式 (如實／虛線)；各側寬度需由 border top/bottom/left/right 分別定義。
24. B。float, z-index 都具有垂直定位的功能；border 影響的是元素框界。
