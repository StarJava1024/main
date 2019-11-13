var number = 0, fh = "", cle_time = 0, point_time = 0;

function cle(){
	if(cle_time == 0){
		result1.innerHTML = "0";
		cle_time = 1;
	}else if(cle_time == 1){
		if(result3.innerHTML != "")
			result1.innerHTML = "";
		else 
			result1.innerHTML = "0";
		result2.innerHTML = result3.innerHTML;
		result3.innerHTML = "";
		cle_time = 2;
	}else if(cle_time == 2){
		result1.innerHTML = "0";
		result2.innerHTML = "";
		result3.innerHTML = "";
		number = 0;
		fh ="";
		cle_time = 0;
	}
}

function zf(){
	result1.innerHTML = parseFloat(result1.innerHTML * (-1));
}

function bfh(){
	result1.innerHTML = parseFloat(result1.innerHTML * (0.01));
}

function equal(){
	var temp_num;
//	number = result1.innerHTML.match(/\d+/g);
//	symbol = result1.innerHTML.match(/\c+/g);
	result2.innerHTML = "";
	result3.innerHTML = "";
	
	switch (fh){
		case "+":
			temp_num = number + parseFloat(result1.innerHTML);
			result1.innerHTML = number + "+" + result1.innerHTML + "=" + temp_num;
			number = temp_num;
			fh = "";
			break;
		case "-":
			temp_num = number - parseFloat(result1.innerHTML);
			result1.innerHTML = number + "-" + result1.innerHTML + "=" + temp_num;
			number = temp_num;
			fh = "";
			break;
		case "×":
			temp_num = number * parseFloat(result1.innerHTML);
			result1.innerHTML = number + "×" + result1.innerHTML + "=" + temp_num;
			number = temp_num;
			fh = "";
			break;
		case "÷":
			temp_num = number / parseFloat(result1.innerHTML);
			if(parseFloat(result1.innerHTML) == 0){
				result1.innerHTML = "你真会搞笑，还能除以零！";
			}else{
				result1.innerHTML = number + "÷" + result1.innerHTML + "=" + temp_num;
				number = temp_num;
				fh = "";
			}
			break;
		default:
			if (result3.innerHTML == "" && result3.innerHTML == ""){
				result1.innerHTML = result1.innerHTML;
			}else{
				result1.innerHTML = "我感觉你恐怕搞错咯！";
			}
			break;
	}
}

function point(){
	if(result1.innerHTML == 0){
		result1.innerHTML = "0.";
		point_time = 1;
	}else if(point_time == 1){
		result1.innerHTML += "";
	}else if(point_time != 1){
		result1.innerHTML += ".";
		point_time = 1;
	}
}

function add(){
	if(parseFloat(result1.innerHTML) == 0){
		result1.innerHTML = "0";
	}else if(result1.innerHTML == ""){
		fh = "+";
		result3.innerHTML = result2.innerHTML
		result2.innerHTML = fh;
	}else{
		if(fh == "")
			number = parseFloat(result1.innerHTML);
		result3.innerHTML = number;
		result1.innerHTML = "";
		point_time = 0;
		fh = "+";
		result2.innerHTML = fh;
	}
}

function subtract(){
	if(result1.innerHTML == 0){
		result1.innerHTML = "0";
	}else if(result1.innerHTML == ""){
		fh = "-";
		result3.innerHTML = result2.innerHTML
		result2.innerHTML = fh;
	}else{
		if(fh == "")
			number = parseFloat(result1.innerHTML);
		result3.innerHTML = number;
		result1.innerHTML = "";
		point_time = 0;
		fh = "-";
		result2.innerHTML = fh;
	}
}

function mpt(){
	if(result1.innerHTML == 0){
		result1.innerHTML = "0";
	}else if(result1.innerHTML == ""){
		fh = "×";
		result3.innerHTML = result2.innerHTML
		result2.innerHTML = fh;
	}else{
		if(fh == "")
			number = parseFloat(result1.innerHTML);
		result3.innerHTML = number;
		result1.innerHTML = "";
		point_time = 0;
		fh = "×";
		result2.innerHTML = fh;
	}
}

function divide(){
	if(result1.innerHTML == 0){
		result1.innerHTML = "0";
	}else if(result1.innerHTML == ""){
		fh = "÷";
		result3.innerHTML = result2.innerHTML
		result2.innerHTML = fh;
	}else{
		if(fh == "")
			number = parseFloat(result1.innerHTML);
		result3.innerHTML = number;
		result1.innerHTML = "";
		point_time = 0;
		fh = "÷";
		result2.innerHTML = fh;
	}
}

function zero0(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "0";
	}else{
		result1.innerHTML += "00";
	}
}

function zero(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "0";
	}else{
		result1.innerHTML += "0";
	}
}

function one(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "1";
	}else{
		result1.innerHTML += "1";
	}
}

function two(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "2";
	}else{
		result1.innerHTML += "2";
	}
}

function three(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "3";
	}else{
		result1.innerHTML += "3";
	}
}

function four(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "4";
	}else{
		result1.innerHTML += "4";
	}
}

function five(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "5";
	}else{
		result1.innerHTML += "5";
	}
}

function six(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "6";
	}else{
		result1.innerHTML += "6";
	}
}

function seven(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "7";
	}else{
		result1.innerHTML += "7";
	}
}

function eight(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "8";
	}else{
		result1.innerHTML += "8";
	}
}

function nine(){
	if(result1.innerHTML == "0"){
		result1.innerHTML = "9";
	}else{
		result1.innerHTML += "9";
	}
}

document.onkeydown = function(e){
	switch (e.key){
		case " ":
			if(e && e.keyCode==27){}
				cle();
			
			break;
		case "!":
			zf();
			break;
		case "%":
			bfh();
			break;
		case "=":
			equal();
			break;
		case ".":
			point();
			break;
		case "/":
			divide();
			break;
		case "*":
			mpt();
			break;
		case "-":
			subtract();
			break;
		case "+":
			add();
			break;
		case "~":
			zero0();
			break;
		case "0":
			zero();
			break;
		case "1":
			one();
			break;
		case "2":
			two();
			break;
		case "3":
			three();
			break;
		case "4":
			four();
			break;
		case "5":
			five();
			break;
		case "6":
			six();
			break;
		case "7":
			seven();
			break;
		case "8":
			eight();
			break;
		case "9":
			nine();
			break;
		default:
			if(e && e.keyCode == 13){
				equal();
			}
			break;
	}
};

