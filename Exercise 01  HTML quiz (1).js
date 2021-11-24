/* 主題：HTML 綜合練習題庫 第一回

試題參酌及改寫來源：
1. 網頁設計考題彙編 https://dmaa.nkut.edu.tw/files/archive/104_601a3208.pdf
2. 很酷！HTML 經典試題 https://designrockin.wordpress.com/2014/12/03/%E5%BE%88%E9%85%B7%EF%BC%81html%E7%B6%93%E5%85%B8%E8%A9%A6%E9%A1%8C */


var html_test=[
    // 一、基礎題 (每題 4 分，共 40 分)
    {
        question: "1. 若連結的目標尚未建立，可將其建立成空連結，這時需要於欄位中輸入：[4分]\n\nA. /\nB. *\nC. .\nD. #",
        point: 4,
        answer: "D",
        note: ""
    },
    {
        question: "2. 下列何者能顯示表格的分隔線？[4分]\n\nA. <table lines>\nB. <table rules>\nC. <table rule>\nD. <table line>",
        point: 4,
        answer: "B",
        note: ""
    },
    {
        question: "3. 如何於頁面中產生一條水平線？[4分]\n\nA. <hr>\nB. <tr>\nC. <br>\nD. <tt>",
        point: 4,
        answer: "A",
        note: "br 是呈現空行效果。注意：hr, br 都可不加閉標籤。"
    },
    {
        question: "4. 一般來說，網站的首頁通常會以什麼命名：[4分]\n\nA. home\nB. main\nC. index\nD. homepage",
        point: 4,
        answer: "C",
        note: ""
    },
    {
        question: "5. 框架頁標記的基本語法為：[4分]\n\nA. <frameset></frameset>\nB. <frames></frames>\nC. <framed></framed>\nD. <frame></frame>",
        point: 4,
        answer: "A",
        note: ""
    },
    {
        question: "6. 在 HTML 中，用來嵌入背景音樂的代碼是：[4分]\n\nA. <bgsound src=>\nB. <bgsound url=>\nC. <backsound url=>\nD. <backsound src=>",
        point: 4,
        answer: "A",
        note: "bgsound 主要適用於 IE 瀏覽器，建議使用 audio。"
    },
    {
        question: "7. 若要定義有序列表的數字標號，應該使用：[4分]\n\nA. alt\nB. min\nC. start\nD. begin",
        point: 4,
        answer: "C",
        note: ""
    },
    {
        question: "8. 若想防止網頁的內容出現自動斷行，可以使用：[4分]\n\nA. nowrap\nB. rowspan\nC. padding\nD. noresize",
        point: 4,
        answer: "A",
        note: "rowspan 功能相反，處理表格的跨行需求；noresize 常用於控制框架大小不變。"
    },
    {
        question: "9. 以下這段程式碼的功能是表示：[4分]\n<body leftmargin=?>\n\nA. 頁面左邊表格大小\nB. 頁面左邊的空白大小\nC. 頁面左邊的可用區域大小\nD. 頁面左邊的可編輯區域大小",
        point: 4,
        answer: "B",
        note: ""
    },
    {
        question: "10. 閱讀以下程式碼，請問 ltr 代表的作用是：[4分]\n<marquee dir=ltr>\n\nA. 水平鏡像移動\nB. 垂直鏡像移動\nC. 由右至左移動\nD. 由左至右移動",
        point: 4,
        answer: "D",
        note: ""
    },

    // 二、進階題 (每題 6 分，共 60 分)
    {
        question: "11. 下列何者能產生一個跳轉到 hello.html 頁面中 bn 段落的連接？[6分]\n\nA. <a href='hello.html&bn'></a>\nB. <a href='bn@hello.html'></a>\nC. <a href='hello.html.bn'></a>\nD. <a href='hello.html#bn'></a>",
        point: 6,
        answer: "D",
        note: ""
    },
    {
        question: "12. 若想要以開啟新視窗的方式呈現連結，應採用下列何者？[6分]\n\nA. target=_top\nB. target=_self\nC. target=_blank\nD. target=_parent",
        point: 6,
        answer: "C",
        note: "_top 將於原視窗呈現全螢幕畫面；_parent 在無巢狀階層的結構下效果等同 _self。"
    },
    {
        question: "13. 框架設定時必用的兩個屬性為 cols 及 rows，它們分別代表：[6分]\n\nA. 框架的行高、框架的列寬\nB. 框架的列數、框架的行數\nC. 框架的行寬、框架的列高\nD. 框架的列寬、框架的行高",
        point: 6,
        answer: "D",
        note: "寬度由列 cols 決定，常用單位為 px/%。例：cols='25%, 50%, 25%'。"
    },
    {
        question: "14. 閱讀以下程式碼，這段程式將使得標題字串出現在：[6分]\n<title>網站標題</title>\n\nA. 狀態列\nB. 網頁標題\nC. 網頁第一行\nD. 瀏覽器標題列",
        point: 6,
        answer: "D",
        note: "通常會寫在 head，與網頁標題或內容並無關聯 (應使用 h1~h6)。"
    },
    {
        question: "15. 以下哪個標籤可產生文字的上標效果？[6分]\n\nA. <top>\nB. <sub>\nC. <sup>\nD. <cite>",
        point: 6,
        answer: "C",
        note: "cite 是文字引用的效果；top 並不存在。"
    },
    {
        question: "16. 在 HTML 中，用來定義表格背景圖像的代碼是：[6分]\n\nA. <tr background=>\nB. <th background=>\nC. <th src=>\nD. <tr src=>",
        point: 6,
        answer: "B",
        note: ""
    },
    {
        question: "17. 若想設定移動文字的循環次數，應該使用：[6分]\n\nA. loop\nB. time\nC. scroll\nD. scrollamount",
        point: 6,
        answer: "A",
        note: "scrollamount 可控制循環的速度；無 scroll 屬性。"
    },
    {
        question: "18. 以下這段程式碼的功能是表示：[6分]\n<table rules=col>\n\nA. 只顯示列跟列之間的分隔線\nB. 將表格內容分行顯示\nC. 將表格內容分色顯示\nD. 只顯示組跟組之間的分隔線",
        point: 6,
        answer: "A",
        note: ""
    },
    {
        question: "19. 如何於頁面中產生一個無序列表？[6分]\n\nA. <li><ul>...</li>\nB. <ul><li>...</ul>\nC. <ol><li>...</ol>\nD. <li><ol>...</li>",
        point: 6,
        answer: "B",
        note: "li 以列表項為單位，被包覆於 ul/ol 中產生。"
    },
    {
        question: "20. 孫老師正在編輯以下命題程式，他最可能正在出一道：[6分]\n<input name='test' size=20>\n\nA. 複選題\nB. 申論題\nC. 單選題\nD. 簡答題",
        point: 6,
        answer: "D",
        note: ""
    }
]


var score=0;

for(var i=0; i<html_test.length; i++){
    // 以 prompt 收答案
    var answer=prompt(html_test[i].question);
    
    if(answer==html_test[i].answer){
        score+=html_test[i].point;
    }else{
        if(html_test[i].note==""){
            alert("答案為 "+html_test[i].answer);
        }else{
            alert("答案為 "+html_test[i].answer+"\n"+html_test[i].note);
        }
    }
}

alert("測驗結束，你的分數是："+score);
