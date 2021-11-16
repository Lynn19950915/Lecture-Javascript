/* 主題：CSS 綜合練習題庫 第二回

試題參酌及改寫來源：
1. 網頁設計考題彙編 https://dmaa.nkut.edu.tw/files/archive/104_601a3208.pdf
2. 20 道 CSS 基礎測試題 https://ppfocus.com/0/edc708893.html
3. CSS 基礎試題 https://www.itread01.com/content/1545750563.html */


var css_test=[
    // 一、基礎題 (每題 3 分，共 30 分)
    {
        question: "1. 使用 CSS 樣式表帶來的好處並不包含以下何項？[3分]\n\nA. 提升下載網頁的效率\nB. 提升網頁刷新的速度\nC. 減少網頁撰寫的程式碼\nD. 增強對於元素的控制力",
        point: 3,
        answer: "A",
        note: "樣式表可減少內聯樣式的重複制訂，藉此提升網頁運行效率。"
    },
    {
        question: "2. 若想要設定某段落的垂直對齊，應該使用：[3分]\n\nA. float\nB. padding-top\nC. letter-spacing\nD. vertical-align",
        point: 3,
        answer: "D",
        note: ""
    },
    {
        question: "3. 以習慣而言，引用外部樣式表的位置會在：[3分]\n\nA. <meta> 標籤中\nB. <head> 標籤中\nC. <html> 標籤以外的任意位置\nD. <body> 標籤中標題的下一行",
        point: 3,
        answer: "B",
        note: ""
    },
    {
        question: "4. W3C 規範主要分為結構、表現及行為三方面，以下配對正確的是：[3分]\n\nA. DOM: 行為\nB. XML: 表現\nC. CSS: 結構\nD. HTML: 結構",
        point: 3,
        answer: "A",
        note: "結構、表現、行為分別代表網頁的骨架、皮膚及動作。W3C 發布 XML, XHTML 等結構表現語言取代 HTML。"
    },
    {
        question: "5. 盒模型 (box-model) 是排版設計常見的要素，以下選項中不屬於盒模型的是：[3分]\n\nA. margin\nB. border\nC. spacing\nD. element",
        point: 3,
        answer: "C",
        note: ""
    },
    {
        question: "6. 在 CSS 語言中，下列哪一項是背景顏色屬性的允許值？[3分]\n\nA. justify\nB. baseline\nC. capitalize\nD. transparent",
        point: 3,
        answer: "D",
        note: ""
    },
    {
        question: "7. 透過哪一個屬性可以調整元素的文字尺寸？[3分]\n\nA. text-style\nB. font-style\nC. font-size\nD. text-size",
        point: 3,
        answer: "C",
        note: "font-style 可設定斜體 (italic)。"
    },
    {
        question: "8. 如何於 CSS 文件中插入一行註解呢？[3分]\n\nA. <!--My Comment-->\nB. /* My Comment */\nC. || My Comment\nD. # My Comment",
        point: 3,
        answer: "A",
        note: ""
    },
    {
        question: "9. 閱讀以下程式碼，下列選項中與該程式碼效果相等的是：[3分]\n.box {margin: 10px 5px; margin-right: 10px; margin-top: 5px}\n\nA. .box {margin: 5px 10px 0px 0px}\nB. .box {margin: 10px 5px 10px 5px}\nC. .box {margin: 10px 5px 0px 0px}\nD. .box {margin: 5px 10px 10px 5px}",
        point: 3,
        answer: "D",
        note: "衝突時後設定者會取代先設定者 (如上例中 margin-top 及 margin-right)。"
    },
    {
        question: "10. 在定義內部樣式表時，習慣上會將內容寫在哪一個標籤中？[3分]\n\nA. <script>\nB. <style>\nC. <link>\nD. <css>",
        point: 3,
        answer: "B",
        note: ""
    },
    
    // 二、進階題 (每題 5 分，共 70 分)
    {
        question: "11. 閱讀以下程式碼，請問 div 容器的實際寬度為：[5分]\ndiv {padding: 15px 0; border: 5px; width: 340px}\n\nA. 380px\nB. 370px\nC. 360px\nD. 350px",
        point: 5,
        answer: "D",
        note: ""
    },
    {
        question: "12. 類別 (class) 選擇器及 ID 選擇器為樣式定義的要角，這兩者的差別並不包含：[5分]\n\nA. 單一元素不可設定多個 class\nB. 單一元素不可設定多個 id\nC. 多個元素可設定同一個 class\nD. 多個元素不可設定同個 id",
        point: 5,
        answer: "A",
        note: "class 可視開發需求制訂多個，但 id 有強烈的一對一關係 (故設定多個 id 無意義)。"
    },
    {
        question: "13. 下列有關 <hr> 標籤屬性的說明，內容正確的是：[5分]\n\nA. hr 標籤必成對出現\nB. 可以透過 align 屬性，控制 hr 的對齊\nC. 可以透過 shade 屬性，控制 hr 的邊框\nD. 可以透過 space 屬性，控制 hr 的大小",
        point: 5,
        answer: "B",
        note: "控制線條粗細的是 size 屬性，可設定 noshade 除去陰影。"
    },
    {
        question: "14. 當一處網頁元素受到多次定義時，可能出現什麼情況？[5分]\n\nA. 若定義相衝突，伺服器將報錯中止\nB. 外部樣式取代內聯樣式的定義內容\nC. 內聯樣式取代內部樣式的定義內容\nD. 先執行者取代後執行者的定義內容",
        point: 5,
        answer: "C",
        note: "後執行者取代先執行者，優先順位：內聯樣式 > 內部樣式 > 外部樣式。"
    },
    {
        question: "15. 閱讀以下程式碼，請選出說明完全正確的選項：[5分]\ndiv {margin: 5px; letter-spacing: 0.1em}\n\nA. div 屬於區塊元素，即本身已經內建 display:inline 設定\nB. 此類別選擇器包含兩個屬性，且同時使用了絕對及相對單位書寫\nC. 這兩項屬性都允許負值輸入，margin 還可以輸入多值分別定義\nD. 若於程式碼下加寫一行 div 樣式定義，這行內容將被略過執行",
        point: 5,
        answer: "C",
        note: "div 為標籤選擇器，內建 display:block；字距設定為負代表文字緊縮；倘若未產生衝突，則兩行的 div 樣式都會被執行。"
    },
    {
        question: "16. 美編團隊建議網頁中各種標題的顏色要一致，哪一項工具將有助於提升修改的效率？[5分]\n\nA. ID 選擇器\nB. 類別選擇器\nC. 標籤選擇器\nD. 外部樣式表",
        point: 5,
        answer: "B",
        note: "多種標籤共用樣式時，可另創一個類別統一設定。"
    },
    {
        question: "17. 閱讀以下程式碼，試問兩個 div 之間的空白距離為：[5分]\n<style type='text/css'>\n.header {margin-bottom: 10px; border: 1px solid #FF5500}\n.container {margin-top: 15px; border: 1px solid #0055FF}\n</style>\n\n<div class='header'></div>\n<div class='container'></div>\n\nA. 25px\nB. 15px\nC. 10px\nD. 5px",
        point: 5,
        answer: "B",
        note: "邊界重疊 (margin collapsing)：同層相鄰元素之距離，只會保留設定較大者。"
    },
    {
        question: "18. 若想對所有 h4 標題設定樣式屬性，應該採用的語法是：[5分]\n\nA. all.h4 {}\nB. @h4 {}\nC. .h4 {}\nD. h4 {}",
        point: 5,
        answer: "D",
        note: ""
    },
    {
        question: "19. 從 box-model 的觀點而言，width 屬性設定的值實際上等於：[5分]\n\nA. content 區域寬度\nB. content 區域寬度加上 padding\nC. content 區域寬度減去 padding\nD. content 區域寬度加上 padding, border 和 margin",
        point: 5,
        answer: "A",
        note: ""
    },
    {
        question: "20. 請選出合規的類別選擇器命名：[5分]\n\nA. #PROTOTYPEA\nB. .0001version\nC. .JustPlay4Fun\nD. #stylesheet003",
        point: 5,
        answer: "C",
        note: "類別選擇器以 . 為首，大小寫可混合，但不接受數字開頭。"
    },
    {
        question: "21. 在 CSS 語言中，下列哪一種盒模型的設定是符合規範的？(多值：如 1px 2px 3px 4px)[5分]\n\nA. 以多值設定 width 屬性\nB. 以多值設定 border 屬性\nC. 以負值設定 padding 屬性\nD. 以百分比設定 margin 屬性",
        point: 5,
        answer: "D",
        note: "盒模型中僅 margin 可為負值，且只有 padding, margin 接受多值設定 (各側寬度需由 border top/bottom/left/right 分別定義)。"
    },
    {
        question: "22. 許多文字的屬性設定常以 font/text 為名，請選出配對正確的組合：[5分]\n\nA. 文字的底線：font\nB. 文字的字型：text\nC. 文字的對齊：text\nD. 文字的顏色：font",
        point: 5,
        answer: "C",
        note: "A: text-decoration；B: font-family；C: text-align；D: color。"
    },
    {
        question: "23. 在 CSS 書寫時，有些屬性具有集合簡寫的特性，像是 background 含括了 color, image, size 等設定，無獨有偶，border 也是數個參數合併下的屬性。下列有關 border 的敘述，何者完全正確？[5分]\n\nA. 邊框的顏色可由 border-style 定義\nB. 邊框的寬度可由 border-width 定義\nC. 若想設定四個邊框寬度，可寫為 border-width: 1px 2px 3px 4px\nD. 若想設定數個邊框屬性，可寫為 border: 0.1em; solid; #FFFF00",
        point: 5,
        answer: "B",
        note: "border style 定義邊框樣式 (如實／虛線)；各側寬度需由 border top/bottom/left/right 分別定義。"
    },
    {
        question: "24. 下列何項屬性與元素的定位關係最遠？[5分]\n\nA. float\nB. border\nC. z-index\nD. position",
        point: 5,
        answer: "B",
        note: "float, z-index 都具有垂直定位的功能；border 影響的是元素框界。"
    }
]


var score=0;

for(var i=0; i<css_test.length; i++){
    // 以 prompt 收答案
    var answer=prompt(css_test[i].question);
    
    if(answer==css_test[i].answer){
        score+=css_test[i].point;
    }else{
        if(css_test[i].note==""){
            alert("答案為 "+css_test[i].answer);
        }else{
            alert("答案為 "+css_test[i].answer+"\n"+css_test[i].note);
        }
    }
}

alert("測驗結束，你的分數是："+score);
