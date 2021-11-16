/* 主題：HTML 綜合練習題庫 第二回

試題參酌及改寫來源：
1. 網頁設計考題彙編 https://dmaa.nkut.edu.tw/files/archive/104_601a3208.pdf
2. 很酷！HTML 經典試題 https://designrockin.wordpress.com/2014/12/03/%E5%BE%88%E9%85%B7%EF%BC%81html%E7%B6%93%E5%85%B8%E8%A9%A6%E9%A1%8C/ */


var html_test=[
    // 一、基礎題 (每題 4 分，共 40 分)
    {
        question: "1. scrolling 屬性的功用是：[4分]\n\nA. 定義邊框是否會浮動\nB. 定義邊框的行距寬度\nC. 定義邊框是否要顯示\nD. 定義邊框是否可滾動",
        point: 4,
        answer: "D",
        note: ""
    },
    {
        question: "2. 在 HTML 中，用來設置背景顏色的代碼是：[4分]\n\nA. <body bgcolor=>\nB. <body background=>\nC. <body color=>\nD. <background color=>",
        point: 4,
        answer: "A",
        note: "background 屬性可取得背景圖片 (功能如同 img src)；而 background 標籤並不存在。"
    },
    {
        question: "3. 如何於頁面中產生一個最小的標題？[4分]\n\nA. <i>\nB. <h1>\nC. <h6>\nD. <pre>",
        point: 4,
        answer: "C",
        note: ""
    },
    {
        question: "4. 為了方便訪客瀏覽，網頁上的 LOGO 文字通常是哪種元素類型？[4分]\n\nA. 純文字\nB. 圖片\nC. 音樂\nD. 視訊",
        point: 4,
        answer: "B",
        note: ""
    },
    {
        question: "5. 在 HTML 中，用來顯示框架的代碼是：[4分]\n\nA. <frameset border>\nB. <frame frameborder>\nC. <frame framepadding>\nD. <frameset framespacing>",
        point: 4,
        answer: "B",
        note: ""
    },
    {
        question: "6. 以下這段程式碼的功能是表示：[4分]\n<form action=?>\n\nA. 定義提交方式\nB. 定義表單的形式\nC. 定義表單的預設值\nD. 定義提交的 url 地址",
        point: 4,
        answer: "D",
        note: "常見程式碼如 form method=POST action='abc.php'，表示表單用 POST 方式傳值 (並跳轉) 至 abc 頁面。"
    },
    {
        question: "7. 若要定義表格的單元格間距為 0，應該使用：[4分]\n\nA. margin\nB. border\nC. cellspacing\nD. cellpadding",
        point: 4,
        answer: "C",
        note: "margin, border, padding 分別代表盒子模型 (box-model) 的外距、框界及內距 (例如 div 與其包覆的文字)。"
    },
    {
        question: "8. 倘如只想顯示一邊的邊框，table frame 屬性應該設定為：[4分]\n\nA. rhs\nB. void\nC. hsides\nD. border",
        point: 4,
        answer: "A",
        note: ""
    },
    {
        question: "9. 若想要以全視窗呈現連結，應採用下列何者？[4分]\n\nA. target=_top\nB. target=_self\nC. target=_blank\nD. target=_parent",
        point: 4,
        answer: "A",
        note: ""
    },
    {
        question: "10. 一般而言，密碼的輸入框會採用哪一個 type 設計？[4分]\n\nA. range\nB. password\nC. hidden\nD. submit",
        point: 4,
        answer: "B",
        note: "range 可產生拖拉式數軸；hidden 不顯示 (常用於表單跨頁面傳值)；submit 則形同提交按鈕。"
    },

    // 二、進階題 (每題 6 分，共 60 分)
    {
        question: "11. 下列有關標籤功能的說明，配對正確的是：[6分]\n\nA. <em>: 產生預格式化的文字\nB. <tt>: 產生斜體的文字效果\nC. <pre>: 產生打字機的等寬文字\nD. <strong>: 產生粗體的文字效果",
        point: 6,
        answer: "D",
        note: "預格式化文字由 pre 定義、em 及 strong 分別能產生斜體及粗體加以強調。"
    },
    {
        question: "12. 下列哪一個並非 input 標籤的類型？[6分]\n\nA. textarea\nB. image\nC. radio\nD. file",
        point: 6,
        answer: "A",
        note: "input 支援檔案上傳及多媒體；text 才是文本類型 (textarea 是另一種可自訂輸入框行、列數的標籤)。"
    },
    {
        question: "13. 閱讀以下程式碼，這段程式的作用是：[6分]\n<table border=>\n\nA. 設置表格內容與邊框間的空間大小\nB. 設置表格格子之間的空間大小\nC. 設置表格邊框的寬度\nD. 設置表格的寬度",
        point: 6,
        answer: "C",
        note: "A: cellpadding；B: cellspacing；D: width (可使用絕對或相對單位)。"
    },
    {
        question: "14. 下列有關 <hr> 標籤屬性的說明，內容正確的是：[6分]\n\nA. hr 標籤必成對出現\nB. 可以透過 space 屬性，控制 hr 的大小\nC. 可以透過 shade 屬性，控制 hr 的邊框\nD. 可以透過 align 屬性，控制 hr 的對齊",
        point: 6,
        answer: "D",
        note: "控制線條粗細的是 size 屬性，可設定 noshade 除去陰影。"
    },
    {
        question: "15. 網站相對路徑是由一個向前的斜線開始，它表示：[6分]\n\nA. 伺服器上網站的根目錄\nB. 客戶機上檔案的根目錄\nC. 伺服器上網站的子目錄\nD. 客戶機上檔案的子目錄",
        point: 6,
        answer: "A",
        note: ""
    },
    {
        question: "16. 下列程式碼都和資料的引用有關，唯一有效的是：[6分]\n\nA. <link url='aaa.php'>\nB. <img src='bbb.jpeg'>\nC. <a link='ccc.aspx'>\nD. <b href='ddd.html'>",
        point: 6,
        answer: "B",
        note: "a, link (常用於 stylesheet 引入) 搭配 href；多媒體檔案則使用 src 屬性；b 為粗體效果，無法針對連結作用。"
    },
    {
        question: "17. 下列有關表格的說明，完全正確的是：[6分]\n\nA. 通常使用 <td> 定義表頭\nB. 通常使用 <tr> 定義表行\nC. 也可以透過 input 定義表格內容\nD. 通常使用 <title> 設置表格標題",
        point: 6,
        answer: "B",
        note: "th 用來定義表頭；表格標題為 caption 而非 title (瀏覽器標題) 或 h1~h6。"
    },
    {
        question: "18. 閱讀以下程式碼，這段程式的作用是：[6分]\n<a href='#NAME'></a>\n\nA. 產生一個導引至 #NAME 頁面的連結\nB. 產生一個來自於 NAME 的連結\nC. 產生一個導引至 NAME 段落的連結\nD. 產生一個寄信給 NAME 的連結",
        point: 6,
        answer: "C",
        note: "以 # 開頭代表非換頁，而是導至頁面中的某段落；連結寄信採用 mailto 屬性。"
    },
    {
        question: "19. 下列有關 <body> 標籤屬性的說明，配對正確的是：[6分]\n\nA. alink: 已經訪問過的連結內容\nB. vlink: 正被點擊的連結內容\nC. text: 所有非連結的內容\nD. 以上皆是",
        point: 6,
        answer: "C",
        note: ""
    },
    {
        question: "20. 閱讀以下程式碼，這段程式完成的工作不包括：[6分]\n<img src='aaa.png' alt='bbb' align='###'>\n\nA. 設定圖片的對應位址\nB. 定義元素的備註說明\nC. 產生一個圖片超連結\nD. 控制元素的排列方式",
        point: 6,
        answer: "C",
        note: "alt 屬性代表當圖片未載入時，要呈現在該位置的文字。"
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
