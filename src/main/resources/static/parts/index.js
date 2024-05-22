var pics_src =new Array("peg/icon/white.png","peg/icon/Foodex.png","peg/icon/dailyitemex.png","peg/icon/eatingout.png","peg/icon/communicationex.png","peg/icon/homeex.png","peg/icon/waterbill.png","peg/icon/electbill.png","peg/icon/gasbill.png","peg/icon/mediicalfees.jpeg","peg/icon/telecommex.png","peg/icon/transportationex.png","peg/icon/travelex.png","peg/icon/fuelex.png","peg/icon/clothesm.png","peg/icon/pocketmoney.png","peg/icon.png","peg/icon/cube.jpg");
var category_name = new Array("noname","食費","日用雑費","外食費","交際費","家賃","水道費","光費","熱費","医療費","通信費","通勤費","旅行費","ガソリン代金","衣服費","お小遣い","貯金","その他");
var conn;
const buttonS = document.getElementById('sub_input');
const buttonA = document.getElementById('add_input');
	

// 初期表示
window.onload = function () {
    showProcess(today, calendar);
    change_sub();
    document.getElementById('input_select_day').textContent =fristday;
    document.getElementById('input_select_day').value =day_save;
    
   
   
   
   
	var dateParts = day_save.split("/");
	var yy = parseInt(dateParts[0]);

	var mm = parseInt(dateParts[1]);
	
	var dd = parseInt(dateParts[2]);
   
   
    var myyy = document.getElementById('day_yy');
	myyy.value = yy;

    var mymm = document.getElementById('day_mm');
	mymm.value = mm;

    var mydd = document.getElementById('day_dd');
	mydd.value = dd;
    


};
//収支切り替えボタン /////////////////////
function change_add() {
    
    document.getElementById('aors_input').value = 1
    var myInput = document.getElementById('aorsjs');
	myInput.value = "収入";
	
	buttonA.style.backgroundColor = '#eaf2e3';
	buttonA.style.border = '2px solid #f25757';
	buttonS.style.backgroundColor = '#f2e863';
	buttonS.style.border = '2px solid #f2e863';
}

function change_sub() {

    document.getElementById('aors_input').value = -1
	var myInput = document.getElementById('aorsjs');
	myInput.value = "支出";
	
	buttonS.style.backgroundColor = '#eaf2e3';
	buttonS.style.border = '2px solid #f25757';
	buttonA.style.backgroundColor = '#f2e863';
	buttonA.style.border = '2px solid #f2e863';
}
//Enter移動 ////////////////////////////////////////////////////
function move_inputmoney(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('input_money_id').focus();
    }
}
function move_inputselect(event){
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('input_category').focus();
    }
}
//icon取得///////////////////////////////////////////////////////
document.getElementById('input_category').addEventListener('change', function() {
    var i = this.value;
    document.getElementById('input_categorypeg').src = pics_src[i];
    conn = category_name[i]
});
//iconクリック選択 //////////////////////////////////////////////////////////////
document.getElementById('icon_selct_oy').style.display = 'block';
const category_change = ()=>{
    var ele = document.getElementById('icon_selct_oy');
    // if (ele.style.display == 'none') {
    //     ele.style.display = 'block'; 
    //    } else {
    //      ele.style.display = 'none';
    //    }
};
//icon->select///////////////////////////////////////////////////////////////////

const changethe_icon = (i)=>{
    document.getElementById("input_categorypeg").src=pics_src[i];
    conn = category_name[i]
    document.getElementById('icon_selct_oy').style.display = 'block';
    
    document.getElementById('input_category').value = i;
};
//金額入力->半角////////////////////////////////////////////////////////////////////
document.getElementById('input_money_id').addEventListener('change', function() {
    var value = this.value;
    var converted = value.replace(/[０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });
    converted = converted.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.value = converted;
});



   
