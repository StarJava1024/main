
// 定义变量
var allTxts = localStorage.allTxts;
var newTxt, titleDiv, deleteDiv, dateDiv;

// 不显示已保存框
setTimeout(f, 0);
function f() {
	d3.style.display = "none";
}

showAllTxts();

function showAllTxts() {
	if (allTxts) { // 如果该程序曾经存储过allTxts
		allTxts = JSON.parse(localStorage.allTxts); // 将存储的字符串转为为对象，再赋值给allTxts
		txts.innerHTML = ""; // 把上面的要显示所有的备忘录的层的内容清空
		for (var i = allTxts.length - 1; i >= 0; i--) { // 对于所有的备忘录对象
			var t = allTxts[i];
			newTxt = document.createElement("div");
			newTxt.className = "txt";

			titleDiv = document.createElement("div");
			titleDiv.innerHTML = t.title;
			titleDiv.className = "titletxt";
			newTxt.appendChild(titleDiv);

			deleteDiv = document.createElement("div");
			deleteDiv.className = "deletetxt";
			deleteDiv.innerHTML = "删除";
			deleteDiv.setAttribute("onclick", "del(this)");
			deleteDiv.setAttribute("id", "del"+String(i));
			newTxt.appendChild(deleteDiv);

			dateDiv = document.createElement("div");
			dateDiv.className = "datetxt";
			dateDiv.innerHTML = new Date(t.createdate).toLocaleString();
			newTxt.appendChild(dateDiv);

			txts.appendChild(newTxt);
		}
	} else {
		allTxts = [];
	}
}

// 按"删除"按钮
function del(Element){
	var save = confirm("确定删除吗？");
	if (save != true) {
		dont_save();
		d3.innerHTML = "已取消删除！";
	} else {
		var ID = Element.id.slice(3);
		allTxts.splice(ID, 1);   // 删除点击的id的newtxt
		localStorage.allTxts = JSON.stringify(allTxts);
		showAllTxts();
		d3.innerHTML = "已删除！";
		saved();
	}
}

// 按"+"按钮
function add() {
	d1.style.display = "none";
	d2.style.display = "block";
	d3.style.display = "none";
}

// 按"返回"按钮
function back() {
	var save = confirm("需要保存吗？");
	if (save != true) {
		dont_save();
		d3.innerHTML = "已取消保存！";
	} else {
		save_save();
	}
}

// 按"保存"按钮
function save() {
	var save = confirm("确定保存吗？");
	if(save != true){
		dont_save();
		d3.innerHTML = "已取消保存！";
	} else {
		save_save();
	}
}

// 把编辑的内容保存
function save_save() {
	if (cnt.innerHTML != "") {
		var now = new Date();
		var newTxt = {
			title: cnt.innerHTML,
			content: cnt.innerHTML,
			createdate: now.getTime()
		};
		allTxts.push(newTxt);
		localStorage.allTxts = JSON.stringify(allTxts);
		cnt.innerHTML = "";
		showAllTxts();
		d1.style.display = "block";
		d2.style.display = "none";
		d3.innerHTML = "已保存！";
		saved();
	} else{
		alert('本文件为空，无需保存！');
		d1.style.display = "block";
		d2.style.display = "none";
	}
}

// 按"取消"按钮
function dont_save(){
	cnt.innerHTML = "";
	d1.style.display = "block";
	d2.style.display = "none";
	saved();
}

// 显示1秒
function saved() {
	d3.style.display = "block";
	setTimeout(sa, 1000);

	function sa() {
		d3.style.display = "none";
	}
}




