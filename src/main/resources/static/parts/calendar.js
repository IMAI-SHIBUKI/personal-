const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);
var fristday = (today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate()+"日");
var day_save = (today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate());
// クリックした日付を保持する変数
var selectedDateElement = null;
var count =-1;

function selectDay(day) {
	count++;
    var year = showDate.getFullYear();
    var month = showDate.getMonth() + 1;
    var formattedDate = year + "年" + month + "月" + day + "日";
    day_save = year + "/" + month + "/" + day;
    document.getElementById('input_select_day').textContent = formattedDate;
    
    if(count ==0){
		var elements = document.getElementsByClassName('today');
//		selectedDateElement = elements;
//		var selectedDateElement = null;
		if (elements.length > 0) {
		    selectedDateElement = elements[0];
		   	if (selectedDateElement) {
		        if (selectedDateElement.cellIndex === 0) { // 日曜日
		            selectedDateElement.style.color = '#f25757';
		        } else if (selectedDateElement.cellIndex === 6) { // 土曜日
		            selectedDateElement.style.color = '#61e8e1';
		        } else {
		            selectedDateElement.style.color = '#000';
		        }
		        selectedDateElement.style.backgroundColor = '#fff';
		    	count =1;
			}
		}
	}

    // 前回選択された日付のスタイルをリセット
    if (selectedDateElement) {
        if (selectedDateElement.cellIndex === 0) { // 日曜日
            selectedDateElement.style.color = '#f25757';
        } else if (selectedDateElement.cellIndex === 6) { // 土曜日
            selectedDateElement.style.color = '#61e8e1';
        } else {
            selectedDateElement.style.color = '#000';
        }
        selectedDateElement.style.backgroundColor = '#fff';
    }

    // 新しく選択された日付にスタイルを適用
    var newSelectedDateElement = event.target;
    newSelectedDateElement.style.backgroundColor = '#f25757';
    newSelectedDateElement.style.color = '#fff';

    // 新しく選択された日付を保持
    selectedDateElement = newSelectedDateElement;
}

// 前の月表示
function prev() {
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}

// 次の月表示
function next() {
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}

// カレンダー表示
function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}

// カレンダー作成
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                if (year === today.getFullYear() && month === today.getMonth() && count === today.getDate()) {
                    calendar += "<td class='today' onclick='selectDay(" + count + ")'>" + count + "</td>";
                } else {
                    calendar += "<td onclick='selectDay(" + count + ")'>" + count + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}

// 初期表示
showProcess(showDate);
