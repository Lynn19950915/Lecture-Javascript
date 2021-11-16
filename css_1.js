/* 主題：CSS 綜合練習題庫 第一回

試題參酌及改寫來源：
1. 網頁設計考題彙編 https://dmaa.nkut.edu.tw/files/archive/104_601a3208.pdf
2. 20 道 CSS 基礎測試題 https://ppfocus.com/0/edc708893.html
3. CSS 基礎試題 https://www.itread01.com/content/1545750563.html */


var css_test=[
    // 一、基礎題 (每題 3 分，共 30 分)
    {
        question: "1. 在網頁原始碼中常見 <!DOCTYPE> 的宣告，以下相關說明無誤的是：[3分]\n\nA. 可用來定義網頁的編碼\nB. 可做為網頁版權的浮水印\nC. 缺乏宣告將會導致執行報錯\nD. 常定義在 <html> 標籤之內",
        point: 3,
        answer: "C",
        note: "DOCTYPE 代表文件型別，必須先於所有程式碼宣告；網頁編碼則由 meta charset 定義。"
    },
    {
        question: "2. 下列有關 CSS 樣式表的撰寫格式，符合規範者是：[3分]\n\nA. 屬性和值成對定義，兩者以等號連接\nB. 若定義多個屬性，要用頓號彼此區隔\nC. 屬性定義前一律需加上 style 標示\nD. 若屬性有多個值，要用空格彼此區隔",
        point: 3,
        answer: "D",
        note: "範例：p {border: 1px solid #FF00FF; font-size: 1em}。補充：內聯樣式才需搭配 style 屬性。"
    },
    {
        question: "3. 從 display 觀點而言，下列何者的層級與其他三者不同？[3分]\n\nA. <a>\nB. <ul>\nC. <h1>\nD. <hr>",
        point: 3,
        answer: "A",
        note: ""
    },
    {
        question: "4. 外部樣式表無法由以下哪個方法匯入：[3分]\n\nA. link\nB. style\nC. import\nD. 附加樣式表",
        point: 3,
        answer: "B",
        note: "@import url('abc.css') 也可匯用樣式表。"
    },
    {
        question: "5. 閱讀以下程式碼，這段程式的作用是：[3分]\n<table border=>\n\nA. 設置表格內容與邊框間的空間大小\nB. 設置表格格子之間的空間大小\nC. 設置表格邊框的寬度\nD. 設置表格的寬度",
        point: 3,
        answer: "C",
        note: "A: cellpadding；B: cellspacing；D: width (可使用絕對或相對單位)。"
    },
    {
        question: "6. 閱讀以下程式碼，這段程式的作用是：[3分]\n<a href='#NAME'></a>\n\nA. 產生一個來自於 NAME 的連結\nB. 產生一個導引至 #NAME 頁面的連結\nC. 產生一個寄信給 NAME 的連結\nD. 產生一個導引至 NAME 段落的連結",
        point: 3,
        answer: "D",
        note: "以 # 開頭代表非換頁，而是導至頁面中的某段落；連結寄信採用 mailto 屬性。"
    },
    {
        question: "7. 我們常使用皮膚、骨架和動作來比喻 Javascript, HTML 與 CSS 的關聯，這三者代表的依序是：[3分]\n\nA. 皮膚、骨架、動作\nB. 動作、皮膚、骨架\nC. 骨架、動作、皮膚\nD. 動作、骨架、皮膚",
        point: 3,
        answer: "D",
        note: ""
    },
    {
        question: "8. 下列哪一組並非有效的文字尺寸設定值？[3分]\n\nA. 95%\nB. 22pt\nC. 1.8cm\nD. medium",
        point: 3,
        answer: "B",
        note: ""
    },
    {
        question: "9. 要如何修改元素的左側邊框寬度呢？[3分]\n\nA. border-left\nB. this.left.width\nC. 無法修改單一邊框寬度\nD. padding-left-width",
        point: 3,
        answer: "A",
        note: ""
    },
    {
        question: "10. 如果想設定網頁文句以大寫字母開頭，以下操作正確者為：[3分]\n\nA. 使用 text-decoration 屬性\nB. 使用 font-style 屬性\nC. 設定值為 capitalize\nD. 設定值為 top",
        point: 3,
        answer: "C",
        note: "text-transform: capitalize。"
    },
    
    // 二、進階題 (每題 5 分，共 70 分)
    {
        question: "11. 如果想要修改某個超連結的顏色，應使用以下何段程式碼？[5分]\n\nA. a {font-color: #FFFF00}\nB. <a style='color: #FFFF00'>\nC. a {style='color: #FFFF00'}\nD. <a style='text-color: #FFFF00'>",
        point: 5,
        answer: "B",
        note: "特定元素需使用內聯樣式，標籤選擇器會影響其他超連結的色彩。"
    },
    {
        question: "12. 下列關於 span 元素的說明，內容完全正確的是：[5分]\n\nA. span 是類似於一行一列表格的虛線框\nB. 可以透過 style 屬性直接定義 span 的高度及寬度\nC. span 可以被包覆於其他容器 (又稱為盒子模型) 中\nD. 一般來說，兩個相鄰的 span 元素不會發生並列顯示",
        point: 5,
        answer: "C",
        note: "span 屬於行內元素 (display: inline)，不可定義長寬尺寸；單行格虛線框所描述的是 div。"
    },
    {
        question: "13. 閱讀以下程式碼，請問 Rainy Day 最終顯示的顏色會是：[5分]\n<style type='text/css'>\nbody {color: #C4C400}\n#text {color: #F500F5}\n.content {color: #00FFBB}\n.gray {color: #FFFF00}\n</style>\n\n<p id='text' class='content gray'>Rainy Day</p>\n\nA. #FFFF00\nB. #C4C400\nC. #F500F5\nD. #00FFBB",
        point: 5,
        answer: "A",
        note: ""
    },
    {
        question: "14. 相對定位方式 (relative) 的執行是相對區塊本身的位置而言。設某區塊為 relative 定位，若想將之往下移動 10px，屬性應如何調整？[5分]\n\nA. top: 10px\nB. bottom: 10px\nC. margin: -10px\nD. padding-top: 10px",
        point: 5,
        answer: "A",
        note: "相對於原訂的頂端位置距離 10px，即將區塊向下移。"
    },
    {
        question: "15. 閱讀以下程式碼，我們通常會將這類選擇器稱為：[5分]\na:active {text-align: center}\n\nA. 屬性選擇器\nB. 狀態選擇器\nC. 類型選擇器\nD. 後裔選擇器",
        point: 5,
        answer: "B",
        note: "A: a[target='_blank']；C: 即標籤選擇器。"
    },
    {
        question: "16. 以下哪一個 CSS 屬性適用於所有物件：[5分]\n\nA. style\nB. font-size\nC. background\nD. vertical-align",
        point: 5,
        answer: "C",
        note: "style 並非 CSS 的屬性；font-size 對非文字元素無效；inline 物件無法設定垂直對齊。"
    },
    {
        question: "17. 閱讀以下程式碼，試問：圖片距離最外層 div 的邊距為何？[5分]\n<style type='text/css'>\n#outer {width: 250px; border: 15px solid #FF0000}\n#inner {border: 25px solid #CCFFFF; margin: 20px; padding: 10px}\n</style>\n\n<div id='outer'>\n<div id='inner'><img src='flower.jpeg' /></div>\n</div>\n\nA. 250px\nB. 140px\nC. 110px\nD. 70px",
        point: 5,
        answer: "D",
        note: "250px 是代表整個內層元素 #inner 的實際寬度 (不包括 #outer border)，故圖片的實際寬度為 140px。"
    },
    {
        question: "18. 在取消文字底線時，需要加入的屬性值為：[5分]\n\nA. none\nB. auto\nC. no underline\nD. no borderline",
        point: 5,
        answer: "A",
        note: "text-decoration: none。"
    },
    {
        question: "19. 以下有關 CSS 樣式表的說明，何者內容完全正確？[5分]\n\nA. 樣式表可以精確控制網頁中文字大小、字體、顏色、間距等風格，且能與腳本語言相結合\nB. 外部樣式表具有簡潔統一等特點，通常以 css 為檔名，內容則定義於 style 標籤之中\nC. 內部樣式表具有細部客製的優勢，直接撰寫於文件中，唯衝突時易被瀏覽器常規設定覆蓋\nD. 一份樣式表雖可被多個網頁引用，但考量衝突疑慮，單一網頁只能 import 一份樣式表",
        point: 5,
        answer: "A",
        note: "style 標籤定義的是內部樣式表；網頁可引用多份樣式，惟衝突時以後執行者為優先：內聯樣式 > 內部樣式 > 外部樣式 >瀏覽器 default 值。"
    },
    {
        question: "20. 倘若需要加大區塊之間的距離，可以採用哪個屬性？[5分]\n\nA. line-height\nB. font-weight\nC. padding\nD. margin",
        point: 5,
        answer: "D",
        note: "A: 加大行間的距離；B: 文字加粗；C: 加大內容與區塊之間距。"
    },
    {
        question: "21. 以下哪一個 CSS 屬性是真實存在的：[5分]\n\nA. font\nB. bgcolor\nC. text-style\nD. background",
        point: 5,
        answer: "D",
        note: "bgcolor 標籤即 CSS 的 background-color 屬性，而 background 則為各背景參數的集合寫法；字型及斜體分別以 font-family, font-style 設定。"
    },
    {
        question: "22. 現有一份樣式表 goodstyle.css，請選出正確引用這份資料的方法：[5分]\n\nA. <link rel='stylesheet' type='text/css' href='goodstyle.css'>\nB. <stylesheet type='text/css'>goodstyle.css</stylesheet>\nC. <style type='text/css' link='goodstyle.css'></style>\nD. <stylesheet src='goodstyle.css'></stylesheet>",
        point: 5,
        answer: "A",
        note: ""
    },
    {
        question: "23. 閱讀以下程式碼，若要設定 ul 內容的樣式，在不影響其他相同標籤之下，應如何設定選擇器？[5分]\n<banner id='first'>\n<ul>...</ul>\n</banner>\n\nA. banner ul\nB. #first ul\nC. first > ul\nD. banner > #first",
        point: 5,
        answer: "B",
        note: "此即後裔選擇器用法；banner ul 會使得同結構的列表都受影響，宜設定 id 選擇器。"
    },
    {
        question: "24. 除了使用 b 標籤外，以下哪一段 CSS 參數也可設定文字的粗體效果？[5分]\n\nA. text: bold\nB. font-style: b\nC. font-weight: bold\nD. text-decoration: strong",
        point: 5,
        answer: "C",
        note: "b, strong 標籤均可產生粗體；font-style 可設定斜體 (italic)。"
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
